import { ArrowIcon } from "@/components/portfolio/ArrowIcon";
import { Typography } from "@/components/ui/Typography";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-green-950 text-stone-100">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-6 p-5 py-16 sm:p-8 md:py-20 lg:p-10">
        <Typography as="p" variant="overline" className="text-green-200">Have a good one in mind?</Typography>
        <Typography as="h2" variant="display-2xl" className="text-stone-100">
          Let’s make<br />something <span className="font-serif italic text-orange-300">matter.</span>
        </Typography>
        <a href="mailto:hello@alexmorgan.design" className="inline-flex items-center gap-4 border-b border-green-700 pb-3 text-sm text-stone-100 transition-colors hover:text-orange-300">
          hello@alexmorgan.design
          <span className="flex size-8 items-center justify-center rounded-full border border-green-700"><ArrowIcon diagonal className="size-4" /></span>
        </a>
        <span aria-hidden="true" className="pointer-events-none absolute right-8 top-8 select-none text-8xl leading-none text-green-900 md:right-12 md:top-12 md:text-9xl">✳</span>
      </div>
    </section>
  );
}
