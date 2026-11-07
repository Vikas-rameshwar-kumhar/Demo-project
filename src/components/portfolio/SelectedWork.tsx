import { projects } from "@/const/projects";
import { ArrowIcon } from "@/components/portfolio/ArrowIcon";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="flex justify-center px-5 py-16 sm:px-8 md:py-24 lg:px-14"
    >
      <div className="flex w-full max-w-7xl flex-col">
        <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
          <div>
            <span className="font-mono text-xs tracking-wider text-[#7d8476]">
              A FEW GOOD THINGS
            </span>
            <h2 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
              Selected work<span className="text-[#ea6d48]">.</span>
            </h2>
          </div>
          <p className="m-0 max-w-xs text-sm leading-relaxed text-[#7a8075] md:ml-6 md:mb-1">
            A small selection of projects made with care, curiosity, and lovely people.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        <a
          href="#contact"
          className="group mt-10 inline-flex items-center gap-3 self-start border-b border-[#aeb5a8] pb-2 text-xs text-inherit"
        >
          Have a project in mind?{" "}
          <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
