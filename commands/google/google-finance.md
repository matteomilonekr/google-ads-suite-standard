---
description: Stock quotes, market data, financial SERP exploration via Google Finance
argument-hint: <ticker> [--location <code>]
---

Retrieve Google Finance data for the given stock ticker using the DataForSEO SERP API google finance endpoints.

## What to do

1. Read `src/modules/serp.ts` to understand available Google Finance functions
2. Use `serp.googleFinanceLive` for stock quote and market data
3. Parse the ticker symbol from $ARGUMENTS (first argument)
4. Optional flags: `--location` (default 2840)

## Execution

```typescript
import { createClient, serp } from "./src/index";
const client = createClient();
const resp = await serp.googleFinanceLive(client, {
  keyword: "<ticker>",
  location_code: 2840,
});
```

## Output

Present results as:
1. **Stock Overview**: ticker, company name, current price, change, change percentage
2. **Market Data**: open, high, low, close, volume, market cap
3. **Financial Summary**: P/E ratio, dividend yield, 52-week range if available
4. **Related Stocks**: similar or trending tickers shown in Google Finance SERP
