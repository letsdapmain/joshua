/* eslint-disable @next/next/no-img-element */

const primaryMetrics = [
  { value: "10k+", label: "external events indexed" },
  { value: "150+", label: "developer resources" },
  { value: "20+", label: "ecosystems supported" },
  { value: "15", label: "workshops and sessions" },
];

const heroWords = [
  "explain themselves",
  "ship fast",
  "earn adoption",
  "stay useful",
];

const selectedWork = [
  {
    number: "01",
    title: "Letsdap",
    role: "Founder",
    period: "2024 - Present",
    href: "https://letsdap.com",
    signal: "Product built",
    line: "Event management and social networking platform rebuilt from proof of concept into a live beta product.",
    proof: ["Full-stack rebuild", "Live payments", "Realtime check-ins", "Mobile in progress"],
    stack: "Next.js 16 / React 19 / NestJS / MongoDB / Redis / Expo",
  },
  {
    number: "02",
    title: "Spheron Network",
    role: "Founding Frontend Engineer",
    period: "2021 - 2022",
    signal: "Systems shipped",
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
    signal: "Developer adoption",
    line: "Built demos, campaign tools, app kits, and protocol-facing frontend experiences across client ecosystems.",
    proof: ["ApeChain app kit", "Cysic meme generator", "Recall trading UI", "Alvara minting app"],
    stack: "React / TypeScript / Next.js / Smart contracts / Web3 tooling",
  },
  {
    number: "04",
    title: "Buildspace Africa",
    role: "Founder",
    period: "2022 - Present",
    href: "https://buildspace.africa/",
    signal: "Community education",
    line: "Built a technical community and training pipeline around workshops, partner tracks, and practical developer education.",
    proof: ["5,000+ reached", "Approx. 500 trained", "Partner tracks", "Public events"],
    stack: "Community strategy / Curriculum / Workshops / Partnerships",
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
          <a href="#engineering">Projects</a>
          <a href="#devrel">Proof</a>
          <a href="#featured">Featured</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Product Engineering / Developer Experience / Founder Execution</p>
          <h1 id="hero-title" className="hero-title">
            <span>Joshua Nwankwo</span>
            <span className="hero-motion">
              <span>builds products</span>
              <span className="hero-motion-row">
                <span>that</span>
                <span className="word-rotator" aria-hidden="true">
                  {heroWords.map((word) => (
                    <span key={word}>{word}</span>
                  ))}
                </span>
              </span>
              <span className="sr-only">explain themselves</span>
            </span>
          </h1>
          <p className="hero-position">
            AI-fluent product engineer and developer-facing builder, working across production systems, technical storytelling, and adoption loops.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a href="#engineering" className="button button-primary">
              Featured work
            </a>
            <a href="#featured" className="button button-secondary">
              Public signal
            </a>
          </div>
          <div className="hero-fluency" aria-label="AI tooling fluency">
            <span>AI tooling</span>
            <span>Prototyping</span>
            <span>Research</span>
            <span>Docs</span>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Portfolio visual system">
          <div className="portrait-panel">
            <img src="/joshua-hero.jpg" alt="Portrait of Joshua Nwankwo" width="3947" height="4511" />
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

      <section className="editorial-section" aria-labelledby="editorial-title">
        <div className="section-heading">
          <p className="eyebrow">One spine</p>
          <h2 id="editorial-title">Build the product. Explain the product. Improve the loop.</h2>
          <p>
            The through-line is simple: ship useful software, make the system legible, and use the feedback to make the next version sharper.
          </p>
        </div>
        <div className="editorial-tags" aria-label="Core operating modes">
          <span>Product systems</span>
          <span>AI tooling</span>
          <span>Developer experience</span>
          <span>Founder execution</span>
        </div>
      </section>

      <section className="work-section" id="engineering" aria-labelledby="engineering-title">
        <div className="section-heading">
          <p className="eyebrow">Featured work</p>
          <h2 id="engineering-title">A compact index of shipped proof.</h2>
        </div>

        <div className="work-index">
          {selectedWork.map((work) => (
            <details className="work-row" key={work.title}>
              <summary>
                <span className="project-number">{work.number}</span>
                <span className="project-title">
                  <strong>{work.title}</strong>
                  <small>
                    {work.role} / {work.period}
                  </small>
                </span>
                <span className="project-signal">{work.signal}</span>
                <span className="expand-copy">Click to expand</span>
              </summary>
              <div className="work-detail">
                <p>{work.line}</p>
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
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="devrel-section" id="devrel" aria-labelledby="devrel-title">
        <div className="section-heading split-heading">
          <p className="eyebrow">Developer relations</p>
          <h2 id="devrel-title">Adoption work that still looks like engineering.</h2>
        </div>
        <div className="signal-grid">
          {devrelSignals.map((signal) => (
            <article className="signal-card" key={signal.title}>
              <span>{signal.role}</span>
              <h3>{signal.title}</h3>
              <p>{signal.proof}</p>
              {signal.href ? (
                <ExternalLink href={signal.href} className="text-link">
                  Public reference
                </ExternalLink>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="featured-section" id="featured" aria-labelledby="featured-title">
        <div className="feature-media">
          <img src="/joshua-techpoint.webp" alt="Joshua Nwankwo in a Techpoint Africa feature portrait" width="1200" height="630" />
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
          <p>Frontend engineering made the product surface concrete.</p>
          <p>Developer relations made the user journey visible.</p>
          <p>Founder work sharpened the ownership loop from idea to shipped product.</p>
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
