import { Typography } from "@/components/ui/Typography";

export function CoveStory() {
  return (
    <section id="story" className="bg-[#263a30] text-[#f6f2e9]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between md:py-20 lg:px-10">
        <Typography as="h2" variant="display-xl" className="text-[#f6f2e9]">
          Come as you are.<br /><span className="italic text-[#e39a73]">Stay a little.</span>
        </Typography>
        <Typography as="p" variant="body-sm" className="max-w-sm text-[#c0c7bb]">
          Cove is your corner of the neighborhood: a place to catch up, slow down, or get absolutely nothing done. We’ll put the kettle on.
        </Typography>
      </div>
    </section>
  );
}
