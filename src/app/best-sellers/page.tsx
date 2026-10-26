import type { Metadata } from "next";
import { ShopGrid } from "@/components/product/shop-grid";
import { PageHeader } from "@/components/site/primitives";
import { products } from "@/lib/data";

export const metadata: Metadata = { title: "Best Sellers" };

const bestSellers = products
  .filter((p) => p.tags.includes("bestseller") || p.tags.includes("popular"))
  .toSorted((a, b) => b.reviews - a.reviews);

export default function BestSellersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Best Sellers"
        title="Loved in Homes Everywhere"
        intro="The pieces our community returns to again and again — ranked by reviews from more than 10,000 customers."
      />
      <ShopGrid source={bestSellers} />
    </>
  );
}
