import { projects } from "@/const/projects";
import { ArrowIcon } from "@/components/portfolio/ArrowIcon";
import { Typography } from "@/components/ui/Typography";

type Project = (typeof projects)[number];

const artThemes = {
  goodside: { card: "bg-green-100 text-green-950", mark: "font-sans text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl", note: "font-serif text-sm italic" },
  onda: { card: "bg-orange-200 text-orange-950", mark: "font-serif text-5xl font-medium italic tracking-tight sm:text-6xl lg:text-7xl", note: "font-serif text-sm italic" },
  fieldnotes: { card: "bg-amber-200 text-amber-950", mark: "font-mono text-3xl font-semibold tracking-tight sm:text-4xl", note: "font-sans text-xs tracking-wide" },
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const theme = artThemes[project.art];

  return (
    <a href="#contact" aria-label={`${project.name} project, get in touch to learn more`} className="group block">
      <div className={`relative flex h-72 flex-col justify-between overflow-hidden rounded-sm p-4 transition-transform duration-300 group-hover:scale-95 sm:h-80 sm:p-5 ${theme.card}`}>
        {project.art === "goodside" && <div aria-hidden="true" className="pointer-events-none absolute inset-8 -rotate-12 rounded-full border border-current/25" />}
        {project.art === "onda" && <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current/25 sm:size-80" />}
        {project.art === "fieldnotes" && <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center text-9xl text-amber-400">✳</span>}

        <div className="relative flex justify-between font-mono text-xs uppercase tracking-wide">
          <span>AM® — Selected work</span><span>{project.number} / 03</span>
        </div>
        <div className="relative flex flex-col items-center gap-2">
          <span className={theme.mark}>{project.mark}</span>
          <span className={theme.note}>{project.note}</span>
        </div>
        <div className="relative flex justify-between font-mono text-xs uppercase tracking-wide">
          <span>Independent by nature</span><span>✳</span>
        </div>
      </div>

      <div className="flex items-end justify-between gap-4 py-4">
        <div>
          <Typography as="span" variant="overline" className="text-stone-500">{project.type}</Typography>
          <Typography as="h3" variant="h4" className="mt-1 text-stone-800">{project.name}</Typography>
        </div>
        <span className="flex shrink-0 items-center gap-3 font-mono text-xs text-stone-500">
          {project.year}
          <span className="flex size-8 items-center justify-center rounded-full border border-stone-300 text-stone-800 transition-colors group-hover:bg-stone-800 group-hover:text-stone-100">
            <ArrowIcon diagonal className="size-4" />
          </span>
        </span>
      </div>
    </a>
  );
}
