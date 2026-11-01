import React, { useState } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { RESIDENTIAL_PLANS, COMMERCIAL_PLANS, MaintenanceTier } from "../data/maintenancePlans";
import { COMPANY } from "../data/company";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  ShieldCheck,
  Check,
  X,
  Sparkles,
  Zap,
  Clock,
  Phone,
  Home,
  Building2,
  Calendar,
} from "lucide-react";

export function MaintenancePlansPage() {
  const { openBooking } = useRouter();
  const [tab, setTab] = useState<"residential" | "commercial">("residential");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const activePlans = tab === "residential" ? RESIDENTIAL_PLANS : COMMERCIAL_PLANS;

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ label: "Maintenance Plans & Pricing" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
          Apex Shield Membership Protection
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 font-display">
          Prevent Breakdowns &amp; Cut Energy Costs with Scheduled Maintenance
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Documented seasonal maintenance preserves factory warranties, lowers electric bills by up to 20%, and guarantees priority emergency dispatch during extreme weather.
        </p>

        {/* Tab Toggle: Residential vs Commercial */}
        <div className="mt-6 inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setTab("residential")}
            className={`flex items-center gap-1.5 px-5 py-2 text-xs font-bold rounded-lg transition-all ${
              tab === "residential" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Home className="w-3.5 h-3.5 text-sky-600" />
            <span>Residential Home Plans</span>
          </button>
          <button
            type="button"
            onClick={() => setTab("commercial")}
            className={`flex items-center gap-1.5 px-5 py-2 text-xs font-bold rounded-lg transition-all ${
              tab === "commercial" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-sky-600" />
            <span>Commercial Facility SLAs</span>
          </button>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activePlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl border p-6 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? "border-sky-500 shadow-lg ring-1 ring-sky-500/20"
                  : "border-slate-200 shadow-2xs hover:border-slate-300"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{plan.name}</h2>
                  <p className="text-xs text-slate-500 mt-1">{plan.tagline}</p>
                </div>

                <div className="pt-2 pb-2 border-y border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-slate-900 font-mono-num">
                      {billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      {billingCycle === "monthly" ? "/month" : "/year"}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{plan.billedNote}</div>
                </div>

                {/* Core Metrics */}
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Tune-Ups Included:</span>
                    <strong className="font-semibold">{plan.visitsPerYear} Visit{plan.visitsPerYear > 1 ? "s" : ""} / Year</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Repair Discount:</span>
                    <strong className="font-semibold text-emerald-600">{plan.discountOnRepairs}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Priority SLA:</span>
                    <strong className="font-semibold">{plan.priorityDispatch}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Overtime Fees:</span>
                    <strong className="font-semibold text-orange-600">{plan.overtimeCharges}</strong>
                  </div>
                </div>

                {/* Features List */}
                <div className="pt-2 space-y-2 text-xs">
                  <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider">Plan Highlights:</span>
                  <ul className="space-y-2 text-slate-600">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openBooking(`membership-${plan.id}`)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs transition-colors shadow-xs ${
                    plan.popular
                      ? "bg-orange-600 hover:bg-orange-700 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  Enroll in {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI & Savings Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
              The Math of Preventative Care
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Why Apex Shield Pays for Itself
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              According to the U.S. Department of Energy and ACCA, regular seasonal maintenance saves an average of $300 to $500 per year by preventing capacitor burnouts, dirty coil head-pressure spikes, and avoiding emergency after-hours dispatch fees.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-xs">Energy Efficiency</span>
                <p className="text-[11px] text-slate-600">Clean coils and correct refrigerant levels reduce cooling power consumption by up to 15%.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-xs">Avoid $1,500+ Failures</span>
                <p className="text-[11px] text-slate-600">Catching a failing $35 capacitor prevents motor burnout and catastrophic compressor lockup.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-xs">Zero Overtime Fees</span>
                <p className="text-[11px] text-slate-600">Members pay standard weekday diagnostic rates even on holidays or 100°F Sunday afternoons.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
