// Pure presentation helpers shared by the React view and no-network checks.
export function inspectSnapshot(data, records, date, scope, link) {
  if (!Array.isArray(records) || records.length === 0) {
    return { status: "empty", message: "No records in this bundled snapshot." };
  }
  if (!date || !scope || scope.includes("undefined")) {
    return { status: "empty", message: "Snapshot metadata is incomplete." };
  }
  return { status: "ready", message: "Bundled public snapshot", date, scope, link, records };
}

export function monthlyWindow(month, data) {
  const start = `${month}-01`;
  const [year, number] = month.split("-").map(Number);
  const end = new Date(Date.UTC(year, number, 0)).toISOString().slice(0, 10);
  if (data?.query?.start_date !== start || data?.query?.end_date !== end ||
      data?.response?.meta?.start_date !== start || data?.response?.meta?.end_date !== end ||
      !data?.response?.meta?.as_of || !Array.isArray(data?.response?.data)) {
    return { month, status: "error", asOf: null, records: null };
  }
  return { month, status: "ready", asOf: data.response.meta.as_of, records: data.response.data };
}

export function buildMonthlySeries(appId, windows) {
  return windows.map(window => {
    if (window.status !== "ready") {
      return { month: window.month, status: "snapshot unavailable", tokens: null, requests: null, asOf: null };
    }
    const row = window.records.find(record => String(record.app_id) === String(appId));
    if (!row) {
      return { month: window.month, status: "not in returned top list", tokens: null, requests: null, asOf: window.asOf };
    }
    return { month: window.month, status: `returned rank ${row.rank}`, tokens: row.total_tokens,
      requests: row.total_requests, asOf: window.asOf };
  });
}

export function sortBenchmarkResults(records, key = "resolved", direction = "desc") {
  const factor = direction === "asc" ? 1 : -1;
  return [...records].sort((left, right) => {
    if (key === "resolved") return (Number(left.resolved) - Number(right.resolved)) * factor;
    return String(left[key] ?? "").localeCompare(String(right[key] ?? "")) * factor;
  });
}

export const useCaseRows = records => records.map(record => ({
  label: record.use_case, percentage: Number(record.percentage)
}));

export const adoptionRows = records => records.map(record => ({
  label: record.chatbot, percentage: Number(record.ever_use_percent)
}));

export function formatCount(value) {
  return new Intl.NumberFormat("en-US").format(typeof value === "string" ? BigInt(value) : value);
}
