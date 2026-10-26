"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { addDays, format, isBefore, isSameDay, startOfDay, startOfWeek } from "date-fns";
import { ChevronLeft, ChevronRight, Clock, Users } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { formatHour, endTime, getWorkshop, img, sessionsForDay, workshops, type Session } from "@/lib/data";
import { useBookings, useToday } from "@/lib/store";
import { cn } from "@/lib/utils";
import { BookingPanel } from "./booking-panel";
import { MyBookings } from "./my-bookings";

export const workshopColor: Record<string, string> = {
  "hand-building": "#c86446",
  "porcelain-painting": "#1d3557",
  "heritage-art-night": "#b97a2e",
  "botanical-imprinting": "#6f7a45",
  "linocut-printing": "#7a5c45",
  "private-sanctuary": "#7a4e63",
  "anatomical-sculpting": "#a8452f",
};

const FIRST_HOUR = 9;
const LAST_HOUR = 21;
const HOUR_PX = 72;

export function BookingExperience({ initialWorkshop = "all" }: { initialWorkshop?: string }) {
  const today = useToday();
  if (!today) return <BookingSkeleton />;
  return <BookingCalendar today={today} initialWorkshop={initialWorkshop} />;
}

function BookingCalendar({ today, initialWorkshop }: { today: Date; initialWorkshop: string }) {
  const [filter, setFilter] = useState(workshops.some((w) => w.id === initialWorkshop) ? initialWorkshop : "all");
  const [date, setDate] = useState(today);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const bookings = useBookings();

  const weekStart = startOfWeek(date, { weekStartsOn: 1 });
  const week = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const visible = (d: Date) =>
    sessionsForDay(d)
      .filter((s) => filter === "all" || s.workshopId === filter)
      // reflect the visitor's own bookings in the remaining capacity
      .map((s) => ({
        ...s,
        booked: s.booked + bookings.filter((b) => b.sessionId === s.id).reduce((n, b) => n + b.guests, 0),
      }));

  const daySessions = visible(date);
  const selected = daySessions.find((s) => s.id === selectedId) ?? null;

  const pick = (d: Date) => {
    setDate(d);
    setSelectedId(null);
  };

  return (
    <div className="container-page">
      <WorkshopPicker value={filter} onChange={(id) => {
          setFilter(id);
          setSelectedId(null);
        }} />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* Day-by-day calendar */}
        <div className="overflow-hidden rounded-sm bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 px-5 py-4">
            <div>
              <p className="text-[11px] text-muted-foreground">{format(date, "EEEE")}</p>
              <h2 className="font-serif text-3xl leading-none">{format(date, "d MMMM yyyy")}</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => pick(today)}
                className="rounded-full border border-ink/15 px-3.5 py-1.5 text-[11px] font-medium hover:border-ink/40"
              >
                Today
              </button>
              <NavButton
                label="Previous week"
                disabled={!isBefore(startOfWeek(today, { weekStartsOn: 1 }), weekStart)}
                onClick={() => {
                  const prev = addDays(date, -7);
                  pick(isBefore(prev, today) ? today : prev);
                }}
              >
                <ChevronLeft className="size-4" />
              </NavButton>
              <NavButton label="Next week" onClick={() => pick(addDays(date, 7))}>
                <ChevronRight className="size-4" />
              </NavButton>
            </div>
          </div>

          <WeekStrip week={week} today={today} selected={date} onPick={pick} countFor={(d) => visible(d).length} />

          <DayTimeline
            date={date}
            today={today}
            sessions={daySessions}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        {/* Side: mini month + booking form */}
        <div className="space-y-6">
          <div className="rounded-sm bg-white p-3">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => d && pick(d)}
              month={date}
              onMonthChange={(m) => pick(isBefore(m, today) ? today : m)}
              disabled={{ before: startOfDay(today) }}
              weekStartsOn={1}
              className="w-full bg-transparent p-0 [--cell-size:--spacing(9)]"
              classNames={{ root: "w-full" }}
            />
          </div>
          <BookingPanel
            session={selected}
            date={date}
            onBooked={() => setSelectedId(null)}
            onClear={() => setSelectedId(null)}
          />
        </div>
      </div>

      <MyBookings />
    </div>
  );
}

function NavButton({
  children,
  label,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="grid size-8 place-items-center rounded-full bg-cobalt text-white transition-opacity hover:bg-cobalt/85 disabled:opacity-25"
    >
      {children}
    </button>
  );
}

function WorkshopPicker({ value, onChange }: { value: string; onChange: (id: string) => void }) {
  return (
    <div className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:px-0 lg:grid-cols-4">
      <button
        onClick={() => onChange("all")}
        className={cn(
          "flex min-w-40 snap-start flex-col justify-between rounded-sm border p-4 text-left transition-colors",
          value === "all" ? "border-cobalt bg-cobalt text-white" : "border-ink/10 bg-white/60 hover:border-ink/30",
        )}
      >
        <span className="text-[11px] opacity-70">Showing</span>
        <span className="mt-6 font-serif text-2xl leading-none">All Workshops</span>
      </button>
      {workshops.map((w) => (
        <button
          key={w.id}
          onClick={() => onChange(w.id)}
          className={cn(
            "flex min-w-56 snap-start items-center gap-3 rounded-sm border p-2 pr-3 text-left transition-colors md:min-w-0",
            value === w.id ? "border-ink bg-white ring-1 ring-ink" : "border-ink/10 bg-white/60 hover:border-ink/30",
          )}
        >
          <Image src={img(w.image, 200)} alt="" width={64} height={64} className="size-16 shrink-0 rounded-sm object-cover" />
          <span className="min-w-0">
            <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span className="size-2 rounded-full" style={{ background: workshopColor[w.id] }} />
              {w.duration} min · ${w.price}
            </span>
            <span className="mt-1 block font-serif text-lg leading-tight">{w.title}</span>
          </span>
        </button>
      ))}
    </div>
  );
}

function WeekStrip({
  week,
  today,
  selected,
  onPick,
  countFor,
}: {
  week: Date[];
  today: Date;
  selected: Date;
  onPick: (d: Date) => void;
  countFor: (d: Date) => number;
}) {
  return (
    <div className="grid grid-cols-7 gap-1.5 border-b border-ink/10 px-3 py-3 md:gap-2 md:px-5">
      {week.map((d) => {
        const past = isBefore(d, startOfDay(today));
        const active = isSameDay(d, selected);
        const count = past ? 0 : countFor(d);
        return (
          <button
            key={d.toISOString()}
            disabled={past}
            onClick={() => onPick(d)}
            className={cn(
              "flex flex-col items-center gap-1 rounded-full py-2.5 transition-colors disabled:opacity-30",
              active ? "bg-cobalt text-white" : "hover:bg-cream",
            )}
          >
            <span className={cn("text-[10px] uppercase", active ? "text-white/70" : "text-muted-foreground")}>
              {format(d, "EEE")}
            </span>
            <span className="font-serif text-2xl leading-none">{format(d, "d")}</span>
            <span className="flex h-1.5 gap-0.5">
              {Array.from({ length: Math.min(count, 4) }, (_, i) => (
                <span key={i} className={cn("size-1 rounded-full", active ? "bg-clay-light" : "bg-clay")} />
              ))}
            </span>
            {isSameDay(d, today) && <span className="sr-only">(today)</span>}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Greedy column layout: sessions that overlap sit side by side, and each
 * overlapping group only splits its own width (sessions arrive sorted by start).
 */
function layout(sessions: Session[]) {
  const placed: { s: Session; col: number; columns: number }[] = [];
  let group: typeof placed = [];
  let cols: number[] = []; // end minute of the last session in each column
  let groupEnd = -1;

  const flush = () => {
    group.forEach((p) => (p.columns = cols.length));
    group = [];
    cols = [];
  };

  for (const s of sessions) {
    const start = s.start * 60;
    const end = start + getWorkshop(s.workshopId).duration;
    if (start >= groupEnd) flush();
    let col = cols.findIndex((e) => e <= start);
    if (col === -1) col = cols.push(end) - 1;
    else cols[col] = end;
    groupEnd = Math.max(groupEnd, end);
    const p = { s, col, columns: 1 };
    group.push(p);
    placed.push(p);
  }
  flush();
  return placed;
}

function DayTimeline({
  date,
  today,
  sessions,
  selectedId,
  onSelect,
}: {
  date: Date;
  today: Date;
  sessions: Session[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const hours = Array.from({ length: LAST_HOUR - FIRST_HOUR + 1 }, (_, i) => FIRST_HOUR + i);
  const placed = useMemo(() => layout(sessions), [sessions]);
  const isToday = isSameDay(date, today);
  const nowHour = new Date().getHours() + new Date().getMinutes() / 60;

  return (
    <div className="relative max-h-[640px] overflow-y-auto px-3 pt-4 pb-6 md:px-5">
      {sessions.length === 0 && (
        <div className="absolute inset-x-0 top-24 z-10 mx-auto w-fit rounded-full bg-cream px-5 py-2.5 text-xs text-muted-foreground">
          No sessions on this day — try another date.
        </div>
      )}
      <div className="relative" style={{ height: (LAST_HOUR - FIRST_HOUR) * HOUR_PX + 12 }}>
        {hours.map((h) => (
          <div key={h} className="absolute inset-x-0 flex items-start gap-3" style={{ top: (h - FIRST_HOUR) * HOUR_PX }}>
            <span className="-mt-1.5 w-14 shrink-0 text-right text-[10px] text-muted-foreground">{formatHour(h)}</span>
            <span className="h-px flex-1 bg-cobalt/8" />
          </div>
        ))}

        {isToday && nowHour > FIRST_HOUR && nowHour < LAST_HOUR && (
          <div
            className="absolute right-0 left-[68px] z-20 flex items-center"
            style={{ top: (nowHour - FIRST_HOUR) * HOUR_PX }}
          >
            <span className="-ml-1 size-2 rounded-full bg-clay" />
            <span className="h-px flex-1 bg-clay" />
          </div>
        )}

        <div className="absolute inset-y-0 right-0 left-[68px]">
          {placed.map(({ s, col, columns }) => {
            const w = getWorkshop(s.workshopId);
            const left = Math.max(0, w.capacity - s.booked);
            const past = isToday && s.start <= nowHour;
            const full = left <= 0;
            const disabled = past || full;
            const active = s.id === selectedId;
            const color = workshopColor[w.id];
            const height = (w.duration / 60) * HOUR_PX - 4;
            return (
              <button
                key={s.id}
                disabled={disabled}
                onClick={() => onSelect(s.id)}
                className={cn(
                  "absolute flex overflow-hidden rounded-md border-l-[3px] p-2 text-left transition-all",
                  active ? "z-10 shadow-lg ring-2 ring-ink" : "hover:shadow-md",
                  disabled && "cursor-not-allowed opacity-45",
                )}
                style={{
                  top: (s.start - FIRST_HOUR) * HOUR_PX + 2,
                  height,
                  left: `calc(${(col / columns) * 100}% + 2px)`,
                  width: `calc(${100 / columns}% - 4px)`,
                  borderColor: color,
                  backgroundColor: active ? color : `color-mix(in oklab, ${color} 12%, white)`,
                  color: active ? "white" : undefined,
                  backgroundImage: full
                    ? "repeating-linear-gradient(135deg, transparent 0 6px, rgba(0,0,0,.05) 6px 12px)"
                    : undefined,
                }}
              >
                {height > 70 && (
                  <Image
                    src={img(w.image, 160)}
                    alt=""
                    width={44}
                    height={44}
                    className="mr-2.5 hidden size-11 shrink-0 rounded object-cover sm:block"
                  />
                )}
                <span className="min-w-0 text-[11px] leading-tight">
                  <span className="block truncate font-serif text-base leading-tight">{w.title}</span>
                  <span className={cn("mt-0.5 flex flex-wrap gap-x-2.5", active ? "text-white/80" : "text-ink/60")}>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" />
                      {formatHour(s.start)} – {endTime(s.start, w.duration)}
                    </span>
                    {height > 40 && (
                      <span className="inline-flex items-center gap-1">
                        <Users className="size-3" />
                        {full ? "Fully booked" : past ? "Started" : `${left} of ${w.capacity} spots left`}
                      </span>
                    )}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function BookingSkeleton() {
  return (
    <div className="container-page">
      <div className="h-20 animate-pulse rounded-sm bg-white/60" />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="h-[720px] animate-pulse rounded-sm bg-white/60" />
        <div className="h-[520px] animate-pulse rounded-sm bg-white/60" />
      </div>
    </div>
  );
}
