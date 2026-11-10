"use client";

import { useEffect, useRef, useState } from "react";
import { usePlanTrip } from "./PlanTripContext";
import { XMark } from "./icons";

const SHOWN_KEY = "360travellers_plan_trip_shown";
const AUTO_DELAY_MS = 6000;
const RECHECK_MS = 1500;

export default function PlanTripPopup() {
  const { popupOpen, openPopup, closePopup, isOtherFormOpen } = usePlanTrip();

  // Auto-open once per browser tab session, after a short delay — but wait
  // for any package-specific enquiry form to close first instead of stacking.
  useEffect(() => {
    if (sessionStorage.getItem(SHOWN_KEY)) return;

    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += RECHECK_MS;
      if (elapsed < AUTO_DELAY_MS) return;
      if (isOtherFormOpen()) return; // keep waiting
      sessionStorage.setItem(SHOWN_KEY, "1");
      openPopup();
      clearInterval(interval);
    }, RECHECK_MS);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!popupOpen) return null;
  return <PopupForm onClose={closePopup} />;
}

function PopupForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travellers: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          message: form.destination
            ? `Interested in: ${form.destination}\n\n${form.message}`.trim()
            : form.message,
          packageTitle: "Plan My Trip (popup enquiry)",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center"
      style={{ background: "rgba(0,0,0,0.55)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl border border-ink/10 bg-cream p-6 shadow-lift"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full bg-ink/10 text-ink transition-colors hover:bg-ink/20"
        >
          <XMark className="h-4 w-4" />
        </button>

        <p className="font-display text-xl text-ink">Plan your trip</p>
        <p className="mt-1 text-sm text-ink/55">
          Tell us a bit about what you have in mind — our team will reach out
          with a custom itinerary.
        </p>

        {status === "done" ? (
          <div className="mt-5 rounded-2xl bg-tint p-5 text-center">
            <p className="font-display text-lg text-navy">Thank you! 🎉</p>
            <p className="mt-1 text-sm text-ink/65">
              Our travel expert will reach out shortly to plan your trip.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <input
              required
              type="text"
              value={form.name}
              onChange={set("name")}
              placeholder="Full Name *"
              className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-blue focus:outline-none"
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="Email *"
              className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-blue focus:outline-none"
            />
            <div className="flex gap-2">
              <span className="inline-flex items-center rounded-xl border border-ink/15 bg-ivory px-3 text-sm text-ink/60">
                +91
              </span>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                placeholder="Your Phone *"
                className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-blue focus:outline-none"
              />
            </div>
            <input
              type="text"
              value={form.destination}
              onChange={set("destination")}
              placeholder="Where do you want to go?"
              className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-blue focus:outline-none"
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={form.travelDate}
                onChange={set("travelDate")}
                onFocus={(e) => (e.currentTarget.type = "date")}
                onBlur={(e) => {
                  if (!e.currentTarget.value) e.currentTarget.type = "text";
                }}
                placeholder="Travel Date"
                className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-blue focus:outline-none"
              />
              <input
                type="number"
                min={1}
                value={form.travellers}
                onChange={set("travellers")}
                placeholder="Travellers"
                className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-blue focus:outline-none"
              />
            </div>
            <textarea
              rows={3}
              value={form.message}
              onChange={set("message")}
              placeholder="Anything else we should know?"
              className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-blue focus:outline-none"
            />

            {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-blue px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-blue-deep disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Plan My Trip"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
