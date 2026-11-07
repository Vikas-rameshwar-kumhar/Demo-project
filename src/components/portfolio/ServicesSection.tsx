const services = [
  { number: "01", title: "Frontend Development", description: "React, Next.js, responsive interfaces", symbol: "✳" },
  { number: "02", title: "Full Stack Web Apps", description: "TypeScript, APIs, end-to-end features", symbol: "↗" },
  { number: "03", title: "Python, AI & Automation", description: "Helpful tools, smart workflows, experiments", symbol: "✳" },
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
              WHAT I LIKE TO BUILD
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
              Useful ideas.<br />
              <span className="font-serif italic text-[#7c8a70]">Thoughtful execution.</span>
            </h2>
          </div>
          <p className="m-0 max-w-xs text-sm leading-relaxed text-[#7a8075] md:ml-6 md:mb-1">
            From polished interfaces to backend features and small AI experiments, I enjoy making software feel clear and useful.
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
