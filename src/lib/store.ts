"use client";

import { useSyncExternalStore } from "react";

// Tiny localStorage-backed store shared by the cart and bookings.
function createStore<T>(key: string, initial: T) {
  let state: T = initial;
  let loaded = false;
  const listeners = new Set<() => void>();

  const load = () => {
    if (loaded || typeof window === "undefined") return;
    loaded = true;
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) state = JSON.parse(raw) as T;
    } catch {
      // storage unavailable — keep in-memory state
    }
  };

  const set = (next: T | ((prev: T) => T)) => {
    load();
    state = typeof next === "function" ? (next as (prev: T) => T)(state) : next;
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {}
    listeners.forEach((l) => l());
  };

  const subscribe = (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  };

  const getSnapshot = () => {
    load();
    return state;
  };

  const useStore = () => useSyncExternalStore(subscribe, getSnapshot, () => initial);

  return { set, useStore, get: getSnapshot };
}

// ---- Cart ----

export type CartLine = { slug: string; qty: number };

const cart = createStore<CartLine[]>("clayra-cart", []);

export const useCart = cart.useStore;

export function addToCart(slug: string, qty = 1) {
  cart.set((lines) => {
    const existing = lines.find((l) => l.slug === slug);
    if (existing) return lines.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l));
    return [...lines, { slug, qty }];
  });
}

export function setQty(slug: string, qty: number) {
  cart.set((lines) =>
    qty <= 0 ? lines.filter((l) => l.slug !== slug) : lines.map((l) => (l.slug === slug ? { ...l, qty } : l)),
  );
}

export const clearCart = () => cart.set([]);

// ---- Bookings ----

export type Booking = {
  id: string;
  sessionId: string;
  workshopId: string;
  date: string; // yyyy-MM-dd
  start: number;
  guests: number;
  name: string;
  email: string;
  notes?: string;
};

const bookings = createStore<Booking[]>("clayra-bookings", []);

export const useBookings = bookings.useStore;

export const addBooking = (b: Booking) => bookings.set((all) => [...all, b]);

export const cancelBooking = (id: string) => bookings.set((all) => all.filter((b) => b.id !== id));

// ---- Today (client-only, avoids prerendering a stale date) ----

const noop = () => () => {};
const todayKey = () => new Date().toDateString();

export function useToday(): Date | null {
  const key = useSyncExternalStore(noop, todayKey, () => null);
  return key ? new Date(key) : null;
}
