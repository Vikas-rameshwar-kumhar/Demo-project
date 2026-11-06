import { projects } from "@/const/projects";
import { ArrowIcon } from "@/components/portfolio/ArrowIcon";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export function SelectedWork() {
  return (
    <section className="work-section section-wrap" id="work">
      <div className="section-heading">
        <div><span className="eyebrow">A FEW GOOD THINGS</span><h2>Selected work<span className="heading-period">.</span></h2></div>
        <p>A small selection of projects made with care, curiosity, and lovely people.</p>
      </div>
      <div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
      <a className="text-link" href="#contact">Have a project in mind? <ArrowIcon /></a>
    </section>
  );
}
