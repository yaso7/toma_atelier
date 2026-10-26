import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import { PageHeader, PillLink } from "@/components/site/primitives";
import { brand } from "@/lib/data";

export const metadata: Metadata = { title: "From the Studio" };

const frames = [
  { src: "/toma/gallery-01.jpg", w: 1500, h: 2000, alt: "A resident artist guiding a guest through a pattern while she paints, with an iced coffee on the table", caption: "Step-by-step guidance" },
  { src: "/toma/gallery-02.jpg", w: 1500, h: 2000, alt: "Three friends painting ceramics around a round table", caption: "Painting nights" },
  { src: "/toma/gallery-03.jpg", w: 1500, h: 2000, alt: "Two friends holding up a blue dish and a pink painted cup next to a cherry cake", caption: "Made with friends" },
  { src: "/toma/gallery-04.jpg", w: 2000, h: 1711, alt: "Three guests holding up their painted dishes", caption: "Dishes to take home" },
  { src: "/toma/gallery-05.jpg", w: 2000, h: 2000, alt: "Two members of the team filling in the booking notebook", caption: "The team" },
  { src: "/toma/gallery-06.jpg", w: 1502, h: 2000, alt: "A family holding up their hand-painted dishes in front of the studio shelves", caption: "Family sessions" },
  { src: "/toma/gallery-07.jpg", w: 1500, h: 2000, alt: "Hands painting a black disc with silver paint beside a crowded palette", caption: "Paint-covered tables" },
  { src: "/toma/gallery-08.jpg", w: 1500, h: 2000, alt: "A young maker carving details into a hand-built clay cup", caption: "Young makers" },
  { src: "/toma/gallery-09.jpg", w: 1500, h: 2000, alt: "A guest holding up a painted canvas while her friend paints a small clay dish at the round table", caption: "Canvas and clay" },
  { src: "/toma/gallery-10.jpg", w: 1500, h: 2000, alt: "Two friends holding up their painted canvases, a pink sunset and a starry night", caption: "Painted canvases" },
  { src: "/toma/gallery-11.jpg", w: 1893, h: 2000, alt: "A block-printed cloth hanging on the wall with a seahorse and coral stamped beside it", caption: "Linocut prints" },
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
        intro="Moments from workshops across Damascus. Always a living workshop, always human hands working clay."
      />

      <section className="container-page columns-2 gap-3 md:columns-3 lg:columns-4 [&>figure]:mb-3">
        {frames.map((f) => (
          <figure key={f.src} className="relative overflow-hidden rounded-sm break-inside-avoid">
            <Image
              src={f.src}
              alt={f.alt}
              width={f.w}
              height={f.h}
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
