import { Typography } from "@/components/ui/Typography";

const highlights = ["Thoughtfully sourced", "Made fresh every day", "Room for one more"];

export function CoveHighlights() {
  return (
    <section aria-label="What makes Cove special" className="bg-stone-200">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-x-12 gap-y-4 p-6 sm:p-8 md:justify-between lg:p-10">
        {highlights.map((item) => (
          <Typography as="p" variant="body-sm" key={item} className="font-serif text-stone-700">
            <span className="mr-3 text-lg text-orange-700">✳</span>{item}
          </Typography>
        ))}
      </div>
    </section>
  );
}
