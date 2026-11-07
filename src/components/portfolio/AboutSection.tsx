import { ArrowIcon } from "@/components/portfolio/ArrowIcon";
import { Typography } from "@/components/ui/Typography";

export function AboutSection() {
  return (
    <section id="about" className="flex justify-center bg-[#e9ebe2] px-5 py-16 sm:px-8 md:py-24 lg:px-14">
      <div className="relative flex w-full max-w-7xl flex-col md:grid md:grid-cols-[0.8fr_1.4fr] md:gap-x-16">
        <div className="flex flex-col justify-between">
          <Typography as="span" variant="overline" className="text-[#7d8476]">
            A LITTLE ABOUT ME
          </Typography>
          <div className="mt-6 ml-auto flex size-28 flex-col items-center justify-center gap-1 rounded-full bg-[#d6decf] text-center font-mono text-[9px] leading-tight tracking-wider text-[#546750] sm:size-36 md:mt-12 md:mb-4 md:ml-4 md:mr-0 md:size-40">
            <span className="text-2xl text-[#ea6d48] sm:text-3xl">✳</span>
            <span>CURIOUS<br />BY DEFAULT</span>
          </div>
        </div>

        <div className="max-w-xl">
          <Typography
            as="h2"
            variant="display-xl"
            className="mt-1 mb-6 text-inherit"
          >
            I bring creativity and logic together to build{" "}
            <span className="font-serif italic text-[#76856d]">useful software.</span>
          </Typography>
          <Typography
            as="p"
            variant="body-lg"
            className="mb-4 max-w-lg text-[#6d766a]"
          >
            I build projects with JavaScript, TypeScript, Python, HTML, and CSS. I enjoy creating apps that are useful, engaging, and visually polished.
          </Typography>
          <Typography
            as="p"
            variant="body-lg"
            className="mb-4 max-w-lg text-[#6d766a]"
          >
            I like learning modern web and software technologies, and blending product design with development to turn ideas into clear, approachable experiences.
          </Typography>
          <a
            href="#contact"
            className="group mt-4 inline-flex items-center gap-3 border-b border-[#aeb5a8] pb-2 text-xs text-inherit"
          >
            Let’s build something{" "}
            <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-8 text-right font-mono text-[10px] leading-relaxed tracking-wider text-[#858c7c] md:absolute md:right-0 md:bottom-0 md:mt-0">
          CURIOUS BY DEFAULT<br />BUILT WITH CARE. &nbsp;✳
        </div>
      </div>
    </section>
  );
}
