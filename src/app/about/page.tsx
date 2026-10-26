import type { Metadata } from "next";
import Image from "next/image";
import { Chip, PageHeader, PillLink } from "@/components/site/primitives";
import { brand, ig, img, pillars, stock, venues, workshops } from "@/lib/data";

export const metadata: Metadata = { title: "Our Story" };

const steps = [
  { n: "01", title: "Shape", text: "Pinch, coil or slab-build raw organic clay without the rigidity of a wheel.", image: ig.dishCheckered },
  { n: "02", title: "Texture", text: "Stamp, carve or press real leaves into the soft clay before the first firing.", image: ig.dishLetsCook },
  { n: "03", title: "Paint & glaze", text: "Freehand illustrations in premium underglaze, then a glossy glaze.", image: ig.dishFloral },
  { n: "04", title: "Kiln & collect", text: `The studio fires your pieces. Pickup is ready ${brand.kilnDays} after the workshop.`, image: ig.dishOlive },
];

const tracks = [
  {
    title: "Slow Travel & Damascus Soul",
    text: "Connects visitors with the traditional roots of the region. Sufi-inspired art and classical Levantine soul meet the painting phase, with patterns drawn from the architecture of the Old City.",
  },
  {
    title: "Private Sanctuary",
    text: "An intimate art escape focused on raw tactile exploration, with individual space, low lighting, acoustic ambiance and slow hand-sculpting to unplug from digital distraction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={`${brand.tagline} · Damascus`}
        title="An Independent Art Collective on the Move"
        intro="Toma l'atelier is a mobile community art collective and fine-art incubator: a bridge between historical craft heritage and modern, contemporary self-expression."
      />

      <section id="story" className="container-page grid gap-4 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-sm bg-white p-8 md:p-12">
          <Chip>Mission</Chip>
          <p className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
            To demystify fine ceramics and raw pottery, making hands-on clay accessible to people of every age, skill
            level and background.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            The studio rejects rigid academic training in favour of experiential, mindfulness-driven art therapy. It is a
            restorative, migratory sanctuary: a calm haven that slows the pace of everyday life through the focus of
            physical craft.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative min-h-72 overflow-hidden rounded-sm">
            <Image src={ig.corner} alt="Aprons hanging by a painted door and a round table with red roses" fill sizes="25vw" className="object-cover" />
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-sm">
            <Image src={ig.room} alt="The studio room with wooden beams, shelves of ceramics and workshop tables" fill sizes="25vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container-page mt-4 grid gap-4 lg:grid-cols-[1fr_1.3fr]">
        <div className="rounded-sm bg-clay p-8 text-white md:p-12">
          <Chip dark>Vision</Chip>
          <p className="mt-5 font-script text-5xl leading-none md:text-6xl">As a matter of fact, to stop thinking.</p>
          <p className="mt-6 text-sm leading-relaxed text-white/80">
            Clay and painting are tools for mindfulness: a mental and emotional escape from daily stress, and a chance
            to unplug from digital distraction. The raw texture of the clay guides you, so technical perfection is never
            the goal.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <li key={p.title} className="rounded-sm border border-ink/10 bg-white/60 p-6">
              <p className="font-serif text-4xl font-light text-clay-light">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-serif text-2xl">{p.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="process" className="container-page py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Chip>How a seat works</Chip>
            <h2 className="mt-4 font-display text-5xl text-clay md:text-6xl">From Raw Earth to Your Hands</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every session is turn-key: clay or porcelain, tools, underglazes, firing and hospitality are all included.
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
        <h2 className="mb-8 font-display text-5xl text-clay">Two Themed Tracks</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tracks.map((t) => (
            <div key={t.title} className="rounded-sm bg-white p-8">
              <p className="font-serif text-3xl">{t.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              <p className="mt-5 text-[11px] text-clay">
                {workshops.filter((w) => w.track === t.title).length} workshops
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="venues" className="container-page mt-24">
        <div className="grid items-center gap-10 rounded-sm bg-sand p-8 md:grid-cols-2 md:p-14">
          <div>
            <Chip>No single storefront</Chip>
            <h2 className="mt-4 font-display text-5xl text-clay">We Pop Up Across Damascus</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              To support the local creative economy, the studio cycles through independent venues, from multi-day
              tracks to single-day cultural activations.
            </p>
            <PillLink href="/booking" className="mt-8">
              See upcoming sessions
            </PillLink>
          </div>
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {venues.map((v) => (
              <li key={v.id} className="flex items-baseline justify-between gap-4 py-3">
                <span className="font-serif text-2xl">{v.name}</span>
                <span className="text-right text-[11px] text-muted-foreground">{v.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page mt-24 grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-white">
          <Image src={img(stock.tote, 1000)} alt="A canvas tote bag" fill sizes="50vw" className="object-cover" />
        </div>
        <div>
          <Chip>Maker&apos;s mark</Chip>
          <h2 className="mt-4 font-display text-5xl text-clay md:text-6xl">The Cat and the Sunflower</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            The resident artists carved a stylised cat silhouette that is stamped onto raw clay, paper bags and canvas
            totes. It becomes the final maker&apos;s mark on a mug before it goes into the kiln, and inspires the
            fan-favourite Strawberry Cat pieces. Sunflowers tie the whole look to the sunlit, soulful spirit of the Old
            City.
          </p>
          <PillLink href="/collections" className="mt-8">
            Meet the collections
          </PillLink>
        </div>
      </section>
    </>
  );
}
