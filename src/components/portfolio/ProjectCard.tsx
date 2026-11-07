import { projects } from "@/const/projects";
import { ArrowIcon } from "@/components/portfolio/ArrowIcon";
import { Typography } from "@/components/ui/Typography";

type Project = (typeof projects)[number];

const artThemeStyles: Record<
  string,
  {
    container: string;
    mark: string;
    note: string;
  }
> = {
  "project-art-goodside": {
    container: "bg-[#d5e0ce] text-[#264537]",
    mark: "font-sans font-semibold text-5xl sm:text-6xl md:text-7xl tracking-tighter",
    note: "font-serif italic text-sm",
  },
  "project-art-onda": {
    container: "bg-[#edb296] text-[#542f26]",
    mark: "font-serif font-medium italic text-5xl sm:text-6xl md:text-7xl tracking-tighter",
    note: "font-serif italic text-sm",
  },
  "project-art-fieldnotes": {
    container: "bg-[#e8ce74] text-[#404624]",
    mark: "font-mono font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight",
    note: "font-sans text-xs tracking-wide",
  },
};

function ProjectArtBackground({ id }: { id: string }) {
  if (id === "project-art-goodside") {
    return (
      <>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-12 inset-y-8 -rotate-12 rounded-full border border-[#466c5440]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#466c5440]"
        />
      </>
    );
  }
  if (id === "project-art-onda") {
    return (
      <>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#814b3548]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#814b3548]"
        />
      </>
    );
  }
  if (id === "project-art-fieldnotes") {
    return (
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-9xl leading-none text-[#e2bc45]"
      >
        ✳
      </span>
    );
  }
  return null;
}

export function ProjectCard({ project }: { project: Project }) {
  const theme = artThemeStyles[project.className] ?? {
    container: "bg-[#d5e0ce] text-[#264537]",
    mark: "font-sans font-semibold text-5xl sm:text-6xl md:text-7xl tracking-tighter",
    note: "font-serif italic text-sm",
  };

  return (
    <a
      href="#contact"
      aria-label={`${project.name} project, get in touch to learn more`}
      className="group block [&:nth-child(3)]:md:col-span-1"
    >
      <div
        className={`relative flex h-72 sm:h-80 md:h-84 flex-col justify-between overflow-hidden p-4 sm:p-5 transition-transform duration-300 ease-out group-hover:scale-[0.985] ${theme.container}`}
      >
        <ProjectArtBackground id={project.className} />

        <div className="relative z-10 flex justify-between font-mono text-[9px] tracking-wider">
          <span>AM® — SELECTED WORK</span>
          <span>{project.number} / 03</span>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className={theme.mark}>{project.mark}</span>
          <span className={theme.note}>{project.note}</span>
        </div>

        <div className="relative z-10 flex justify-between font-mono text-[9px] tracking-wider">
          <span>INDEPENDENT BY NATURE</span>
          <span>✳</span>
        </div>
      </div>

      <div className="flex items-end justify-between pt-4">
        <div>
          <Typography as="span" variant="overline" className="text-[#7d8476]">
            {project.type}
          </Typography>
          <Typography
            as="h3"
            variant="h4"
            className="mt-1 text-inherit"
          >
            {project.name}
          </Typography>
        </div>
        <span className="flex items-center gap-3 font-mono text-xs tracking-wider text-[#818779]">
          {project.year}
          <i className="grid size-7 place-items-center rounded-full border border-[#dcded2] not-italic text-[#243d32] transition-colors duration-200 group-hover:bg-[#243d32] group-hover:text-[#f5f3ec]">
            <ArrowIcon diagonal className="size-3" />
          </i>
        </span>
      </div>
    </a>
  );
}
