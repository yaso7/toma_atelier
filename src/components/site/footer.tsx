import Link from "next/link";
import { brand, venues } from "@/lib/data";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Ceramics", href: "/shop" },
      { label: "Mugs", href: "/shop?category=Mugs" },
      { label: "Plates & Dishes", href: "/shop?category=Plates%20%26%20Dishes" },
      { label: "Totes & Aprons", href: "/shop?category=Totes%20%26%20Aprons" },
      { label: "Best Sellers", href: "/best-sellers" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "The Process", href: "/about#process" },
      { label: "Collections", href: "/collections" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Workshops",
    links: [
      { label: "Book a Seat", href: "/booking" },
      { label: "My Bookings", href: "/booking#my-bookings" },
      { label: "Private & Corporate", href: "/private-events" },
      { label: "FAQs", href: "/private-events#faq" },
    ],
  },
];

function Social({ label, href, d }: { label: string; href: string; d: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-8 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white hover:text-cobalt"
    >
      <svg viewBox="0 0 24 24" className="size-3.5 fill-current">
        <path d={d} />
      </svg>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-espresso text-white">
      <div className="container-page relative z-10 pt-16 pb-6">
        <div className="grid gap-12 md:grid-cols-[1.3fr_repeat(3,1fr)_1.2fr]">
          <div className="space-y-8">
            <div>
              <p className="text-xs text-white/50">Instagram (reservations by DM)</p>
              <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block text-lg">
                @{brand.instagram}
              </a>
            </div>
            <div>
              <p className="text-xs text-white/50">Booking line / WhatsApp</p>
              <a href="tel:+963994602084" className="mt-2 block text-lg">
                {brand.bookingPhone}
              </a>
              <a href="tel:+963967198897" className="mt-1 block text-sm text-white/60">
                {brand.altPhone}
              </a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-medium">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-xs text-white/55 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-sm font-medium">Where we pop up</p>
            <ul className="mt-4 space-y-2.5">
              {venues.map((v) => (
                <li key={v.id} className="text-xs text-white/55">
                  {v.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-white/10 pt-6 text-[11px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Toma l&apos;atelier · {brand.city}. All rights reserved.</p>
          <p>Ceramics are ready for pickup {brand.kilnDays} after your workshop.</p>
          <div className="flex gap-3 text-white">
            <Social
              label="Instagram"
              href={brand.instagramUrl}
              d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3c-2.4 0-2.7 0-3.7.1C5 3.2 3.2 5 3.1 8.3 3 9.3 3 9.6 3 12s0 2.7.1 3.7C3.2 19 5 20.8 8.3 20.9c1 .1 1.3.1 3.7.1s2.7 0 3.7-.1c3.3-.1 5.1-1.9 5.2-5.2.1-1 .1-1.3.1-3.7s0-2.7-.1-3.7C20.8 5 19 3.2 15.7 3.1 14.7 3 14.4 3 12 3Z"
            />
            <Social
              label="WhatsApp"
              href="https://wa.me/963994602084"
              d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.3 1.3-1.8 1.3-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4Z"
            />
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none -mt-6 -mb-[0.22em] text-center font-script leading-none text-white/[0.07] select-none"
        style={{ fontSize: "clamp(8rem, 28vw, 26rem)" }}
      >
        toma
      </p>
    </footer>
  );
}
