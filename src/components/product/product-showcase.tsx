"use client";

import { useState } from "react";
import { products, type Product } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";

const filters = [
  { id: "all", label: "All Shape" },
  { id: "recent", label: "Recent" },
  { id: "popular", label: "Popular" },
  { id: "handmade", label: "Hand Made" },
] as const;

type FilterId = (typeof filters)[number]["id"];

export function FilterPills<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5" role="tablist">
      {options.map((o) => (
        <button
          key={o.id}
          role="tab"
          aria-selected={value === o.id}
          onClick={() => onChange(o.id)}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-[11px] font-medium transition-colors",
            value === o.id ? "border-ink bg-ink text-white" : "border-ink/15 bg-white/60 hover:border-ink/40",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** Homepage "We Shape" grid with All / Recent / Popular / Hand Made filters. */
export function ProductShowcase({ limit = 4 }: { limit?: number }) {
  const [filter, setFilter] = useState<FilterId>("all");
  const list: Product[] = (filter === "all" ? products : products.filter((p) => p.tags.includes(filter))).slice(
    0,
    limit,
  );

  return (
    <section className="container-page py-16 md:py-20">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 className="font-display text-5xl md:text-6xl">We Shape</h2>
        <FilterPills options={filters} value={filter} onChange={setFilter} />
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
