import type { Metadata } from "next";
import { ShopGrid } from "@/components/product/shop-grid";
import { PageHeader } from "@/components/site/primitives";
import { products } from "@/lib/data";

export const metadata: Metadata = { title: "Best Sellers" };

const bestSellers = products
  .filter((p) => p.tags.includes("bestseller") || p.tags.includes("popular"));

export default function BestSellersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Best Sellers"
        title="Fan Favourites"
        intro="The Strawberry Cat line and our Raw Earth mugs are the pieces visitors ask for most."
      />
      <ShopGrid source={bestSellers} />
    </>
  );
}
