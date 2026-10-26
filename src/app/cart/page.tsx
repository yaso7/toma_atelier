"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { QtyStepper, useCartLines } from "@/components/site/cart-sheet";
import { Chip, PillLink } from "@/components/site/primitives";
import { img } from "@/lib/data";
import { clearCart, setQty } from "@/lib/store";

export default function CartPage() {
  const { items, subtotal } = useCartLines();
  const [placed, setPlaced] = useState(false);
  const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 12;

  if (placed) {
    return (
      <section className="container-page flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
        <Chip>Order confirmed</Chip>
        <h1 className="mt-5 font-display text-6xl md:text-7xl">Thank you!</h1>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          Your pieces are being wrapped by hand. A confirmation email is on its way.
        </p>
        <PillLink href="/shop" className="mt-8">
          Keep browsing
        </PillLink>
      </section>
    );
  }

  return (
    <section className="container-page pt-36">
      <Chip>Basket</Chip>
      <h1 className="mt-5 font-display text-6xl md:text-7xl">Your Basket</h1>

      {items.length === 0 ? (
        <div className="py-20">
          <p className="font-serif text-3xl text-muted-foreground">Nothing here yet.</p>
          <PillLink href="/shop" className="mt-6">
            Explore Clay
          </PillLink>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {items.map(({ product, qty, unit }) => (
              <li key={product.slug} className="flex gap-5 py-5">
                <Image
                  src={img(product.image, 300)}
                  alt={product.name}
                  width={112}
                  height={136}
                  className="h-34 w-28 rounded-sm object-cover"
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link href={`/shop/${product.slug}`} className="font-serif text-2xl">
                        {product.name}
                      </Link>
                      <p className="text-xs text-muted-foreground">
                        {product.material} · {product.dimensions}
                      </p>
                    </div>
                    <p className="text-sm font-semibold">${unit * qty}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-4">
                    <QtyStepper slug={product.slug} qty={qty} />
                    <button
                      onClick={() => setQty(product.slug, 0)}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-ink"
                    >
                      <Trash2 className="size-3.5" /> Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-sm bg-white p-6">
            <h2 className="font-serif text-3xl">Summary</h2>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd>${subtotal}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Shipping</dt>
                <dd>{shipping ? `$${shipping}` : "Free"}</dd>
              </div>
              <div className="flex justify-between border-t border-ink/10 pt-3 text-base font-semibold">
                <dt>Total</dt>
                <dd>${subtotal + shipping}</dd>
              </div>
            </dl>
            {shipping > 0 && (
              <p className="mt-3 text-[11px] text-clay">Add ${150 - subtotal} more for free shipping.</p>
            )}
            <button
              onClick={() => {
                clearCart();
                setPlaced(true);
                toast("Order placed — thank you!");
              }}
              className="mt-6 w-full rounded-full bg-ink py-3.5 text-sm font-medium text-white transition-colors hover:bg-clay"
            >
              Place order
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">Demo checkout — no payment is taken.</p>
          </aside>
        </div>
      )}
    </section>
  );
}
