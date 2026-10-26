"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/store";
import { CartSheet } from "./cart-sheet";
import { Logo } from "./primitives";
import { navLinks } from "./nav-links";

export function Navbar() {
  const pathname = usePathname();
  const overHero = pathname === "/" || pathname === "/booking";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const count = useCart().reduce((n, l) => n + l.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = overHero && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled && "border-b border-ink/5 bg-cream/85 backdrop-blur-md",
      )}
    >
      <div className={cn("container-page flex h-16 items-center justify-between md:h-20", light ? "text-white" : "text-ink")}>
        <Link href="/" aria-label="Toma l'atelier home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-xs font-medium opacity-80 transition-opacity hover:opacity-100",
                pathname.startsWith(l.href) && "underline underline-offset-8 opacity-100",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Sheet open={cartOpen} onOpenChange={setCartOpen}>
            <SheetTrigger
              aria-label="Open cart"
              className={cn(
                "relative grid size-10 place-items-center rounded-full transition-colors",
                light ? "hover:bg-white/15" : "hover:bg-cobalt/5",
              )}
            >
              <ShoppingBag className="size-[18px]" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 grid size-[18px] place-items-center rounded-full bg-clay text-[10px] font-semibold text-white">
                  {count}
                </span>
              )}
            </SheetTrigger>
            <CartSheet onNavigate={() => setCartOpen(false)} />
          </Sheet>

          <Link
            href="/booking"
            className={cn(
              "hidden rounded-full px-5 py-2.5 text-xs font-semibold transition-colors sm:inline-flex",
              light ? "bg-white text-ink hover:bg-cream" : "bg-cobalt text-white hover:bg-cobalt/85",
            )}
          >
            Book a Seat
          </Link>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger aria-label="Open menu" className="grid size-10 place-items-center rounded-full lg:hidden">
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream p-8">
              <SheetTitle><Logo /></SheetTitle>
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-ink/10 py-3 font-serif text-2xl"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="mt-auto rounded-full bg-cobalt px-5 py-3 text-center text-sm font-medium text-white"
              >
                Book a seat
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
