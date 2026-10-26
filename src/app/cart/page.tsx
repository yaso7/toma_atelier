"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { MessageCircle, Trash2 } from "lucide-react";
import { QtyStepper, useCartLines } from "@/components/site/cart-sheet";
import { Chip, PillLink } from "@/components/site/primitives";
import { brand, img, whatsapp } from "@/lib/data";
import { clearCart, setQty } from "@/lib/store";

export default function CartPage() {
  const { items, subtotal } = useCartLines();

  const sendOrder = () => {
    const lines = items.map((i) => `${i.qty} × ${i.product.name} ($${i.unit * i.qty})`);
    const message = [
      "Hello Toma l'atelier, I'd like to order:",
      ...lines,
      `Total: $${subtotal}`,
      "Please confirm availability and delivery or pickup.",
    ].join("\n");
    window.open(whatsapp(message), "_blank", "noopener,noreferrer");
    toast("Opening WhatsApp so you can send your order");
  };

  return (
    <section className="container-page pt-36">
      <Chip>Basket</Chip>
      <h1 className="mt-5 font-display text-6xl md:text-7xl">Your Basket</h1>

      {items.length === 0 ? (
        <div className="py-20">
          <p className="font-serif text-3xl text-muted-foreground">Nothing here yet.</p>
          <PillLink href="/shop" className="mt-6">
            Browse the shop
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
                        {product.material} · {product.finish}
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
                <dt className="text-muted-foreground">Pickup / delivery</dt>
                <dd>Arranged on WhatsApp</dd>
              </div>
              <div className="flex justify-between border-t border-ink/10 pt-3 text-base font-semibold">
                <dt>Total</dt>
                <dd>${subtotal}</dd>
              </div>
            </dl>
            <button
              onClick={sendOrder}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-cobalt py-3.5 text-sm font-medium text-white transition-colors hover:bg-cobalt/85"
            >
              <MessageCircle className="size-4" /> Send order on WhatsApp
            </button>
            <button onClick={clearCart} className="mt-3 w-full text-center text-[11px] text-muted-foreground hover:text-ink">
              Clear basket
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              No payment is taken on this site. We confirm every order on {brand.bookingPhone}.
            </p>
          </aside>
        </div>
      )}
    </section>
  );
}
