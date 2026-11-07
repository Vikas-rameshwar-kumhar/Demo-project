export function PortfolioHero() {
  return (
    <section
      id="home"
      className="relative flex justify-center overflow-hidden px-5 pt-16 pb-12 sm:px-8 md:pt-24 lg:px-14"
    >
      <div className="relative flex w-full max-w-7xl flex-col">
        <div className="flex items-center gap-3 font-mono text-xs tracking-wider text-[#697367]">
          <span className="inline-block size-2 rounded-full bg-[#84a776] shadow-[0_0_0_4px_#84a77620]" />
          AVAILABLE FOR SELECT PROJECTS
          <span className="ml-auto hidden text-xs sm:inline">
            BASED IN BROOKLYN, NY
          </span>
        </div>

        <h1 className="relative z-10 mt-10 mb-8 max-w-4xl text-5xl font-medium leading-none tracking-tight sm:text-7xl lg:text-8xl">
          Making digital<br />feel a little more{" "}
          <span className="font-serif font-medium tracking-tight text-[#ea6d48]">human.</span>
        </h1>

        <div className="relative z-10 flex flex-wrap items-start justify-between gap-6 md:flex-nowrap md:items-end">
          <p className="m-0 max-w-sm text-sm leading-relaxed text-[#6c7469] sm:text-base">
            I’m Alex — an independent designer &amp; developer partnering with good people to build thoughtful brands and digital things.
          </p>
          <a
            href="#work"
            className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#657165]"
          >
            <span className="inline-block h-px w-12 bg-[#aeb7a8]" /> SCROLL TO EXPLORE
          </a>
          <div
            className="ml-auto flex size-20 rotate-12 flex-col items-center justify-center gap-0.5 rounded-full border border-[#c8cabc] text-center font-mono text-[9px] leading-tight tracking-wider md:ml-0 md:size-24"
            aria-label="Design with intention"
          >
            <span>DESIGN WITH<br />INTENTION</span>
            <span className="text-lg leading-none text-[#ea6d48]">✳</span>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-36 top-8 size-72 rounded-full border border-[#e2ded2] md:-right-16 md:top-10 md:size-80" />
        <div className="pointer-events-none absolute -right-28 top-20 size-52 rounded-full border border-[#e2ded2] md:-right-8 md:top-24 md:size-56" />
      </div>
    </section>
  );
}
