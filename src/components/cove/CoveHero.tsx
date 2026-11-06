import { Typography } from "@/components/ui/Typography";

export function CoveHero() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 p-5 py-16 sm:p-8 md:flex-row md:py-24 lg:p-10">
      <div className="flex flex-1 flex-col items-start">
        <Typography as="p" variant="overline" className="mb-6 flex items-center gap-3 text-stone-600">
          <span aria-hidden="true" className="size-2 rounded-full bg-lime-700" />
          A neighborhood coffee spot
        </Typography>
        <Typography as="h1" variant="display-2xl" className="max-w-xl text-stone-800">
          A little pause in your <span className="italic text-orange-700">day.</span>
        </Typography>
        <Typography as="p" variant="body-lg" className="mt-6 max-w-lg text-stone-600">
          Good coffee, something warm from the oven, and a sunny seat saved just for you. Find your way to Cove.
        </Typography>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a href="#menu" className="rounded-full bg-green-950 p-4 text-sm font-medium text-white transition-colors hover:bg-orange-700">
            See what’s brewing <span aria-hidden="true">↗</span>
          </a>
          <Typography as="p" variant="caption" className="leading-relaxed text-stone-600">
            MON–FRI · 7AM–5PM<br />SAT–SUN · 8AM–4PM
          </Typography>
        </div>
      </div>

      <div role="img" aria-label="Illustration of a warm cup of coffee" className="relative isolate flex min-h-96 flex-1 items-center justify-center overflow-hidden rounded-t-full rounded-b-2xl bg-gradient-to-br from-lime-200 via-lime-100 to-amber-100">
        <div aria-hidden="true" className="absolute size-72 rounded-full border border-white/50 shadow-2xl" />
        <div aria-hidden="true" className="relative flex h-40 w-48 -rotate-6 items-start justify-center rounded-t-xl rounded-b-full bg-gradient-to-r from-stone-300 via-stone-50 to-stone-200 shadow-2xl">
          <div className="mt-2 h-8 w-11/12 rounded-full bg-gradient-to-br from-amber-400 via-amber-800 to-stone-950" />
          <div className="absolute -right-9 top-7 -z-10 h-14 w-12 rounded-r-full border-8 border-l-0 border-stone-200" />
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
