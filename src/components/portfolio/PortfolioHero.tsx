export function PortfolioHero() {
  return (
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
  );
}
