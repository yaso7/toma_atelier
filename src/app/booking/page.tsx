import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { BookingExperience } from "@/components/booking/booking-experience";
import { AvatarStack, Chip } from "@/components/site/primitives";
import { avatars, img, photos } from "@/lib/data";

export const metadata: Metadata = { title: "Book a Workshop" };

async function BookingWithParams({ searchParams }: PageProps<"/booking">) {
  const { workshop } = await searchParams;
  return <BookingExperience initialWorkshop={typeof workshop === "string" ? workshop : "all"} />;
}

export default function BookingPage(props: PageProps<"/booking">) {
  return (
    <>
      <section className="relative isolate overflow-hidden text-white">
        <Image
          src={img(photos.womanWheel, 2000)}
          alt="Potter at the wheel in the Clayra studio"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="container-page flex min-h-[440px] flex-col justify-end pt-32 pb-10 md:min-h-[520px]">
          <Chip dark>Studio Workshops</Chip>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h1 className="max-w-3xl font-display text-6xl md:text-8xl">Book Your Time at the Wheel</h1>
            <div className="flex items-center gap-3">
              <AvatarStack srcs={avatars} />
              <p className="text-xs leading-tight text-white/80">
                <span className="font-serif text-3xl text-clay-light">4.9</span> from
                <br />
                2,000+ students
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-10">
        <Suspense fallback={<BookingExperience />}>
          <BookingWithParams {...props} />
        </Suspense>
      </div>
    </>
  );
}
