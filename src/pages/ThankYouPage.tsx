import React from "react";
import { Link, useRouter } from "../context/RouterContext";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { COMPANY } from "../data/company";
import { CheckCircle2, ShieldCheck, Phone, Home, Calendar, Clock } from "lucide-react";

export function ThankYouPage() {
  return (
    <div className="space-y-12 pb-20">
      <Breadcrumbs items={[{ label: "Confirmation & Thank You" }]} />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-6">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>

        <div className="space-y-2">
          <span className="font-mono-num font-bold text-xs text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            Dispatch Request Confirmed
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 font-display">
            Thank You! Your Request Has Been Dispatched
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Our Metro City service coordinator has logged your request into our dispatch queue. We will contact you via phone or SMS within 15–30 minutes to confirm your technician's exact arrival time.
          </p>
        </div>

        {/* Pre-Arrival Preparation Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 text-left text-xs space-y-3 shadow-xs">
          <div className="font-bold text-slate-900 flex items-center gap-2 text-sm">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>How to Prepare Before Your Technician Arrives:</span>
          </div>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-100 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span><strong>Clear Access: </strong>Please ensure a clear pathway to your thermostat, indoor furnace/air handler utility closet, and outdoor condenser unit.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-100 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span><strong>Secure Pets: </strong>For the safety of both your pets and our field staff, please keep pets secured in a separate room.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-100 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span><strong>Decision Maker: </strong>An adult decision-maker (18+) must be present on site to review the diagnostic findings and authorize any recommended flat-rate repairs.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href="/"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <a
            href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-sky-600" />
            <span>Need to Reschedule? Call {COMPANY.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
