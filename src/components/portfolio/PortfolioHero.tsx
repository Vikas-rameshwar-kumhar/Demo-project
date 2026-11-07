import { Typography } from "@/components/ui/Typography";

export function PortfolioHero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center gap-8 overflow-hidden p-5 sm:p-8 lg:p-10">
      <div className="flex items-center gap-3 font-mono">
        <span aria-hidden="true" className="size-2 rounded-full bg-green-600 ring-4 ring-green-600/10" />
        <Typography as="span" variant="overline" className="text-stone-600">Available for select projects</Typography>
        <Typography as="span" variant="overline" className="ml-auto hidden text-stone-600 sm:inline">Based in Brooklyn, NY</Typography>
      </div>
      <Typography as="h1" variant="display-2xl" className="relative z-10 max-w-5xl text-stone-800">
        Making digital<br />feel a little more <span className="font-serif italic text-orange-700">human.</span>
      </Typography>
      <div className="relative z-10 flex flex-wrap items-end gap-6 sm:gap-8 md:flex-nowrap md:justify-between">
        <Typography as="p" variant="body-lg" className="max-w-md text-stone-600">
          I’m Alex — an independent designer &amp; developer partnering with good people to build thoughtful brands and digital things.
        </Typography>
        <a href="#work" className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-stone-600">
          <span aria-hidden="true" className="h-px w-12 bg-stone-400" />Scroll to explore
        </a>
        <div aria-label="Design with intention" className="ml-auto flex size-20 rotate-6 flex-col items-center justify-center rounded-full border border-stone-300 text-center font-mono text-xs sm:ml-0 sm:size-24">
          <span>Design with<br />intention</span><span className="text-xl text-orange-700">✳</span>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-8 size-80 rounded-full border border-stone-200 sm:-right-16 sm:top-10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-20 size-60 rounded-full border border-stone-200 sm:-right-8 sm:top-24" />
    </section>
  );
}
