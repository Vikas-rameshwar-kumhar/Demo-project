import { projects } from "@/const/projects";
import { ArrowIcon } from "@/components/portfolio/ArrowIcon";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Typography } from "@/components/ui/Typography";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="flex justify-center px-5 py-16 sm:px-8 md:py-24 lg:px-14"
    >
      <div className="flex w-full max-w-7xl flex-col">
        <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
          <div>
            <Typography as="span" variant="overline" className="text-[#7d8476]">
              EXPERIMENTS &amp; PROJECTS
            </Typography>
            <Typography
              as="h2"
              variant="display-xl"
              className="mt-3 text-inherit"
            >
              Selected work<span className="text-[#ea6d48]">.</span>
            </Typography>
          </div>
          <Typography
            as="p"
            variant="body-lg"
            className="m-0 max-w-xs text-[#7a8075] md:ml-6 md:mb-1"
          >
            A mix of web app ideas, AI experiments, and interactive prototypes built to learn and solve useful problems.
          </Typography>
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
