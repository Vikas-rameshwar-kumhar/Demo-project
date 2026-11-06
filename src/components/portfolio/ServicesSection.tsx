import { Typography } from "@/components/ui/Typography";

const services = [
  { number: "01", title: "Brand & Strategy", description: "Positioning, identity, art direction", symbol: "✳" },
  { number: "02", title: "Digital Experiences", description: "Websites, e-commerce, product design", symbol: "↗" },
  { number: "03", title: "Creative Development", description: "Front-end, interactions, design systems", symbol: "✳" },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl p-5 sm:p-8 md:py-20 lg:p-10">
      <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Typography as="p" variant="overline" className="text-stone-500">How I can help</Typography>
          <Typography as="h2" variant="display-xl" className="mt-3 text-stone-800">
            Small team energy.<br /><span className="font-serif italic text-green-700">Thoughtful by design.</span>
          </Typography>
        </div>
        <Typography as="p" variant="body-sm" className="max-w-sm text-stone-500">
          From the first “what if?” to the final little detail, I help bring good ideas to life.
        </Typography>
      </div>
      <div className="border-t border-stone-300">
        {services.map((service) => (
          <div key={service.number} className="flex flex-wrap items-center gap-3 border-b border-stone-300 py-5 transition-colors hover:bg-stone-50 md:flex-nowrap md:gap-6">
            <Typography as="span" variant="overline" className="w-8 shrink-0 text-stone-500">{service.number}</Typography>
            <Typography as="h3" variant="h4" className="flex-1 text-stone-800">{service.title}</Typography>
            <Typography as="p" variant="caption" className="basis-full pl-11 text-stone-500 md:basis-1/2 md:pl-0">{service.description}</Typography>
            <span aria-hidden="true" className="text-xl text-orange-700">{service.symbol}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
