import type { Metadata } from "next";
import Image from "next/image";
import { Chip, PageHeader, PillLink } from "@/components/site/primitives";
import { PrivateEventForm } from "@/components/site/private-event-form";
import { brand, faqs, ig, whatsapp } from "@/lib/data";

export const metadata: Metadata = { title: "Private & Corporate Events" };

const steps = [
  { n: "01", title: "Message us", text: "Tell us your group, date and mood on WhatsApp or Instagram DM." },
  { n: "02", title: "Shape the evening", text: "Pick a track, plus the playlist, lighting and café menu." },
  { n: "03", title: "Create together", text: "We host at a partner venue with clay, tools and underglazes ready." },
  { n: "04", title: "Kiln and collect", text: `Your pieces are fired and ready ${brand.kilnDays} later.` },
];

export default function PrivateEventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Private & Corporate Events"
        title="Take Over the Studio for an Evening"
        intro="Curated takeovers for small groups, birthdays and corporate teams, with a tailored musical playlist and private venue hosting."
      />

      <section className="container-page grid gap-4 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-sm border border-ink/10 bg-white/60 p-6">
            <p className="font-serif text-4xl font-light text-clay-light">{s.n}</p>
            <h3 className="mt-4 font-serif text-2xl">{s.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </section>

      <section id="contact" className="container-page mt-20 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Chip>Plan your event</Chip>
          <h2 className="mt-4 font-display text-5xl text-clay md:text-6xl">Tell Us What You&apos;re Planning</h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Reservations and enquiries are handled by message. Fill in the form and we will open a ready-written
            WhatsApp message to our booking line.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PillLink href={whatsapp("Hello Toma l'atelier, I'd like to ask about a private event.")} external>
              WhatsApp {brand.bookingPhone}
            </PillLink>
            <PillLink href={brand.instagramUrl} variant="outline" external>
              DM on Instagram
            </PillLink>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-sm">
            <Image src={ig.venue} alt="An evening pop-up in a Damascus café" fill sizes="40vw" className="object-cover object-[50%_30%]" />
          </div>
        </div>
        <PrivateEventForm />
      </section>

      <section id="faq" className="container-page mt-24 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <h2 className="font-display text-5xl text-clay">Good to Know</h2>
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
