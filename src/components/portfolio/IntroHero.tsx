"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/Typography";

function AnimatedNumber({
  target,
  suffix = "",
  duration = 1400,
  start = 1,
  startAnimation = false,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  start?: number;
  startAnimation?: boolean;
}) {
  const [count, setCount] = useState(start);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!startAnimation || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    let startTime: number | null = null;
    let animationFrame: number;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const currentVal = Math.round(start + (target - start) * easedProgress);
      setCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [target, duration, start, startAnimation]);

  return (
    <span
      className={`tabular-nums transition-opacity duration-500 ${
        startAnimation ? "opacity-100" : "invisible opacity-0"
      }`}
    >
      {count}
      {startAnimation ? suffix : null}
    </span>
  );
}

const stats = [
  { target: 14, suffix: "+", label: "Months of experience" },
  { target: 800, suffix: "+", label: "Project delivered" },
  { target: 50, suffix: "+", label: "Countries served" },
];

export function IntroHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.28) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: [0, 0.3] }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="intro-title"
      className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden bg-gradient-to-br from-[#541ea8] via-[#5c24b8] to-[#481896] px-5 py-6 text-white sm:px-8 lg:px-14"
    >
      {/* 3D Perspective Wireframe Grid */}
      {/* <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full opacity-15"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="600" cy="420" r="260" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="600" cy="420" r="380" stroke="white" strokeWidth="1" />
        <circle cx="600" cy="420" r="500" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
        <ellipse cx="600" cy="420" rx="580" ry="260" stroke="white" strokeWidth="1" />
        <ellipse cx="600" cy="420" rx="580" ry="140" stroke="white" strokeWidth="1" />
        <line x1="600" y1="0" x2="600" y2="800" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="0" y1="420" x2="1200" y2="420" stroke="white" strokeWidth="1" />
      </svg> */}

      {/* Top Navigation Bar */}
      {/* <header className="relative z-20 flex w-full items-center justify-between font-sans text-sm">
        <nav aria-label="Main menu" className="hidden items-center gap-6 text-purple-200 sm:flex">
          <a href="#home" className="font-semibold text-white">Home</a>
          <a href="#about" className="transition-colors hover:text-white">About</a>
          <a href="#services" className="transition-colors hover:text-white">Services</a>
          <a href="#work" className="transition-colors hover:text-white">Projects</a>
          <a href="#experience" className="transition-colors hover:text-white">Blogs</a>
        </nav>

        <a
          href="#contact"
          className="ml-auto flex items-center gap-1 border-l border-white/30 pl-4 text-sm font-medium text-white transition-colors hover:text-lime-300"
        >
          Book A Meeting <span className="ml-1 text-base">↗</span>
        </a>
      </header> */}

      {/* Center ENLARGED Portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex h-[82%] items-end justify-center overflow-hidden sm:h-[90%] lg:h-[96%]"
      >
        <div className="relative h-full w-full max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <Image
            src="/vikas-kumhar.png"
            alt="Vikas Kumhar"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="origin-bottom scale-105 object-contain object-bottom sm:scale-115 lg:scale-125"
          />
          {/* Smooth bottom gradient fade to background */}
          {/* <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#481896] via-[#481896]/60 to-transparent" />*/}
        </div> 
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#481896] via-[#481896]/60 to-transparent" />
      </div>
    

      {/* Main Content Grid: Left bio & CTA + Right stats */}
      <div className="relative z-20 my-auto flex w-full flex-col justify-between gap-12 py-8 px-30 lg:flex-row lg:items-center">
        {/* Left Column */}
        <div className="flex max-w-2xl flex-col items-start">
          <Typography as="p" variant="body-xl" className="mb-2 text-white">
            Hi, this is
          </Typography>
          <Typography
            as="h1"
            variant="display-2xl"
            id="intro-title"
            className="mb-4 text-white"
          >
            Vikas Kumhar
          </Typography>
          <Typography
            as="p"
            variant="body-lg"
            className="mb-6 max-w-md text-purple-100"
          >
            I’m a UI/UX Designer &amp; Full Stack Developer focused on creating intuitive and engaging digital experiences that users love.
          </Typography>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-lime-300"
          >
            Hire Now <span className="text-base font-bold">↗</span>
          </a>

          {/* Social Proof (Client Avatars + Rating) */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="inline-grid size-8 place-items-center rounded-full border-2 border-violet-900 bg-amber-200 text-xs font-bold text-violet-950">
                JD
              </span>
              <span className="inline-grid size-8 place-items-center rounded-full border-2 border-violet-900 bg-rose-200 text-xs font-bold text-violet-950">
                AM
              </span>
              <span className="inline-grid size-8 place-items-center rounded-full border-2 border-violet-900 bg-cyan-200 text-xs font-bold text-violet-950">
                SK
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm tracking-widest text-amber-300">★★★★★</span>
              <span className="text-xs text-purple-200">
                Trusted by{" "}
                <AnimatedNumber
                  target={500}
                  suffix="+"
                  startAnimation={hasStarted}
                />{" "}
                clients
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Vertically Stacked Metric Stats */}
        <div className="flex flex-col items-start gap-8 text-left pr-30 lg:items-end lg:text-right">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                <AnimatedNumber
                  target={item.target}
                  suffix={item.suffix}
                  startAnimation={hasStarted}
                />
              </span>
              <span className="mt-1 text-xs text-purple-200 sm:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Tool Badges Row */}
      <footer className="relative z-20 flex w-full items-center justify-between pt-4 font-sans text-xs text-purple-200">
        <span className="hidden sm:inline">Crafting modern web experiences</span>
        {/* <div className="ml-auto flex items-center gap-4 text-white"> */}
          {/* <svg className="size-5 opacity-80 transition-opacity hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 2a4 4 0 0 0 0 8h4V2H8zm8 4a4 4 0 1 0-4 4V2a4 4 0 0 0 4 4zm-4 4H8a4 4 0 0 0 0 8h4v-8zm8 4a4 4 0 1 0-4 4v-4h4zm-8 4H8a4 4 0 1 0 4 4v-4z" />
          </svg>
          <svg className="size-5 opacity-80 transition-opacity hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <svg className="size-5 opacity-80 transition-opacity hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2a8.2 8.2 0 0 1-5.2-1.9l4-11.6 3.4 9.4a8.2 8.2 0 0 1-2.2 4.1zm6.7-5.4a8.1 8.1 0 0 1-1.6 3.1l-2.4-7.4 2.3-2.3a4.6 4.6 0 0 1 1.7 6.6zM5.3 12a8.2 8.2 0 0 1 1.9-5.2L11 17.7l-4.5-5.2A7.8 7.8 0 0 1 5.3 12zM12 3.8a8.2 8.2 0 0 1 5.6 2.3L15.3 8a3.2 3.2 0 0 0-2-.7c-.8 0-1.5.3-1.5 1 0 .6.4.9 1 1.2l1.6.7c1.7.7 2.6 1.7 2.6 3.3a4.2 4.2 0 0 1-1.5 3.3l-1.3-4-1.3 3.9a8.2 8.2 0 0 1-4.8-12.9z" />
          </svg> */}
        {/* </div> */}
      </footer>
    </section>
  );
}
