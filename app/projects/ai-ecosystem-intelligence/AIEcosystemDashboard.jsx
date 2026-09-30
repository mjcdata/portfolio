"use client";

import { useId, useState } from "react";
import styles from "./AIEcosystemDashboard.module.css";
import current from "./data/openrouter-current.json";
import march from "./data/monthly/openrouter-2026-03.json";
import april from "./data/monthly/openrouter-2026-04.json";
import may from "./data/monthly/openrouter-2026-05.json";
import june from "./data/monthly/openrouter-2026-06.json";
import july from "./data/monthly/openrouter-2026-07.json";
import august from "./data/monthly/openrouter-2026-08.json";
import benchmark from "./data/swe-bench-verified.json";
import useCases from "./data/langchain-use-cases.json";
import adoption from "./data/pew-ai-chatbot-ever-use-2026.json";
import {
  adoptionRows, buildMonthlySeries, formatCount, inspectSnapshot,
  monthlyWindow, sortBenchmarkResults, useCaseRows
} from "./model.mjs";

const windows = [
  monthlyWindow("2026-03", march), monthlyWindow("2026-04", april),
  monthlyWindow("2026-05", may), monthlyWindow("2026-06", june),
  monthlyWindow("2026-07", july), monthlyWindow("2026-08", august)
];

const sources = [
  {
    label: "OpenRouter coding/CLI-agent traffic",
    file: "data/openrouter-current.json",
    result: inspectSnapshot(current, current.response?.data, current.response?.meta?.as_of,
      `Public OpenRouter apps; UTC window ${current.response?.meta?.start_date} to ${current.response?.meta?.end_date}`,
      current.attribution ? "https://openrouter.ai/rankings" : null),
    kind: "ranking"
  },
  {
    label: "SWE-bench Verified results",
    file: "data/swe-bench-verified.json",
    result: inspectSnapshot(benchmark, benchmark.results, benchmark.retrieved_at,
      "Submitted coding systems; five-record source sample, not a full leaderboard", benchmark.source_url),
    kind: "benchmark"
  },
  {
    label: "LangChain use-case survey",
    file: "data/langchain-use-cases.json",
    result: inspectSnapshot(useCases, useCases.values, useCases.report_published,
      `Professional respondents; survey ${useCases.survey?.field_start} to ${useCases.survey?.field_end}`,
      useCases.source_url),
    kind: "useCases"
  },
  {
    label: "Pew U.S. adult chatbot survey",
    file: "data/pew-ai-chatbot-ever-use-2026.json",
    result: inspectSnapshot(adoption, adoption.items, adoption.retrieved_at,
      `U.S. adults; survey ${adoption.survey_start_date} to ${adoption.survey_end_date}`,
      adoption.source_url),
    kind: "adoption"
  }
];

function DataTable({ caption, headers, rows, className = "" }) {
  return (
    <div className={styles.tableScroll} tabIndex={0} role="region" aria-label={caption}>
      <table className={className}>
        <caption>{caption}</caption>
        <thead><tr>{headers.map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead>
        <tbody>{rows.map((row, index) => (
          <tr key={index}>{row.map((value, column) => <td key={column}>{value}</td>)}</tr>
        ))}</tbody>
      </table>
    </div>
  );
}

function Ranking({ records }) {
  const [appId, setAppId] = useState(String(records[0].app_id));
  const selectId = useId();
  const selected = records.find(app => String(app.app_id) === appId) ?? records[0];
  const series = buildMonthlySeries(selected.app_id, windows);
  return (
    <>
      <p className={styles.meta}>Ranking metric: total tokens in the captured window; requests are shown as a separate count. These are not user counts.</p>
      <DataTable caption="Top 10 OpenRouter coding/CLI-agent apps by token volume"
        headers={["Rank", "App", "Tokens", "Requests"]}
        rows={records.map(row => [row.rank, row.app_name, formatCount(row.total_tokens), formatCount(row.total_requests)])} />
      <section>
        <h3>Six-month usage</h3>
        <label htmlFor={selectId}>Select an app from the current ranking: </label>
        <select id={selectId} value={appId} onChange={event => setAppId(event.target.value)}>
          {records.map(app => <option key={app.app_id} value={app.app_id}>{app.app_name}</option>)}
        </select>
        <p className={styles.meta}>Monthly public coding/CLI-agent top ten by tokens. An absent app has unknown counts, not zero; an unavailable snapshot is a separate error.</p>
        <div aria-live="polite">
          <DataTable caption={`${selected.app_name}: six completed UTC months`}
            headers={["Month", "Tokens", "Requests", "Top-list status", "Captured as of"]}
            rows={series.map(entry => {
              const unavailable = entry.status === "snapshot unavailable";
              return [entry.month,
                entry.tokens === null ? (unavailable ? "Unavailable" : "Unknown") : formatCount(entry.tokens),
                entry.requests === null ? (unavailable ? "Unavailable" : "Unknown") : formatCount(entry.requests),
                entry.status, entry.asOf ?? "Unavailable"];
            })} />
        </div>
      </section>
      <p className={styles.meta}>Source: OpenRouter App Rankings Data API; public aggregate data, CC BY 4.0. Captured `as_of` and window are shown above. Only returned top-ten apps are represented.</p>
    </>
  );
}

function Benchmark({ records }) {
  const [sort, setSort] = useState("resolved:desc");
  const selectId = useId();
  const [key, direction] = sort.split(":");
  const sorted = sortBenchmarkResults(records, key, direction);
  return (
    <section>
      <h3>SWE-bench Verified benchmark sample</h3>
      <p className={styles.meta}>Coding benchmark results, not production reliability. This five-record source sample is separate from OpenRouter traffic and is not joined to usage.</p>
      <p className={styles.meta}>All rows are from the Verified benchmark. “Source verification flag” preserves the separate checked value recorded by the leaderboard source.</p>
      <label htmlFor={selectId}>Sort benchmark rows: </label>
      <select id={selectId} value={sort} onChange={event => setSort(event.target.value)}>
        <option value="resolved:desc">Resolved score — high to low</option>
        <option value="resolved:asc">Resolved score — low to high</option>
        <option value="date:desc">Submission date — newest first</option>
        <option value="date:asc">Submission date — oldest first</option>
        <option value="name:asc">System / submission — A to Z</option>
      </select>
      <DataTable caption="Five pinned SWE-bench Verified source records"
        headers={["System / submission", "Model / version", "Submitted", "Resolved", "Source verification flag"]}
        rows={sorted.map(row => [row.name, row.model_display, row.date, `${row.resolved}%`, String(row.checked)])} />
    </section>
  );
}

function PercentageView({ title, note, caution, rows, caption, firstHeader, secondHeader, ariaSuffix = "" }) {
  return (
    <section>
      <h3>{title}</h3>
      <p className={styles.meta}>{note}</p>
      {caution && <p className={styles.meta}>{caution}</p>}
      <div className={styles.chart} role="img"
        aria-label={rows.map(row => `${row.label}: ${row.percentage}%${ariaSuffix}`).join("; ")}>
        {rows.map(row => (
          <div className={styles.barRow} key={row.label}>
            <span>{row.label}</span>
            <div className={styles.track}><div className={styles.bar}
              style={{ width: `${row.percentage}%` }} aria-hidden="true" /></div>
            <strong>{row.percentage}%</strong>
          </div>
        ))}
      </div>
      <DataTable caption={caption} headers={[firstHeader, secondHeader]}
        rows={rows.map(row => [row.label, `${row.percentage}%`])} />
    </section>
  );
}

function SourceCard({ source }) {
  const { result } = source;
  return (
    <article className={styles.card}>
      <h2>{source.label}</h2>
      <p className={styles.meta}>Bundled snapshot: {source.file}</p>
      <p className={result.status === "ready" ? styles.ready : styles.problem}>{result.message}</p>
      {result.status === "ready" && <>
        <p className={styles.meta}>Source scope: {result.scope}</p>
        <p className={styles.meta}>Source date / last captured: {result.date}</p>
        {typeof result.link === "string" && result.link.startsWith("https://") &&
          <a href={result.link}>Source details</a>}
        {source.kind === "ranking" && <Ranking records={result.records} />}
        {source.kind === "benchmark" && <Benchmark records={result.records} />}
        {source.kind === "useCases" &&
          <PercentageView title="Primary agent use cases"
            note="Share of 1,340 professional respondents selecting one primary agent use case. Survey fielded 2025-11-18 to 2025-12-02. These survey percentages are not OpenRouter usage or app-specific measures."
            rows={useCaseRows(result.records)} caption="Text equivalent: published primary agent use-case shares"
            firstHeader="Primary use case" secondHeader="Respondents" />}
        {source.kind === "adoption" &&
          <PercentageView title="U.S. adult AI chatbot ever-use"
            note="Metric: self-reported ever use of each named AI chatbot among U.S. adults. Pew surveyed U.S. adults Feb. 17–23, 2026."
            caution="These survey estimates are not active users, traffic, market share, OpenRouter usage, LangChain use cases, or SWE-bench performance. Brand questions used split forms and respondents could report more than one chatbot, so percentages must not be summed."
            rows={adoptionRows(result.records)} ariaSuffix=" ever used"
            caption="Text equivalent: self-reported ever use among U.S. adults"
            firstHeader="AI chatbot" secondHeader="Ever used" />}
      </>}
    </article>
  );
}

export default function AIEcosystemDashboard() {
  return (
    <div className={styles.dashboard}>
      <img
        src="/images/ai-eco.png"
        alt="AI Ecosystem Intelligence — Agentic Analytics Orchestration"
        className={styles.banner}
      />
      <p>
        View Project Details on{" "}
        <a
          href="https://github.com/mjcdata/ai-ecosystem-intelligence"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>GitHub</strong>
        </a>
      </p>
      <header className={styles.intro}>
        <br></br>
        <br></br>
        <h1>AI Ecosystem Intelligence</h1>
        <p>
          <strong>
            This is an experimental project built by a team of AI agents. The agents helped plan, build, review, and manage the project through GitHub, while I provided flexible instructions and overall direction.
          </strong>
        </p>
      </header>
      <main>
        <h2>Checked-in sources</h2>
        <div className={styles.cards}>{sources.map(source =>
          <SourceCard key={source.kind} source={source} />)}</div>
      </main>
      <footer className={styles.footer}>Viewing uses bundled public snapshots. No API key or runtime external API request is needed; each source’s date and scope appear above.</footer>
    </div>
  );
}
