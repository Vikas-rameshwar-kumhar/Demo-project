import { Typography } from "@/components/ui/Typography";

const stack = ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "React", "Next.js", "NestJS"];

const focusAreas = [
  "Frontend development",
  "Responsive UI design",
  "Web app development",
  "Backend and API concepts",
  "Python automation",
  "AI assistant projects",
  "Interactive prototyping",
  "Game and gesture-based interaction",
  "Landing pages and portfolios",
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex justify-center border-t border-[#dcded2] px-5 py-16 sm:px-8 md:py-24 lg:px-14"
    >
      <div className="flex w-full max-w-7xl flex-col gap-8 md:grid md:grid-cols-[0.8fr_1.4fr] md:gap-x-16">
        <div>
          <Typography as="span" variant="overline" className="text-[#7d8476]">
            THE TOOLKIT
          </Typography>
          <Typography
            as="h2"
            variant="display-xl"
            className="my-3 text-inherit"
          >
            Curious by nature.<br />
            <span className="font-serif italic text-[#7c8a70]">
              Building for people.
            </span>
          </Typography>
          <Typography
            as="p"
            variant="body-lg"
            className="max-w-sm text-[#6d766a]"
          >
            I enjoy experimenting with modern web tools and blending creative thinking with practical engineering.
          </Typography>
        </div>

        <div className="min-w-0 flex flex-col gap-8">
          <div>
            <Typography
              as="h3"
              variant="overline"
              className="mb-4 text-[#7d8476]"
            >
              Programming languages &amp; frameworks
            </Typography>
            <ul className="m-0 flex flex-wrap gap-2 p-0 list-none">
              {stack.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-[#dcded2] px-3 py-1.5 text-xs text-[#6d766a]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Typography
              as="h3"
              variant="overline"
              className="mb-4 text-[#7d8476]"
            >
              Core areas
            </Typography>
            <ul className="m-0 flex flex-wrap gap-2 p-0 list-none">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-[#dcded2] px-3 py-1.5 text-xs text-[#6d766a]"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
