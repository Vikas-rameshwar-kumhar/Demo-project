import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

export function Footer() {
  return (
    <footer id="visit" className="bg-green-950 text-stone-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-5 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6 lg:p-8">
        <Link href="/test" aria-label="Cove Coffee home" className="flex flex-col leading-none">
          <Typography as="span" variant="h4" className="font-sans font-bold tracking-tight">COVE</Typography>
          <Typography as="span" variant="overline" className="mt-1 text-stone-300">Coffee & Everyday</Typography>
        </Link>
        <Typography as="span" variant="body-sm" className="text-stone-300">18 Willow Lane · Brooklyn, NY</Typography>
        <Link href="mailto:hello@covecoffee.example" className="text-sm text-stone-100 transition-colors hover:text-orange-300">Say hello ↗</Link>
        <Typography as="span" variant="caption" className="text-stone-300">© {new Date().getFullYear()} Cove Coffee</Typography>
      </div>
    </footer>
  );
}
