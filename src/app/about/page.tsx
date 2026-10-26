import type { Metadata } from "next";
import Image from "next/image";
import { Chip, PageHeader, PillLink } from "@/components/site/primitives";
import { img, instructors, photos } from "@/lib/data";

export const metadata: Metadata = { title: "Our Story" };

const steps = [
  { n: "01", title: "Wedge", text: "Clay is wedged by hand to remove air and align its particles.", image: photos.handsClay },
  { n: "02", title: "Throw", text: "Each form is centred and pulled on the wheel, or built by hand.", image: photos.centering },
  { n: "03", title: "Trim & Carve", text: "At leather-hard we trim feet, carve flutes and attach handles.", image: photos.trimming },
  { n: "04", title: "Glaze & Fire", text: "Two firings — bisque, then glaze — bring out the final colour.", image: photos.painting },
];

const stats = [
  { v: "2014", l: "Studio founded" },
  { v: "13", l: "Stores in the US" },
  { v: "132", l: "Countries shipped" },
  { v: "10k+", l: "Happy customers" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Earth, Water, Fire and Patience"
        intro="Clayra began as a single wheel in a garden shed. Today it's a studio of twelve makers who still touch every piece we sell."
      />

      <section id="story" className="container-page grid gap-4 md:grid-cols-[1.5fr_1fr]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
          <Image src={img(photos.studioWheel, 1600)} alt="The Clayra studio" fill sizes="60vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative flex-1 overflow-hidden rounded-sm">
            <Image src={img(photos.tools, 800)} alt="Pottery tools" fill sizes="40vw" className="object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4 rounded-sm bg-white p-6">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="font-serif text-4xl font-light text-clay-light">{s.v}</p>
                <p className="text-[11px] text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="container-page py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Chip>Studio Process</Chip>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">From Earth to Heirloom</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A single vase spends around three weeks in our studio before it is ready to leave.
          </p>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="overflow-hidden rounded-sm bg-white">
              <div className="relative aspect-[4/3]">
                <Image src={img(s.image, 600)} alt={s.title} fill sizes="25vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs text-clay">{s.n}</p>
                <h3 className="mt-1 font-serif text-2xl">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page">
        <h2 className="mb-8 font-display text-5xl">The Hands Behind Clayra</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {Object.values(instructors).map((p) => (
            <div key={p.name} className="flex items-center gap-4 rounded-full bg-white p-2 pr-6">
              <Image src={p.avatar} alt="" width={64} height={64} className="size-16 rounded-full object-cover" />
              <div>
                <p className="font-serif text-2xl leading-tight">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="sustainability" className="container-page mt-24">
        <div className="grid items-center gap-10 rounded-sm bg-sand p-8 md:grid-cols-2 md:p-14">
          <div>
            <Chip>Sustainability</Chip>
            <h2 className="mt-4 font-display text-5xl">Made to Last, Made Responsibly</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We reclaim every scrap of clay, fire our kilns with renewable electricity, and pack orders in recycled paper.
              Pieces with tiny flaws become our studio seconds, never landfill.
            </p>
            <PillLink href="/booking" className="mt-8">
              Visit the studio
            </PillLink>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-sm">
            <Image src={img(photos.marketPots, 900)} alt="Terracotta pots" fill sizes="50vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
