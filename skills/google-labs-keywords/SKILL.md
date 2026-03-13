---
name: seo:labs-keywords
description: Advanced keyword intelligence - intent, difficulty, SERP competitors, historical volume
argument-hint: <keyword> [--location <code>] [--include-serp-competitors]
allowed-tools:
  - Read
  - Bash
  - Task
  - Write
---

Perform advanced keyword analysis using the DataForSEO Labs API keyword endpoints.

## What to do

1. Read `src/modules/labs.ts` to understand available keyword intelligence functions
2. Use `labs.keywordOverview` for comprehensive keyword data
3. Optionally use `labs.serpCompetitors` and `labs.keywordIntent` for deeper analysis
4. Parse the keyword from $ARGUMENTS (first argument)
5. Optional flags: `--location` (default 2840), `--include-serp-competitors` (include SERP competitor analysis)

## Execution

```typescript
import { createClient, labs } from "./src/index";
const client = createClient();
const overview = await labs.keywordOverview(client, {
  keyword: "<keyword>",
  location_code: 2840,
  language_code: "en",
});
```

## Output

Present results as:
1. **Keyword Overview**: search volume, keyword difficulty, CPC, competition level
2. **Search Intent**: primary intent (informational, navigational, transactional, commercial)
3. **SERP Competitors**: top-ranking domains, their estimated traffic share, domain authority
4. **Historical Trends**: volume over 12+ months, seasonality patterns, trend direction
5. **Related Metrics**: click-through rate estimates, paid vs organic click distribution
