import { typographySamples } from "@/const/typographySamples";
import { Typography } from "@/components/ui/Typography";

export function CoveTypographyShowcase() {
  return (
    <section id="typography" className="bg-[#e8e8dc]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <Typography as="p" variant="overline" className="text-[#687265]">Reusable text styles</Typography>
          <Typography as="h2" variant="display-xl" className="mt-3">Cove typography.</Typography>
          <Typography as="p" variant="body-sm" className="mt-4 text-[#758071]">
            Import the shared Typography component and choose a variant. Override the tag or add Tailwind classes when needed.
          </Typography>
        </div>
        <div className="divide-y divide-[#d2d2c6] border-y border-[#d2d2c6]">
          {typographySamples.map(({ variant, label, sample }) => (
            <div key={variant} className="grid gap-3 py-5 md:grid-cols-[12rem_minmax(0,1fr)] md:items-center md:gap-8">
              <div>
                <Typography as="p" variant="caption" className="text-[#687265]">{label}</Typography>
                <code className="mt-1 block text-xs text-[#8b9084]">variant=&quot;{variant}&quot;</code>
              </div>
              <Typography as="div" variant={variant}>{sample}</Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
