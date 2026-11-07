import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

export function Header() {
  return (
    <header className="border-b border-[#dcd9ce] bg-[#f6f2e9]">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/#home" aria-label="Vikas Kumhar home" className="flex flex-col leading-none">
          <Typography as="span" variant="h4" className="font-sans font-bold tracking-tight">VIKAS<span className="text-[#ea6d48]">.</span></Typography>
          <Typography as="span" variant="overline" className="mt-1 text-[#687265]">Full Stack Developer</Typography>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 sm:flex">
          <Link href="/#work" className="text-sm text-[#526055] transition-colors hover:text-[#d7653d]">Work</Link>
          <Link href="/#about" className="text-sm text-[#526055] transition-colors hover:text-[#d7653d]">About</Link>
          <Link href="/#experience" className="text-sm text-[#526055] transition-colors hover:text-[#d7653d]">Skills</Link>
        </nav>
        <Link href="/#contact" className="rounded-full border border-[#aeb3a5] px-4 py-3 transition-colors hover:bg-[#24372e] hover:text-white">
          <Typography as="span" variant="caption" className="normal-case tracking-normal">Let’s talk ↗</Typography>
        </Link>
      </div>
    </header>
  );
}
