import React from "react";
import { useRouter } from "../context/RouterContext";
import { COMPANY } from "../data/company";
import { Phone, Calendar, MessageSquare } from "lucide-react";

export function MobileStickyBar() {
  const { openBooking } = useRouter();

  return (
    <div
      aria-label="Mobile Quick Action Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg h-14 flex items-center justify-between gap-2"
    >
      {/* 1. Direct Click to Call */}
      <a
        href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
        className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 rounded-lg bg-slate-900 text-white text-xs font-semibold active:bg-slate-800"
        aria-label={`Call ${COMPANY.phone}`}
      >
        <Phone className="w-3.5 h-3.5 text-sky-400" />
        <span>Call Now</span>
      </a>

      {/* 2. Primary Booking CTA */}
      <button
        type="button"
        onClick={() => openBooking()}
        className="flex-1 flex items-center justify-center gap-1.5 h-10 px-2 rounded-lg bg-orange-600 text-white text-xs font-bold active:bg-orange-700 shadow-xs"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Service</span>
      </button>

      {/* 3. WhatsApp Direct Chat */}
      <a
        href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%20Apex%20Climate%2C%20I%20would%20like%20a%20quote`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-600 text-white active:bg-emerald-700 shrink-0"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4" />
      </a>
    </div>
  );
}
