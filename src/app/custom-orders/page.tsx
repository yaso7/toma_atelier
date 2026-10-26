import type { Metadata } from "next";
import Image from "next/image";
import { Chip, PageHeader, PillLink } from "@/components/site/primitives";
import { CustomOrderForm } from "@/components/site/custom-order-form";
import { img, photos } from "@/lib/data";

export const metadata: Metadata = { title: "Custom Orders" };

const steps = [
  { n: "01", title: "Consult", text: "A 30-minute video call to understand your idea, space and budget." },
  { n: "02", title: "Sketch & Sample", text: "We send drawings and glaze test tiles within a week." },
  { n: "03", title: "Make", text: "Your pieces are thrown, trimmed, dried and fired over 3–6 weeks." },
  { n: "04", title: "Deliver", text: "Packed by hand and shipped insured to 132 countries." },
];

const faqs = [
  {
    q: "How long does a custom order take?",
    a: "Most commissions take 4–8 weeks from approved sketch to delivery, depending on quantity and firing schedule.",
  },
  {
    q: "Is there a minimum order?",
    a: "No minimum for single statement pieces. Tableware sets start at four place settings.",
  },
  {
    q: "What is your shipping policy?",
    a: "Orders over $150 ship free to 132 countries. Every parcel is insured and packed in recycled materials.",
  },
  {
    q: "Can I return a custom piece?",
    a: "Made-to-order pieces can't be returned, but if anything arrives damaged we remake it free of charge. Shop items have 30-day returns.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes — digital gift cards from $25 can be used for pottery, workshops or custom work.",
  },
];

export default function CustomOrdersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Custom Orders"
        title="Handcrafted to Your Vision"
        intro="309+ commissions and counting — from wedding tableware to a single vase for a single corner."
      />

      <section className="container-page grid gap-4 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-sm border border-ink/10 bg-white/50 p-6">
            <p className="font-serif text-4xl font-light text-clay-light">{s.n}</p>
            <h3 className="mt-4 font-serif text-2xl">{s.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </section>

      <section id="contact" className="container-page mt-20 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Chip>Start a Commission</Chip>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Tell Us What You&apos;re Dreaming Of</h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Prefer to talk it through? Book a $24 design consult — the fee is credited to your order.
          </p>
          <PillLink href="/booking?workshop=custom-consult" variant="outline" className="mt-6">
            Book a 30-min consult
          </PillLink>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-sm">
            <Image src={img(photos.carving, 1000)} alt="Carving a bowl" fill sizes="40vw" className="object-cover" />
          </div>
        </div>
        <CustomOrderForm />
      </section>

      <section id="faq" className="container-page mt-24 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <h2 className="font-display text-5xl">Questions, Answered</h2>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-2xl">
                {f.q}
                <span className="ml-4 grid size-7 shrink-0 place-items-center rounded-full border border-ink/20 text-base transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
