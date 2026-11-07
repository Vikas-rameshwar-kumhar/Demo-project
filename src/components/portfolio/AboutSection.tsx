import { ArrowIcon } from "@/components/portfolio/ArrowIcon";
import { Typography } from "@/components/ui/Typography";

export function AboutSection() {
  return (
    <section id="about" className="bg-stone-100 py-16 md:py-24">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 p-5 sm:p-8 md:flex-row md:gap-16 lg:p-10">
        <div className="flex flex-col md:justify-between">
          <Typography as="p" variant="overline" className="text-stone-500">A little about me</Typography>
          <div className="mt-5 flex size-32 flex-col items-center justify-center gap-2 self-end rounded-full bg-green-100 text-center font-mono text-xs text-green-900 md:mt-12 md:size-40 md:self-start">
            <span className="text-3xl text-orange-700">✳</span><span>Curious<br />by default</span>
          </div>
        </div>
        <div className="flex-1">
          <Typography as="h2" variant="display-xl" className="mb-6 text-stone-800">
            Good work comes from <span className="font-serif italic text-green-700">good questions.</span>
          </Typography>
          <Typography as="p" variant="body-sm" className="mb-4 max-w-2xl text-stone-600">
            I’m an independent designer and developer who loves turning the complicated into the clear. I bring strategy, design, and a little bit of code together to make digital experiences that feel just right.
          </Typography>
          <Typography as="p" variant="body-sm" className="mb-4 max-w-2xl text-stone-600">
            Over the last 8 years, I’ve helped early-stage ideas find their voice and established teams find what’s next. Always thoughtful, always collaborative.
          </Typography>
          <a href="#contact" className="group mt-4 inline-flex items-center gap-3 border-b border-stone-400 pb-2 text-sm text-stone-800">
            More about me<ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <Typography as="p" variant="caption" className="self-end text-right text-stone-500 md:absolute md:bottom-10 md:right-10">
          Good things take<br />good thinking. ✳
        </Typography>
      </div>
    </section>
  );
}
