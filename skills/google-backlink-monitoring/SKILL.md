---
name: seo:backlink-monitoring
description: Monitor backlink changes over time - track new and lost links
argument-hint: <domain> [--mode new|lost|all] [--limit <number>]
allowed-tools:
  - Read
  - Bash
  - Task
  - Write
---

Monitor backlink changes for a domain using the DataForSEO Backlinks API monitoring endpoints.

## What to do

1. Read `src/modules/backlinks.ts` to understand available monitoring functions
2. Use `backlinks.newBacklinks` and `backlinks.lostBacklinks` for change tracking
3. Parse the domain from $ARGUMENTS (first argument)
4. Optional flags: `--mode` (new, lost, or all; default all), `--limit` (default 50)

## Execution

```typescript
import { createClient, backlinks } from "./src/index";
const client = createClient();
const newLinks = await backlinks.newBacklinks(client, {
  target: "<domain>",
  limit: 50,
});
const lostLinks = await backlinks.lostBacklinks(client, {
  target: "<domain>",
  limit: 50,
});
```

## Output

Present results as:
1. **Monitoring Summary**: domain, total new links, total lost links, net change
2. **New Backlinks**: source URL, anchor text, dofollow/nofollow, first seen date, source authority
3. **Lost Backlinks**: source URL, anchor text, last seen date, reason lost (removed, broken, nofollow)
4. **Trend Analysis**: link velocity trend, quality assessment of new vs lost links
