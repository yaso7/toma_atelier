import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Chip, PageHeader, PillLink } from "@/components/site/primitives";
import { collections, img, products, salePrice } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Collections" };

export default function CollectionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Collections"
        title="Five Ways to Hold Clay"
        intro="The studio's output has a distinct, rustic look. Browse by style, from strawberry cats to raw earth and pressed flowers."
      />

      <div className="container-page space-y-20 md:space-y-28">
        {collections.map((c, i) => {
          const items = products.filter((p) => p.collection === c.slug);
          return (
            <section key={c.slug} id={c.slug} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className={cn("relative aspect-[5/4] overflow-hidden rounded-sm", i % 2 && "lg:order-2")}>
                <Image src={img(c.image, 1200)} alt={c.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium">
                  {String(i + 1).padStart(2, "0")} / {String(collections.length).padStart(2, "0")}
                </span>
              </div>
              <div>
                <Chip>{c.tagline}</Chip>
                <h2 className="mt-4 font-display text-5xl text-clay md:text-6xl">{c.name}</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{c.description}</p>

                <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                  {items.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/shop/${p.slug}`} className="group flex items-center gap-4 py-3">
                        <Image
                          src={img(p.image, 120)}
                          alt=""
                          width={48}
                          height={48}
                          className="size-12 rounded-full object-cover"
                        />
                        <span className="flex-1 font-serif text-xl group-hover:text-clay">{p.name}</span>
                        <span className="text-xs text-muted-foreground">{p.category}</span>
                        <span className="w-14 text-right text-sm font-semibold text-cobalt">${salePrice(p)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <PillLink href="/shop" className="mt-8">
                  See the pieces
                </PillLink>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
