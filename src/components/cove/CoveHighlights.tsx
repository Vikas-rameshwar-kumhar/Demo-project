import { Typography } from "@/components/ui/Typography";

const highlights = ["Thoughtfully sourced", "Made fresh every day", "Room for one more"];

export function CoveHighlights() {
  return (
    <section aria-label="What makes Cove special" className="bg-[#e8e8dc]">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-x-12 gap-y-4 px-5 py-6 sm:px-8 md:justify-between lg:px-10">
        {highlights.map((item) => (
          <Typography as="p" variant="body-sm" key={item} className="font-serif text-[#526055]">
            <span className="mr-3 text-lg text-[#d7653d]">✳</span>{item}
          </Typography>
        ))}
      </div>
    </section>
  );
}
