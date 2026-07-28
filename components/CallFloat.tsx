"use client";

import { useState } from "react";
import { Phone } from "@/components/icons";

const PHONE_E164 = "+916230952069";
const PHONE_DISPLAY = "+91 62309 52069";

export default function CallFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`tel:${PHONE_E164}`}
      aria-label={`Call us at ${PHONE_DISPLAY}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-24 right-6 z-50 flex items-center gap-3 overflow-hidden rounded-full bg-blue text-white shadow-lift transition-all duration-300 hover:shadow-xl"
      style={{ maxWidth: hovered ? "220px" : "52px" }}
    >
      {/* Icon — always visible */}
      <span className="grid h-[52px] w-[52px] shrink-0 place-items-center">
        <Phone className="h-6 w-6" />
      </span>
      {/* Label — slides in on hover */}
      <span
        className="shrink-0 pr-5 text-sm font-semibold whitespace-nowrap transition-opacity duration-200"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        Call us
      </span>
    </a>
  );
}
