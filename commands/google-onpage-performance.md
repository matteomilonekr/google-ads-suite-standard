---
description: Lighthouse audit, Core Web Vitals, load waterfall for a URL
argument-hint: <url> [--device desktop|mobile]
---

Run a Lighthouse performance audit and Core Web Vitals check using the DataForSEO On-Page API performance endpoints.

## What to do

1. Read `src/modules/onpage.ts` to understand available performance functions
2. Use `onpage.lighthouseLive` for Lighthouse audit and Core Web Vitals
3. Parse the URL from $ARGUMENTS (first argument)
4. Optional flags: `--device` (desktop or mobile; default mobile)

## Execution

```typescript
import { createClient, onpage } from "./src/index";
const client = createClient();
const resp = await onpage.lighthouseLive(client, {
  url: "<url>",
  for_mobile: true,
});
```

## Output

Present results as:
1. **Lighthouse Scores**: Performance, Accessibility, Best Practices, SEO (0-100 each)
2. **Core Web Vitals**: LCP, FID/INP, CLS with pass/fail indicators
3. **Performance Metrics**: TTFB, FCP, Speed Index, Total Blocking Time
4. **Opportunities**: specific recommendations to improve load time, with estimated savings
