---
description: Bulk backlink comparison across multiple domains
argument-hint: <domain1> <domain2> [...] [--metric backlinks|referring_domains|rank]
---

Compare backlink profiles across multiple domains in bulk using the DataForSEO Backlinks API bulk endpoints.

## What to do

1. Read `src/modules/backlinks.ts` to understand available bulk functions
2. Use `backlinks.bulkBacklinks`, `backlinks.bulkReferringDomains`, or `backlinks.bulkRanks` based on `--metric`
3. Parse domains from $ARGUMENTS (space-separated)
4. Optional flags: `--metric` (backlinks, referring_domains, rank; default backlinks)

## Execution

```typescript
import { createClient, backlinks } from "./src/index";
const client = createClient();
const resp = await backlinks.bulkBacklinks(client, {
  targets: ["<domain1>", "<domain2>"],
});
```

## Output

Present results as:
1. **Comparison Table**: domain, total backlinks, referring domains, domain rank, dofollow ratio
2. **Domain Ranking**: domains sorted by strongest backlink profile
3. **Link Intersection**: domains linking to multiple targets (common backlinks)
4. **Gap Analysis**: which domains have links that competitors lack
