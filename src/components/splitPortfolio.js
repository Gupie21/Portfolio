import React, { useEffect, useState } from "react";
import { featureData } from "./portfolio";

const designTitles = ["Mabe", "Tecnolite", "MR Soul"];

const projectRecords = new Map(featureData.map((project) => [project.title, project]));

const designProjects = designTitles
  .map((title) => projectRecords.get(title))
  .filter(Boolean);

const technicalProjects = [
  {
    title: "Enterprise design system",
    company: "KPMG Technology Services Americas",
    role: "Senior UI/UX Frontend Developer",
    problem: "Multiple enterprise applications needed a consistent, scalable component foundation.",
    challenge: "Build a reusable system from scratch and integrate custom UI with Angular Material and Power Apps.",
    solution: "Developed an Angular component library and maintained its SCSS styling across applications.",
    outcome: "Reusable components and consistent styling across multiple applications.",
    technologies: "Angular · TypeScript · SCSS · Angular Material · Azure Power Apps",
  },
  {
    title: "Core banking system",
    company: "Mutuo Financiera",
    role: "Fullstack Developer",
    problem: "Employees needed an application to support sales and credit analysis workflows.",
    challenge: "Build and maintain banking features spanning risk analysis, leads, roles, and client applications.",
    solution: "Developed CMB functionality and PHP modules, plus an Angular interface for employee workflows.",
    outcome: "Delivered core system features for sales, credit analysis, and risk workflows.",
    technologies: "Angular · Laravel · PHP · CSS",
    url: "https://www.behance.net/gallery/148041055/Mutuo-Financiera",
  },
  {
    title: "Enterprise graph platform",
    company: "London Stock Exchange Group · Luxoft",
    role: "Software Engineer",
    problem: "A platform integrating Neo4j graph technology needed intuitive, consistent front-end components.",
    challenge: "Align visual and functional behavior with back-end services and graph-driven product needs.",
    solution: "Developed Angular Material components and collaborated with back-end teams on integration.",
    outcome: "Front-end components supporting an intuitive, visually consistent graph platform.",
    technologies: "Angular Material · SASS · Neo4j platform integration",
  },
];

const designProjectDetails = {
  Mabe: {
    role: "Design collaboration and development",
    challenge: "Balance brand requirements with an intuitive end-user shopping experience.",
    tools: "Balsamiq · Adobe CC",
  },
  Tecnolite: {
    role: "UI improvement informed by end-user testing",
    challenge: "Align the sales-site interface with its target market and user feedback.",
    tools: "Balsamiq · Adobe CC",
  },
  "MR Soul": {
    role: "E-commerce interface design and development",
    challenge: "Present a premium eyewear catalog through a clear, minimal shopping experience.",
    tools: "Affinity Designer · UX/UI",
  },
};

function ProjectScene({ project, number }) {
  const projectUrl = project.projectURL || project.siteURL;
  const designDetails = designProjectDetails[project.title];

  return (
    <article className="split-project" data-section>
      <div className="split-project__visual">
        {project.img ? (
          <img src={project.img} alt={`${project.title} project`} loading="lazy" decoding="async" />
        ) : (
          <div className="split-project__visual-placeholder" aria-hidden="true">
            <span>{project.title}</span>
            <span>{project.tech.split(" | ").slice(0, 3).join(" / ")}</span>
          </div>
        )}
        <span className="split-project__number">PROJECT {number}</span>
      </div>
      <div className="split-project__body">
        <p className="split-project__eyebrow">{project.category} / UI/UX</p>
        <h3>{project.title}</h3>
        <p className="split-project__description">{project.description}</p>
        <dl className="split-project__details">
          <div>
            <dt>Role</dt>
            <dd>{designDetails.role}</dd>
          </div>
          <div>
            <dt>Challenge</dt>
            <dd>{designDetails.challenge}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{designDetails.tools}</dd>
          </div>
        </dl>
        {projectUrl && (
          <a className="split-project__link" href={projectUrl} target="_blank" rel="noreferrer">
            Open project <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

function ContextNav({ perspective, links, activeSection }) {
  return (
    <nav className="context-nav" aria-label={`${perspective} sections`}>
      {links.map(([label, id]) => (
        <a key={id} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>
          {label}
        </a>
      ))}
    </nav>
  );
}

function PerspectivePanel({ perspective, activeSection, setActiveSection }) {
  const isEngineering = perspective === "engineering";
  const prefix = isEngineering ? "engineering" : "design";
  const panelNav = isEngineering
    ? [["Architecture", "engineering-architecture"], ["Projects", "engineering-work"], ["Web engineering", "engineering-web"], ["Delivery", "engineering-delivery"]]
    : [["UX / UI", "design-skills"], ["Selected work", "design-work"], ["Process", "design-process"], ["Contact", "design-contact"]];

  useEffect(() => {
    const panel = document.querySelector(`[data-panel="${perspective}"]`);
    if (!panel || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (id) setActiveSection((current) => ({ ...current, [perspective]: id }));
          entry.target.classList.add("is-in-view");
        });
      },
      { root: panel, rootMargin: "-12% 0px -68% 0px", threshold: 0 }
    );

    panel.querySelectorAll("[data-section]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [perspective, setActiveSection]);

  return (
    <section className={`perspective-panel perspective-panel--${perspective}`} data-panel={perspective} aria-label={isEngineering ? "Engineering perspective" : "UI and UX design perspective"}>
      <ContextNav perspective={isEngineering ? "Engineering" : "Design"} links={panelNav} activeSection={activeSection} />
      <div className="perspective-panel__content">
        <header className="perspective-hero" id={`${prefix}-home`} data-section>
          <p className="perspective-hero__eyebrow">{isEngineering ? "// ENGINEERING" : "// UI / UX PERSPECTIVE"}</p>
          <p className="perspective-hero__index">ARTURO MIRANDA <span>·</span> 07+ YEARS</p>
          <h1 aria-label={isEngineering ? "Arturo Miranda, engineering: build scalable digital products" : undefined}>{isEngineering ? <>Build<br /><em>scalable</em> digital products.</> : <>Design<br /><em>meaningful</em> digital experiences.</>}</h1>
          <p className="perspective-hero__intro">
            {isEngineering
              ? "Senior front-end engineering shaped by architecture, performance, and the long-term health of the product."
              : "I shape usable, accessible interfaces by connecting user needs, product goals, and thoughtful visual direction."}
          </p>
          <div className="perspective-hero__actions">
            <a className="text-action" href={`#${prefix}-work`}>{isEngineering ? "Explore engineering work" : "Explore design work"} <span aria-hidden="true">↓</span></a>
            <a className="text-action text-action--quiet" href={isEngineering ? "#engineering-architecture" : "#design-skills"}>View capabilities</a>
          </div>
          <div className="perspective-hero__signature" aria-hidden="true">
            {isEngineering ? <><span>ARCHITECTURE</span><i /><span>PERFORMANCE</span><i /><span>DELIVERY</span></> : <><span>UX</span><i /><span>UI</span><i /><span>PRODUCT</span></>}
          </div>
        </header>

        {isEngineering ? (
          <>
            <section className="panel-section architecture-section" id="engineering-architecture" data-section>
              <div className="section-heading">
                <p>01 / ARCHITECTURE</p>
                <h2>Structure is part of the product.</h2>
              </div>
              <p className="architecture-intro">I think beyond individual screens: reusable foundations make front-end products easier to extend, integrate, and maintain.</p>
              <div className="architecture-map" role="img" aria-label="Front-end architecture from product surfaces to shared components and integrations">
                <div className="architecture-map__layer">
                  <span>PRODUCT SURFACES</span>
                  <div><b>Angular</b><b>React</b><b>Next.js</b></div>
                </div>
                <div className="architecture-map__connector" aria-hidden="true"><i /><i /><i /></div>
                <div className="architecture-map__layer architecture-map__layer--shared">
                  <span>SHARED FOUNDATIONS</span>
                  <div><b>Design systems</b><b>Component architecture</b><b>Reusable UI</b></div>
                </div>
                <div className="architecture-map__connector" aria-hidden="true"><i /><i /><i /></div>
                <div className="architecture-map__layer architecture-map__layer--quality">
                  <span>INTEGRATION + QUALITY</span>
                  <div><b>APIs</b><b>Accessibility</b><b>Performance</b><b>Maintainability</b></div>
                </div>
              </div>
              <p className="architecture-note">Architecture concepts represented here reflect the practices and technologies documented in my work.</p>
            </section>

            <section className="panel-section technical-work-section" id="engineering-work" data-section>
              <div className="section-heading section-heading--work">
                <p>02 / TECHNICAL PROJECTS</p>
                <h2>Build the system, not just the screen.</h2>
                <span>03 PROJECTS</span>
              </div>
              {technicalProjects.map((project, index) => (
                <article className="technical-project" key={project.title}>
                  <div className="technical-project__heading">
                    <span>0{index + 1} / {project.company}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <dl>
                    <div><dt>Problem</dt><dd>{project.problem}</dd></div>
                    <div><dt>My role</dt><dd>{project.role}</dd></div>
                    <div><dt>Technical challenge</dt><dd>{project.challenge}</dd></div>
                    <div><dt>Approach</dt><dd>{project.solution}</dd></div>
                    <div><dt>Outcome</dt><dd>{project.outcome}</dd></div>
                    <div><dt>Technologies</dt><dd>{project.technologies}</dd></div>
                  </dl>
                  {project.url && <a className="split-project__link" href={project.url} target="_blank" rel="noreferrer">View project <span aria-hidden="true">↗</span></a>}
                </article>
              ))}
            </section>

            <section className="panel-section web-engineering" id="engineering-web" data-section>
              <div className="section-heading"><p>03 / WEB ENGINEERING</p><h2>From build to live product.</h2></div>
              <p className="web-engineering__intro">I deliver complete web experiences for enterprise teams and freelance clients, across implementation, integrations, and production hosting.</p>
              <div className="web-engineering__capabilities">
                <div><span>01</span><p>Commerce</p><b>WooCommerce · Shopify</b></div>
                <div><span>02</span><p>Content platforms</p><b>WordPress · Elementor</b></div>
                <div><span>03</span><p>Integration + reach</p><b>APIs · SEO · performance</b></div>
                <div><span>04</span><p>Hosting</p><b>AWS · AWS Lightsail · Netlify</b></div>
              </div>
            </section>

            <section className="panel-section delivery-section" id="engineering-delivery" data-section>
              <div className="section-heading"><p>04 / DELIVERY</p><h2>I understand what happens after the code.</h2></div>
              <p>Project work includes deployment and hosting on AWS, AWS Lightsail, and Netlify, plus attention to front-end performance in production.</p>
              <div className="delivery-signature"><span>BUILD</span><i /><span>DEPLOY</span><i /><span>OPTIMIZE</span></div>
            </section>
          </>
        ) : (
        <>
        <section className="panel-section skills-section" id="design-skills" data-section>
          <div className="section-heading">
            <p>01 / UX + UI</p>
            <h2>Useful, clear, considered.</h2>
          </div>
          <div className="capability-list">
            {["User experience · usability", "Interface design · visual hierarchy", "Design systems · Figma", "Prototyping · user testing", "Accessibility · responsive product interfaces"].map((skill, index) => (
              <div className="capability-row" key={skill}><span>0{index + 1}</span><p>{skill}</p><span aria-hidden="true">↗</span></div>
            ))}
          </div>
        </section>

        <section className="panel-section work-section" id={`${prefix}-work`} data-section>
          <div className="section-heading section-heading--work">
            <p>02 / UI + PRODUCT DESIGN</p>
            <h2>Made to work for people.</h2>
            <span>{String(designProjects.length).padStart(2, "0")} PROJECTS</span>
          </div>
          {designProjects.map((project, index) => (
            <ProjectScene key={project.title} project={project} number={String(index + 1).padStart(2, "0")} />
          ))}
        </section>

          <section className="panel-section practice-section design-process" id="design-process" data-section>
            <div className="section-heading"><p>03 / DESIGN PRACTICE</p><h2>Make it clear.<br /><em>Then make it matter.</em></h2></div>
            <div className="process-steps">
              <div><span>01</span><h3>Understand</h3><p>Start with the people, context, and problem behind the interface.</p></div>
              <div><span>02</span><h3>Explore</h3><p>Use flows, prototypes, and visual systems to make options tangible.</p></div>
              <div><span>03</span><h3>Refine</h3><p>Test the details and collaborate through implementation.</p></div>
            </div>
          </section>

        <section className="panel-cta" id={`${prefix}-contact`} data-section>
          <p>{isEngineering ? "05 / NEXT CHAPTER" : "04 / NEXT CHAPTER"}</p>
          <h2>{isEngineering ? "Build something" : "Shape something"}<br /><em>worthwhile.</em></h2>
          <a className="text-action" href="mailto:arturo.miranda.diaz.1995@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
        </section>
        </>
        )}
      </div>
    </section>
  );
}

function SplitPortfolio() {
  const [activeSection, setActiveSection] = useState({ engineering: "engineering-home", design: "design-home" });

  return (
    <main className="portfolio-experience" id="home">
      <header className="global-nav">
        <a className="global-nav__brand" href="#home" aria-label="Arturo Miranda home"><span>AM</span><strong>Arturo Miranda</strong></a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#engineering-work">Projects</a>
          <a href="#beyond-code">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="global-nav__contact" href="mailto:arturo.miranda.diaz.1995@gmail.com">Let&apos;s work together <span aria-hidden="true">↗</span></a>
      </header>

      <div className="split-screen">
        <PerspectivePanel perspective="engineering" activeSection={activeSection.engineering} setActiveSection={setActiveSection} />
        <div className="split-divider" aria-hidden="true"><span>ONE MAKER<br />TWO LENSES</span></div>
        <PerspectivePanel perspective="design" activeSection={activeSection.design} setActiveSection={setActiveSection} />
      </div>

      <footer className="beyond-code" id="beyond-code">
        <div className="beyond-code__heading"><p>BEYOND CODE / THE PERSON BEHIND THE WORK</p><h2>Same curiosity.<br /><em>Other passions.</em></h2></div>
        <div className="beyond-code__items">
          <article><span>01 / PHOTOGRAPHY</span><h3>Looking closer.</h3><p>Winner of a Canon photography contest. Contest name, date, and placement have not been specified.</p></article>
          <article><span>02 / PLAY</span><h3>Games, for the joy of it.</h3><p>Video games are one of my personal interests and a steady source of creative inspiration.</p></article>
          <article><span>03 / SIDE PROJECTS</span><h3>Room to experiment.</h3><p>Personal projects and experiments will be added here as they are documented.</p></article>
        </div>
        <div className="beyond-code__footer" id="contact"><a href="mailto:arturo.miranda.diaz.1995@gmail.com">Arturo Miranda <span>·</span> Engineering + Design</a><a href="https://www.linkedin.com/in/arturo-miranda-diaz-542855138" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </footer>
    </main>
  );
}

export { SplitPortfolio };