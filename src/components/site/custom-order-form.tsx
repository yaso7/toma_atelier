"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const pieceTypes = ["Tableware set", "Statement vase", "Wedding gifts", "Corporate gifts", "Something else"];
const budgets = ["Under $300", "$300 – $800", "$800 – $2,000", "$2,000+"];

export function CustomOrderForm() {
  const [type, setType] = useState(pieceTypes[0]);
  const [budget, setBudget] = useState(budgets[1]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = new FormData(form).get("name");
        toast(`Thanks ${name}! Our designers will reply within 2 working days.`);
        form.reset();
      }}
      className="space-y-6 rounded-sm bg-white p-6 md:p-8"
    >
      <Choice label="What would you like made?" options={pieceTypes} value={type} onChange={setType} />
      <Choice label="Budget" options={budgets} value={budget} onChange={setBudget} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Full name">
          <Input id="name" name="name" required placeholder="Helena Moss" className="h-11 bg-cream/50" />
        </Field>
        <Field id="email" label="Email">
          <Input id="email" name="email" type="email" required placeholder="you@email.com" className="h-11 bg-cream/50" />
        </Field>
        <Field id="qty" label="Quantity">
          <Input id="qty" name="qty" type="number" min={1} defaultValue={1} className="h-11 bg-cream/50" />
        </Field>
        <Field id="date" label="Needed by">
          <Input id="date" name="date" type="date" className="h-11 bg-cream/50" />
        </Field>
      </div>
      <Field id="vision" label="Tell us about your vision">
        <Textarea
          id="vision"
          name="vision"
          rows={4}
          placeholder="Colours, sizes, inspiration links, the occasion…"
          className="bg-cream/50"
        />
      </Field>
      <button className="w-full rounded-full bg-ink py-3.5 text-sm font-medium text-white transition-colors hover:bg-clay">
        Send request
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
              value === o ? "border-ink bg-ink text-white" : "border-ink/15 hover:border-ink/40",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
