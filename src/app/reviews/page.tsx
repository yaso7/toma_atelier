import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import { AvatarStack, PageHeader, PillLink, Stars } from "@/components/site/primitives";
import { avatars, img, photos, reviews } from "@/lib/data";

export const metadata: Metadata = { title: "Reviews" };

const breakdown = [
  { stars: 5, pct: 86 },
  { stars: 4, pct: 10 },
  { stars: 3, pct: 3 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

export default function ReviewsPage() {
  const [featured, ...rest] = reviews;

  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="Words from Our Clay Community"
        intro="From first-time wheel throwers to collectors with full shelves, here's what people say about our pieces and workshops."
      />

      <section className="container-page grid gap-4 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col justify-between rounded-sm bg-white p-8">
          <div>
            <p className="font-serif text-8xl font-light text-clay-light">4.9</p>
            <Stars rating={5} className="mt-2" />
            <p className="mt-2 text-xs text-muted-foreground">Based on 2,184 verified reviews</p>
          </div>
          <ul className="mt-8 space-y-2">
            {breakdown.map((b) => (
              <li key={b.stars} className="flex items-center gap-3 text-xs">
                <span className="w-3">{b.stars}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-sand">
                  <span className="block h-full rounded-full bg-clay" style={{ width: `${b.pct}%` }} />
                </span>
                <span className="w-8 text-right text-muted-foreground">{b.pct}%</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-3">
            <AvatarStack srcs={avatars} />
            <span className="text-xs font-medium">10k+ Satisfied Customers</span>
          </div>
        </div>

        <figure className="relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-sm p-8 text-white">
          <Image src={img(photos.potterAtWork, 1400)} alt="" fill sizes="60vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <Quote className="size-8 text-clay-light" />
          <blockquote className="mt-4 max-w-xl font-serif text-3xl leading-tight md:text-4xl">{featured.text}</blockquote>
          <figcaption className="mt-6 flex items-center gap-3 text-sm">
            <Image src={featured.avatar} alt="" width={40} height={40} className="size-10 rounded-full object-cover" />
            <span>
              {featured.name}
              <span className="block text-xs text-white/60">
                {featured.location} · on {featured.product}
              </span>
            </span>
          </figcaption>
        </figure>
      </section>

      <section className="container-page mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((r) => (
          <article key={r.name} className="flex flex-col rounded-sm bg-white p-6">
            <div className="flex items-center justify-between">
              <Stars rating={r.rating} />
              <span className="text-[11px] text-muted-foreground">{r.date}</span>
            </div>
            <p className="mt-4 flex-1 font-serif text-xl leading-snug">“{r.text}”</p>
            <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
              <Image src={r.avatar} alt="" width={36} height={36} className="size-9 rounded-full object-cover" />
              <div className="text-xs">
                <p className="font-medium">{r.name}</p>
                <p className="text-muted-foreground">
                  {r.location} · {r.product}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-page mt-16 flex flex-col items-center text-center">
        <h2 className="font-display text-4xl md:text-5xl">Shape your own story</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <PillLink href="/shop">Shop pottery</PillLink>
          <PillLink href="/booking" variant="outline">
            Book a workshop
          </PillLink>
        </div>
      </section>
    </>
  );
}
