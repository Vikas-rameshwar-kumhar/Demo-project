const experience = [
  {
    period: "NOW",
    role: "Independent Designer & Developer",
    detail: "Strategy, design, and creative development",
  },
  {
    period: "8+ YEARS",
    role: "Digital Design & Brand Work",
    detail: "Helping early-stage ideas and established teams",
  },
];

const collaborators = ["Goodside", "Onda", "Fieldnotes"];
const skills = [
  "Brand strategy",
  "Visual identity",
  "Art direction",
  "Product design",
  "Web design",
  "Front-end development",
  "Design systems",
  "Interaction design",
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
            THE BACKGROUND
          </span>
          <h2 className="my-3 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            A little of what<br />
            <span className="font-serif italic text-[#7c8a70]">
              I bring to the table.
            </span>
          </h2>
        </div>

        <div className="min-w-0 flex flex-col gap-8">
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-[#7d8476]">
              Experience
            </h3>
            <div className="border-t border-[#dcded2]">
              {experience.map((item) => (
                <div
                  key={item.period}
                  className="grid min-h-16 grid-cols-[5rem_1fr_1.5rem] items-center gap-3 border-b border-[#dcded2] py-4"
                >
                  <span className="font-mono text-xs tracking-wider text-[#858c7c]">
                    {item.period}
                  </span>
                  <div>
                    <h4 className="mb-1 text-sm font-medium tracking-tight sm:text-base">
                      {item.role}
                    </h4>
                    <p className="m-0 text-xs leading-relaxed text-[#7a8075] sm:text-sm">
                      {item.detail}
                    </p>
                  </div>
                  <span className="text-right text-base text-[#ea6d48]">✳</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-[1fr_1.3fr] md:gap-8">
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-[#7d8476]">
                Worked with
              </h3>
              <div className="flex flex-col gap-2">
                {collaborators.map((name) => (
                  <span key={name} className="text-base tracking-tight sm:text-lg">
                    {name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-[#7d8476]">
                Skills
              </h3>
              <ul className="m-0 flex flex-wrap gap-2 p-0 list-none">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[#dcded2] px-3 py-1.5 text-xs text-[#6d766a]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
