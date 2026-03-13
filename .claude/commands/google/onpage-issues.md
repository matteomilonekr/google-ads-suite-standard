---
name: seo:onpage-issues
description: Detect SEO issues - non-indexable pages, duplicates, broken links, redirects
argument-hint: <domain> [--severity critical|warning|info] [--limit <number>]
allowed-tools:
  - Read
  - Bash
  - Task
  - Write
---

Detect on-page SEO issues for a domain using the DataForSEO On-Page API issues endpoints.

## What to do

1. Read `src/modules/onpage.ts` to understand available issues functions
2. Use `onpage.pages` and `onpage.duplicateTags` to find SEO issues
3. Parse the domain from $ARGUMENTS (first argument)
4. Optional flags: `--severity` (critical, warning, info; default all), `--limit` (default 100)
5. A crawl must be completed first; check with `onpage.summary` or run `/google:onpage-crawl` first

## Execution

```typescript
import { createClient, onpage } from "./src/index";
const client = createClient();
const pages = await onpage.pages(client, {
  id: "<task_id>",
  limit: 100,
});
const duplicates = await onpage.duplicateTags(client, {
  id: "<task_id>",
});
```

## Output

Present results as:
1. **Issues Summary**: total issues by severity (critical, warning, info)
2. **Critical Issues**: broken pages (4xx/5xx), non-indexable pages, blocked by robots.txt
3. **Duplicate Content**: duplicate titles, duplicate descriptions, duplicate H1 tags
4. **Redirect Issues**: redirect chains, redirect loops, temporary redirects
5. **Recommendations**: prioritized action items to fix detected issues
