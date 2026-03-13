---
description: Discover keywords associated with a domain from Google Ads and clickstream
argument-hint: <domain> [--location <code>] [--limit <number>]
---

Discover keywords associated with a domain using the DataForSEO Keywords Data API keyword-for-site endpoints.

## What to do

1. Read `src/modules/keywords.ts` to understand available keyword-for-site functions
2. Use `keywords.keywordsForSite` to discover domain keywords
3. Parse the domain from $ARGUMENTS (first argument)
4. Optional flags: `--location` (default 2840), `--limit` (default 100)

## Execution

```typescript
import { createClient, keywords } from "./src/index";
const client = createClient();
const resp = await keywords.keywordsForSite(client, {
  target: "<domain>",
  location_code: 2840,
  language_code: "en",
});
```

## Output

Present results as:
1. **Domain Keyword Overview**: domain, total keywords discovered, top categories
2. **Keyword List**: keyword, search volume, CPC, competition, estimated traffic
3. **Intent Distribution**: breakdown by informational, navigational, transactional, commercial
4. **Opportunity Keywords**: high volume + low competition keywords for the domain
