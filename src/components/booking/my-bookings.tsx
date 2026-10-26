"use client";

import Image from "next/image";
import { format, parseISO } from "date-fns";
import { toast } from "sonner";
import { endTime, formatHour, getVenue, getWorkshop, img, workshops } from "@/lib/data";
import { cancelBooking, useBookings } from "@/lib/store";

export function MyBookings() {
  const bookings = useBookings()
    .filter((b) => workshops.some((w) => w.id === b.workshopId))
    .toSorted((a, b) => (a.date + a.start).localeCompare(b.date + b.start));

  return (
    <section id="my-bookings" className="mt-20 scroll-mt-28">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-display text-5xl text-clay">My Bookings</h2>
        <span className="text-xs text-muted-foreground">{bookings.length} requested</span>
      </div>
      {bookings.length === 0 ? (
        <p className="rounded-sm border border-dashed border-ink/20 p-8 text-center text-sm text-muted-foreground">
          No seat requests yet. Reserve a session above and it will appear here.
        </p>
      ) : (
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {bookings.map((b) => {
            const w = getWorkshop(b.workshopId);
            const d = parseISO(b.date);
            return (
              <li key={b.id} className="flex items-center gap-4 rounded-sm bg-white p-3">
                <div className="flex w-14 shrink-0 flex-col items-center rounded-sm bg-cream py-2">
                  <span className="text-[10px] text-muted-foreground uppercase">{format(d, "MMM")}</span>
                  <span className="font-serif text-3xl leading-none">{format(d, "d")}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-serif text-lg leading-tight">{w.title}</p>
                  <p className="text-[11px] text-muted-foreground">
                    {formatHour(b.start)} – {endTime(b.start, w.duration)} · {getVenue(w.venue).name} · {b.guests} guest{b.guests > 1 ? "s" : ""}
                  </p>
                </div>
                <Image src={img(w.image, 120)} alt="" width={44} height={44} className="hidden size-11 rounded-sm object-cover sm:block" />
                <button
                  onClick={() => {
                    cancelBooking(b.id);
                    toast("Booking cancelled");
                  }}
                  className="rounded-full border border-ink/15 px-3 py-1.5 text-[10px] font-medium hover:border-destructive hover:text-destructive"
                >
                  Cancel
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
