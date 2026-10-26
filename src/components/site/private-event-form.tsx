"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { whatsapp } from "@/lib/data";
import { cn } from "@/lib/utils";

const eventTypes = ["Birthday", "Corporate team", "Small group", "Pop-up collab", "Something else"];
const tracks = ["Hand-building", "Porcelain painting", "Heritage art night", "Linocut printing", "Not sure yet"];

/** Opens a pre-filled WhatsApp message to the booking line. Nothing is stored. */
export function PrivateEventForm() {
  const [type, setType] = useState(eventTypes[0]);
  const [track, setTrack] = useState(tracks[0]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const message = [
          "Hello Toma l'atelier, I'd like to plan a private event.",
          `Name: ${d.get("name")}`,
          `Event: ${type}`,
          `Session style: ${track}`,
          `Guests: ${d.get("guests")}`,
          d.get("date") ? `Preferred date: ${d.get("date")}` : "",
          d.get("notes") ? `Notes: ${d.get("notes")}` : "",
        ]
          .filter(Boolean)
          .join("\n");
        window.open(whatsapp(message), "_blank", "noopener,noreferrer");
        toast("Opening WhatsApp so you can send your request");
      }}
      className="space-y-6 rounded-sm bg-white p-6 md:p-8"
    >
      <Choice label="What are you celebrating?" options={eventTypes} value={type} onChange={setType} />
      <Choice label="What would you like to make?" options={tracks} value={track} onChange={setTrack} />

      <div className="grid gap-4 sm:grid-cols-3">
        <Field id="name" label="Your name">
          <Input id="name" name="name" required className="h-11 bg-cream/60" />
        </Field>
        <Field id="guests" label="Guests">
          <Input id="guests" name="guests" type="number" min={2} defaultValue={8} className="h-11 bg-cream/60" />
        </Field>
        <Field id="date" label="Preferred date">
          <Input id="date" name="date" type="date" className="h-11 bg-cream/60" />
        </Field>
      </div>
      <Field id="notes" label="Playlist, mood, dietary needs, anything else">
        <Textarea id="notes" name="notes" rows={3} placeholder="Smooth jazz, low light, café snacks…" className="bg-cream/60" />
      </Field>
      <button className="w-full rounded-full bg-cobalt py-3.5 text-sm font-medium text-white transition-colors hover:bg-cobalt/85">
        Send on WhatsApp
      </button>
    </form>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-xs">
        {label}
      </Label>
      {children}
    </div>
  );
}

function Choice({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-xs font-medium">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            type="button"
            key={o}
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={cn(
              "rounded-full border px-4 py-2 text-xs transition-colors",
              value === o ? "border-cobalt bg-cobalt text-white" : "border-ink/15 hover:border-ink/40",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
