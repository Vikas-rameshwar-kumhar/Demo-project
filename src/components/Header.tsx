import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

export function Header() {
  return (
    <header className="border-b border-stone-300 bg-stone-100">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 p-4 sm:p-6 lg:p-8">
        <Link href="/test" aria-label="Cove Coffee home" className="flex flex-col leading-none">
          <Typography as="span" variant="h4" className="font-sans font-bold tracking-tight">COVE</Typography>
          <Typography as="span" variant="overline" className="mt-1 text-stone-600">Coffee & Everyday</Typography>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 sm:flex">
          <Link href="/test#menu" className="text-sm text-stone-700 transition-colors hover:text-orange-700">Our menu</Link>
          <Link href="/test#story" className="text-sm text-stone-700 transition-colors hover:text-orange-700">Our story</Link>
          <Link href="/test#visit" className="text-sm text-stone-700 transition-colors hover:text-orange-700">Find us</Link>
        </nav>
        <Link href="/test#visit" className="flex items-center gap-2 rounded-full border border-stone-400 p-3 transition-colors hover:bg-green-950 hover:text-white">
          <Typography as="span" variant="caption" className="normal-case tracking-normal">Come on in ↗</Typography>
        </Link>
      </div>
    </header>
  );
}
