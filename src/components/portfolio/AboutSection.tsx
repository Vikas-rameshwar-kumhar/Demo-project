import { ArrowIcon } from "@/components/portfolio/ArrowIcon";

export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-wrap about-grid">
        <div className="about-label"><span className="eyebrow">A LITTLE ABOUT ME</span><div className="about-shape"><span>✳</span><span>CURIOUS<br />BY DEFAULT</span></div></div>
        <div className="about-copy">
          <h2>Good work comes from <span>good questions.</span></h2>
          <p>I’m an independent designer and developer who loves turning the complicated into the clear. I bring strategy, design, and a little bit of code together to make digital experiences that feel just right.</p>
          <p>Over the last 8 years, I’ve helped early-stage ideas find their voice and established teams find what’s next. Always thoughtful, always collaborative.</p>
          <a className="text-link" href="#contact">More about me <ArrowIcon /></a>
        </div>
        <div className="about-footnote">GOOD THINGS TAKE<br />GOOD THINKING. &nbsp;✳</div>
      </div>
    </section>
  );
}
