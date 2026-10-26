"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus, Truck, RotateCcw, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Chip, Stars } from "@/components/site/primitives";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { img, salePrice, type Product } from "@/lib/data";
import { addToCart } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ProductDetail({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const price = salePrice(product);

  return (
    <section className="container-page grid gap-10 pt-28 md:pt-32 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      {/* Gallery */}
      <div className="grid gap-3 md:grid-cols-[80px_1fr]">
        <div className="order-2 flex gap-3 md:order-1 md:flex-col">
          {product.gallery.map((g, i) => (
            <button
              key={g}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={cn(
                "relative aspect-square w-20 overflow-hidden rounded-sm ring-offset-2 ring-offset-cream transition",
                active === i ? "ring-2 ring-ink" : "opacity-70 hover:opacity-100",
              )}
            >
              <Image src={img(g, 200)} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
        <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-sm bg-sand md:order-2">
          <Image
            src={img(product.gallery[active], 1200)}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <nav className="text-[11px] text-muted-foreground">
          <Link href="/shop" className="hover:text-ink">
            Shop
          </Link>{" "}
          / {product.category} / <span className="text-ink">{product.name}</span>
        </nav>
        <div className="mt-5 flex items-center gap-3">
          <Chip>{product.category}</Chip>
          {product.tags.includes("handmade") && <Chip>Hand Made</Chip>}
        </div>
        <h1 className="mt-4 font-display text-6xl md:text-7xl">{product.name}</h1>
        <div className="mt-4 flex items-center gap-3 text-xs">
          <Stars rating={product.rating} />
          <span className="text-muted-foreground">
            {product.rating} · {product.reviews} reviews
          </span>
        </div>

        <div className="mt-6 flex items-baseline gap-3">
          <span className="font-serif text-4xl">${price}</span>
          {product.discount > 0 && (
            <>
              <span className="text-sm text-muted-foreground line-through">${product.price}</span>
              <span className="rounded-full bg-clay/10 px-2 py-0.5 text-[11px] font-medium text-clay">
                {product.discount}% off
              </span>
            </>
          )}
        </div>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{product.description}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex h-12 items-center rounded-full border border-ink/20 bg-white/60">
            <button aria-label="Decrease" className="grid size-12 place-items-center" onClick={() => setQty((q) => Math.max(1, q - 1))}>
              <Minus className="size-3.5" />
            </button>
            <span className="w-6 text-center text-sm font-medium">{qty}</span>
            <button
              aria-label="Increase"
              className="grid size-12 place-items-center"
              onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
            >
              <Plus className="size-3.5" />
            </button>
          </div>
          <button
            onClick={() => {
              addToCart(product.slug, qty);
              toast(`${qty} × ${product.name} added to your basket`);
            }}
            className="h-12 flex-1 rounded-full bg-ink px-8 text-sm font-medium text-white transition-colors hover:bg-clay sm:flex-none"
          >
            Add to Basket — ${price * qty}
          </button>
        </div>
        <p className="mt-3 text-[11px] text-muted-foreground">Only {product.stock} left from this firing.</p>

        <ul className="mt-8 grid gap-3 border-y border-ink/10 py-5 text-xs sm:grid-cols-3">
          <li className="flex items-center gap-2">
            <Truck className="size-4 text-clay" /> Free shipping over $150
          </li>
          <li className="flex items-center gap-2">
            <RotateCcw className="size-4 text-clay" /> 30-day returns
          </li>
          <li className="flex items-center gap-2">
            <Sparkles className="size-4 text-clay" /> One of a kind
          </li>
        </ul>

        <Tabs defaultValue="details" className="mt-6">
          <TabsList variant="line" className="gap-4">
            <TabsTrigger value="details" className="px-0 text-xs">
              Details
            </TabsTrigger>
            <TabsTrigger value="care" className="px-0 text-xs">
              Care
            </TabsTrigger>
            <TabsTrigger value="shipping" className="px-0 text-xs">
              Shipping
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="pt-3">
            <dl className="grid grid-cols-[110px_1fr] gap-y-2 text-xs">
              <dt className="text-muted-foreground">Material</dt>
              <dd>{product.material}</dd>
              <dt className="text-muted-foreground">Dimensions</dt>
              <dd>{product.dimensions}</dd>
              <dt className="text-muted-foreground">Glaze</dt>
              <dd>{product.glaze}</dd>
            </dl>
          </TabsContent>
          <TabsContent value="care" className="pt-3 text-xs leading-relaxed text-muted-foreground">
            Hand wash with mild soap. Unglazed surfaces may darken with use — that patina is part of the piece. Avoid
            sudden temperature changes.
          </TabsContent>
          <TabsContent value="shipping" className="pt-3 text-xs leading-relaxed text-muted-foreground">
            Packed in recycled paper and corrugated card. Ships within 3–5 business days; free to 132 countries on
            orders over $150.
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
