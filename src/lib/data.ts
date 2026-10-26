// Toma l'atelier: content from the brand dossier.
//
// NOTE: the dossier does not list prices, capacities or workshop timetables.
// Those values (price, capacity, schedule) are PLACEHOLDERS for the demo UI
// and must be replaced with the studio's real numbers. Bookings are confirmed
// by the studio over WhatsApp / Instagram DM.

export const brand = {
  name: "Toma l'atelier",
  short: "Toma",
  tagline: "A Station of Art",
  instagram: "toma._atelier",
  instagramUrl: "https://www.instagram.com/toma._atelier/",
  city: "Damascus, Syria",
  bookingPhone: "+963 994 602 084",
  altPhone: "+963 967 198 897",
  kilnDays: "10 to 14 days",
} as const;

/** WhatsApp deep link to the official booking line. */
export const whatsapp = (message: string, phone = "963994602084") =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

// Remote stand-ins are Unsplash ids; anything starting with "/" is a local file.
export const img = (id: string, w = 1200) =>
  id.startsWith("/") ? id : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Photos downloaded from @toma._atelier (public/toma). */
export const ig = {
  sea: "/toma/ig-1.jpg", // pouring cream slip on a pebble beach
  kiln: "/toma/ig-2.jpg", // opening the kiln, fired cups on the shelf
  venue: "/toma/ig-3.jpg", // evening pop-up with heart balloons
  damascus: "/toma/ig-4.jpg", // painting night in Damascus
  smile: "/toma/ig-5.jpg", // guest in a Toma apron, studio shelves
  wheel: "/toma/ig-6.jpg", // working at the wheel in a Toma apron
  shelves: "/toma/ig-7.jpg", // the studio, wheel and glaze shelves
  table: "/toma/ig-8.jpg", // shared painting table
  group: "/toma/group-table.jpg", // group shaping clay at the shared table (supplied by the studio)
  painting: "/toma/painting-bird.jpg", // painting a bird silhouette on a clay disc (supplied by the studio)
  handBuilding: "/toma/hand-building.jpg", // shaping a clay bowl by hand (supplied by the studio)
  trio: "/toma/trio-pieces.jpg", // three guests holding up their hand-built pieces (supplied by the studio)
  wave: "/toma/wave-clay-tray.jpg", // guest in a Toma apron holding a clay tray, waving (supplied by the studio)
  wall: "/toma/photo-wall.jpg", // wall of printed guest photos at the studio (supplied by the studio)
  mirror: "/toma/mirror-wall.jpg", // porcelain-bordered round mirror on jute rope (supplied by the studio)
  fishPlate: "/toma/fish-plate.jpg", // linocut fish plate mended with brass clips (supplied by the studio)
  wallPlate: "/toma/wall-plate.jpg", // hand-painted interior plate under a spotlight (supplied by the studio)
  framedTile: "/toma/framed-tile.jpg", // framed hand-painted portrait tile (supplied by the studio)
  corner: "/toma/studio-corner.jpg", // hanging aprons, painted door and round table with roses (supplied by the studio)
  room: "/toma/studio-room.jpg", // studio room with beams, shelves and workshop tables (supplied by the studio)
  dishCheckered: "/toma/dish-checkered.jpg", // hand-built two-part dish painted black and white with flower faces (supplied by the studio)
  dishLetsCook: "/toma/dish-lets-cook.jpg", // teal dish painted with a "Let's cook" pot (supplied by the studio)
  dishFloral: "/toma/dish-floral.jpg", // teal dish with painted dotted flowers (supplied by the studio)
  dishOlive: "/toma/dish-olive-you.jpg", // yellow dish painted "Olive you" (supplied by the studio)
  focus: "/toma/painting-focus.jpg", // guest concentrating on painting a cup on a turntable (supplied by the studio)
  sign: "/toma/activities-sign.jpg", // hand-made tile sign listing the studio activities, at Error Cafe (supplied by the studio)
} as const;

/** Stand-ins used where the studio has not shared a photo of the piece. */
export const stock = {
  heroHands: "1609881582722-4a8ab7cd54d8",
  strawberryMug: "1633738674687-9505aa528801",
  paintedPlates: "1776841273394-63df4bda8348",
  colourDishes: "1577576223085-3eb295cd414f",
  rawEarthMug: "1536936812504-0e77dc3f0b40",
  rawEarthCups: "1610701596007-11502861dcfa",
  creamMug: "1590422749897-47036da0b0ff",
  floraTray: "1732053989556-95d6a5fe31aa",
  incense: "1520408222757-6f9f95d87d5d",
  tote: "1574365569389-a10d488ca3fb",
  linocut: "1744096641619-646e1f6fbcd5",
  carving: "1730134426941-1def6b725da3",
  blueSaucers: "1767857527365-62a80ce41083",
  driedFlora: "1596301538961-fcad89e0e68a",
} as const;

// ---- Shop ----

export type Category = "Mugs" | "Plates & Dishes" | "Home" | "Totes & Aprons";

export type Product = {
  slug: string;
  name: string;
  price: number; // placeholder USD
  discount: number; // percent
  category: Category;
  collection: string;
  tags: ("popular" | "recent" | "handmade" | "bestseller")[];
  image: string;
  gallery: string[];
  description: string;
  material: string;
  finish: string;
  note: string;
};

export const products: Product[] = [
  {
    slug: "painted-porcelain-mirror",
    name: "Painted Porcelain Mirror",
    price: 38,
    discount: 0,
    category: "Home",
    collection: "wall-pieces",
    tags: ["recent", "handmade"],
    image: ig.mirror,
    gallery: [ig.mirror],
    description:
      "A small round mirror set in a hand-painted porcelain border of studio scenes, a radio, a chair, a cat, framed by a clay base and a coil of jute rope.",
    material: "Hand-built clay with a porcelain border",
    finish: "Underglaze illustration, glossy glaze, natural jute rope",
    note: "Hangs from a rope loop, ready for the wall.",
  },
  {
    slug: "linocut-fish-plate",
    name: "Linocut Fish Plate",
    price: 30,
    discount: 0,
    category: "Home",
    collection: "wall-pieces",
    tags: ["recent", "handmade"],
    image: ig.fishPlate,
    gallery: [ig.fishPlate],
    description:
      "A bold fish carved as a linocut and printed in dark ink onto a hand-built plate, joined with brass clips and made to hang.",
    material: "Hand-built clay",
    finish: "Linocut ink print, glossy glaze, brass fittings",
    note: "The mended cracks are part of the story.",
  },
  {
    slug: "studio-interior-wall-plate",
    name: "Studio Interior Wall Plate",
    price: 26,
    discount: 0,
    category: "Home",
    collection: "wall-pieces",
    tags: ["recent", "handmade"],
    image: ig.wallPlate,
    gallery: [ig.wallPlate],
    description:
      "A hand-painted plate showing a quiet interior, a figure at a table in soft grey-blue washes with touches of yellow.",
    material: "Hand-built clay",
    finish: "Freehand underglaze illustration, glossy glaze",
    note: "Painted freehand, one of a kind.",
  },
  {
    slug: "framed-portrait-tile",
    name: "Framed Portrait Tile",
    price: 24,
    discount: 0,
    category: "Home",
    collection: "wall-pieces",
    tags: ["recent", "handmade"],
    image: ig.framedTile,
    gallery: [ig.framedTile],
    description:
      "A tall ceramic tile painted with a figure and a glass of red wine, set in a dark wooden frame and signed Toma.",
    material: "Hand-painted ceramic tile in a wooden frame",
    finish: "Underglaze watercolour-style painting, glossy glaze",
    note: "Signed by the studio.",
  },
  {
    slug: "strawberry-cat-mug",
    name: "Strawberry Cat Mug",
    price: 14,
    discount: 0,
    category: "Mugs",
    collection: "strawberry-cat",
    tags: ["bestseller", "popular", "handmade"],
    image: stock.strawberryMug,
    gallery: [stock.strawberryMug, stock.creamMug, ig.table],
    description:
      "The studio's fan-favourite: a pre-fired mug hand-painted with the signature cat silhouette and tiny strawberries.",
    material: "Hand-built clay body",
    finish: "Hand-painted underglaze, glossy clear glaze",
    note: "Every mug is painted freehand, so no two strawberries match.",
  },
  {
    slug: "strawberry-cat-plate",
    name: "Strawberry Cat Plate",
    price: 18,
    discount: 0,
    category: "Plates & Dishes",
    collection: "strawberry-cat",
    tags: ["bestseller", "popular"],
    image: stock.paintedPlates,
    gallery: [stock.paintedPlates, stock.blueSaucers, ig.damascus],
    description:
      "A ready-to-buy plate carrying the hand-carved or glazed cat motif framed by a ring of strawberries.",
    material: "Hand-built clay body",
    finish: "Underglaze illustration, glossy glaze",
    note: "Made for serving small bites, or hanging on the wall.",
  },
  {
    slug: "strawberry-cat-trinket-dish",
    name: "Strawberry Cat Trinket Dish",
    price: 9,
    discount: 0,
    category: "Plates & Dishes",
    collection: "strawberry-cat",
    tags: ["recent", "handmade"],
    image: stock.colourDishes,
    gallery: [stock.colourDishes, stock.paintedPlates],
    description: "A small dish for rings, keys and earrings, finished with the studio cat and a single strawberry.",
    material: "Hand-built clay body",
    finish: "Underglaze, glossy glaze",
    note: "A small gift with a lot of character.",
  },
  {
    slug: "raw-earth-mug",
    name: "Raw Earth Mug",
    price: 16,
    discount: 0,
    category: "Mugs",
    collection: "raw-earth",
    tags: ["popular", "handmade", "bestseller"],
    image: stock.rawEarthMug,
    gallery: [stock.rawEarthMug, stock.rawEarthCups, ig.kiln],
    description:
      "An asymmetric mug that leaves the bottom half unglazed to show the textured brown clay, with a glossy cream-dipped top rim and handle.",
    material: "Raw textured clay",
    finish: "Unglazed base, cream-dipped rim",
    note: "Thumbprints and uneven rims are part of the design.",
  },
  {
    slug: "raw-earth-cups",
    name: "Raw Earth Cups (Pair)",
    price: 28,
    discount: 0,
    category: "Mugs",
    collection: "raw-earth",
    tags: ["recent", "handmade"],
    image: stock.rawEarthCups,
    gallery: [stock.rawEarthCups, stock.rawEarthMug],
    description: "Two handle-less cups in raw clay dipped in a deep amber or creamy white glaze.",
    material: "Raw textured clay",
    finish: "Unglazed base, amber or cream dip",
    note: "Sold as a pair, each one slightly different.",
  },
  {
    slug: "thumbprint-mug",
    name: "Thumbprint Mug",
    price: 15,
    discount: 0,
    category: "Mugs",
    collection: "raw-earth",
    tags: ["popular", "handmade"],
    image: stock.creamMug,
    gallery: [stock.creamMug, stock.rawEarthMug],
    description:
      "A celebration of aesthetic asymmetry: visible thumbprints, a wobbly rim and freehand strokes rather than machine-perfect finishes.",
    material: "Hand-built clay body",
    finish: "Glossy cream glaze",
    note: "The human touch is the point.",
  },
  {
    slug: "flora-tray",
    name: "Pressed Flora Tray",
    price: 20,
    discount: 0,
    category: "Home",
    collection: "pressed-flora",
    tags: ["popular", "handmade"],
    image: stock.floraTray,
    gallery: [stock.floraTray, stock.driedFlora, stock.incense],
    description:
      "A one-of-a-kind tray bearing real leaf skeletons and floral imprints, pressed into soft clay and picked out with pastel underglaze.",
    material: "Hand-built clay body",
    finish: "Pastel underglaze, glossy glaze",
    note: "Real leaves and stems, so each imprint is unique.",
  },
  {
    slug: "flora-incense-holder",
    name: "Flora Incense Holder",
    price: 12,
    discount: 0,
    category: "Home",
    collection: "pressed-flora",
    tags: ["recent", "handmade"],
    image: stock.incense,
    gallery: [stock.incense, stock.floraTray],
    description: "An organic accent piece with a delicate natural imprint, ideal for a shelf or bedside table.",
    material: "Hand-built clay body",
    finish: "Soft pastel underglaze",
    note: "One of a kind, never repeated.",
  },
  {
    slug: "linocut-cat-tote",
    name: "Linocut Cat Tote",
    price: 10,
    discount: 0,
    category: "Totes & Aprons",
    collection: "studio-goods",
    tags: ["bestseller", "handmade"],
    image: stock.tote,
    gallery: [stock.tote, stock.linocut, stock.carving],
    description:
      "A heavy-duty canvas tote hand-stamped with the studio's block-print cat silhouette and floral motifs.",
    material: "Heavy-duty canvas",
    finish: "Hand-stamped linocut ink",
    note: "Stamped by hand at the studio.",
  },
  {
    slug: "studio-apron",
    name: "Toma Studio Apron",
    price: 22,
    discount: 0,
    category: "Totes & Aprons",
    collection: "studio-goods",
    tags: ["popular"],
    image: ig.wheel,
    gallery: [ig.wheel, ig.smile],
    description:
      "The official studio uniform: an earth-toned, durable canvas apron with the Toma l'atelier logo. Sold as a souvenir for home crafters.",
    material: "Earth-toned canvas",
    finish: "Printed Toma l'atelier logo",
    note: "Pictured in the studio.",
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
    slug: "wall-pieces",
    name: "Wall Pieces",
    tagline: "Painted plates, mirrors and tiles",
    description:
      "Hand-painted and linocut pieces made to hang: illustrated plates, a porcelain-bordered mirror and framed tiles.",
    image: ig.mirror,
  },
  {
    slug: "strawberry-cat",
    name: "Strawberry Cat",
    tagline: "The studio's fan favourite",
    description:
      "Pre-fired mugs, plates and trinket dishes with the signature hand-painted strawberry and cat illustrations.",
    image: stock.strawberryMug,
  },
  {
    slug: "raw-earth",
    name: "Raw Earth",
    tagline: "Unglazed clay, glossy rim",
    description:
      "Asymmetric drinkware that keeps the bottom half raw to show the textured brown clay, dipped in creamy white or deep amber.",
    image: stock.rawEarthMug,
  },
  {
    slug: "pressed-flora",
    name: "Pressed Flora",
    tagline: "Real leaves, forever imprinted",
    description:
      "Trays and incense holders bearing real leaf skeletons and floral imprints, highlighted with soft pastel underglazes.",
    image: stock.floraTray,
  },
  {
    slug: "studio-goods",
    name: "Studio Goods",
    tagline: "Linocut totes and cozy aprons",
    description:
      "Canvas bags stamped with our cat silhouette and earth-toned aprons printed with the studio logo.",
    image: stock.tote,
  },
];

// ---- Workshops (booking) ----

export type Venue = {
  id: string;
  name: string;
  role: string;
};

export const venues: Venue[] = [
  { id: "el-studio", name: "El Studio", role: "Central home for multi-day workshop tracks" },
  { id: "error-cafe", name: "Error Cafe", role: "Evening “Art & Coffee” social takeovers" },
  { id: "blooms", name: "Blooms Bookstore", role: "Single-day cultural pop-ups" },
  { id: "poiema", name: "Poiema House", role: "Single-day cultural pop-ups" },
  { id: "lilyzak", name: "Lilyzak", role: "Single-day cultural pop-ups" },
  { id: "daze", name: "Dazè Damascus", role: "Single-day cultural pop-ups" },
];

export const getVenue = (id: string) => venues.find((v) => v.id === id)!;

export type Workshop = {
  id: string;
  track: "Slow Travel & Damascus Soul" | "Private Sanctuary" | "Studio Craft";
  title: string;
  short: string;
  description: string;
  includes: string;
  duration: number; // minutes (placeholder)
  price: number; // per seat, USD (placeholder)
  capacity: number; // placeholder
  level: "All levels" | "Intermediate";
  image: string;
  venue: string; // Venue id
  schedule: Partial<Record<number, number[]>>; // weekday (0 = Sun) → start hours (placeholder)
};

export const workshops: Workshop[] = [
  {
    id: "hand-building",
    track: "Studio Craft",
    title: "Hand-Building Session",
    short: "Pinch, coil and slab: no wheel needed",
    description:
      "Guided instruction in ancient hand-building techniques. Sculpt a functional vessel from raw organic clay, then add texture with stamping, carving and sgraffito.",
    includes: "Clay, tools, glaze and kiln firing",
    duration: 150,
    price: 25,
    capacity: 12,
    level: "All levels",
    image: ig.wheel,
    venue: "el-studio",
    schedule: { 2: [17], 4: [17], 6: [11, 15], 0: [15] },
  },
  {
    id: "porcelain-painting",
    track: "Studio Craft",
    title: "Porcelain & Underglaze Painting",
    short: "Paint freehand on a blank ceramic biscuit",
    description:
      "Treat a pre-fired ceramic biscuit as a blank canvas and illustrate it freehand with premium underglazes. Art & Coffee evenings with curated music.",
    includes: "Biscuit, underglazes, brushes and kiln firing",
    duration: 120,
    price: 22,
    capacity: 14,
    level: "All levels",
    image: ig.table,
    venue: "error-cafe",
    schedule: { 3: [18], 5: [18], 6: [18] },
  },
  {
    id: "heritage-art-night",
    track: "Slow Travel & Damascus Soul",
    title: "Sufi & Levantine Heritage Art Night",
    short: "Paint the geometry of the Old City",
    description:
      "A themed night celebrating regional Syrian culture. Paint intricate geometric motifs and traditional patterns inspired by the historical architecture of Old Damascus.",
    includes: "Ceramic biscuit, underglazes and kiln firing",
    duration: 150,
    price: 28,
    capacity: 16,
    level: "All levels",
    image: ig.damascus,
    venue: "blooms",
    schedule: { 4: [18], 5: [16] },
  },
  {
    id: "botanical-imprinting",
    track: "Slow Travel & Damascus Soul",
    title: "Botanical Imprinting",
    short: "Press real leaves into soft clay",
    description:
      "Press live flora, stems and leaves directly into soft clay, then enhance them with delicate pastel underglazes that lock the natural elements into the glaze.",
    includes: "Clay, flora, underglazes and kiln firing",
    duration: 120,
    price: 24,
    capacity: 10,
    level: "All levels",
    image: stock.driedFlora,
    venue: "daze",
    schedule: { 0: [12], 2: [12], 6: [13] },
  },
  {
    id: "linocut-printing",
    track: "Studio Craft",
    title: "Linocut & Textile Printing",
    short: "Carve a stamp, print it on cloth",
    description:
      "Design, gouge and carve your own linoleum stamp, then hand-print it onto organic fabric, paper packaging and tote bags using transfer ink.",
    includes: "Linoleum, carving tools, inks and a tote bag",
    duration: 120,
    price: 20,
    capacity: 10,
    level: "All levels",
    image: stock.carving,
    venue: "poiema",
    schedule: { 1: [16], 6: [12] },
  },
  {
    id: "private-sanctuary",
    track: "Private Sanctuary",
    title: "Private Sanctuary Session",
    short: "Low light, quiet music, slow hands",
    description:
      "An intimate art escape for tactile exploration. Individual space, low lighting, acoustic ambiance and slow hand-sculpting to help you unplug from digital distraction.",
    includes: "Clay, tools and kiln firing",
    duration: 150,
    price: 35,
    capacity: 6,
    level: "All levels",
    image: ig.shelves,
    venue: "el-studio",
    schedule: { 1: [18], 3: [11], 5: [11] },
  },
  {
    id: "anatomical-sculpting",
    track: "Studio Craft",
    title: "Anatomical & Specialized Sculpting",
    short: "Hand-formed ears, faces and abstract forms",
    description:
      "An intermediate session for building complex structures: hand-formed human ears, facial features or abstract geometric additions onto functional mugs and vases.",
    includes: "Clay, tools and kiln firing",
    duration: 150,
    price: 30,
    capacity: 8,
    level: "Intermediate",
    image: ig.smile,
    venue: "lilyzak",
    schedule: { 6: [10] },
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
        booked: Math.floor(seeded(dayKey + wi * 31 + start) * (w.capacity * 0.8)),
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

// ---- Brand copy ----

export const pillars = [
  { title: "Tactile Discovery", text: "The grounding sensory experience of working raw earth with your hands." },
  { title: "Creative Inclusivity", text: "Equal opportunity for all ages and skill levels, from kids' sessions to adult training." },
  { title: "Atmospheric Warmth", text: "Rustic studio elements meet social collaboration, often as a workshop-café." },
  { title: "Creative Mindfulness", text: "Art-making as restorative art therapy and community connection, not commercial production." },
];

export const faqs = [
  {
    q: "Do I need pottery experience?",
    a: "No. All skill levels are welcome and our resident artists guide you step by step.",
  },
  {
    q: "Do I need to reserve a seat?",
    a: "Walk-ins are not prohibited, but clay, tools and venue space are limited, so advance reservations are preferred for every event. Message us on Instagram or WhatsApp.",
  },
  {
    q: "When can I collect my piece?",
    a: "Ceramics go through a glaze firing in an industrial kiln. Finished workshop pieces are ready for pickup 10 to 14 days after the workshop.",
  },
  {
    q: "What is included in a workshop seat?",
    a: "Premium clay or porcelain, professional tools, underglazes and full kiln firing. Café drinks and music are part of the atmosphere.",
  },
  {
    q: "Can I host a private or corporate event?",
    a: "Yes. We curate private takeovers for small groups, birthdays and teams, with a tailored playlist and private venue hosting.",
  },
];
