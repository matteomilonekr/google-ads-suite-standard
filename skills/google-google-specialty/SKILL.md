---
name: seo:google-specialty
description: Specialty Google SERP - Events, Jobs, AI Mode, Autocomplete, Dataset Search
argument-hint: <keyword> --type <events|jobs|ai_mode|autocomplete|dataset> [--location <code>]
allowed-tools:
  - Read
  - Bash
  - Task
  - Write
---

Analyze specialty Google SERP results for the given keyword using the DataForSEO SERP API specialty endpoints.

## What to do

1. Read `src/modules/serp.ts` to understand available specialty functions
2. Based on `--type`, use the appropriate endpoint: `serp.googleEventsLive`, `serp.googleJobsLive`, `serp.googleAiModeLive`, `serp.googleAutocompleteLive`, or `serp.googleDatasetSearchLive`
3. Parse the keyword from $ARGUMENTS (first argument)
4. Required flag: `--type` (events, jobs, ai_mode, autocomplete, dataset)
5. Optional flags: `--location` (default 2840)

## Execution

```typescript
import { createClient, serp } from "./src/index";
const client = createClient();
// Example for autocomplete:
const resp = await serp.googleAutocompleteLive(client, {
  keyword: "<keyword>",
  location_code: 2840,
});
```

## Output

Present results based on type:
1. **For Autocomplete**: list of suggestions, search volume hints, trending queries
2. **For Jobs**: job titles, companies, locations, salary ranges, posting dates
3. **For Events**: event names, dates, venues, prices, categories
4. **For AI Mode**: AI-generated overview content, cited sources, key claims
5. **For Dataset Search**: dataset names, providers, descriptions, formats
