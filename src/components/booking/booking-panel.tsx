"use client";

import Image from "next/image";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarDays, CheckCircle2, Clock, MapPin, MessageCircle, Minus, Plus, X } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { brand, endTime, formatHour, getVenue, getWorkshop, ig, img, whatsapp, type Session } from "@/lib/data";
import { addBooking, type Booking } from "@/lib/store";

export function BookingPanel({
  session,
  date,
  onBooked,
  onClear,
}: {
  session: Session | null;
  date: Date;
  onBooked: () => void;
  onClear: () => void;
}) {
  if (!session) {
    return (
      <div className="relative isolate overflow-hidden rounded-sm p-6 text-white">
        <Image src={ig.table} alt="" fill sizes="360px" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 to-black/30" />
        <CalendarDays className="size-6 text-clay-light" />
        <p className="mt-16 font-serif text-3xl leading-tight">Pick a session from the day view</p>
        <p className="mt-2 text-xs text-white/70">
          Choose a time slot to request your seat. Coloured blocks show what is on each day, and the studio confirms by message.
        </p>
      </div>
    );
  }
  // Key by session so the guest count resets when the selection changes.
  return <BookingForm key={session.id} session={session} date={date} onBooked={onBooked} onClear={onClear} />;
}

function BookingForm({
  session,
  date,
  onBooked,
  onClear,
}: {
  session: Session;
  date: Date;
  onBooked: () => void;
  onClear: () => void;
}) {
  const w = getWorkshop(session.workshopId);
  const venue = getVenue(w.venue);
  const spots = Math.max(0, w.capacity - session.booked);
  const [guests, setGuests] = useState(1);
  const [confirmed, setConfirmed] = useState<Booking | null>(null);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const booking: Booking = {
            id: crypto.randomUUID(),
            sessionId: session.id,
            workshopId: w.id,
            date: format(date, "yyyy-MM-dd"),
            start: session.start,
            guests,
            name: String(data.get("name")),
            email: String(data.get("email")),
            notes: String(data.get("notes") ?? ""),
          };
          addBooking(booking);
          setConfirmed(booking);
        }}
        className="overflow-hidden rounded-sm bg-white"
      >
        <div className="relative h-36">
          <Image src={img(w.image, 800)} alt="" fill sizes="360px" className="object-cover" />
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear selection"
            className="absolute top-3 right-3 grid size-7 place-items-center rounded-full bg-white/90"
          >
            <X className="size-3.5" />
          </button>
          <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-[10px] font-medium">
            {w.level}
          </span>
        </div>

        <div className="space-y-5 p-5">
          <div>
            <h3 className="font-serif text-3xl leading-none">{w.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{w.description}</p>
          </div>

          <ul className="space-y-2 rounded-sm bg-cream/70 p-3 text-xs">
            <li className="flex items-center gap-2">
              <CalendarDays className="size-3.5 text-clay" /> {format(date, "EEEE, d MMMM yyyy")}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-3.5 text-clay" /> {formatHour(session.start)} – {endTime(session.start, w.duration)}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-3.5 text-clay" /> {venue.name}, Damascus
            </li>
          </ul>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium">Guests</p>
              <p className="text-[10px] text-muted-foreground">{spots} spots left</p>
            </div>
            <div className="inline-flex items-center rounded-full border border-ink/15">
              <button
                type="button"
                aria-label="Fewer guests"
                className="grid size-8 place-items-center disabled:opacity-30"
                disabled={guests <= 1}
                onClick={() => setGuests((g) => g - 1)}
              >
                <Minus className="size-3" />
              </button>
              <span className="w-6 text-center text-sm">{guests}</span>
              <button
                type="button"
                aria-label="More guests"
                className="grid size-8 place-items-center disabled:opacity-30"
                disabled={guests >= spots}
                onClick={() => setGuests((g) => g + 1)}
              >
                <Plus className="size-3" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="b-name" className="text-xs">
                Full name
              </Label>
              <Input id="b-name" name="name" required className="h-10 bg-cream/40" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="b-email" className="text-xs">
                Email
              </Label>
              <Input id="b-email" name="email" type="email" required className="h-10 bg-cream/40" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="b-notes" className="text-xs">
                Notes <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Textarea id="b-notes" name="notes" rows={2} className="bg-cream/40" placeholder="Occasion, accessibility, anything we should know" />
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-ink/10 pt-4">
            <span className="text-xs text-muted-foreground">
              {guests} × ${w.price}
            </span>
            <span className="font-serif text-3xl">${guests * w.price}</span>
          </div>
          <button className="w-full rounded-full bg-cobalt py-3 text-sm font-medium text-white transition-colors hover:bg-cobalt/85">
            Reserve My Seat
          </button>
        </div>
      </form>

      <Dialog
        open={!!confirmed}
        onOpenChange={(open) => {
          if (!open && confirmed) {
            toast(`Booked: ${w.title} on ${format(date, "d MMM")}`);
            onBooked();
          }
        }}
      >
        <DialogContent className="bg-cream sm:max-w-md">
          <div className="flex flex-col items-center text-center">
            <CheckCircle2 className="size-10 text-clay" strokeWidth={1.4} />
            <DialogTitle className="mt-4 font-serif text-4xl font-normal">Seat requested!</DialogTitle>
            <DialogDescription className="mt-2 text-sm">
              Thank you, {confirmed?.name.split(" ")[0]}. Send us a quick message so the team can confirm your seat. Reservations are handled on WhatsApp and Instagram.
            </DialogDescription>
            <div className="mt-6 w-full rounded-sm bg-white p-4 text-left text-xs">
              <p className="font-serif text-xl">{w.title}</p>
              <p className="mt-1 text-muted-foreground">
                {format(date, "EEEE, d MMMM")} · {formatHour(session.start)} · {guests} guest{guests > 1 ? "s" : ""}
              </p>
              <p className="mt-3 flex justify-between border-t border-ink/10 pt-3 font-medium">
                Pay at the studio <span>${guests * w.price}</span>
              </p>
            </div>
            {confirmed && (
              <a
                href={whatsapp(
                  `Hello Toma l'atelier, I'd like to reserve ${confirmed.guests} seat${confirmed.guests > 1 ? "s" : ""} for ${w.title} on ${format(date, "EEEE d MMMM")} at ${formatHour(session.start)} (${venue.name}). Name: ${confirmed.name}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-cobalt py-3 text-sm font-medium text-white hover:bg-cobalt/85"
              >
                <MessageCircle className="size-4" /> Confirm on WhatsApp
              </a>
            )}
            <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
              Your piece goes through a glaze firing and will be ready for pickup {brand.kilnDays} after the workshop.
              Prefer Instagram? DM @{brand.instagram}.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
