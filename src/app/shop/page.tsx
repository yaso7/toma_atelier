import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopGrid } from "@/components/product/shop-grid";
import { PageHeader } from "@/components/site/primitives";

export const metadata: Metadata = { title: "All Shop" };

async function ShopWithCategory({ searchParams }: PageProps<"/shop">) {
  const { category } = await searchParams;
  return <ShopGrid initialCategory={typeof category === "string" ? category : "All"} />;
}

export default function ShopPage(props: PageProps<"/shop">) {
  return (
    <>
      <PageHeader
        eyebrow="All Shop"
        title="Pieces Shaped by Hand"
        intro="Every vessel is thrown, carved or pinched in our studio, then fired in small batches. Slight variations are part of the story."
      />
      <Suspense fallback={<ShopGrid />}>
        <ShopWithCategory {...props} />
      </Suspense>
    </>
  );
}
