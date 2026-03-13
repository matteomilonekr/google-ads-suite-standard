# Suite Google Ads — Piano STANDARD

## Panoramica

La **Suite Google Ads Standard** offre gli strumenti essenziali per gestire, analizzare e ottimizzare le campagne Google Ads e la presenza SEO del tuo brand. Pensata per team marketing e agenzie che vogliono un controllo operativo solido senza la complessita dei moduli avanzati.

---

## Cosa Include

### 1. SEO Toolkit — 38 Skill con Dati DataForSEO

Accesso completo a dati SEO professionali tramite 200+ funzioni API:

#### SERP Analysis
- **Google Organic** — Ranking organici, SERP features, posizioni competitor
- **Google Maps** — Local pack, ranking Maps
- **Google Media** — Immagini, News, Shopping SERP
- **YouTube** — Ricerca video, info canali, commenti

#### Keyword Research
- **Volume di ricerca** — Volume mensile, CPC, competition score (Google Ads + Bing)
- **Suggerimenti keyword** — Espansione seed, keyword correlate
- **Keyword per dominio** — Scopri le keyword per cui un dominio si posiziona

#### Backlink Analysis
- **Profilo backlink** — Audit completo link profile (referring domains, anchor text, authority)
- **Bulk comparison** — Confronto backlink tra piu domini

#### On-Page Audit
- **Crawl sito** — Scansione tecnica del sito con gestione task
- **Problemi SEO** — Pagine non indicizzabili, duplicati, errori tecnici
- **Performance** — Lighthouse score, Core Web Vitals

#### Content & Domain
- **Analisi contenuti** — Sentiment, trend, rating
- **Tech detection** — Stack tecnologico di qualsiasi dominio
- **WHOIS** — Dati registrazione dominio

### 2. Comandi Slash — 24 Operazioni Guidate

Comandi rapidi per tutte le operazioni SEO:

#### SERP & Ranking
| Comando | Cosa fa |
|---|---|
| `/google:analyze-serp <keyword>` | Analisi SERP completa per una keyword |
| `/google:track-rankings <dominio> --keywords <kw...>` | Tracking posizioni keyword su Google |
| `/google:google-maps <keyword> --location <loc>` | Ricerca Google Maps e local pack |
| `/google:google-specialty <keyword> --type <tipo>` | SERP specialistici: Events, Jobs, AI Mode, Autocomplete |
| `/google:google-finance <ticker>` | Dati finanziari, quotazioni, mercati |
| `/google:youtube-serp <keyword>` | Analisi SERP YouTube, metadati video |
| `/google:other-engines <keyword> --engine <motore>` | SERP multi-engine: Bing, Yahoo, Baidu |

#### Keyword Research
| Comando | Cosa fa |
|---|---|
| `/google:research-keywords <seed> [seed2...]` | Ricerca keyword approfondita con clustering |
| `/google:keyword-volume <keyword> [keyword2...]` | Volumi di ricerca, CPC, competition |
| `/google:keyword-suggestions <seed>` | Espansione seed in keyword correlate |
| `/google:keyword-for-site <dominio>` | Scopri le keyword di un dominio competitor |
| `/google:keyword-brand <dominio> [--brand <nome>]` | Keyword brand di un dominio |
| `/google:keyword-no-brand <dominio> [--brand <nome>]` | Keyword non-brand di un dominio |

#### Backlink Analysis
| Comando | Cosa fa |
|---|---|
| `/google:check-backlinks <dominio>` | Analisi profilo backlink completo |
| `/google:backlink-monitoring <dominio>` | Monitoraggio backlink nuovi e persi |
| `/google:backlink-bulk <dominio1> <dominio2> [...]` | Confronto backlink tra piu domini |

#### On-Page Audit
| Comando | Cosa fa |
|---|---|
| `/google:onpage-crawl <dominio>` | Avvia e gestisci crawl tecnico del sito |
| `/google:onpage-issues <dominio>` | Rileva problemi SEO: duplicati, broken link, redirect |
| `/google:onpage-performance <url>` | Audit Lighthouse, Core Web Vitals, waterfall |

#### Intelligence & Discovery
| Comando | Cosa fa |
|---|---|
| `/google:find-competitors <dominio>` | Scoperta e analisi competitor organici |
| `/google:audit-site <dominio>` | Audit tecnico SEO completo |
| `/google:analyze-content <keyword>` | Analisi qualita e sentiment contenuti |
| `/google:labs-keywords <keyword>` | Intelligence avanzata: intent, difficulty, SERP competitors |
| `/google:whois <dominio>` | Lookup WHOIS registrazione dominio |

### 3. Agenti SEO — Analisi Automatizzate

6 agenti specializzati che orchestrano le skill per analisi complete:

| Agente | Specializzazione |
|---|---|
| **SEO Audit Agent** | Audit completo: crawl + backlink + ranking + raccomandazioni |
| **Keyword Research Agent** | Ricerca keyword: espansione, clustering, opportunita |
| **Competitor Analysis Agent** | Profiling competitor: discovery, confronto, gap analysis |
| **Content Strategy Agent** | Gap analysis contenuti + calendario editoriale + topic cluster |
| **Local SEO Agent** | SEO locale: listing, recensioni, ranking Maps |
| **Link Building Agent** | Link building: link competitor, content outreach, broken link |

---

## Limiti del Piano Standard

Il piano Standard **non include**:

- Agenti Google Ads 2026 strategici (9 agenti specializzati)
- Agenti Google Ads operativi (6 agenti per audit e ottimizzazione)
- Comandi `/google:gads-report` e `/google:gads-team-audit`
- Monitoraggio AI/LLM (AI Overview, LLM mentions, LLM scraping)
- Skill avanzate: AI Optimization, E-Commerce (Amazon/Shopping), App Store data
- Dashboard interattive (Graphed)
- Local Falcon grid analysis
- Content generation AI (testi, meta tag, parafrasi)
- Campagne Performance Max, Demand Gen, Video/Display avanzate

---

## Per Chi e Pensato

- **Agenzie** che gestiscono account Google Ads e vogliono dati SEO integrati
- **Team marketing** che necessitano di keyword research e audit tecnici
- **Freelancer** che offrono servizi SEO + PPC base
- **Brand** che vogliono monitorare ranking e competitor

---

## Setup Rapido

```bash
# Credenziali
export DATAFORSEO_LOGIN=your_login
export DATAFORSEO_PASSWORD=your_password

# Installazione
npm install
```

---

*Suite Google Ads by Matteo Milone — Piano Standard*
