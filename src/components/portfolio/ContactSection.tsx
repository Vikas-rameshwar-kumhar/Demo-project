import { ArrowIcon } from "@/components/portfolio/ArrowIcon";
import { Typography } from "@/components/ui/Typography";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex justify-center overflow-hidden bg-[#17372d] text-[#f5f3ec] px-5 py-16 sm:px-8 md:py-24 lg:px-14"
    >
      <div className="relative flex w-full max-w-7xl flex-col items-start">
        <Typography as="span" variant="overline" className="text-[#a6b09e]">
          HAVE A GOOD ONE IN MIND?
        </Typography>
        <Typography
          as="h2"
          variant="display-2xl"
          className="my-6 mb-8 text-inherit"
        >
          Let’s make<br />something{" "}
          <span className="font-serif italic text-[#e9a17f]">matter.</span>
        </Typography>
        <a
          href="mailto:connect@vikaskumhar.in"
          className="inline-flex items-center gap-4 border-b border-[#6e8272] pb-2 text-sm text-inherit transition-colors hover:text-[#e9a17f] sm:text-base"
        >
          connect@vikaskumhar.in{" "}
          <span className="grid size-8 place-items-center rounded-full border border-[#778b79]">
            <ArrowIcon diagonal className="size-4" />
          </span>
        </a>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-1/4 select-none text-8xl leading-none text-[#345345] sm:right-6 md:text-9xl"
        >
          ✳
        </div>
      </div>
    </section>
  );
}
