import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopGrid } from "@/components/product/shop-grid";
import { PageHeader } from "@/components/site/primitives";

export const metadata: Metadata = { title: "Shop" };

async function ShopWithCategory({ searchParams }: PageProps<"/shop">) {
  const { category } = await searchParams;
  return <ShopGrid initialCategory={typeof category === "string" ? category : "All"} />;
}

export default function ShopPage(props: PageProps<"/shop">) {
  return (
    <>
      <PageHeader
        eyebrow="The Shop"
        title="Ceramics with a Human Touch"
        intro="Mugs, plates, trays and studio goods made by our resident artists and guests. Thumbprints, uneven rims and freehand strokes are the signature."
      />
      <Suspense fallback={<ShopGrid />}>
        <ShopWithCategory {...props} />
      </Suspense>
    </>
  );
}
