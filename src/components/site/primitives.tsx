import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Toma l'atelier wordmark: modern caps with a hand-rendered script tail. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-1.5 leading-none", className)}>
      <span className="text-[1.35rem] font-bold tracking-[0.22em]">TOMA</span>
      <span className="font-script text-[1.7rem] font-medium">l&apos;atelier</span>
    </span>
  );
}

/** Small outlined label used above headings ("A Station of Art"). */
export function Chip({ children, className, dark }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide",
        dark ? "border-white/40 text-white" : "border-clay/40 bg-white/60 text-clay",
        className,
      )}
    >
      {children}
    </span>
  );
}

type PillProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "outline";
  className?: string;
  arrow?: boolean;
  external?: boolean;
};

/** Rounded CTA with the circled arrow from the design. Cobalt is reserved for calls to action. */
export function PillLink({ href, children, variant = "dark", className, arrow = true, external }: PillProps) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 text-sm font-medium transition-colors",
        arrow ? "pl-5" : "px-5 py-2.5",
        variant === "dark" && "bg-cobalt text-white hover:bg-cobalt/85",
        variant === "light" && "bg-white text-ink hover:bg-cream",
        variant === "outline" && "border border-cobalt/30 text-cobalt hover:bg-white",
        className,
      )}
    >
      {children}
      {arrow && (
        <span
          className={cn(
            "grid size-7 place-items-center rounded-full transition-transform group-hover:translate-x-0.5",
            variant === "dark" ? "bg-white text-cobalt" : "bg-cobalt text-white",
          )}
        >
          <ArrowRight className="size-3.5" />
        </span>
      )}
    </Link>
  );
}

/** Interior page header: big serif title on cream with an eyebrow chip. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="container-page pt-36 pb-12 md:pt-44 md:pb-16">
      <Chip>{eyebrow}</Chip>
      <div className="mt-5 grid items-end gap-6 md:grid-cols-[1.4fr_1fr]">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl">{title}</h1>
        {intro && <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:justify-self-end">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
