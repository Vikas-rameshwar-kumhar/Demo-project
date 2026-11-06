import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

export function Footer() {
  return (
    <footer id="visit" className="bg-[#24372e] text-[#f6f2e9]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <Link href="/test" aria-label="Cove Coffee home" className="flex flex-col leading-none">
          <Typography as="span" variant="h4" className="font-sans font-bold tracking-tight text-[#f6f2e9]">COVE</Typography>
          <Typography as="span" variant="overline" className="mt-1 text-[#c0c7bb]">Coffee & Everyday</Typography>
        </Link>
        <Typography as="span" variant="body-sm" className="text-[#c0c7bb]">18 Willow Lane · Brooklyn, NY</Typography>
        <Link href="mailto:hello@covecoffee.example" className="text-sm text-[#f6f2e9] transition-colors hover:text-[#e39a73]">Say hello ↗</Link>
        <Typography as="span" variant="caption" className="text-[#c0c7bb]">© 2025 Cove Coffee</Typography>
      </div>
    </footer>
  );
}
