import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond, Inter } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Toma l'atelier: A Station of Art in Damascus",
    template: "%s · Toma l'atelier",
  },
  description: "A community art collective and fine-art incubator in Damascus. Hand-building, porcelain painting and linocut workshops, plus handmade ceramics.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${caveat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Suspense>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{ style: { background: "#1d3557", color: "#fff", border: "none", borderRadius: 999 } }}
        />
      </body>
    </html>
  );
}
