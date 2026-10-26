import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { ProductShowcase } from "@/components/product/product-showcase";
import { AvatarStack, Chip, PillLink } from "@/components/site/primitives";
import { avatars, img, photos, products } from "@/lib/data";

const features = [
  { text: "Shaping Earth into Art", image: "1674390521253-79caf82d0ceb" },
  { text: "Crafted from Clay, Made with Soul", image: "1729625561980-be4546863105" },
  { text: "Timeless Pottery, Handmade Beauty", image: "1618722060945-b87f7326995b" },
  { text: "Where Clay Becomes Culture", image: "1613424777445-f93a2a48e285" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ArtisanIntro />
      <ProductShowcase />
      <ChicBanner />
      <Creativity />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] flex-col overflow-hidden text-white md:h-[100svh] md:max-h-[820px]">
      <Image
        src={img(photos.heroHands, 2000)}
        alt="Hands shaping a terracotta pot on a wheel"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/10 to-black/55" />

      <div className="container-page flex flex-1 flex-col pt-24 pb-8 md:pt-28 md:pb-12">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="font-display text-[clamp(3.5rem,11vw,10rem)] font-light">Crafting Memories</h1>

          <div className="mt-6 flex items-center justify-center gap-3">
            <PillLink href="/shop" variant="light">
              Explore Clay
            </PillLink>
            <Link
              href="/about#process"
              aria-label="Watch our process"
              className="grid size-11 place-items-center rounded-full bg-white text-ink transition-transform hover:scale-105"
            >
              <Play className="size-4 fill-ink" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-10 md:flex-row md:items-end md:justify-between">
          <Link
            href="/about"
            className="flex w-full max-w-xs items-center gap-4 rounded-sm bg-white p-2 pr-6 text-ink shadow-xl transition-transform hover:-translate-y-1"
          >
            <Image
              src={img(photos.womanWheel, 300)}
              alt="Potter at the wheel"
              width={110}
              height={110}
              className="size-24 rounded-sm object-cover md:size-28"
            />
            <div>
              <Chip className="text-[9px]">Artful Clay Design</Chip>
              <p className="mt-2 font-serif text-2xl leading-[0.95] md:text-[28px]">Elegance Shaped by Hand</p>
            </div>
          </Link>
          <div className="max-w-[220px]">
            <p className="font-serif text-2xl">Shape Your World in Clay</p>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              Shape your creativity with every touch of clay.
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
            className="flex items-center gap-3 rounded-full border border-ink/10 bg-white/50 p-1.5 pr-5 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
          >
            <Image src={img(f.image, 120)} alt="" width={44} height={44} className="size-11 rounded-full object-cover" />
            <span className="text-xs leading-tight font-medium">{f.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ArtisanIntro() {
  return (
    <section className="container-page grid gap-10 py-20 lg:grid-cols-[180px_1fr_340px] lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div className="space-y-12">
          <Chip>Art of Pottery</Chip>
          <p className="max-w-[160px] text-xs leading-relaxed text-muted-foreground">
            Let your creativity flow through the art of pottery.
          </p>
        </div>
        <div>
          <AvatarStack srcs={avatars.slice(0, 2)} />
          <p className="mt-3 font-serif text-6xl font-light text-clay-light">10k+</p>
          <p className="mt-1 text-xs font-medium">Satisfied Customers</p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-10">
        <h2 className="font-display text-5xl md:text-6xl lg:text-[64px]">
          Artisan Pottery that Stands the Test of Time
        </h2>
        <div className="flex gap-3">
          <Link href="/shop/glaze-study-plates" className="relative size-36 overflow-hidden rounded-sm md:size-40">
            <Image src={img(photos.glazes, 400)} alt="Glazed plates" fill sizes="160px" className="object-cover" />
          </Link>
          <Link href="/collections" className="relative size-36 overflow-hidden rounded-sm md:size-40">
            <Image src={img(photos.greyPot, 400)} alt="Pot on the wheel" fill sizes="160px" className="object-cover" />
            <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-[10px] font-medium">
              Golden Clay
            </span>
          </Link>
        </div>
      </div>

      <Link href="/booking" className="group relative block aspect-[4/5] overflow-hidden rounded-sm lg:aspect-auto">
        <Image
          src={img(photos.terracottaWheel, 900)}
          alt="Hands throwing a terracotta pot"
          fill
          sizes="(min-width: 1024px) 340px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-4 bottom-4 bg-white p-4">
          <p className="font-serif text-2xl leading-[1.05]">Unveil Your Artistry, Discover Your Clay-ness</p>
        </div>
      </Link>
    </section>
  );
}

function ChicBanner() {
  const side = [products[0], products[2]];
  return (
    <section className="relative isolate overflow-hidden text-white">
      <Image
        src={img(photos.smilingPotter, 2000)}
        alt="Smiling potter at the wheel"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[60%_30%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/15 to-transparent" />
      <div className="container-page relative flex min-h-[560px] flex-col justify-end py-12 md:min-h-[680px]">
        <div className="absolute top-10 right-5 hidden flex-col gap-3 md:right-10 md:flex">
          {side.map((p) => (
            <Link
              key={p.slug}
              href={`/shop/${p.slug}`}
              className="w-40 bg-white/95 p-2 text-ink shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image src={img(p.image, 300)} alt={p.name} fill sizes="160px" className="object-cover" />
              </div>
              <p className="mt-2 text-center text-[11px] font-medium">{p.name}</p>
            </Link>
          ))}
        </div>

        <div className="flex gap-10">
          <Stat value="13" label={["Stores in", "United States"]} />
          <Stat value="132" label={["Countries with", "Free Shipping"]} />
        </div>
        <h2 className="mt-6 max-w-xl font-display text-5xl md:text-7xl">Sleek and Chic Pottery for Discerning Tastes</h2>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: [string, string] }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="font-serif text-4xl font-light text-clay-light">{value}</span>
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
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-4 pt-2">
          <AvatarStack srcs={avatars} size={36} />
          <p className="font-serif text-2xl leading-tight">Create Something Timeless with Every Touch of Clay</p>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-sm">
          <Image src={img(photos.pinchingPot, 600)} alt="Hands holding a fresh pot" fill sizes="25vw" className="object-cover" />
        </div>
        <div className="relative col-span-2 -mt-16 aspect-[16/8] overflow-hidden rounded-sm md:-mt-24">
          <Image
            src={img(photos.focusedPotter, 1100)}
            alt="Potter shaping a bowl"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <Link
            href="/custom-orders"
            className="absolute inset-x-3 bottom-3 flex items-center gap-4 bg-white px-4 py-3 text-ink md:inset-x-4"
          >
            <span className="font-serif text-4xl font-light text-clay-light">309+</span>
            <span>
              <span className="block text-sm font-medium">Custom Pottery Design</span>
              <span className="block text-[11px] text-muted-foreground">
                Handcrafted pottery tailored to your vision.
              </span>
            </span>
          </Link>
        </div>
      </div>

      <div>
        <Chip>Modern Clay Studio</Chip>
        <h2 className="mt-5 font-display text-5xl md:text-[64px]">
          Unleash Your Creativity with{" "}
          <span className="inline-flex items-center gap-3 align-middle">
            Clay
            <span className="inline-flex -space-x-3">
              {[photos.glazes, photos.vaseShelf, photos.cupsRow].map((p) => (
                <Image
                  key={p}
                  src={img(p, 120)}
                  alt=""
                  width={48}
                  height={48}
                  className="size-11 rounded-full border-2 border-cream object-cover md:size-12"
                />
              ))}
            </span>
          </span>
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          Whether you are crafting a gift, building a pottery business or simply slowing down, start by considering the
          essence of your style. Handcrafted, one-of-a-kind pieces, or modern, minimalist designs — our studio helps you
          shape both.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <PillLink href="/booking">Start Creating</PillLink>
          <Link href="/booking?workshop=custom-consult" className="flex items-center gap-3">
            <span className="font-serif text-3xl">$24</span>
            <span className="border-l border-ink/20 pl-3 text-[11px] leading-tight font-medium">
              30 Minute Video
              <br />
              Consultants
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
