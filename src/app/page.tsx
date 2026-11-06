const projects = [
  {
    number: "01",
    name: "Goodside",
    type: "BRAND IDENTITY · DIGITAL",
    year: "2025",
    className: "project-art-goodside",
    mark: "goodside",
    note: "Make room for good.",
  },
  {
    number: "02",
    name: "Onda Objects",
    type: "E-COMMERCE · ART DIRECTION",
    year: "2024",
    className: "project-art-onda",
    mark: "onda",
    note: "Objects for slower living.",
  },
  {
    number: "03",
    name: "Fieldnotes",
    type: "PRODUCT DESIGN · DEVELOPMENT",
    year: "2024",
    className: "project-art-fieldnotes",
    mark: "fieldnotes",
    note: "A little closer to outside.",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <a className="project-card" href="#contact" aria-label={`${project.name} project, get in touch to learn more`}>
      <div className={`project-art ${project.className}`}>
        <div className="project-art-top"><span>AM® — SELECTED WORK</span><span>{project.number} / 03</span></div>
        <div className="project-art-center">
          <span className="project-art-mark">{project.mark}</span>
          <span className="project-art-note">{project.note}</span>
        </div>
        <div className="project-art-bottom"><span>INDEPENDENT BY NATURE</span><span>✳</span></div>
      </div>
      <div className="project-caption">
        <div><span className="eyebrow project-type">{project.type}</span><h3>{project.name}</h3></div>
        <span className="project-year">{project.year}<i><ArrowIcon diagonal /></i></span>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Alex Morgan home">AM<span>®</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a></div>
        <a className="nav-contact" href="#contact">Let’s talk <span><ArrowIcon diagonal /></span></a>
      </nav>

      <section className="hero section-wrap" id="home">
        <div className="hero-kicker"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS <span className="hero-location">BASED IN BROOKLYN, NY</span></div>
        <h1>Making digital<br />feel a little more <span className="italic-accent">human.</span></h1>
        <div className="hero-bottom">
          <p>I’m Alex — an independent designer &amp; developer partnering with good people to build thoughtful brands and digital things.</p>
          <a href="#work" className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
          <div className="hero-stamp" aria-label="Design with intention"><span>DESIGN WITH<br />INTENTION</span><span className="stamp-star">✳</span></div>
        </div>
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading"><div><span className="eyebrow">A FEW GOOD THINGS</span><h2>Selected work<span className="heading-period">.</span></h2></div><p>A small selection of projects made with care, curiosity, and lovely people.</p></div>
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        <a className="text-link" href="#contact">Have a project in mind? <ArrowIcon /></a>
      </section>

      <section className="about-section" id="about">
        <div className="section-wrap about-grid">
          <div className="about-label"><span className="eyebrow">A LITTLE ABOUT ME</span><div className="about-shape"><span>✳</span><span>CURIOUS<br />BY DEFAULT</span></div></div>
          <div className="about-copy"><h2>Good work comes from <span>good questions.</span></h2><p>I’m an independent designer and developer who loves turning the complicated into the clear. I bring strategy, design, and a little bit of code together to make digital experiences that feel just right.</p><p>Over the last 8 years, I’ve helped early-stage ideas find their voice and established teams find what’s next. Always thoughtful, always collaborative.</p><a className="text-link" href="#contact">More about me <ArrowIcon /></a></div>
          <div className="about-footnote">GOOD THINGS TAKE<br />GOOD THINKING. &nbsp;✳</div>
        </div>
      </section>

      <section className="services-section section-wrap" id="services">
        <div className="section-heading services-heading"><div><span className="eyebrow">HOW I CAN HELP</span><h2>Small team energy.<br /><span className="italic-accent">Thoughtful by design.</span></h2></div><p>From the first “what if?” to the final little detail, I help bring good ideas to life.</p></div>
        <div className="service-list">
          <div className="service-row"><span className="service-index">01</span><h3>Brand &amp; Strategy</h3><p>Positioning, identity, art direction</p><span className="service-symbol">✳</span></div>
          <div className="service-row"><span className="service-index">02</span><h3>Digital Experiences</h3><p>Websites, e-commerce, product design</p><span className="service-symbol">↗</span></div>
          <div className="service-row"><span className="service-index">03</span><h3>Creative Development</h3><p>Front-end, interactions, design systems</p><span className="service-symbol">✳</span></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner"><span className="eyebrow">HAVE A GOOD ONE IN MIND?</span><h2>Let’s make<br />something <span className="italic-accent">matter.</span></h2><a className="contact-link" href="mailto:hello@alexmorgan.design">hello@alexmorgan.design <span><ArrowIcon diagonal /></span></a><div className="contact-spark">✳</div></div>
      </section>

      <footer className="footer section-wrap"><a className="wordmark footer-mark" href="#home">AM<span>®</span></a><span>INDEPENDENTLY MADE WITH CARE <span className="footer-star">✳</span> © 2025</span><div><a href="https://www.instagram.com/">INSTAGRAM ↗</a><a href="https://www.linkedin.com/">LINKEDIN ↗</a></div></footer>
    </main>
  );
}
