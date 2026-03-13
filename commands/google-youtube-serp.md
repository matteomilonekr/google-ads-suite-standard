---
description: YouTube SERP analysis - video metadata, comments, subtitles, channel info
argument-hint: <keyword> [--location <code>] [--device desktop|mobile]
---

Analyze YouTube search results for the given keyword using the DataForSEO SERP YouTube endpoints.

## What to do

1. Read `src/modules/serp.ts` to understand available YouTube functions
2. Use `serp.youtubeLive` for YouTube SERP data
3. Parse the keyword from $ARGUMENTS (first argument)
4. Optional flags: `--location` (default 2840), `--device` (default desktop)

## Execution

```typescript
import { createClient, serp } from "./src/index";
const client = createClient();
const resp = await serp.youtubeLive(client, {
  keyword: "<keyword>",
  location_code: 2840,
  device: "desktop",
});
```

## Output

Present results as:
1. **YouTube SERP Overview**: total results, search intent category, content type distribution
2. **Top Video Results**: rank, title, channel name, views, publish date, duration, URL
3. **Channel Analysis**: which channels dominate this keyword, subscriber counts
4. **Content Insights**: average video length, common title patterns, engagement signals
