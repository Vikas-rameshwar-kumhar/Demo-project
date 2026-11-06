import { Typography } from "@/components/ui/Typography";

export function CoveHero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24 lg:px-10">
      <div className="flex flex-col items-start">
        <Typography as="p" variant="overline" className="mb-6 flex items-center gap-3 text-[#687265]">
          <span aria-hidden="true" className="size-2 rounded-full bg-lime-700" />
          A neighborhood coffee spot
        </Typography>
        <Typography as="h1" variant="display-2xl" className="max-w-xl text-[#24372e]">
          A little pause in your <span className="italic text-[#d7653d]">day.</span>
        </Typography>
        <Typography as="p" variant="body-lg" className="mt-6 max-w-lg text-[#697167]">
          Good coffee, something warm from the oven, and a sunny seat saved just for you. Find your way to Cove.
        </Typography>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a href="#menu" className="rounded-full bg-[#24372e] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#d7653d]">
            See what’s brewing <span aria-hidden="true">↗</span>
          </a>
          <Typography as="p" variant="caption" className="leading-relaxed text-[#70796d]">
            MON–FRI · 7AM–5PM<br />SAT–SUN · 8AM–4PM
          </Typography>
        </div>
      </div>

      <div role="img" aria-label="Illustration of a warm cup of coffee" className="relative isolate flex min-h-96 items-center justify-center overflow-hidden rounded-t-[50%] rounded-b-2xl bg-gradient-to-br from-lime-200 via-lime-100 to-amber-100">
        <div aria-hidden="true" className="absolute size-72 rounded-full border border-white/50 shadow-2xl" />
        <div aria-hidden="true" className="relative flex h-40 w-48 rotate-[-6deg] items-start justify-center rounded-t-xl rounded-b-[3rem] bg-gradient-to-r from-[#ded4bf] via-[#fff8e9] to-[#e8deca] shadow-2xl">
          <div className="mt-2 h-8 w-11/12 rounded-full bg-gradient-to-br from-amber-400 via-amber-800 to-stone-950" />
          <div className="absolute -right-9 top-7 -z-10 h-14 w-12 rounded-r-full border-8 border-l-0 border-[#e8deca]" />
        </div>
        <Typography as="span" variant="body-sm" className="absolute bottom-6 left-6 font-serif italic text-white">
          Take your time. You’re here.
        </Typography>
        <div className="absolute right-6 top-6 flex size-24 rotate-6 items-center justify-center rounded-full border border-white/70 text-center">
          <Typography as="span" variant="overline" className="text-white">A good day<br />starts here ✳</Typography>
        </div>
      </div>
    </section>
  );
}
