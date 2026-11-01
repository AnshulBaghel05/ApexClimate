import React, { useState } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { SERVICES } from "../data/services";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Home, Building2, ChevronRight, CheckCircle2, ShieldCheck, Phone, Calendar } from "lucide-react";
import { COMPANY } from "../data/company";

export function ServicesHubPage() {
  const { openBooking } = useRouter();
  const [filter, setFilter] = useState<"all" | "residential" | "commercial">("all");

  const filteredServices = SERVICES.filter((s) => {
    if (filter === "all") return true;
    return s.category === filter;
  });

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ label: "Services" }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
            Residential &amp; Commercial Mechanical Services
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 font-display">
            Precision HVAC Solutions for Every Building &amp; Need
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Explore our complete suite of 24/7 emergency repairs, custom ACCA Manual J installations, indoor air quality filtration, and proactive maintenance contracts.
          </p>

          {/* Filter Segmented Control */}
          <div className="mt-6 inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                filter === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Services ({SERVICES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("residential")}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                filter === "residential" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Home className="w-3.5 h-3.5 text-sky-600" />
              <span>Residential</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter("commercial")}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                filter === "commercial" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-sky-600" />
              <span>Commercial</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
                    {svc.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 capitalize">
                    {svc.category}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900">
                  <Link href={`/services/${svc.slug}`} className="hover:text-sky-600 transition-colors">
                    {svc.title}
                  </Link>
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {svc.shortDescription}
                </p>

                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-700 mb-1.5">Diagnostic &amp; Key Features:</div>
                  <ul className="space-y-1 text-xs text-slate-500">
                    {svc.keyFeatures.slice(0, 2).map((kf, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{kf.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">Response SLA</span>
                  <span className="font-semibold text-slate-700">{svc.turnaround}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openBooking(svc.id)}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg"
                  >
                    Book Now
                  </button>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700"
                    aria-label={`View details for ${svc.title}`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold">Experiencing an HVAC Emergency Right Now?</h3>
            <p className="text-xs text-slate-400">
              Live technicians on duty 24/7 across Metro City. Average on-site arrival: 45 minutes.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.emergencyPhone.replace(/[^0-9]/g, "")}`}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency: {COMPANY.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
