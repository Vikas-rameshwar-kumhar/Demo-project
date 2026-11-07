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
          <span className="font-mono text-xs tracking-wider text-[#7d8476]">
            THE TOOLKIT
          </span>
          <h2 className="my-3 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Curious by nature.<br />
            <span className="font-serif italic text-[#7c8a70]">
              Building for people.
            </span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-[#6d766a] sm:text-base">
            I enjoy experimenting with modern web tools and blending creative thinking with practical engineering.
          </p>
        </div>

        <div className="min-w-0 flex flex-col gap-8">
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-[#7d8476]">
              Programming languages &amp; frameworks
            </h3>
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
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-[#7d8476]">
              Core areas
            </h3>
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
