"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";

type PlanTripContextValue = {
  popupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
  /** Package-specific enquiry modals call this while they're open, so the
   *  auto popup waits instead of stacking on top of a form in progress. */
  setOtherFormOpen: (open: boolean) => void;
  isOtherFormOpen: () => boolean;
};

const PlanTripContext = createContext<PlanTripContextValue | null>(null);

export function PlanTripProvider({ children }: { children: React.ReactNode }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const otherFormCount = useRef(0);

  const openPopup = useCallback(() => setPopupOpen(true), []);
  const closePopup = useCallback(() => setPopupOpen(false), []);

  const setOtherFormOpen = useCallback((open: boolean) => {
    otherFormCount.current = Math.max(0, otherFormCount.current + (open ? 1 : -1));
  }, []);

  const isOtherFormOpen = useCallback(() => otherFormCount.current > 0, []);

  return (
    <PlanTripContext.Provider
      value={{ popupOpen, openPopup, closePopup, setOtherFormOpen, isOtherFormOpen }}
    >
      {children}
    </PlanTripContext.Provider>
  );
}

export function usePlanTrip() {
  const ctx = useContext(PlanTripContext);
  if (!ctx) throw new Error("usePlanTrip must be used within PlanTripProvider");
  return ctx;
}
