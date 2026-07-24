/* eslint-disable @next/next/no-img-element */

const primaryMetrics = [
  { value: "10k+", label: "external events indexed into Letsdap" },
  { value: "150+", label: "guides, tutorials, articles, and demos" },
  { value: "20+", label: "protocol ecosystems supported" },
  { value: "15", label: "workshops, webinars, and community sessions" },
];

const proofLanes = [
  {
    title: "Product Engineering",
    body: "Owns the shape of production systems: interface, backend, data, real-time flows, payments, monitoring, deployment, and AI-assisted workflows.",
    tags: ["Letsdap", "Spheron", "AI tooling"],
    href: "#engineering",
  },
  {
    title: "Developer Experience",
    body: "Turns complex products into clear developer pathways through demos, guides, workshops, campaigns, and feedback loops.",
    tags: ["Hype Partners", "Mirror World", "Developer adoption"],
    href: "#devrel",
  },
];

const selectedWork = [
  {
    number: "01",
    title: "Letsdap",
    role: "Founder",
    period: "2024 - Present",
    href: "https://letsdap.com",
    line: "Event management and social networking platform rebuilt from proof of concept into a live beta product.",
    proof: ["Full-stack rebuild", "Live payments", "Realtime check-ins", "Mobile in progress"],
    stack: "Next.js 16 / React 19 / NestJS / MongoDB / Redis / Expo",
  },
  {
    number: "02",
    title: "Spheron Network",
    role: "Founding Frontend Engineer",
    period: "2021 - 2022",
    line: "Helped move a decentralized hosting MVP into a production-grade platform.",
    proof: ["Auth", "Dashboards", "GitHub deploys", "Token payments"],
    stack: "React / Next.js / TypeScript / Redux / Web3.js",
  },
  {
    number: "03",
    title: "Hype Partners",
    role: "Developer Relations Engineer",
    period: "2023 - 2025",
    href: "https://github.com/Hype-DevRel/Alvara-NFT",
    line: "Built demos, campaign tools, app kits, and protocol-facing frontend experiences across client ecosystems.",
    proof: ["ApeChain app kit", "Cysic meme generator", "Recall trading UI", "Alvara minting app"],
    stack: "React / TypeScript / Next.js / Smart contracts / Web3 tooling",
  },
];

const devrelSignals = [
  {
    title: "Hype Partners",
    role: "Developer Relations Engineer",
    proof: "20+ ecosystems / 150+ resources / 25-person ambassador cohort",
  },
  {
    title: "Mirror World",
    role: "Developer Relations Engineer",
    proof: "SDK guides, product writing, and UTM attribution setup",
  },
  {
    title: "Buildspace Africa",
    role: "Founder",
    proof: "5,000+ reached / approx. 500 trained / partner training tracks",
  },
  {
    title: "TxE Summit",
    role: "Co-organizer and panelist",
    proof: "23,000 registrations / estimated 10,000+ attendees",
    href: "https://enugutechsummit.tech/",
  },
];

const features = [
  {
    source: "Techpoint Africa",
    title: "The bridge-builder profile",
    label: "Feature",
    href: "https://techpoint.africa/feature/joshua-nwankwo-the-bridge-builder/",
  },
  {
    source: "TechNext24",
    title: "Helping global Web3 startups drive adoption",
    label: "Founder spotlight",
    href: "https://technext24.com/founders-spotlight/joshua-nwankwo-is-helping-global-web3-startups-drive-adoption/",
  },
  {
    source: "Ekolance",
    title: "OnRamp and OffRamp workshop profile",
    label: "Workshop",
    href: "https://www.ekolance.io/integrating-onramp-and-offramp-services-into-web-applications",
  },
  {
    source: "TechEconomy",
    title: "Buildspace community event coverage",
    label: "Event coverage",
    href: "https://techeconomy.ng/enugu-on-becoming-the-most-vibrant-web3-community-in-nigeria/",
  },
  {
    source: "Buildspace Africa",
    title: "Founder and community lead",
    label: "Official",
    href: "https://buildspace.africa/",
  },
];

const writingLinks = [
  { label: "Hashnode", href: "https://hashnode.com/@judicodes" },
  { label: "DEV", href: "https://dev.to/joshuanwankwo" },
  { label: "Sessionize", href: "https://sessionize.com/judicodes/" },
];

const contactLinks = [
  { label: "Email", href: "mailto:u.joshuanwankwo@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joshuanwankwo/" },
  { label: "GitHub", href: "https://github.com/joshuanwankwo" },
  { label: "X", href: "https://x.com/judicodes" },
];

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      className={className}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="texture" aria-hidden="true" />

      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-lockup" href="#top" aria-label="Joshua Nwankwo home">
          JN
        </a>
        <nav className="nav-links" aria-label="Portfolio sections">
          <a href="#engineering">Work</a>
          <a href="#devrel">DevRel</a>
          <a href="#featured">Featured</a>
          <a href="#contact">Contact</a>
        </nav>
        <ExternalLink href="mailto:u.joshuanwankwo@gmail.com" className="header-cta">
          Email
        </ExternalLink>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Product Engineering / Developer Experience / Founder Execution</p>
          <h1 id="hero-title" className="hero-title">
            <span>Joshua</span>
            <span>Nwankwo</span>
          </h1>
          <p className="hero-position">
            I&apos;ve been building products people actually use since I was 17, I enjoy making complicated things easy to understand, and lean on the right AI tools to get from idea to shipped product faster.
          </p>
          <div className="hero-fluency" aria-label="What I do">
            <span>Full-stack engineering</span>
            <span>Developer relations</span>
            <span>Technical writing</span>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Portfolio visual system">
          <div className="portrait-panel">
            <img src="/joshua-hero.jpg" alt="Portrait of Joshua Nwankwo" width="3947" height="4511" fetchPriority="high" decoding="async" />
            <div className="corner-code">01</div>
          </div>
          <div className="geometry-board" aria-hidden="true">
            <div className="tile tile-dots" />
            <div className="tile tile-acid" />
            <div className="tile tile-ember" />
            <div className="tile tile-cyan" />
            <div className="tile tile-lines" />
            <div className="tile tile-violet" />
          </div>
        </aside>
      </section>

      <section className="metric-strip" aria-label="Credibility metrics">
        {primaryMetrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="lane-section" aria-labelledby="lane-title">
        <div className="section-heading">
          <p className="eyebrow">Two paths, one spine</p>
          <h2 id="lane-title">Engineering depth with developer-facing range.</h2>
        </div>
        <div className="lane-grid">
          {proofLanes.map((lane, index) => (
            <a href={lane.href} className="lane-card" key={lane.title}>
              <span>0{index + 1}</span>
              <strong>{lane.title}</strong>
              <p>{lane.body}</p>
              <small>{lane.tags.join(" / ")}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="work-section" id="engineering" aria-labelledby="engineering-title">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="engineering-title">Proof, not a gallery.</h2>
        </div>

        <div className="work-list">
          {selectedWork.map((work) => (
            <article className="work-item" key={work.title}>
              <span className="work-number">{work.number}</span>
              <div className="work-main">
                <p className="case-kicker">
                  <span>{work.role}</span>
                  <span>{work.period}</span>
                </p>
                <h3>{work.title}</h3>
                <p>{work.line}</p>
              </div>
              <div className="work-proof" aria-label={`${work.title} proof`}>
                {work.proof.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <p className="stack-line">{work.stack}</p>
              {work.href ? (
                <ExternalLink href={work.href} className="text-link">
                  Public reference
                </ExternalLink>
              ) : (
                <span className="work-noref" aria-hidden="true">
                  —
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="devrel-section" id="devrel" aria-labelledby="devrel-title">
        <div className="section-heading split-heading">
          <p className="eyebrow">Developer relations &amp; community</p>
          <h2 id="devrel-title">Adoption and community work that still looks like engineering.</h2>
        </div>
        <div className="signal-grid">
          {devrelSignals.map((signal) => (
            <article className="signal-card" key={signal.title}>
              <div className="signal-head">
                <span>{signal.role}</span>
                <h3>{signal.title}</h3>
              </div>
              <div className="signal-foot">
                <p>{signal.proof}</p>
                {signal.href ? (
                  <ExternalLink href={signal.href} className="text-link">
                    Public reference
                  </ExternalLink>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-section" id="featured" aria-labelledby="featured-title">
        <div className="feature-media">
          <img src="/joshua-techpoint.webp" alt="Joshua Nwankwo in a Techpoint Africa feature portrait" width="1200" height="630" loading="lazy" decoding="async" />
        </div>
        <div>
          <div className="section-heading">
            <p className="eyebrow">Featured / cited / invited</p>
            <h2 id="featured-title">Public signal beyond the resume.</h2>
          </div>
          <div className="feature-list">
            {features.map((feature) => (
              <ExternalLink href={feature.href} className="feature-row" key={feature.title}>
                <span>{feature.label}</span>
                <strong>{feature.source}</strong>
                <p>{feature.title}</p>
              </ExternalLink>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow">Through-line</p>
          <h2 id="about-title">Build the system. Translate the system. Improve the system.</h2>
        </div>
        <div className="about-grid">
          <article className="phase-card">
            <span className="phase-verb">Build</span>
            <p>As an engineer, I build the product itself — the screens, flows, and features people actually use.</p>
          </article>
          <article className="phase-card">
            <span className="phase-verb">Translate</span>
            <p>In developer relations, I turn complex tech into docs, demos, and guides that developers can follow.</p>
          </article>
          <article className="phase-card">
            <span className="phase-verb">Improve</span>
            <p>As a founder, I own the whole loop — from the first idea to a shipped, working product.</p>
          </article>
        </div>
      </section>

      <section className="writing-section" aria-labelledby="writing-title">
        <div className="section-heading">
          <p className="eyebrow">Writing and speaking</p>
          <h2 id="writing-title">Short paths into the public archive.</h2>
        </div>
        <div className="writing-links">
          {writingLinks.map((link) => (
            <ExternalLink href={link.href} key={link.label}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Product teams, developer platforms, technical communities.</h2>
          </div>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <ExternalLink href={link.href} key={link.label}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#top">Back to top</a>
        <p>Joshua Nwankwo / Product Engineering / Developer Experience / Founder Execution</p>
      </footer>
    </main>
  );
}
