import { Typography } from "@/components/ui/Typography";

export function CoveStory() {
  return (
    <section id="story" className="bg-green-950 text-stone-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 p-5 py-16 sm:p-8 md:flex-row md:items-center md:justify-between md:py-20 lg:p-10">
        <Typography as="h2" variant="display-xl" className="text-stone-100">
          Come as you are.<br /><span className="italic text-orange-300">Stay a little.</span>
        </Typography>
        <Typography as="p" variant="body-sm" className="max-w-sm text-stone-300">
          Cove is your corner of the neighborhood: a place to catch up, slow down, or get absolutely nothing done. We’ll put the kettle on.
        </Typography>
      </div>
    </section>
  );
}
