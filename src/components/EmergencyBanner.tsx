import React, { useState } from "react";
import { COMPANY } from "../data/company";
import { Phone, Clock, X, AlertCircle } from "lucide-react";

export function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="24/7 Emergency Dispatch Notice"
      className="bg-slate-900 text-white text-xs border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 font-bold text-orange-400 bg-orange-950/80 border border-orange-800/80 px-2 py-0.5 rounded-sm uppercase tracking-wider text-[10px]">
            <AlertCircle className="w-3 h-3 text-orange-400" />
            24/7 Emergency Dispatch
          </span>
          <span className="text-slate-200">
            Rapid heating &amp; cooling repairs in Metro City &amp; surrounding areas.
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
            <Clock className="w-3 h-3 text-sky-400" />
            Avg. on-site arrival: 45 minutes
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${COMPANY.emergencyPhone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-1 font-mono-num font-bold text-sky-400 hover:text-sky-300 transition-colors"
            aria-label={`Call 24/7 emergency hotline ${COMPANY.emergencyPhone}`}
          >
            <Phone className="w-3 h-3 text-orange-400 animate-pulse" />
            <span>{COMPANY.emergencyPhone}</span>
          </a>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
