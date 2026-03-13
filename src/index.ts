// ── Client ───────────────────────────────────────────────────────────────────
export { DataForSEOClient, createClient } from "./client";

// ── Types ────────────────────────────────────────────────────────────────────
export * from "./types";

// ── Modules ──────────────────────────────────────────────────────────────────
export * as serp from "./modules/serp";
export * as keywords from "./modules/keywords";
export * as backlinks from "./modules/backlinks";
export * as onpage from "./modules/onpage";
export * as labs from "./modules/labs";
export * as domainAnalytics from "./modules/domain-analytics";
export * as contentAnalysis from "./modules/content-analysis";
