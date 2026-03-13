---
name: seo:google-maps
description: Google Maps and local pack SERP analysis - business listings, Maps rankings, reviews
argument-hint: <keyword> --location <location> [--device desktop|mobile]
allowed-tools:
  - Read
  - Bash
  - Task
  - Write
---

Analyze Google Maps and local pack results for the given keyword using the DataForSEO SERP API.

## What to do

1. Read `src/modules/serp.ts` to understand available Google Maps functions
2. Use `serp.googleMapsLive` for local pack and Maps ranking data
3. Parse the keyword from $ARGUMENTS (first argument)
4. Required flag: `--location` (location name or code)
5. Optional flags: `--device` (default desktop)

## Execution

```typescript
import { createClient, serp } from "./src/index";
const client = createClient();
const resp = await serp.googleMapsLive(client, {
  keyword: "<keyword>",
  location_name: "<location>",
  device: "desktop",
});
```

## Output

Present results as:
1. **Local Pack Overview**: total results found, location searched, keyword intent
2. **Top Business Listings**: rank, business name, address, rating, review count, category
3. **Maps Rankings**: position in Maps results, distance from center, prominence signals
4. **Review Analysis**: average ratings, review volume distribution across top results
