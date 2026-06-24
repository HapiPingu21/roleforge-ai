"use client";

import { useMemo, useState } from "react";

type Company = {
  name: string;
  city: string;
  focus: string;
  url: string;
  note: string;
  tier: "Priority" | "Strong target";
};

const companies: Company[] = [
  { name: "Zalando", city: "Berlin", focus: "Data, ML, platform engineering", url: "https://jobs.zalando.com/en/", note: "International product and engineering teams; review each role's language requirement.", tier: "Priority" },
  { name: "Delivery Hero", city: "Berlin", focus: "Data platform, analytics, ML", url: "https://careers.deliveryhero.com/", note: "English is widely used in Berlin tech teams; look for working student and intern roles.", tier: "Priority" },
  { name: "HelloFresh", city: "Berlin", focus: "Analytics, data science, operations", url: "https://careers.hellofresh.com/", note: "International company; target data, BI and product analytics roles.", tier: "Priority" },
  { name: "N26", city: "Berlin", focus: "Data, risk analytics, ML", url: "https://n26.com/en/careers", note: "English-first fintech environment; language remains role-specific.", tier: "Priority" },
  { name: "SumUp", city: "Berlin", focus: "Data engineering, analytics, payments", url: "https://sumup.com/careers/", note: "Strong international engineering footprint; apply to data/platform roles.", tier: "Priority" },
  { name: "Celonis", city: "Munich / Berlin", focus: "Process mining, data, AI", url: "https://www.celonis.com/careers/", note: "Good match for data engineering and applied AI; verify student openings in English.", tier: "Priority" },
  { name: "SAP", city: "Walldorf / Berlin / Potsdam", focus: "Cloud data, AI, analytics", url: "https://jobs.sap.com/", note: "Large working-student pipeline; many technical teams operate in English.", tier: "Priority" },
  { name: "DeepL", city: "Cologne / Berlin", focus: "NLP, LLMs, ML platform", url: "https://www.deepl.com/en/careers", note: "Especially relevant to your NLP and LLM experience; language varies by team.", tier: "Priority" },
  { name: "Flix", city: "Munich / Berlin", focus: "Data, pricing, product analytics", url: "https://flix.careers/", note: "International travel-tech teams; search analytics, data and engineering.", tier: "Priority" },
  { name: "Personio", city: "Munich / Berlin", focus: "People analytics, data platform, AI", url: "https://www.personio.com/careers/", note: "English-speaking SaaS culture; German is often not mandatory in technical roles.", tier: "Priority" },
  { name: "Mambu", city: "Berlin", focus: "Cloud, data, fintech", url: "https://mambu.com/careers", note: "International banking-tech company; monitor internships and student roles.", tier: "Strong target" },
  { name: "Contentful", city: "Berlin", focus: "Cloud engineering, product data", url: "https://www.contentful.com/careers/", note: "English-first company with distributed teams.", tier: "Strong target" },
  { name: "GetYourGuide", city: "Berlin", focus: "Data science, analytics, ML", url: "https://careers.getyourguide.com/", note: "International consumer-tech environment; target product and data roles.", tier: "Strong target" },
  { name: "Omio", city: "Berlin", focus: "Data, travel-tech, analytics", url: "https://www.omio.com/corporate/careers", note: "English is used across many teams; check student eligibility per post.", tier: "Strong target" },
  { name: "AUTO1 Group", city: "Berlin", focus: "Data, ML, marketplace analytics", url: "https://www.auto1-group.com/careers/", note: "International marketplace technology organisation.", tier: "Strong target" },
  { name: "Wayfair", city: "Berlin", focus: "Analytics, software, data platforms", url: "https://www.aboutwayfair.com/careers", note: "English-language global organisation; role availability varies.", tier: "Strong target" },
  { name: "Highsnobiety", city: "Berlin", focus: "Data analytics, digital product", url: "https://careers.highsnobiety.com/", note: "English-language media and commerce company; useful analytics target.", tier: "Strong target" },
  { name: "Mister Spex", city: "Berlin", focus: "E-commerce analytics, data", url: "https://corporate.misterspex.com/en/career/", note: "Search digital, data and BI openings; confirm German requirement.", tier: "Strong target" },
  { name: "Siemens Digital Industries", city: "Berlin / Munich / Erlangen", focus: "Industrial AI, data engineering", url: "https://jobs.siemens.com/careers", note: "Excellent technical fit; only shortlist posts explicitly listing English as sufficient.", tier: "Strong target" },
  { name: "Bosch", city: "Stuttgart / Berlin / Hildesheim", focus: "AI, data, mobility", url: "https://www.bosch.com/careers/", note: "High-volume student hiring; German varies sharply by business unit.", tier: "Strong target" },
  { name: "QuantCo", city: "Berlin", focus: "ML, data science, decision systems", url: "https://www.quantco.com/career", note: "English-speaking quantitative-tech environment; competitive but very relevant.", tier: "Strong target" },
  { name: "Scalable Capital", city: "Munich / Berlin", focus: "Data, ML, fintech", url: "https://de.scalable.capital/en/careers", note: "International technical teams; look for working student / intern roles.", tier: "Strong target" },
  { name: "Trade Republic", city: "Berlin", focus: "Data, risk, fintech engineering", url: "https://traderepublic.com/en-de/careers", note: "English may be sufficient in technical teams; check each listing carefully.", tier: "Strong target" },
  { name: "ResearchGate", city: "Berlin", focus: "Data products, science platform", url: "https://www.researchgate.net/careers", note: "International academic-tech environment relevant to your research profile.", tier: "Strong target" }
];

const evidence = [
  "2 years of industry experience at TIAA building ML pipelines and analytics tools",
  "Python, SQL, PySpark, Snowflake, AWS, Docker, Power BI and Azure ML",
  "Current Human-Centered AI HiWi: NLP, LLMs, Transformers, SHAP/LIME and LangChain",
  "M.Sc. Data & Knowledge Engineering at Otto von Guericke University Magdeburg",
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [applied, setApplied] = useState(0);
  const [selected, setSelected] = useState<Company | null>(null);
  const [showDraft, setShowDraft] = useState(false);
  const visibleCompanies = useMemo(() => companies.filter((company) =>
    `${company.name} ${company.city} ${company.focus}`.toLowerCase().includes(query.toLowerCase())
  ), [query]);

  return (
    <main>
      <section className="hero">
        <div><p className="eyebrow">PRIVATE JOB-SEARCH COMMAND CENTER</p><h1>RoleForge <span>AI</span></h1><p className="subtitle">Find working-student roles worth applying to. Tailor every application from evidence, never invention.</p></div>
        <div className="deadline"><span>Target</span><strong>Working-student offer</strong><b>by mid-September 2026</b></div>
      </section>
      <section className="progress-grid">
        <article className="progress-card"><p>Today&apos;s application goal</p><div className="goal"><strong>{applied}</strong><span>/ 10</span></div><div className="meter"><i style={{ width: `${Math.min(applied * 10, 100)}%` }} /></div><button onClick={() => setApplied((n) => Math.min(n + 1, 10))}>Mark an application sent</button></article>
        <article className="stat"><strong>{companies.length}</strong><span>English-first target companies</span></article>
        <article className="stat"><strong>4</strong><span>verified evidence pillars ready to tailor</span></article>
        <article className="stat"><strong>5</strong><span>priority role families to search daily</span></article>
      </section>
      <section className="layout">
        <div className="radar">
          <div className="section-heading"><div><p className="eyebrow">COMPANY RADAR</p><h2>English-first technical targets</h2></div><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search company, city, skill…" /></div>
          <p className="disclaimer">These are high-fit targets where English is commonly used in technical teams—not a blanket promise. RoleForge will only mark a listing as “English sufficient” after reading its actual requirements.</p>
          <div className="company-list">
            {visibleCompanies.map((company) => <article className="company" key={company.name}><div><span className={`tier ${company.tier === "Priority" ? "priority" : "strong"}`}>{company.tier}</span><h3>{company.name}</h3><p>{company.city} · {company.focus}</p><small>{company.note}</small></div><div className="company-actions"><a href={company.url} target="_blank" rel="noreferrer">Careers ↗</a><button onClick={() => { setSelected(company); setShowDraft(false); }}>Prepare application</button></div></article>)}
          </div>
        </div>
        <aside className="side-panel"><p className="eyebrow">ROLE QUERIES</p><h2>Search these first</h2><ul><li>Werkstudent Data Engineering</li><li>Working Student Data Analytics</li><li>Working Student AI / ML</li><li>Working Student MLOps / Cloud</li><li>Intern Data Science / Applied AI</li></ul><p className="eyebrow lower">CANDIDATE EVIDENCE</p>{evidence.map((item) => <p className="evidence" key={item}>{item}</p>)}</aside>
      </section>
      {selected && <section className="studio"><div><p className="eyebrow">APPLICATION STUDIO · {selected.name.toUpperCase()}</p><h2>Start with the official role description</h2><p>Open the career page, paste a job description here in the next version, and RoleForge will rank fit and produce a factual tailored CV and cover letter.</p></div><button className="primary" onClick={() => setShowDraft(true)}>Preview tailoring logic</button>{showDraft && <div className="draft"><h3>Evidence selected for a {selected.focus} role</h3><ul>{evidence.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul><p>Next build step: connect this evidence selection to your LaTeX CV template and an editable cover-letter generator.</p></div>}</section>}
    </main>
  );
}
