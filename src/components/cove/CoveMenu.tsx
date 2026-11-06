import { menuItems } from "@/const/menu";
import { Typography } from "@/components/ui/Typography";

export function CoveMenu() {
  return (
    <section id="menu" className="mx-auto w-full max-w-7xl p-5 py-16 sm:p-8 md:py-24 lg:p-10">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Typography as="p" variant="overline" className="text-stone-600">A few house favorites</Typography>
          <Typography as="h2" variant="display-xl" className="mt-3">Made for the moment.</Typography>
        </div>
        <Typography as="p" variant="body-sm" className="max-w-sm text-stone-500">
          Little comforts, made with good ingredients and a bit of extra love.
        </Typography>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {menuItems.map((item) => (
          <article key={item.name} className="bg-stone-100 p-4">
            <div className={`grid h-52 place-items-center ${item.tone}`}>
              <div className={`size-32 shadow-lg ${item.art}`} />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-3">
              <Typography as="h3" variant="h4">{item.name}</Typography>
              <Typography as="span" variant="body-sm" className="font-serif">{item.price}</Typography>
            </div>
            <Typography as="p" variant="body-sm" className="mt-2 text-stone-500">{item.detail}</Typography>
          </article>
        ))}
      </div>
    </section>
  );
}
