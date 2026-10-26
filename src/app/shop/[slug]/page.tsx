import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product/product-card";
import { ProductDetail } from "@/components/product/product-detail";
import { PillLink } from "@/components/site/primitives";
import { getProduct, products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/shop/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: getProduct(slug)?.name ?? "Product" };
}

export default async function ProductPage({ params }: PageProps<"/shop/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== product.slug && (p.category === product.category || p.collection === product.collection))
    .slice(0, 4);

  return (
    <>
      <ProductDetail product={product} />

      <section className="container-page mt-24">
        <div className="relative isolate grid overflow-hidden rounded-sm bg-clay text-white md:grid-cols-2">
          <div className="p-8 md:p-12">
            <p className="text-xs text-white/70">Made at Toma l&apos;atelier</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Want to make your own?</h2>
            <p className="mt-4 max-w-sm text-sm text-white/75">
              Join a hand-building or painting session. Clay, tools, underglazes and firing are all included.
            </p>
            <PillLink href="/booking" variant="light" className="mt-6">
              Book a Seat
            </PillLink>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-page mt-20">
          <h2 className="mb-8 font-display text-5xl">More from the Studio</h2>
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
