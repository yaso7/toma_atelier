import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import { PageHeader, PillLink } from "@/components/site/primitives";
import { brand, ig } from "@/lib/data";

export const metadata: Metadata = { title: "From the Studio" };

const frames = [
  { src: ig.damascus, alt: "A painting night in Damascus", caption: "Painting nights" },
  { src: ig.kiln, alt: "Opening the kiln to fired cups", caption: "Kiln day" },
  { src: ig.smile, alt: "A guest in a Toma apron waving", caption: "Aprons on" },
  { src: ig.wheel, alt: "Shaping clay at the wheel", caption: "At the wheel" },
  { src: ig.venue, alt: "An evening pop-up with heart balloons", caption: "Pop-up evenings" },
  { src: ig.shelves, alt: "The studio's wheel and glaze shelves", caption: "The studio" },
  { src: ig.sea, alt: "Pouring cream slip on a pebble beach", caption: "Slow travel" },
  { src: ig.table, alt: "A shared painting table", caption: "Shared tables" },
];

const directions = [
  { title: "The studio environment", text: "Cozy, warm-lit shelves, drying racks, custom glazes and botanical accents." },
  { title: "Tactile process", text: "Wet clay, messy aprons, raw tools and hands that are busy and unhurried." },
  { title: "Finished ware", text: "Imperfect, rich glazes and real-world use, such as a mug on a café table." },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="From the Studio"
        title="Honest, Warm, Unposed"
        intro="Moments from workshops across Damascus, taken from our Instagram. Always a living workshop, always human hands working clay."
      />

      <section className="container-page columns-2 gap-3 md:columns-3 lg:columns-4 [&>figure]:mb-3">
        {frames.map((f, i) => (
          <figure key={f.src} className="relative overflow-hidden rounded-sm break-inside-avoid">
            <Image
              src={f.src}
              alt={f.alt}
              width={360}
              height={i % 3 === 0 ? 560 : 640}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="h-auto w-full object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-cream px-3 py-1 text-[10px] font-medium">
              {f.caption}
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="container-page mt-16 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <figure className="flex flex-col justify-between rounded-sm bg-clay p-8 text-white md:p-10">
          <Quote className="size-8 text-ochre" />
          <blockquote className="mt-10 font-serif text-3xl leading-tight md:text-4xl">
            An oasis of love and creative energy.
          </blockquote>
          <figcaption className="mt-6 text-xs text-white/75">How workshop guests describe the atmosphere</figcaption>
        </figure>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {directions.map((d) => (
            <div key={d.title} className="rounded-sm bg-white p-6">
              <p className="font-serif text-2xl text-clay">{d.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-16 flex flex-col items-center text-center">
        <p className="font-script text-4xl text-clay">See what we are making this week</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <PillLink href={brand.instagramUrl} external>
            Follow @{brand.instagram}
          </PillLink>
          <PillLink href="/booking" variant="outline">
            Book a seat
          </PillLink>
        </div>
      </section>
    </>
  );
}
