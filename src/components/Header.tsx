import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

export function Header() {
  return (
    <header className="border-b border-[#dcd9ce] bg-[#f6f2e9]">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/test" aria-label="Cove Coffee home" className="flex flex-col leading-none">
          <Typography as="span" variant="h4" className="font-sans font-bold tracking-tight">COVE</Typography>
          <Typography as="span" variant="overline" className="mt-1 text-[#687265]">Coffee & Everyday</Typography>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 sm:flex">
          <Link href="/test#menu" className="text-sm text-[#526055] transition-colors hover:text-[#d7653d]">Our menu</Link>
          <Link href="/test#story" className="text-sm text-[#526055] transition-colors hover:text-[#d7653d]">Our story</Link>
          <Link href="/test#visit" className="text-sm text-[#526055] transition-colors hover:text-[#d7653d]">Find us</Link>
        </nav>
        <Link href="/test" className="rounded-full border border-[#aeb3a5] px-4 py-3 transition-colors hover:bg-[#24372e] hover:text-white">
          <Typography as="span" variant="caption" className="normal-case tracking-normal">Come on in ↗</Typography>
        </Link>
      </div>
    </header>
  );
}
