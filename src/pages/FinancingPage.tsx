import React from "react";
import { Link, useRouter } from "../context/RouterContext";
import { COMPANY } from "../data/company";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  CreditCard,
  Percent,
  Sparkles,
  Tag,
  CheckCircle2,
  Calendar,
  Phone,
  ShieldCheck,
  DollarSign,
} from "lucide-react";

export function FinancingPage() {
  const { openBooking, openQuote } = useRouter();

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ label: "Financing & Seasonal Offers" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
          Flexible Payment Options &amp; Cash Rebates
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 font-display">
          HVAC Financing, Tax Credits &amp; Seasonal Offers
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Upgrade your home's comfort today without breaking your budget. Take advantage of 0% APR financing, up to $2,000 in Federal IRA tax credits, and seasonal tune-up specials.
        </p>
      </section>

      {/* Financing Plans Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Option 1: 0% APR */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Percent className="w-5 h-5 text-sky-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">0% APR for 18 Months</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equal monthly payments with zero interest when paid in full within 18 months. Perfect for planned replacements and urgent system upgrades.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>No prepayment penalties</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Fast 60-second online approval</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Available on Carrier, Daikin, Trane</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => openQuote("0% APR Financing Consultation")}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
              >
                Apply for 0% Financing
              </button>
            </div>
          </div>

          {/* Option 2: Federal IRA Tax Credit */}
          <div className="bg-gradient-to-b from-sky-900 to-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-sky-400" />
              </div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                Federal Clean Energy Credit
              </span>
              <h2 className="text-xl font-bold text-white">Up to $2,000 IRA 25C Tax Credit</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Under Section 25C of the Inflation Reduction Act, qualifying high-efficiency heat pump systems earn an immediate 30% tax credit up to $2,000.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct dollar-for-dollar tax credit</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>We supply certified AHRI documentation</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Can be combined with local utility rebates</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => openQuote("IRA 25C Heat Pump Tax Credit System")}
                className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-xs"
              >
                Find Tax Credit Heat Pumps
              </button>
            </div>
          </div>

          {/* Option 3: Low Monthly Payments */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Low Monthly Terms (Up to 120 Mo)</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Keep your cash flow flexible with payments as low as $89/month for complete high-efficiency heating and air conditioning systems.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Fixed low interest rates</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Pay off early anytime with $0 fees</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Energy savings offset monthly payments</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => openQuote("Low Monthly Payment Plan")}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
              >
                Calculate Monthly Payments
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Promotion Coupons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
              Exclusive Seasonal Promotions
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">Current Active Discounts</h2>
            <p className="text-xs text-slate-500 mt-1">
              Mention these promotional codes when booking or present to your technician.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            {[
              {
                code: "SPRING79",
                title: "Precision AC Safety Tune-Up",
                discount: "$79 Special",
                original: "Regular $129",
                desc: "Complete 28-point electrical, refrigerant, and safety check plus outdoor coil wash.",
                expires: "Valid for Next 30 Days",
              },
              {
                code: "REPLACE500",
                title: "New System Replacement",
                discount: "$500 Off",
                original: "Complete Systems",
                desc: "Applied directly to invoice on any qualifying Carrier, Daikin, or Trane installation.",
                expires: "Limited Time Offer",
              },
              {
                code: "SMARTFREE",
                title: "Smart Thermostat Upgrade",
                discount: "Free Ecobee Pro",
                original: "$299 Value",
                desc: "Free Ecobee Smart Thermostat Premium included with any full system replacement.",
                expires: "While Supplies Last",
              },
            ].map((coupon, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border-2 border-dashed border-slate-300 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono-num font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                      CODE: {coupon.code}
                    </span>
                    <span className="text-[10px] text-orange-600 font-semibold">{coupon.expires}</span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900">{coupon.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-orange-600 font-mono-num">{coupon.discount}</span>
                    <span className="text-xs text-slate-400 line-through">{coupon.original}</span>
                  </div>
                  <p className="text-xs text-slate-600">{coupon.desc}</p>
                </div>

                <button
                  type="button"
                  onClick={() => openBooking(`coupon-${coupon.code}`)}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg"
                >
                  Claim This Offer
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
