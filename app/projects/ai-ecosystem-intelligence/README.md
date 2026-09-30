# AI Ecosystem Intelligence — portfolio package

This folder is a self-contained, direct-render React/Next.js package of the completed static dashboard. It uses bundled public snapshot JSON: no iframe, separately hosted dashboard URL, OpenRouter key, or runtime API request. The original standalone `index.html`, `dashboard.js`, and root `data/` remain independently usable.

## Copy into a Next.js App Router portfolio

Copy **the entire contents** of this `dashboard/` folder (including `data/` and `data/monthly/`) to:

```text
portfolio/app/projects/ai-ecosystem-intelligence/
  page.js
  AIEcosystemDashboard.jsx
  AIEcosystemDashboard.module.css
  model.mjs
  data/
    openrouter-current.json
    swe-bench-verified.json
    langchain-use-cases.json
    pew-ai-chatbot-ever-use-2026.json
    monthly/openrouter-2026-03.json ... openrouter-2026-08.json
```

The included `page.js` is the minimal route example: it imports `./AIEcosystemDashboard` and renders it at `/projects/ai-ecosystem-intelligence`. If that route already has a page, copy the component, CSS Module, `model.mjs`, and `data/` alongside it, then import `AIEcosystemDashboard` into the existing page and render `<AIEcosystemDashboard />`; do not overwrite an existing page without reviewing it. Your portfolio's normal navbar and layout can wrap this page. The component has `"use client"` for the app and sort selectors. It needs only the portfolio's existing Next.js/React; no package install or environment variable.

All ten JSON files are local module imports bundled at build time. Keep their relative paths with the component. To update the displayed numbers later, first perform the repository's separately approved public-data refresh/verification workflow, then replace the corresponding JSON files in the portfolio and rebuild/redeploy it. Do not copy a key or authenticated refresh code into the public page. The six monthly files are completed UTC windows March–August 2026; absent apps in a returned top ten have **unknown** counts, never zero, while an invalid bundled month is **snapshot unavailable**. A physically missing imported file causes a build error instead of silently showing zero.

Tables can scroll horizontally within their labeled, keyboard-focusable regions on mobile. The LangChain and Pew bar rows stack at narrow widths and have text/table equivalents. Inspect the page at desktop/mobile widths in your portfolio after copying; portfolio-global styles and layout can still affect presentation. Keep the four sources separate—traffic, benchmark, professional survey, and U.S.-adult survey are different measures.

From this source repository, run `node --test tests/test_portfolio_package.mjs` for bundled-data and presentation checks. The existing standalone tests remain separate. This package has not been deployed or visually tested in the owner's portfolio.
