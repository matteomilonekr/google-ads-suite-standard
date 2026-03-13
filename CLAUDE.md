# Suite Google Ads — Standard

## Setup

```bash
export DATAFORSEO_LOGIN=your_login
export DATAFORSEO_PASSWORD=your_password
npm install
```

## Come Usare Questa Suite

Questa suite ti fornisce 3 modi per lavorare: **comandi slash**, **agenti AI**, e **skill**. Ognuno ha un uso specifico.

---

## 1. Comandi Slash — Operazioni Dirette

I comandi slash eseguono operazioni SEO immediate. Scrivi il comando e ottieni il risultato.

| Comando | Cosa Fa | Esempio |
|---------|---------|---------|
| `/google:analyze-serp <keyword>` | Analizza la SERP per una keyword: ranking, SERP features, top competitor | `/google:analyze-serp "scarpe running"` |
| `/google:research-keywords <seed>` | Ricerca keyword approfondita: espansione, volumi, opportunita | `/google:research-keywords "seo tools" "seo software"` |
| `/google:audit-site <domain>` | Audit tecnico SEO completo: crawl, backlink, problemi, raccomandazioni | `/google:audit-site example.com` |
| `/google:check-backlinks <domain>` | Analisi profilo backlink: sommario, top link, ancore, referring domain | `/google:check-backlinks example.com` |
| `/google:find-competitors <domain>` | Scopri e analizza competitor organici | `/google:find-competitors example.com` |
| `/google:track-rankings <domain> --keywords <kw>` | Traccia posizioni keyword su Google | `/google:track-rankings example.com --keywords "seo" "sem"` |
| `/google:analyze-content <keyword>` | Analisi qualita e sentiment contenuti per una keyword | `/google:analyze-content "marketing digitale"` |
| `/google:keyword-brand <domain>` | Raccogli keyword brand (che contengono il nome brand) | `/google:keyword-brand example.com --brand "Example"` |
| `/google:keyword-no-brand <domain>` | Raccogli keyword non-brand | `/google:keyword-no-brand example.com --brand "Example"` |

---

## 2. Agenti AI — Analisi Complesse Automatizzate

Gli agenti sono AI specializzati che orchestrano piu operazioni in sequenza. Usali quando devi fare un'analisi complessa che richiede piu step.

### Come Invocare un Agente

Chiedi direttamente a Claude di usare l'agente. Esempi:

- "Esegui un audit SEO completo di example.com"
- "Fai una ricerca keyword approfondita su 'scarpe running'"
- "Analizza i competitor di example.com"

### Agenti Disponibili

#### `seo-audit-agent` — Audit SEO Completo
**Quando usarlo**: Vuoi un'analisi tecnica completa di un sito.
**Cosa fa**: Lancia un crawl del sito, analizza il profilo backlink, verifica le keyword ranking, identifica problemi tecnici (broken link, duplicate title/description, pagine non indicizzabili), genera raccomandazioni prioritizzate.
**Input**: dominio (obbligatorio), keyword da tracciare (opzionale), max pagine da crawlare (default 200)
**Output**: Report strutturato con overview dominio, crawl summary, profilo backlink, ranking keyword, problemi tecnici, raccomandazioni, score complessivo.

#### `keyword-research-agent` — Ricerca Keyword Approfondita
**Quando usarlo**: Devi trovare opportunita keyword per un progetto SEO.
**Cosa fa**: Parte da keyword seed, le espande tramite DataForSEO (suggestion + related), recupera volumi di ricerca, analizza la difficolta SERP, clusterizza per tema, identifica keyword ad alta opportunita (volume alto + difficolta bassa).
**Input**: keyword seed (1-5), location (default US), lingua (default EN)
**Output**: Lista keyword clusterizzata con volume, CPC, difficolta, intent, e keyword opportunity evidenziate.

#### `competitor-analysis-agent` — Analisi Competitor
**Quando usarlo**: Vuoi capire chi sono i competitor organici e dove hai gap.
**Cosa fa**: Scopre competitor organici tramite DataForSEO Labs, profila le metriche SEO di ciascuno (traffico, keyword, backlink), identifica keyword gap (keyword che i competitor hanno e tu no), analizza i backlink gap.
**Input**: dominio (obbligatorio), numero competitor (default 5)
**Output**: Lista competitor con metriche, keyword gap, backlink gap, raccomandazioni strategiche.

#### `content-strategy-agent` — Strategia Contenuti
**Quando usarlo**: Devi pianificare un calendario editoriale basato su dati.
**Cosa fa**: Analizza i contenuti esistenti e le keyword gia posizionate, identifica content gap confrontando con competitor, genera un calendario editoriale con topic prioritizzati, costruisce topic cluster con pillar page e articoli satellite.
**Input**: dominio, keyword focus (opzionale), competitor (opzionale)
**Output**: Content gap analysis, calendario editoriale, topic cluster con struttura pillar/satellite.

#### `local-seo-agent` — SEO Locale
**Quando usarlo**: Devi ottimizzare la presenza locale di un business.
**Cosa fa**: Verifica listing Google Business Profile, analizza recensioni (volume, rating, sentiment), controlla ranking su Google Maps per keyword locali, verifica consistenza NAP (Nome, Indirizzo, Telefono).
**Input**: nome business, indirizzo/citta, keyword locali
**Output**: Report listing, analisi recensioni, ranking Maps, raccomandazioni per local SEO.

#### `link-building-agent` — Link Building
**Quando usarlo**: Devi trovare opportunita per acquisire backlink.
**Cosa fa**: Analizza i backlink dei competitor per trovare fonti link dove tu non sei presente, identifica menzioni del brand senza link (link reclaim), trova broken link su siti rilevanti per proporre sostituzione, scopre opportunita di content outreach.
**Input**: dominio, competitor (opzionale)
**Output**: Lista opportunita link building prioritizzate per tipo (competitor gap, broken link, content outreach), con URL e strategia di approccio.

---

## 3. Skill — Funzioni API Granulari

Le skill sono le funzioni base della suite. Ogni skill corrisponde a un modulo DataForSEO specifico. Gli agenti le usano internamente, ma puoi anche richiamarle direttamente per operazioni specifiche.

### SERP Analysis (7 skill)
- `serp-google-organic` — Ranking organici Google, SERP features
- `serp-google-maps` — Local pack, ranking Maps
- `serp-google-media` — Immagini, News, Shopping SERP
- `serp-google-specialty` — Eventi, Job, AI Mode, Autocomplete
- `serp-google-finance` — Quotazioni, dati mercato
- `serp-youtube` — Ricerca YouTube, info video, commenti
- `serp-other-engines` — Bing, Yahoo, Baidu, Google Ads

### Keyword Research (3 skill)
- `keyword-volume` — Volumi di ricerca, CPC, competizione
- `keyword-suggestions` — Espansione seed keyword, keyword correlate
- `keyword-for-site` — Keyword associate a un dominio

### Backlink Analysis (3 skill)
- `backlink-profile` — Profilo completo: summary, backlink individuali, ancore, referring domain
- `backlink-monitoring` — Link nuovi/persi, competitor link
- `backlink-bulk` — Confronto bulk tra domini, intersezione backlink

### On-Page Audit (4 skill)
- `onpage-crawl` — Gestione crawl (avvio, monitoraggio, risultati)
- `onpage-issues` — Problemi SEO: pagine non indicizzabili, duplicati, broken link, redirect chain
- `onpage-performance` — Lighthouse audit, Core Web Vitals, waterfall timing
- `onpage-content` — Parsing contenuto, screenshot, analisi singola pagina

### Labs Analytics (2 skill)
- `labs-domain` — Intelligence dominio: traffico, keyword organiche, competitor, sottodomain
- `labs-keywords` — Intelligence keyword: suggerimenti, difficolta, intent, volume storico

### Content & Domain (3 skill)
- `content-analysis` — Ricerca contenuti per keyword, sentiment, trend
- `tech-detection` — Stack tecnologico di un dominio
- `whois` — Dati registrazione WHOIS

---

## TypeScript Library

7 moduli in `src/modules/`: serp, keywords, backlinks, onpage, labs, domain-analytics, content-analysis

```typescript
import { createClient, serp, keywords, backlinks } from "./src";

const client = createClient();
const results = await serp.googleOrganicLive(client, { keyword: "seo tools" });
const volume = await keywords.searchVolume(client, { keywords: ["seo tools"] });
```

## Note Architettura

- Validazione input: Zod schemas in `src/types.ts`
- API client: axios + HTTP Basic Auth
- Endpoint task-based: POST -> poll ready -> GET risultati
- Location default: 2840 (US), lingua: "en"

---

*Suite Google Ads by Matteo Milone — Piano Standard. Copyright 2026 Matteo Milone. Tutti i diritti riservati.*
