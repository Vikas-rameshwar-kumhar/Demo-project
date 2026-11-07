import { typographySamples } from "@/const/typographySamples";
import { Typography } from "@/components/ui/Typography";

export function CoveTypographyShowcase() {
  return (
    <section id="typography" className="bg-stone-200">
      <div className="mx-auto w-full max-w-7xl p-5 py-16 sm:p-8 md:py-24 lg:p-10">
        <div className="mb-10 max-w-2xl">
          <Typography as="p" variant="overline" className="text-stone-600">Reusable text styles</Typography>
          <Typography as="h2" variant="display-xl" className="mt-3">Cove typography.</Typography>
          <Typography as="p" variant="body-sm" className="mt-4 text-stone-500">
            Import the shared Typography component and choose a variant. Override the tag or add Tailwind classes when needed.
          </Typography>
        </div>
        <div className="divide-y divide-stone-300 border-y border-stone-300">
          {typographySamples.map(({ variant, label, sample }) => (
            <div key={variant} className="flex flex-col gap-3 py-5 md:flex-row md:items-center md:gap-8">
              <div className="shrink-0 md:w-48">
                <Typography as="p" variant="caption" className="text-stone-600">{label}</Typography>
                <code className="mt-1 block text-xs text-stone-500">variant=&quot;{variant}&quot;</code>
              </div>
              <Typography as="div" variant={variant}>{sample}</Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
