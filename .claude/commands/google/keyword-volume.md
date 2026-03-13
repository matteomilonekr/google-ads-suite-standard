---
name: seo:keyword-volume
description: Search volume, CPC, competition from Google Ads, Bing, and clickstream data
argument-hint: <keyword> [keyword2...] [--location <code>]
allowed-tools:
  - Read
  - Bash
  - Task
  - Write
---

Retrieve search volume, CPC, and competition data for one or more keywords using the DataForSEO Keywords Data API.

## What to do

1. Read `src/modules/keywords.ts` to understand available volume functions
2. Use `keywords.searchVolume` for Google Ads volume data
3. Parse keywords from $ARGUMENTS (space-separated or comma-separated)
4. Optional flags: `--location` (default 2840)

## Execution

```typescript
import { createClient, keywords } from "./src/index";
const client = createClient();
const resp = await keywords.searchVolume(client, {
  keywords: ["<keyword1>", "<keyword2>"],
  location_code: 2840,
  language_code: "en",
});
```

## Output

Present results as:
1. **Volume Summary Table**: keyword, monthly search volume, CPC, competition level, competition index
2. **Trend Data**: monthly search volume trends over the past 12 months per keyword
3. **Cost Analysis**: average CPC, high/low range, estimated ad position
4. **Keyword Comparison**: side-by-side metrics if multiple keywords provided
