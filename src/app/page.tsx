import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { ProductShowcase } from "@/components/product/product-showcase";
import { Chip, PillLink } from "@/components/site/primitives";
import { brand, ig, img, pillars, stock, venues, whatsapp } from "@/lib/data";

const features = [
  { text: pillars[0].title, image: ig.kiln },
  { text: pillars[1].title, image: ig.smile },
  { text: pillars[2].title, image: ig.venue },
  { text: pillars[3].title, image: ig.damascus },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Intro />
      <ProductShowcase />
      <LivingWorkshop />
      <Creativity />
      <Venues />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] flex-col overflow-hidden text-white md:h-[100svh] md:max-h-[820px]">
      <Image
        src={img(stock.heroHands, 2000)}
        alt="Hands shaping raw clay on a wheel"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/10 to-black/55" />

      <div className="container-page flex flex-1 flex-col pt-24 pb-8 md:pt-28 md:pb-12">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="font-display text-[clamp(3.25rem,10vw,9rem)] font-light">Stop Thinking, Start Shaping</h1>

          <div className="mt-6 flex items-center justify-center gap-3">
            <PillLink href="/booking" variant="light">
              Book a Seat
            </PillLink>
            <Link
              href="/about#process"
              aria-label="See how it works"
              className="grid size-11 place-items-center rounded-full bg-white text-cobalt transition-transform hover:scale-105"
            >
              <Play className="size-4 fill-cobalt" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-10 md:flex-row md:items-end md:justify-between">
          <Link
            href="/about"
            className="flex w-full max-w-xs items-center gap-4 rounded-sm bg-cream p-2 pr-6 text-ink shadow-xl transition-transform hover:-translate-y-1"
          >
            <Image
              src={ig.sign}
              alt="The studio's hand-made tile sign listing its activities"
              width={110}
              height={110}
              className="size-24 shrink-0 rounded-sm object-cover object-[50%_70%] md:size-28"
            />
            <div>
              <Chip className="text-[9px]">{brand.tagline}</Chip>
              <p className="mt-2 font-serif text-2xl leading-[0.95] md:text-[28px]">A Living Workshop in Damascus</p>
            </div>
          </Link>
          <div className="max-w-[240px]">
            <p className="font-script text-3xl leading-none">Slow down with raw earth</p>
            <p className="mt-2 text-xs leading-relaxed text-white/80">
              Mindful, hands-on art therapy: no experience needed, everything included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="container-page pt-10">
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <li
            key={f.text}
            className="flex items-center gap-3 rounded-full border border-ink/10 bg-white/60 p-1.5 pr-5 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
          >
            <Image src={f.image} alt="" width={44} height={44} className="size-11 rounded-full object-cover" />
            <span className="text-xs leading-tight font-medium">{f.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Intro() {
  return (
    <section className="container-page grid gap-10 py-20 lg:grid-cols-[180px_1fr_340px] lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div className="space-y-12">
          <Chip>Art Therapy, Slow Living</Chip>
          <p className="max-w-[170px] text-xs leading-relaxed text-muted-foreground">
            A calm, creative haven that slows the pace of everyday life through physical craft.
          </p>
        </div>
        <div>
          <p className="font-serif text-6xl font-light text-clay-light">20K</p>
          <p className="mt-1 text-xs font-medium">Community on Instagram</p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-10">
        <h2 className="font-display text-5xl text-clay md:text-6xl lg:text-[64px]">
          Where Historical Craft Meets Modern Self-Expression
        </h2>
        <div className="flex gap-3">
          <Link href="/booking" className="relative h-44 w-32 overflow-hidden rounded-sm md:h-52 md:w-36">
            <Image src={ig.painting} alt="Painting a bird silhouette on a clay disc" fill sizes="144px" className="object-cover" />
          </Link>
          <Link href="/collections" className="relative h-44 w-32 overflow-hidden rounded-sm md:h-52 md:w-36">
            <Image src={ig.handBuilding} alt="Shaping a clay bowl by hand" fill sizes="144px" className="object-cover" />
            <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-[10px] font-medium">
              Hand-Building
            </span>
          </Link>
        </div>
      </div>

      <Link href="/booking" className="group relative block aspect-[4/5] overflow-hidden rounded-sm lg:aspect-auto">
        <Image
          src={ig.group}
          alt="A group shaping clay together at a shared table"
          fill
          sizes="(min-width: 1024px) 340px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-4 bottom-4 bg-cream p-4">
          <p className="font-serif text-2xl leading-[1.05]">Anyone can create something beautiful</p>
        </div>
      </Link>
    </section>
  );
}

function LivingWorkshop() {
  const shots = [
    { src: ig.damascus, alt: "Painting night in Damascus" },
    { src: ig.trio, alt: "Three guests holding up their hand-built pieces" },
    { src: ig.wheel, alt: "Shaping clay at the wheel" },
    { src: ig.shelves, alt: "The studio wheel and shelves" },
  ];
  return (
    <section className="relative isolate overflow-hidden bg-espresso text-white">
      <div className="container-page py-16 md:py-24">
        <div className="grid items-end gap-8 md:grid-cols-[1.3fr_1fr]">
          <h2 className="font-display text-5xl md:text-7xl">Inside the Living Workshop</h2>
          <div className="flex gap-10 md:justify-end">
            <Stat value="6" label={["Partner venues", "across Damascus"]} />
            <Stat value="14d" label={["Kiln to pickup", "10 to 14 days"]} />
          </div>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {shots.map((s, i) => (
            <li key={s.src} className={`relative aspect-[3/4] overflow-hidden rounded-sm ${i % 2 ? "md:mt-10" : ""}`}>
              <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-lg font-script text-3xl text-clay-light">
          Cozy, warm-lit and a little nostalgic: smooth jazz, coffee and a vintage rotary phone for your photo corner.
        </p>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: [string, string] }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="font-serif text-5xl font-light text-clay-light">{value}</span>
      <span className="text-[11px] leading-tight text-white/80">
        {label[0]}
        <br />
        {label[1]}
      </span>
    </div>
  );
}

function Creativity() {
  return (
    <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <div className="flex flex-col gap-4 border-t border-clay/30 pt-4">
          <p className="font-script text-4xl leading-none text-clay">Make a memory with your hands</p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Slow travel and slow living: create something physical, take it home after the kiln.
          </p>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-sm">
          <Image src={ig.wave} alt="A guest in a Toma apron holding a clay tray and waving" fill sizes="25vw" className="object-cover object-top" />
        </div>
        <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-sm md:aspect-[16/9]">
          <Image
            src={ig.wall}
            alt="A wall of printed photo-booth memories from past workshops"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[50%_64%]"
          />
          <Link
            href="/private-events"
            className="absolute inset-x-3 bottom-3 flex items-center gap-4 bg-cream px-4 py-3 text-ink md:inset-x-4"
          >
            <span className="font-script text-4xl text-clay">Host</span>
            <span>
              <span className="block text-sm font-medium">Private &amp; corporate events</span>
              <span className="block text-[11px] text-muted-foreground">
                Birthdays, teams and small groups, with a playlist made for you.
              </span>
            </span>
          </Link>
        </div>
      </div>

      <div>
        <Chip>All skill levels welcome</Chip>
        <h2 className="mt-5 font-display text-5xl text-clay md:text-[64px]">Unleash Your Creativity with Clay</h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          Each seat includes premium clay or porcelain, professional tools, underglazes and full kiln firing. Resident
          artists guide you step by step, so no prior pottery experience is needed.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <PillLink href="/booking">Start Creating</PillLink>
          <a
            href={whatsapp("Hello Toma l'atelier, I'd like to reserve a seat.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <span className="font-serif text-2xl text-cobalt">{brand.bookingPhone}</span>
            <span className="border-l border-ink/20 pl-3 text-[11px] leading-tight font-medium">
              Booking line
              <br />
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Venues() {
  return (
    <section className="container-page pb-4">
      <div className="flex flex-col items-start justify-between gap-5 border-y border-ink/10 py-6 md:flex-row md:items-center">
        <p className="shrink-0 font-script text-3xl text-clay">Find us around Damascus</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium">
          {venues.map((v) => (
            <li key={v.id}>{v.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
