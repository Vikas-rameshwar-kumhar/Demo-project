const services = [
  { number: "01", title: "Brand & Strategy", description: "Positioning, identity, art direction", symbol: "✳" },
  { number: "02", title: "Digital Experiences", description: "Websites, e-commerce, product design", symbol: "↗" },
  { number: "03", title: "Creative Development", description: "Front-end, interactions, design systems", symbol: "✳" },
];

export function ServicesSection() {
  return (
    <section className="services-section section-wrap" id="services">
      <div className="section-heading services-heading">
        <div><span className="eyebrow">HOW I CAN HELP</span><h2>Small team energy.<br /><span className="italic-accent">Thoughtful by design.</span></h2></div>
        <p>From the first “what if?” to the final little detail, I help bring good ideas to life.</p>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <div className="service-row" key={service.number}>
            <span className="service-index">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-symbol">{service.symbol}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
