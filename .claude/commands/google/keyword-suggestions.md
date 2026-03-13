---
name: seo:keyword-suggestions
description: Expand seed keywords into related suggestions and long-tail variations
argument-hint: <seed> [--location <code>] [--limit <number>]
allowed-tools:
  - Read
  - Bash
  - Task
  - Write
---

Expand a seed keyword into related suggestions using the DataForSEO Keywords Data API suggestions endpoints.

## What to do

1. Read `src/modules/keywords.ts` to understand available suggestion functions
2. Use `keywords.keywordSuggestions` for seed keyword expansion
3. Parse the seed keyword from $ARGUMENTS (first argument)
4. Optional flags: `--location` (default 2840), `--limit` (default 50)

## Execution

```typescript
import { createClient, keywords } from "./src/index";
const client = createClient();
const resp = await keywords.keywordSuggestions(client, {
  keyword: "<seed>",
  location_code: 2840,
  language_code: "en",
});
```

## Output

Present results as:
1. **Seed Overview**: original keyword, total suggestions found
2. **Top Suggestions**: keyword, search volume, CPC, competition, relevance score
3. **Long-Tail Variations**: longer keyword phrases derived from the seed
4. **Thematic Clusters**: group suggestions by topic or intent category
