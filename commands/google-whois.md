---
description: WHOIS domain registration lookup - registrar, dates, nameservers, contact info
argument-hint: <domain>
---

Look up WHOIS registration data for a domain using the DataForSEO Domain Analytics API whois endpoint.

## What to do

1. Read `src/modules/domain-analytics.ts` to understand available whois functions
2. Use `domainAnalytics.whoisLive` for domain WHOIS lookup
3. Parse the domain from $ARGUMENTS (first argument)

## Execution

```typescript
import { createClient, domainAnalytics } from "./src/index";
const client = createClient();
const resp = await domainAnalytics.whoisLive(client, {
  target: "<domain>",
});
```

## Output

Present results as:
1. **Domain Info**: domain name, registrar, registration date, expiration date, last updated
2. **Status**: domain status codes (clientTransferProhibited, etc.), active/expired
3. **Nameservers**: list of authoritative nameservers
4. **Contact Information**: registrant, admin, tech contacts (where available, respecting privacy)
