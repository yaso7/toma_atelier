"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products, salePrice, type Category, type Product } from "@/lib/data";
import { ProductCard } from "./product-card";
import { FilterPills } from "./product-showcase";

const categories = [
  { id: "All", label: "All Pottery" },
  { id: "Vases", label: "Vases" },
  { id: "Bowls", label: "Bowls" },
  { id: "Mugs", label: "Mugs" },
  { id: "Plates", label: "Plates" },
  { id: "Jars", label: "Jars & Planters" },
] as const;

const sorts = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  rating: "Top Rated",
} as const;

type Sort = keyof typeof sorts;

export function ShopGrid({ initialCategory = "All", source = products }: { initialCategory?: string; source?: Product[] }) {
  const [category, setCategory] = useState<Category | "All">(
    categories.some((c) => c.id === initialCategory) ? (initialCategory as Category) : "All",
  );
  const [sort, setSort] = useState<Sort>("featured");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = source.filter(
      (p) => (category === "All" || p.category === category) && (!q || p.name.toLowerCase().includes(q)),
    );
    if (sort === "price-asc") return filtered.toSorted((a, b) => salePrice(a) - salePrice(b));
    if (sort === "price-desc") return filtered.toSorted((a, b) => salePrice(b) - salePrice(a));
    if (sort === "rating") return filtered.toSorted((a, b) => b.rating - a.rating);
    return filtered;
  }, [source, category, sort, query]);

  return (
    <section className="container-page">
      <div className="flex flex-col gap-4 border-y border-ink/10 py-4 lg:flex-row lg:items-center lg:justify-between">
        <FilterPills options={categories} value={category} onChange={setCategory} />
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pottery"
              className="h-9 w-44 rounded-full bg-white/70 pl-8 text-xs"
            />
          </div>
          <Select value={sort} onValueChange={(v) => setSort(v as Sort)}>
            <SelectTrigger className="h-9 w-44 rounded-full bg-white/70 text-xs">
              <SelectValue>{(v: Sort) => sorts[v]}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Object.entries(sorts).map(([k, label]) => (
                <SelectItem key={k} value={k}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <p className="mt-6 mb-4 text-xs text-muted-foreground">{list.length} pieces</p>
      {list.length ? (
        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p className="py-20 text-center font-serif text-3xl text-muted-foreground">No pieces match your search.</p>
      )}
    </section>
  );
}
