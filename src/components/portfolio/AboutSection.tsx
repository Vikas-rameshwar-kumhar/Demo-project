import { ArrowIcon } from "@/components/portfolio/ArrowIcon";

export function AboutSection() {
  return (
    <section id="about" className="flex justify-center bg-[#e9ebe2] px-5 py-16 sm:px-8 md:py-24 lg:px-14">
      <div className="relative flex w-full max-w-7xl flex-col md:grid md:grid-cols-[0.8fr_1.4fr] md:gap-x-16">
        <div className="flex flex-col justify-between">
          <span className="font-mono text-xs tracking-wider text-[#7d8476]">
            A LITTLE ABOUT ME
          </span>
          <div className="mt-6 ml-auto flex size-28 flex-col items-center justify-center gap-1 rounded-full bg-[#d6decf] text-center font-mono text-[9px] leading-tight tracking-wider text-[#546750] sm:size-36 md:mt-12 md:mb-4 md:ml-4 md:mr-0 md:size-40">
            <span className="text-2xl text-[#ea6d48] sm:text-3xl">✳</span>
            <span>CURIOUS<br />BY DEFAULT</span>
          </div>
        </div>

        <div className="max-w-xl">
          <h2 className="mt-1 mb-6 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Good work comes from{" "}
            <span className="font-serif italic text-[#76856d]">good questions.</span>
          </h2>
          <p className="mb-4 max-w-lg text-sm leading-relaxed text-[#6d766a] sm:text-base">
            I’m an independent designer and developer who loves turning the complicated into the clear. I bring strategy, design, and a little bit of code together to make digital experiences that feel just right.
          </p>
          <p className="mb-4 max-w-lg text-sm leading-relaxed text-[#6d766a] sm:text-base">
            Over the last 8 years, I’ve helped early-stage ideas find their voice and established teams find what’s next. Always thoughtful, always collaborative.
          </p>
          <a
            href="#contact"
            className="group mt-4 inline-flex items-center gap-3 border-b border-[#aeb5a8] pb-2 text-xs text-inherit"
          >
            More about me{" "}
            <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-8 text-right font-mono text-[10px] leading-relaxed tracking-wider text-[#858c7c] md:absolute md:right-0 md:bottom-0 md:mt-0">
          GOOD THINGS TAKE<br />GOOD THINKING. &nbsp;✳
        </div>
      </div>
    </section>
  );
}
