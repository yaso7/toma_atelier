import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Clayra — Handmade Pottery & Clay Studio",
    template: "%s · Clayra",
  },
  description: "Artisan pottery shaped by hand, plus wheel-throwing and hand-building workshops at the Clayra studio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Suspense>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{ style: { background: "#1f1915", color: "#fff", border: "none", borderRadius: 999 } }}
        />
      </body>
    </html>
  );
}
