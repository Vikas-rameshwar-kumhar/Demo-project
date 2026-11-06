import { ArrowIcon } from "@/components/portfolio/ArrowIcon";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-inner">
        <span className="eyebrow">HAVE A GOOD ONE IN MIND?</span>
        <h2>Let’s make<br />something <span className="italic-accent">matter.</span></h2>
        <a className="contact-link" href="mailto:hello@alexmorgan.design">hello@alexmorgan.design <span><ArrowIcon diagonal /></span></a>
        <div className="contact-spark">✳</div>
      </div>
    </section>
  );
}
