const services = [
  { number: "01", title: "Brand & Strategy", description: "Positioning, identity, art direction", symbol: "✳" },
  { number: "02", title: "Digital Experiences", description: "Websites, e-commerce, product design", symbol: "↗" },
  { number: "03", title: "Creative Development", description: "Front-end, interactions, design systems", symbol: "✳" },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="flex justify-center px-5 py-16 sm:px-8 md:py-24 lg:px-14"
    >
      <div className="flex w-full max-w-7xl flex-col">
        <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
          <div>
            <span className="font-mono text-xs tracking-wider text-[#7d8476]">
              HOW I CAN HELP
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
              Small team energy.<br />
              <span className="font-serif italic text-[#7c8a70]">Thoughtful by design.</span>
            </h2>
          </div>
          <p className="m-0 max-w-xs text-sm leading-relaxed text-[#7a8075] md:ml-6 md:mb-1">
            From the first “what if?” to the final little detail, I help bring good ideas to life.
          </p>
        </div>

        <div className="border-t border-[#dcded2]">
          {services.map((service) => (
            <div
              key={service.number}
              className="grid min-h-20 grid-cols-[3rem_1fr_2rem] sm:grid-cols-[4rem_1fr_1fr_2rem] items-center border-b border-[#dcded2] py-4 transition-[padding] duration-200 hover:px-2"
            >
              <span className="font-mono text-xs tracking-wider text-[#8c9185]">
                {service.number}
              </span>
              <h3 className="m-0 text-base font-medium tracking-tight sm:text-lg">
                {service.title}
              </h3>
              <p className="col-start-2 row-start-2 sm:col-start-auto sm:row-start-auto m-0 font-mono text-[10px] tracking-wide text-[#82887b] sm:text-xs">
                {service.description}
              </p>
              <span className="col-start-3 row-span-2 sm:col-start-auto sm:row-span-1 text-right text-lg text-[#ea6d48]">
                {service.symbol}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
