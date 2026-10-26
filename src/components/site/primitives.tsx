import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small outlined label used above headings ("Art of Pottery"). */
export function Chip({ children, className, dark }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide",
        dark ? "border-white/40 text-white" : "border-ink/15 bg-white/60 text-ink/80",
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
};

/** Rounded CTA with the circled arrow from the design ("Explore Clay ⟶"). */
export function PillLink({ href, children, variant = "dark", className, arrow = true }: PillProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 text-sm font-medium transition-colors",
        arrow ? "pl-5" : "px-5 py-2.5",
        variant === "dark" && "bg-ink text-white hover:bg-ink/85",
        variant === "light" && "bg-white text-ink hover:bg-cream",
        variant === "outline" && "border border-ink/20 text-ink hover:bg-white",
        className,
      )}
    >
      {children}
      {arrow && (
        <span
          className={cn(
            "grid size-7 place-items-center rounded-full transition-transform group-hover:translate-x-0.5",
            variant === "dark" ? "bg-white text-ink" : "bg-ink text-white",
          )}
        >
          <ArrowRight className="size-3.5" />
        </span>
      )}
    </Link>
  );
}

export function AvatarStack({ srcs, size = 32 }: { srcs: string[]; size?: number }) {
  return (
    <div className="flex -space-x-2.5">
      {srcs.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          className="rounded-full border-2 border-cream object-cover"
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}

export function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn("size-3.5", i < Math.round(rating) ? "fill-clay text-clay" : "text-ink/20")}
        />
      ))}
    </div>
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
