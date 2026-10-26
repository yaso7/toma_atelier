"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { getProduct, img, salePrice } from "@/lib/data";
import { setQty, useCart } from "@/lib/store";

export function useCartLines() {
  const lines = useCart();
  const items = lines.flatMap((l) => {
    const product = getProduct(l.slug);
    return product ? [{ ...l, product, unit: salePrice(product) }] : [];
  });
  const subtotal = items.reduce((s, i) => s + i.unit * i.qty, 0);
  return { items, subtotal };
}

export function QtyStepper({ slug, qty }: { slug: string; qty: number }) {
  return (
    <div className="inline-flex items-center rounded-full border border-ink/15">
      <button aria-label="Decrease" className="grid size-7 place-items-center" onClick={() => setQty(slug, qty - 1)}>
        <Minus className="size-3" />
      </button>
      <span className="w-6 text-center text-xs font-medium">{qty}</span>
      <button aria-label="Increase" className="grid size-7 place-items-center" onClick={() => setQty(slug, qty + 1)}>
        <Plus className="size-3" />
      </button>
    </div>
  );
}

export function CartSheet({ onNavigate }: { onNavigate: () => void }) {
  const { items, subtotal } = useCartLines();

  return (
    <SheetContent className="w-full bg-cream sm:max-w-md">
      <SheetHeader className="border-b border-ink/10 px-6 py-5">
        <SheetTitle className="font-serif text-3xl font-normal">Your Basket</SheetTitle>
      </SheetHeader>

      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
          <ShoppingBag className="size-10 text-clay" strokeWidth={1.2} />
          <p className="font-serif text-2xl">Your basket is empty</p>
          <Link href="/shop" onClick={onNavigate} className="rounded-full bg-ink px-5 py-2.5 text-sm text-white">
            Browse the shop
          </Link>
        </div>
      ) : (
        <>
          <ul className="flex-1 space-y-4 overflow-y-auto px-6">
            {items.map(({ product, qty, unit }) => (
              <li key={product.slug} className="flex gap-4">
                <Image
                  src={img(product.image, 200)}
                  alt={product.name}
                  width={80}
                  height={96}
                  className="h-24 w-20 rounded-md object-cover"
                />
                <div className="flex flex-1 flex-col">
                  <Link href={`/shop/${product.slug}`} onClick={onNavigate} className="font-serif text-xl leading-tight">
                    {product.name}
                  </Link>
                  <span className="text-xs text-muted-foreground">{product.category}</span>
                  <div className="mt-auto flex items-center justify-between">
                    <QtyStepper slug={product.slug} qty={qty} />
                    <span className="text-sm font-semibold">${unit * qty}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <SheetFooter className="border-t border-ink/10 px-6 py-5">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal}</span>
            </div>
            <Link
              href="/cart"
              onClick={onNavigate}
              className="mt-2 rounded-full bg-ink py-3 text-center text-sm font-medium text-white hover:bg-ink/85"
            >
              Checkout
            </Link>
          </SheetFooter>
        </>
      )}
    </SheetContent>
  );
}
