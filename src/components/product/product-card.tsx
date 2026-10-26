"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { img, salePrice, type Product } from "@/lib/data";
import { addToCart } from "@/lib/store";
import { cn } from "@/lib/utils";

/** "We Shape" card: photo on a soft backdrop, white footer with price and Buy Now pill. */
export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const price = salePrice(product);

  return (
    <article className={cn("group flex flex-col overflow-hidden rounded-sm bg-white", className)}>
      <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-sand">
        <Image
          src={img(product.image, 700)}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tags.includes("bestseller") && (
          <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium">
            Best Seller
          </span>
        )}
      </Link>
      <div className="flex items-end justify-between gap-3 px-3.5 py-3">
        <div className="min-w-0">
          <Link href={`/shop/${product.slug}`} className="block truncate font-serif text-lg leading-tight">
            {product.name}
          </Link>
          <p className="mt-0.5 text-xs">
            <span className="font-semibold">${price}</span>
            {product.discount > 0 && (
              <span className="ml-1.5 text-[10px] text-muted-foreground">({product.discount}% off)</span>
            )}
          </p>
        </div>
        <button
          onClick={() => {
            addToCart(product.slug);
            toast(`${product.name} added to your basket`);
          }}
          className="shrink-0 rounded-full bg-cobalt px-3.5 py-2 text-[10px] font-semibold text-white transition-colors hover:bg-clay"
        >
          Buy Now
        </button>
      </div>
    </article>
  );
}
