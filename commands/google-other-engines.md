---
description: Multi-engine SERP analysis - Bing, Yahoo, Baidu, Google Ads search
argument-hint: <keyword> --engine <bing|yahoo|baidu|google_ads> [--location <code>]
---

Analyze search results from alternative search engines using the DataForSEO SERP other engines endpoints.

## What to do

1. Read `src/modules/serp.ts` to understand available multi-engine functions
2. Based on `--engine`, use the appropriate endpoint: `serp.bingOrganicLive`, `serp.yahooOrganicLive`, `serp.baiduOrganicLive`, or `serp.googleAdsSearchLive`
3. Parse the keyword from $ARGUMENTS (first argument)
4. Required flag: `--engine` (bing, yahoo, baidu, google_ads)
5. Optional flags: `--location` (default 2840)

## Execution

```typescript
import { createClient, serp } from "./src/index";
const client = createClient();
// Example for Bing:
const resp = await serp.bingOrganicLive(client, {
  keyword: "<keyword>",
  location_code: 2840,
});
```

## Output

Present results as:
1. **Engine Overview**: engine name, total results, SERP features detected
2. **Top 10 Organic Results**: rank, domain, title, URL, snippet
3. **Cross-Engine Comparison Notes**: how results differ from Google if applicable
4. **Advertising Data**: ad positions, ad copy (especially for google_ads engine)
