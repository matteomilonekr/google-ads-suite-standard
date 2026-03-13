---
description: Start, monitor and manage site crawls for on-page SEO analysis
argument-hint: <domain> [--max-pages <number>] [--check-status]
---

Start and manage site crawls using the DataForSEO On-Page API crawl endpoints.

## What to do

1. Read `src/modules/onpage.ts` to understand available crawl functions
2. Use `onpage.taskPost` to start a crawl, `onpage.summary` to check status
3. Parse the domain from $ARGUMENTS (first argument)
4. Optional flags: `--max-pages` (default 100), `--check-status` (check existing crawl instead of starting new)

## Execution

```typescript
import { createClient, onpage } from "./src/index";
const client = createClient();
// Start crawl:
const task = await onpage.taskPost(client, {
  target: "<domain>",
  max_crawl_pages: 100,
});
// Check status:
const summary = await onpage.summary(client, { id: task.id });
```

## Output

Present results as:
1. **Crawl Status**: task ID, status (in progress/complete), pages crawled, pages remaining
2. **Crawl Summary**: total pages found, crawl depth, internal/external link counts
3. **Page Breakdown**: by status code (200, 301, 404, 500), by content type
4. **Crawl Health**: crawl budget usage, blocked pages, robots.txt issues
