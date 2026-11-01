import React, { useEffect } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { SERVICE_AREAS, ServiceArea } from "../data/serviceAreas";
import { SERVICES } from "../data/services";
import { COMPANY } from "../data/company";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  MapPin,
  Clock,
  Phone,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Star,
  ArrowRight,
} from "lucide-react";

export function ServiceAreaDetailPage({ areaId }: { areaId: string }) {
  const { openBooking } = useRouter();
  const area = SERVICE_AREAS.find((a) => a.id === areaId);

  // Dynamic Local Area JSON-LD Schema
  useEffect(() => {
    if (!area) return;

    document.title = area.metaTitle;

    const existing = document.getElementById("area-schema");
    if (existing) existing.remove();

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      "name": `${COMPANY.name} - ${area.name} Service Division`,
      "telephone": COMPANY.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": area.name,
        "addressRegion": "CA",
        "postalCode": area.zipCodes[0],
      },
      "areaServed": area.name,
      "description": area.description,
    };

    const script = document.createElement("script");
    script.id = "area-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("area-schema");
      if (el) el.remove();
    };
  }, [area]);

  if (!area) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Service Area Not Found</h1>
        <p className="text-xs text-slate-600">The requested area page does not exist or has been updated.</p>
        <Link href="/service-areas" className="inline-block px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg">
          Browse All Service Areas
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: area.name },
        ]}
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-800 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{area.name} Local Dispatch</span>
            </span>
            <span className="text-xs font-mono-num text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800">
              Avg ETA: {area.localResponseTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            {area.headline}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {area.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openBooking(`area-${area.id}`)}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule {area.name} Dispatch</span>
            </button>

            <a
              href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
              className="px-5 py-3 bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-semibold rounded-xl flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call Dispatch: {COMPANY.phone}</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap gap-4">
            <div>
              <strong className="text-white">Zip Codes Covered: </strong>
              <span className="font-mono-num">{area.zipCodes.join(", ")}</span>
            </div>
            <div>
              <strong className="text-white">Neighborhoods: </strong>
              <span>{area.neighborhoods.join(", ")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Column: Climate Challenges & Local Testimonial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Climate & Architecture Insights */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-lg">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h2>Climate &amp; Building Engineering in {area.name}</h2>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {area.climateChallenges}
              </p>

              <div className="pt-2">
                <div className="font-bold text-xs text-slate-900 mb-2">Frequent Local Mechanical Challenges:</div>
                <div className="space-y-2 text-xs text-slate-700">
                  {area.commonLocalIssues.map((issue, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Available in this City */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                Services Available in {area.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {SERVICES.map((svc) => (
                  <div key={svc.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-slate-900">{svc.title}</div>
                      <div className="text-[11px] text-slate-500">{svc.warranty.split(" ")[0]} Guarantee</div>
                    </div>
                    <Link href={`/services/${svc.slug}`} className="text-sky-700 font-bold hover:underline">
                      Details →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Local Review & Dispatch Station (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Local Testimonial Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
              <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                Local Customer Story
              </span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-xs text-slate-700 leading-relaxed italic">
                "{area.localTestimonial.quote}"
              </blockquote>
              <div className="pt-2 border-t border-slate-100 text-xs">
                <div className="font-bold text-slate-900">{area.localTestimonial.author}</div>
                <div className="text-[11px] text-slate-500">{area.localTestimonial.neighborhood}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{area.localTestimonial.service} · {area.localTestimonial.date}</div>
              </div>
            </div>

            {/* Dispatch Station Information */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3 text-xs">
              <div className="font-bold text-sm text-sky-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Local Staging Center</span>
              </div>
              <p className="text-slate-300">
                {area.dispatchStation}
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div>• Fully-stocked rolling vans with 400+ OEM parts</div>
                <div>• GPS-dispatched nearest on-duty technician</div>
                <div>• Zero extra mileage charges</div>
              </div>
              <button
                type="button"
                onClick={() => openBooking(`area-${area.id}`)}
                className="w-full mt-2 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors text-center"
              >
                Book {area.name} Service
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
