// Hard-coded catalogue for the Clayra storefront and studio.

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  heroHands: "1609881582722-4a8ab7cd54d8",
  wheelDark: "1493106641515-6b5631de4bb9",
  womanWheel: "1764507768733-667e135d8cb9",
  terracottaWheel: "1609881583302-61548332039c",
  handsClay: "1621846323386-a60faf26f962",
  smilingPotter: "1625742579865-8bba525ba5de",
  focusedPotter: "1598815272841-4e85a77e0a67",
  pinchingPot: "1590605095243-072811dbe64c",
  slipHands: "1771523350747-638a89667c8f",
  centering: "1607556671927-78a6605e290b",
  trimming: "1753164725860-ffcd260b7b32",
  carving: "1673339065001-a30d6c343cdd",
  painting: "1673339065013-f8411fb93848",
  glazes: "1577576223085-3eb295cd414f",
  studioWheel: "1676125105332-608345abe20e",
  potterAtWork: "1760894192884-37a7037200ba",
  greyPot: "1601135183537-10c09f98902a",
  tools: "1595351298020-038700609878",
  handsBw: "1468322638156-074863f9362e",
  slabWork: "1572725335307-3303414b3360",
  marketPots: "1749518295706-dc15ca3b5fd5",
  cupsRow: "1725169412537-acd1cd15e10f",
  vaseShelf: "1597696929736-6d13bed8e6a8",
} as const;

export const avatars = [
  img("1494790108377-be9c29b29330", 160),
  img("1568602471122-7832951cc4c5", 160),
  img("1548382131-e0ebb1f0cdea", 160),
];

export type Category = "Vases" | "Bowls" | "Mugs" | "Plates" | "Jars";

export type Product = {
  slug: string;
  name: string;
  price: number;
  discount: number; // percent
  category: Category;
  collection: string;
  tags: ("popular" | "recent" | "handmade" | "bestseller")[];
  image: string;
  gallery: string[];
  description: string;
  material: string;
  dimensions: string;
  glaze: string;
  rating: number;
  reviews: number;
  stock: number;
};

export const products: Product[] = [
  {
    slug: "ancient-vessel",
    name: "Ancient Vessel",
    price: 560,
    discount: 10,
    category: "Vases",
    collection: "earthbound",
    tags: ["popular", "handmade", "bestseller"],
    image: "1618722060945-b87f7326995b",
    gallery: ["1618722060945-b87f7326995b", "1613424777445-f93a2a48e285", "1729625561980-be4546863105"],
    description:
      "A two-handled amphora thrown in a single session and burnished by hand. Its silhouette borrows from Mediterranean storage jars, softened for a modern shelf.",
    material: "Red earthenware",
    dimensions: "H 34cm · Ø 21cm",
    glaze: "Unglazed, burnished",
    rating: 4.9,
    reviews: 128,
    stock: 6,
  },
  {
    slug: "modern-vase",
    name: "Modern Vase",
    price: 871,
    discount: 10,
    category: "Vases",
    collection: "terracotta-modern",
    tags: ["recent", "popular"],
    image: "1674390521253-79caf82d0ceb",
    gallery: ["1674390521253-79caf82d0ceb", "1631125915597-adf46a94e436", "1631125915902-d8abe9225ff2"],
    description:
      "Fluted walls carved while leather-hard give this vase a rhythm of light and shadow. A satin terracotta finish keeps it warm and tactile.",
    material: "Terracotta",
    dimensions: "H 28cm · Ø 16cm",
    glaze: "Satin terracotta",
    rating: 4.8,
    reviews: 86,
    stock: 4,
  },
  {
    slug: "retro-vessel",
    name: "Retro Vessel",
    price: 675,
    discount: 10,
    category: "Jars",
    collection: "earthbound",
    tags: ["handmade", "bestseller"],
    image: "1729625561980-be4546863105",
    gallery: ["1729625561980-be4546863105", "1771627278991-8922851b9435", "1782351119423-3099437f3739"],
    description:
      "A spouted water jug inspired by Iberian botijos. Thrown in two parts and joined, with a loop handle pulled from the same clay body.",
    material: "Terracotta",
    dimensions: "H 30cm · Ø 19cm",
    glaze: "Raw clay interior seal",
    rating: 4.7,
    reviews: 64,
    stock: 9,
  },
  {
    slug: "mathilde",
    name: "Mathilde",
    price: 820,
    discount: 10,
    category: "Vases",
    collection: "quiet-forms",
    tags: ["recent", "handmade"],
    image: "1613424777445-f93a2a48e285",
    gallery: ["1613424777445-f93a2a48e285", "1618722060945-b87f7326995b", "1520408222757-6f9f95d87d5d"],
    description:
      "A slender bud vase made for a single dried stem. Mathilde is named after our first studio member and remains a quiet favourite.",
    material: "Stoneware",
    dimensions: "H 22cm · Ø 11cm",
    glaze: "Matte sand",
    rating: 4.9,
    reviews: 112,
    stock: 12,
  },
  {
    slug: "trio-of-stones",
    name: "Trio of Stones",
    price: 495,
    discount: 0,
    category: "Vases",
    collection: "quiet-forms",
    tags: ["popular", "handmade"],
    image: "1631125915902-d8abe9225ff2",
    gallery: ["1631125915902-d8abe9225ff2", "1631125916276-69bcd14e3980", "1631125915597-adf46a94e436"],
    description:
      "Three pinched vessels of varying heights, sold as a set. Each one leans slightly, like river stones stacked by hand.",
    material: "Speckled stoneware",
    dimensions: "H 14–24cm",
    glaze: "Raw exterior, clear interior",
    rating: 4.6,
    reviews: 41,
    stock: 7,
  },
  {
    slug: "amber-jug",
    name: "Amber Jug",
    price: 340,
    discount: 15,
    category: "Jars",
    collection: "terracotta-modern",
    tags: ["recent"],
    image: "1771627278991-8922851b9435",
    gallery: ["1771627278991-8922851b9435", "1749518295706-dc15ca3b5fd5", "1729625561980-be4546863105"],
    description:
      "Small-batch jugs and bottles fired together in our wood kiln, each carrying its own ash flashing.",
    material: "Wood-fired stoneware",
    dimensions: "H 18–26cm",
    glaze: "Natural ash",
    rating: 4.5,
    reviews: 23,
    stock: 15,
  },
  {
    slug: "sienna-bowl-set",
    name: "Sienna Bowl Set",
    price: 210,
    discount: 0,
    category: "Bowls",
    collection: "everyday-table",
    tags: ["popular", "bestseller"],
    image: "1610701596007-11502861dcfa",
    gallery: ["1610701596007-11502861dcfa", "1577576223085-3eb295cd414f", "1590422749897-47036da0b0ff"],
    description:
      "Four nesting bowls dipped halfway so the bare clay foot shows. Oven, microwave and dishwasher safe.",
    material: "Stoneware",
    dimensions: "Ø 10–18cm",
    glaze: "Cream dip glaze",
    rating: 4.8,
    reviews: 203,
    stock: 20,
  },
  {
    slug: "cloud-cups",
    name: "Cloud Cups",
    price: 96,
    discount: 0,
    category: "Mugs",
    collection: "everyday-table",
    tags: ["recent", "handmade"],
    image: "1590422749897-47036da0b0ff",
    gallery: ["1590422749897-47036da0b0ff", "1725169412537-acd1cd15e10f", "1610701596007-11502861dcfa"],
    description:
      "Soft, rippled espresso cups with a thumb-rest handle. Sold as a stack of four.",
    material: "Porcelain",
    dimensions: "H 7cm · 120ml",
    glaze: "Milk white gloss",
    rating: 4.7,
    reviews: 77,
    stock: 30,
  },
  {
    slug: "glaze-study-plates",
    name: "Glaze Study Plates",
    price: 180,
    discount: 5,
    category: "Plates",
    collection: "everyday-table",
    tags: ["popular"],
    image: "1577576223085-3eb295cd414f",
    gallery: ["1577576223085-3eb295cd414f", "1610701596007-11502861dcfa", "1725169412537-acd1cd15e10f"],
    description:
      "Side plates glazed from our test tiles: every set mixes six colours, so no two tables match.",
    material: "Stoneware",
    dimensions: "Ø 20cm",
    glaze: "Assorted",
    rating: 4.6,
    reviews: 58,
    stock: 18,
  },
  {
    slug: "dune-vase",
    name: "Dune Vase",
    price: 390,
    discount: 0,
    category: "Vases",
    collection: "quiet-forms",
    tags: ["handmade"],
    image: "1520408222757-6f9f95d87d5d",
    gallery: ["1520408222757-6f9f95d87d5d", "1631125916276-69bcd14e3980", "1613424777445-f93a2a48e285"],
    description:
      "A wide-shouldered vase with a chalky finish that takes on the colour of the light around it.",
    material: "Stoneware",
    dimensions: "H 26cm · Ø 20cm",
    glaze: "Chalk white",
    rating: 4.8,
    reviews: 39,
    stock: 5,
  },
  {
    slug: "market-planters",
    name: "Market Planters",
    price: 145,
    discount: 20,
    category: "Jars",
    collection: "terracotta-modern",
    tags: ["bestseller"],
    image: "1749518295706-dc15ca3b5fd5",
    gallery: ["1749518295706-dc15ca3b5fd5", "1771627278991-8922851b9435", "1674390521253-79caf82d0ceb"],
    description:
      "Classic terracotta pots with drainage holes and saucers. Breathable clay keeps roots happy.",
    material: "Terracotta",
    dimensions: "Ø 12 / 16 / 20cm",
    glaze: "Unglazed",
    rating: 4.5,
    reviews: 144,
    stock: 40,
  },
  {
    slug: "studio-cups",
    name: "Studio Cups",
    price: 120,
    discount: 0,
    category: "Mugs",
    collection: "everyday-table",
    tags: ["popular", "bestseller"],
    image: "1725169412537-acd1cd15e10f",
    gallery: ["1725169412537-acd1cd15e10f", "1590422749897-47036da0b0ff", "1577576223085-3eb295cd414f"],
    description:
      "Handle-less tumblers for tea, water or wine. Glazed inside, raw and grippy outside.",
    material: "Stoneware",
    dimensions: "H 9cm · 250ml",
    glaze: "Speckled oat",
    rating: 4.9,
    reviews: 167,
    stock: 24,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const salePrice = (p: Product) => Math.round(p.price * (1 - p.discount / 100));

export type Collection = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export const collections: Collection[] = [
  {
    slug: "earthbound",
    name: "Earthbound",
    tagline: "Ancient forms, burnished by hand",
    description:
      "Vessels that echo centuries of storage jars and amphorae, made with red earthenware dug within 200 miles of the studio.",
    image: "1618722060945-b87f7326995b",
  },
  {
    slug: "terracotta-modern",
    name: "Terracotta Modern",
    tagline: "Warm clay, clean lines",
    description:
      "Fluted, carved and spouted pieces that bring the colour of fired earth to contemporary interiors.",
    image: "1674390521253-79caf82d0ceb",
  },
  {
    slug: "quiet-forms",
    name: "Quiet Forms",
    tagline: "Soft silhouettes, muted glazes",
    description:
      "Minimal vases in sand, chalk and stone tones, made to hold a single stem or simply the light.",
    image: "1631125915902-d8abe9225ff2",
  },
  {
    slug: "everyday-table",
    name: "Everyday Table",
    tagline: "Tableware for daily rituals",
    description:
      "Bowls, plates and cups designed to be used every day, then washed, stacked and used again.",
    image: "1610701596007-11502861dcfa",
  },
];

export type Review = {
  name: string;
  avatar: string;
  location: string;
  rating: number;
  product: string;
  date: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Amelia Hart",
    avatar: avatars[0],
    location: "London, UK",
    rating: 5,
    product: "Mathilde",
    date: "Sep 2026",
    text: "The glaze is even more beautiful in person. It arrived wrapped like a gift and now lives on my desk with a single dried stem.",
  },
  {
    name: "Jonah Reyes",
    avatar: avatars[1],
    location: "Austin, US",
    rating: 5,
    product: "Wheel Throwing Basics",
    date: "Aug 2026",
    text: "I booked the two-hour wheel class with zero experience and left with three wobbly but very loved bowls. Patient, generous teachers.",
  },
  {
    name: "Sofia Lind",
    avatar: avatars[2],
    location: "Stockholm, SE",
    rating: 4,
    product: "Sienna Bowl Set",
    date: "Aug 2026",
    text: "Heavier than I expected in the best way. They nest perfectly and go straight from oven to table.",
  },
  {
    name: "Priya Nair",
    avatar: img("1489278353717-f64c6ee8a4d2", 160),
    location: "Toronto, CA",
    rating: 5,
    product: "Custom Order",
    date: "Jul 2026",
    text: "We commissioned twelve cups for our wedding table. The studio sent sketches and glaze tests before firing. Truly heirloom pieces.",
  },
  {
    name: "Marcus Bell",
    avatar: img("1758876204244-930299843f07", 160),
    location: "Bristol, UK",
    rating: 5,
    product: "Ancient Vessel",
    date: "Jun 2026",
    text: "A centrepiece. Friends always ask where it's from. The burnished surface feels like warm stone.",
  },
  {
    name: "Lena Okafor",
    avatar: img("1567516364473-233c4b6fcfbe", 160),
    location: "Lagos, NG",
    rating: 4,
    product: "Glaze & Paint Night",
    date: "May 2026",
    text: "Such a fun evening with friends. The pieces came back from the kiln two weeks later and they look surprisingly professional.",
  },
];

// ---- Studio workshops (booking) ----

export type Workshop = {
  id: string;
  title: string;
  short: string;
  description: string;
  duration: number; // minutes
  price: number;
  capacity: number;
  level: "Beginner" | "All levels" | "Intermediate";
  image: string;
  instructor: string;
  // Hours of the day (24h) this workshop starts on, per weekday (0 = Sun)
  schedule: Partial<Record<number, number[]>>;
};

export const instructors = {
  helena: { name: "Helena Moss", role: "Studio Founder", avatar: avatars[0] },
  theo: { name: "Theo Grant", role: "Wheel Specialist", avatar: avatars[1] },
  ines: { name: "Inès Laurent", role: "Glaze Artist", avatar: avatars[2] },
} as const;

export type InstructorId = keyof typeof instructors;

export const workshops: (Workshop & { instructor: InstructorId })[] = [
  {
    id: "wheel-basics",
    title: "Wheel Throwing Basics",
    short: "Centre, open and pull your first pots",
    description:
      "A hands-on introduction to the potter's wheel. You'll throw two to three pieces which we trim, glaze and fire for you.",
    duration: 120,
    price: 85,
    capacity: 8,
    level: "Beginner",
    image: photos.terracottaWheel,
    instructor: "theo",
    schedule: { 1: [10, 18], 2: [10], 3: [10, 18], 4: [14], 5: [10, 18], 6: [9, 13, 16], 0: [11] },
  },
  {
    id: "hand-building",
    title: "Hand-Building Studio",
    short: "Pinch, coil and slab techniques",
    description:
      "No wheel needed. Learn the oldest pottery techniques to build sculptural vessels, planters and plates.",
    duration: 150,
    price: 70,
    capacity: 10,
    level: "All levels",
    image: photos.slabWork,
    instructor: "helena",
    schedule: { 2: [14], 4: [10, 18], 6: [11], 0: [14] },
  },
  {
    id: "glaze-night",
    title: "Glaze & Paint Night",
    short: "Decorate bisque pieces with friends",
    description:
      "Choose a bisque-fired bowl, mug or plate and decorate it with underglaze and dip glazes. Drinks included.",
    duration: 90,
    price: 48,
    capacity: 14,
    level: "All levels",
    image: photos.painting,
    instructor: "ines",
    schedule: { 3: [19], 5: [19], 6: [19] },
  },
  {
    id: "private-session",
    title: "Private Wheel Session",
    short: "One-to-one with a resident potter",
    description:
      "Tailored to your goals — from first-timers to returning potters perfecting trimming or lidded forms.",
    duration: 60,
    price: 120,
    capacity: 2,
    level: "Intermediate",
    image: photos.focusedPotter,
    instructor: "helena",
    schedule: { 1: [12, 15], 2: [12, 16], 3: [12, 15], 4: [12, 16], 5: [12, 15] },
  },
  {
    id: "custom-consult",
    title: "Custom Design Consult",
    short: "30-minute video call with our designers",
    description:
      "Plan a commission — tableware sets, wedding gifts or a statement vase. We'll sketch together and send glaze samples.",
    duration: 30,
    price: 24,
    capacity: 1,
    level: "All levels",
    image: photos.carving,
    instructor: "ines",
    schedule: { 1: [9, 11, 16], 2: [9, 11, 16], 3: [9, 11, 16], 4: [9, 11, 16], 5: [9, 11, 16] },
  },
];

export type Session = {
  id: string;
  workshopId: string;
  start: number; // hour, 24h
  booked: number;
};

// Deterministic pseudo-availability so the calendar looks lived-in without a backend.
function seeded(n: number) {
  const x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}

export function sessionsForDay(date: Date): Session[] {
  const dow = date.getDay();
  const dayKey = date.getFullYear() * 1000 + date.getMonth() * 40 + date.getDate();
  return workshops
    .flatMap((w, wi) =>
      (w.schedule[dow] ?? []).map((start) => ({
        id: `${w.id}-${dayKey}-${start}`,
        workshopId: w.id,
        start,
        booked: Math.floor(seeded(dayKey + wi * 31 + start) * (w.capacity + 1)),
      })),
    )
    .sort((a, b) => a.start - b.start);
}

export const getWorkshop = (id: string) => workshops.find((w) => w.id === id)!;

export const formatHour = (h: number, m = 0) => {
  const suffix = h >= 12 ? "PM" : "AM";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr}:${m.toString().padStart(2, "0")} ${suffix}`;
};

export const endTime = (start: number, minutes: number) => {
  const total = start * 60 + minutes;
  return formatHour(Math.floor(total / 60), total % 60);
};
