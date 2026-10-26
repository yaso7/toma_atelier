import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product/product-card";
import { ProductDetail } from "@/components/product/product-detail";
import { PillLink } from "@/components/site/primitives";
import { getProduct, img, photos, products } from "@/lib/data";

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
        <div className="relative isolate grid overflow-hidden rounded-sm text-white md:grid-cols-2">
          <Image src={img(photos.studioWheel, 1600)} alt="" fill sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 to-black/20" />
          <div className="p-8 md:p-12">
            <p className="text-xs text-white/70">Made in our studio</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Want to make your own?</h2>
            <p className="mt-4 max-w-sm text-sm text-white/75">
              Join a wheel-throwing or hand-building class and take home a piece shaped by your own hands.
            </p>
            <PillLink href="/booking" variant="light" className="mt-6">
              Book a Workshop
            </PillLink>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-page mt-20">
          <h2 className="mb-8 font-display text-5xl">You May Also Love</h2>
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
