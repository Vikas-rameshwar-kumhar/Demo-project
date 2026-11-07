import * as React from "react";
import { cn } from "@/lib/utils";

export type TypographyVariant =
  | "display-2xl"
  | "display-xl"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-xl"
  | "body-lg"
  | "body-sm"
  | "caption"
  | "overline";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: TypographyVariant;
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles: Record<TypographyVariant, string> = {
  "display-2xl": "font-serif text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl font-normal",
  "display-xl": "font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl font-normal",
  h1: "font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl font-normal",
  h2: "font-serif text-2xl leading-tight tracking-tight sm:text-3xl lg:text-4xl font-normal",
  h3: "font-serif text-xl leading-snug tracking-tight sm:text-2xl font-normal",
  h4: "font-serif text-lg leading-snug sm:text-xl font-normal",
  "body-xl": "font-sans text-base leading-relaxed sm:text-lg font-normal",
  "body-lg": "font-sans text-sm leading-relaxed sm:text-base font-normal",
  "body-sm": "font-sans text-xs leading-relaxed sm:text-sm font-normal",
  caption: "font-sans text-xs leading-normal font-medium uppercase tracking-wider",
  overline: "font-sans text-xs leading-normal font-semibold uppercase tracking-widest",
};

const defaultTags: Record<TypographyVariant, React.ElementType> = {
  "display-2xl": "h1",
  "display-xl": "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-xl": "p",
  "body-lg": "p",
  "body-sm": "p",
  caption: "span",
  overline: "span",
};

const fontWeightClasses = new Set([
  "font-thin", "font-extralight", "font-light", "font-normal", "font-medium",
  "font-semibold", "font-bold", "font-extrabold", "font-black",
]);

export function Typography({
  children,
  as,
  variant = "body-lg",
  className,
  style,
  ...props
}: TypographyProps) {
  const hasWeightOverride = className?.split(/\s+/).some((name) => fontWeightClasses.has(name));
  const variantClass = hasWeightOverride
    ? variantStyles[variant].split(/\s+/).filter((name) => !fontWeightClasses.has(name)).join(" ")
    : variantStyles[variant];
  const normalizedClass = className?.split(/\s+/) ?? [];
  const finalVariantClass = normalizedClass.includes("normal-case")
    ? variantClass.split(/\s+/).filter((name) => name !== "uppercase" && name !== "capitalize").join(" ")
    : variantClass;
  const Tag = (as ?? defaultTags[variant]) as React.ElementType;

  return (
    <Tag className={cn(finalVariantClass, className)} style={style} {...props}>
      {children}
    </Tag>
  );
}

export default Typography;
