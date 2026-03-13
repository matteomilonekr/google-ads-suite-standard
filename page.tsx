import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suite Google Ads — Standard | Scalers",
  description:
    "22 skill SEO, 24 comandi slash, 6 agenti AI e ~120 funzioni API DataForSEO per Claude Code. Piano Standard.",
};

const commands = {
  "SERP & Ranking": [
    { cmd: "/google:analyze-serp", desc: "Analisi SERP completa" },
    { cmd: "/google:track-rankings", desc: "Monitoraggio ranking" },
    { cmd: "/google:google-maps", desc: "Maps e local pack" },
    { cmd: "/google:google-specialty", desc: "Events, Jobs, AI Mode" },
    { cmd: "/google:google-finance", desc: "Dati finanziari" },
    { cmd: "/google:youtube-serp", desc: "SERP YouTube" },
    { cmd: "/google:other-engines", desc: "Bing, Yahoo, Baidu" },
  ],
  "Keyword Research": [
    { cmd: "/google:research-keywords", desc: "Ricerca keyword" },
    { cmd: "/google:keyword-volume", desc: "Volumi e CPC" },
    { cmd: "/google:keyword-suggestions", desc: "Espansione seed" },
    { cmd: "/google:keyword-for-site", desc: "Keyword per dominio" },
    { cmd: "/google:keyword-brand", desc: "Keyword brand" },
    { cmd: "/google:keyword-no-brand", desc: "Keyword non-brand" },
  ],
  Backlink: [
    { cmd: "/google:check-backlinks", desc: "Profilo backlink" },
    { cmd: "/google:backlink-monitoring", desc: "Nuovi e persi" },
    { cmd: "/google:backlink-bulk", desc: "Confronto bulk" },
  ],
  "On-Page": [
    { cmd: "/google:onpage-crawl", desc: "Crawl tecnico" },
    { cmd: "/google:onpage-issues", desc: "Problemi SEO" },
    { cmd: "/google:onpage-performance", desc: "Lighthouse / CWV" },
  ],
  Intelligence: [
    { cmd: "/google:find-competitors", desc: "Scoperta competitor" },
    { cmd: "/google:audit-site", desc: "Audit tecnico" },
    { cmd: "/google:analyze-content", desc: "Analisi contenuti" },
    { cmd: "/google:labs-keywords", desc: "Keyword intelligence" },
    { cmd: "/google:whois", desc: "WHOIS dominio" },
  ],
};

const skills = [
  { cat: "SERP", count: 7, items: "Google Organic, Maps, Media, Specialty, Finance, YouTube, Other Engines" },
  { cat: "Keywords", count: 3, items: "Volume, Suggestions, For Site" },
  { cat: "Backlinks", count: 3, items: "Profile, Monitoring, Bulk" },
  { cat: "On-Page", count: 3, items: "Crawl, Issues, Performance" },
  { cat: "Labs", count: 1, items: "Keyword Intelligence" },
  { cat: "Content", count: 1, items: "Content Analysis" },
  { cat: "Domain", count: 2, items: "Tech Detection, WHOIS" },
  { cat: "Business", count: 2, items: "Listings, Social Media" },
];

const agents = [
  { name: "SEO Audit Agent", desc: "Audit completo: crawl + backlink + ranking + raccomandazioni" },
  { name: "Keyword Research Agent", desc: "Ricerca keyword: espansione, clustering, opportunita" },
  { name: "Competitor Analysis Agent", desc: "Profiling competitor: discovery, confronto, gap analysis" },
  { name: "Content Strategy Agent", desc: "Gap analysis contenuti + calendario editoriale + topic cluster" },
  { name: "Local SEO Agent", desc: "SEO locale: listing, recensioni, ranking Maps" },
  { name: "Link Building Agent", desc: "Link building: link competitor, content outreach, broken link" },
];

export default function StandardPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
            Piano Standard
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Suite Google Ads
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            SEO Toolkit completo per Claude Code — powered by DataForSEO
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              { n: "22", l: "Skill" },
              { n: "24", l: "Comandi" },
              { n: "6", l: "Agenti AI" },
              { n: "~120", l: "Funzioni API" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-4 text-center"
              >
                <div className="text-2xl font-bold text-white">{s.n}</div>
                <div className="text-sm text-zinc-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 space-y-20">
        {/* Commands */}
        <section>
          <h2 className="text-2xl font-bold text-white">
            24 Comandi <span className="text-blue-400">/google:*</span>
          </h2>
          <p className="mt-2 text-zinc-400">
            Operazioni guidate per ogni esigenza SEO
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(commands).map(([category, cmds]) => (
              <div
                key={category}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
              >
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {cmds.map((c) => (
                    <li key={c.cmd} className="text-sm">
                      <code className="text-emerald-400">{c.cmd}</code>
                      <span className="ml-2 text-zinc-500">{c.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-white">22 Skill Eseguibili</h2>
          <p className="mt-2 text-zinc-400">
            Ogni skill = SKILL.md + script.ts + output JSON
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div
                key={s.cat}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-white">{s.cat}</h3>
                  <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400">
                    {s.count}
                  </span>
                </div>
                <p className="mt-2 text-xs text-zinc-500">{s.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Agents */}
        <section>
          <h2 className="text-2xl font-bold text-white">6 Agenti AI</h2>
          <p className="mt-2 text-zinc-400">
            Agenti specializzati che orchestrano le skill per analisi complete
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((a) => (
              <div
                key={a.name}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
              >
                <h3 className="font-semibold text-white">{a.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Setup */}
        <section>
          <h2 className="text-2xl font-bold text-white">Setup Rapido</h2>
          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <pre className="overflow-x-auto text-sm leading-relaxed">
              <code className="text-emerald-400">
{`# Credenziali
export DATAFORSEO_LOGIN=your_login
export DATAFORSEO_PASSWORD=your_password

# Installazione
npm install`}
              </code>
            </pre>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10">
            <h2 className="text-2xl font-bold text-white">
              Vuoi di piu?
            </h2>
            <p className="mt-3 text-zinc-400">
              Il piano Premium include 38 skill, 50+ comandi, 21 agenti AI,
              monitoraggio AI/LLM, e-commerce intelligence e dashboard
              interattive.
            </p>
            <a
              href="/suite-google-ads-premium"
              className="mt-6 inline-block rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-500"
            >
              Scopri il Piano Premium
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-600">
        Suite Google Ads by Matteo Milone — Piano Standard
      </footer>
    </div>
  );
}
