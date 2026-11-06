import { projects } from "@/const/projects";
import { ArrowIcon } from "@/components/portfolio/ArrowIcon";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project-card" href="#contact" aria-label={`${project.name} project, get in touch to learn more`}>
      <div className={`project-art ${project.className}`}>
        <div className="project-art-top"><span>AM® — SELECTED WORK</span><span>{project.number} / 03</span></div>
        <div className="project-art-center">
          <span className="project-art-mark">{project.mark}</span>
          <span className="project-art-note">{project.note}</span>
        </div>
        <div className="project-art-bottom"><span>INDEPENDENT BY NATURE</span><span>✳</span></div>
      </div>
      <div className="project-caption">
        <div><span className="eyebrow project-type">{project.type}</span><h3>{project.name}</h3></div>
        <span className="project-year">{project.year}<i><ArrowIcon diagonal /></i></span>
      </div>
    </a>
  );
}
