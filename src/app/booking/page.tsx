import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { Flame, MessageCircle, Sparkles } from "lucide-react";
import { BookingExperience } from "@/components/booking/booking-experience";
import { Chip } from "@/components/site/primitives";
import { brand, ig, img, stock } from "@/lib/data";

export const metadata: Metadata = { title: "Book a Workshop" };

const notes = [
  { icon: Sparkles, title: "Everything included", text: "Clay or porcelain, tools, underglazes and kiln firing." },
  { icon: Flame, title: "Ready in 10 to 14 days", text: "Pieces are glaze-fired and held for pickup." },
  { icon: MessageCircle, title: "Confirm by message", text: "Walk-ins welcome, but reserving on WhatsApp or DM is preferred." },
];

async function BookingWithParams({ searchParams }: PageProps<"/booking">) {
  const { workshop } = await searchParams;
  return <BookingExperience initialWorkshop={typeof workshop === "string" ? workshop : "all"} />;
}

export default function BookingPage(props: PageProps<"/booking">) {
  return (
    <>
      <section className="relative isolate overflow-hidden text-white">
        <Image
          src={img(stock.heroHands, 2000)}
          alt="Hands shaping raw clay"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="container-page flex min-h-[440px] flex-col justify-end pt-32 pb-10 md:min-h-[520px]">
          <Chip dark>Studio Workshops</Chip>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h1 className="max-w-3xl font-display text-6xl md:text-8xl">Reserve Your Seat at the Table</h1>
            <div className="flex items-center gap-4">
              <Image src={ig.table} alt="" width={64} height={80} className="h-20 w-16 rounded-sm object-cover" />
              <p className="text-xs leading-tight text-white/85">
                No experience needed.
                <br />
                Booking line {brand.bookingPhone}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ul className="container-page grid gap-3 pt-8 md:grid-cols-3">
        {notes.map((n) => (
          <li key={n.title} className="flex items-start gap-3 rounded-sm border border-ink/10 bg-white/60 p-4">
            <n.icon className="mt-0.5 size-4 shrink-0 text-clay" />
            <p className="text-xs leading-relaxed">
              <span className="block font-medium">{n.title}</span>
              <span className="text-muted-foreground">{n.text}</span>
            </p>
          </li>
        ))}
      </ul>

      <div className="pt-8">
        <Suspense fallback={<BookingExperience />}>
          <BookingWithParams {...props} />
        </Suspense>
      </div>
    </>
  );
}
