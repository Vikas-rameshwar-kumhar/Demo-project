import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

export function Footer() {
  return (
    <footer className="bg-[#17372d] text-[#f5f3ec]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <Link href="/#home" aria-label="Vikas Kumhar home" className="flex flex-col leading-none">
          <Typography as="span" variant="h4" className="text-[#f5f3ec]">VIKAS.</Typography>
          <Typography as="span" variant="overline" className="mt-1 text-[#c0c7bb]">Full Stack Developer</Typography>
        </Link>
        <Typography as="span" variant="body-sm" className="text-[#c0c7bb]">JavaScript · TypeScript · Python</Typography>
        <Link href="mailto:connect@vikaskumhar.in" className="text-sm text-[#f5f3ec] transition-colors hover:text-[#e9a17f]">Say hello ↗</Link>
        <Typography as="span" variant="caption" className="text-[#c0c7bb]">© {new Date().getFullYear()} Vikas Kumhar</Typography>
      </div>
    </footer>
  );
}
