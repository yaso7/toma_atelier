import Link from "next/link";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Pottery", href: "/shop" },
      { label: "Handmade Bowls", href: "/shop?category=Bowls" },
      { label: "Ceramic Mugs", href: "/shop?category=Mugs" },
      { label: "Plates & Dishes", href: "/shop?category=Plates" },
      { label: "New Arrivals", href: "/best-sellers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/about#story" },
      { label: "Studio Process", href: "/about#process" },
      { label: "Sustainability", href: "/about#sustainability" },
      { label: "Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/custom-orders#contact" },
      { label: "FAQs", href: "/custom-orders#faq" },
      { label: "Shipping & Delivery", href: "/custom-orders#faq" },
      { label: "Returns & Exchanges", href: "/custom-orders#faq" },
      { label: "My Bookings", href: "/booking#my-bookings" },
    ],
  },
  {
    title: "Studio Programs",
    links: [
      { label: "Pottery Workshops", href: "/booking" },
      { label: "Custom Orders", href: "/custom-orders" },
      { label: "Gift Cards", href: "/custom-orders" },
      { label: "Collections", href: "/collections" },
    ],
  },
];

function Social({ label, d }: { label: string; d: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid size-8 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white hover:text-ink"
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
        <div className="grid gap-12 md:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div className="space-y-8">
            <div>
              <p className="text-xs text-white/50">Email</p>
              <a href="mailto:hello@clayra.com" className="mt-2 block text-lg">
                hello@clayra.com
              </a>
            </div>
            <div>
              <p className="text-xs text-white/50">Phone</p>
              <a href="tel:+441234567890" className="mt-2 block text-lg">
                +44 1234 567 890
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
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-white/10 pt-6 text-[11px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Clayra Studio. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/custom-orders#faq" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/custom-orders#faq" className="hover:text-white">
              Terms and Conditions
            </Link>
          </div>
          <div className="flex gap-3 text-white">
            <Social
              label="Facebook"
              d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9H16l.5-4h-3V8.9c0-.6.3-.9.5-.9Z"
            />
            <Social
              label="Instagram"
              d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3c-2.4 0-2.7 0-3.7.1C5 3.2 3.2 5 3.1 8.3 3 9.3 3 9.6 3 12s0 2.7.1 3.7C3.2 19 5 20.8 8.3 20.9c1 .1 1.3.1 3.7.1s2.7 0 3.7-.1c3.3-.1 5.1-1.9 5.2-5.2.1-1 .1-1.3.1-3.7s0-2.7-.1-3.7C20.8 5 19 3.2 15.7 3.1 14.7 3 14.4 3 12 3Z"
            />
            <Social
              label="YouTube"
              d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z"
            />
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none -mt-6 -mb-[0.22em] text-center font-serif leading-none text-white/[0.06] select-none"
        style={{ fontSize: "clamp(7rem, 26vw, 24rem)" }}
      >
        clayra
      </p>
    </footer>
  );
}
