import React from "react";
import { Link, useRouter } from "../context/RouterContext";
import { SERVICE_AREAS } from "../data/serviceAreas";
import { COMPANY } from "../data/company";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { MapPin, Clock, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export function ServiceAreasHubPage() {
  const { openBooking } = useRouter();

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ label: "Service Areas" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
          Local HVAC Coverage
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 font-display">
          HVAC Repair &amp; Installation Service Areas
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Apex Climate operates strategically located mobile dispatch hubs across the metropolitan region, providing rapid same-day heating and air conditioning service.
        </p>
      </section>

      {/* Service Areas Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{area.name}</span>
                  </span>
                  <span className="text-[11px] font-mono-num font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {area.localResponseTime.split("(")[0]}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {area.description}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-1 text-xs">
                  <div className="text-[11px] font-bold text-slate-700">Covered Neighborhoods:</div>
                  <div className="text-[11px] text-slate-500">
                    {area.neighborhoods.slice(0, 3).join(" · ")} + more
                  </div>
                </div>

                <div className="pt-1 text-[11px] text-slate-400 font-mono-num">
                  Zip Codes: {area.zipCodes.join(", ")}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <Link
                  href={`/service-areas/${area.id}`}
                  className="font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1"
                >
                  <span>Explore {area.name} Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => openBooking(`area-${area.id}`)}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs"
                >
                  Book Dispatch
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Embed Placeholder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                Geographic Coverage Map
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Metro Regional Dispatch Perimeter
              </h2>
            </div>
            <a
              href={`tel:${COMPANY.emergencyPhone.replace(/[^0-9]/g, "")}`}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg flex items-center gap-2 shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>24/7 Hotline: {COMPANY.emergencyPhone}</span>
            </a>
          </div>

          {/* Interactive Graphic Representation of Regional Dispatch */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 min-h-64 flex flex-col justify-center items-center text-center space-y-3 relative overflow-hidden">
            <div className="w-12 h-12 bg-sky-900/60 rounded-full flex items-center justify-center text-sky-400 border border-sky-500/30">
              <MapPin className="w-6 h-6 text-sky-400 animate-bounce" />
            </div>
            <div className="font-bold text-white text-sm">
              Primary Dispatch Operations Center: {COMPANY.address.full}
            </div>
            <p className="text-xs text-slate-400 max-w-lg">
              Covering a 35-mile radius including all commercial business corridors, residential subdivisions, and coastal waterfront communities.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-2 text-[11px] text-slate-300">
              {COMPANY.serviceAreas.map((a) => (
                <span key={a.id} className="bg-slate-900 border border-slate-850 px-2.5 py-1 rounded-md">
                  📍 {a.name} ({a.avgEta})
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
