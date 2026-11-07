import { projects } from "@/const/projects";
import { ArrowIcon } from "@/components/portfolio/ArrowIcon";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Typography } from "@/components/ui/Typography";

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto w-full max-w-7xl p-5 sm:p-8 md:py-20 lg:p-10">
      <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Typography as="p" variant="overline" className="text-stone-500">A few good things</Typography>
          <Typography as="h2" variant="display-xl" className="mt-3 text-stone-800">Selected work<span className="text-orange-700">.</span></Typography>
        </div>
        <Typography as="p" variant="body-sm" className="max-w-sm text-stone-500">
          A small selection of projects made with care, curiosity, and lovely people.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
      <a href="#contact" className="group mt-10 inline-flex items-center gap-3 border-b border-stone-400 pb-2 text-sm text-stone-800">
        Have a project in mind?<ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
      </a>
    </section>
  );
}
