import React, { useState, useEffect } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { SERVICES, ServiceItem } from "../data/services";
import { PRODUCTS } from "../data/products";
import { COMPANY } from "../data/company";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  ShieldCheck,
  Clock,
  Award,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  Plus,
  Minus,
  Sparkles,
} from "lucide-react";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const { openBooking, openQuote } = useRouter();
  const service = SERVICES.find((s) => s.slug === slug);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Dynamic Service Schema.org JSON-LD
  useEffect(() => {
    if (!service) return;

    document.title = `${service.title} | ${COMPANY.name}`;

    const existing = document.getElementById("service-schema");
    if (existing) existing.remove();

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": service.title,
      "provider": {
        "@type": "HVACBusiness",
        "name": COMPANY.name,
        "telephone": COMPANY.phone,
        "address": COMPANY.address.full,
      },
      "areaServed": COMPANY.serviceAreas.map((a) => a.name),
      "description": service.shortDescription,
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "description": service.pricingGuide.typicalRange,
        },
      },
    };

    const script = document.createElement("script");
    script.id = "service-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("service-schema");
      if (el) el.remove();
    };
  }, [service]);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Service Not Found</h1>
        <p className="text-xs text-slate-600">The requested mechanical service does not exist or has been moved.</p>
        <Link href="/services" className="inline-block px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg">
          Browse All Services
        </Link>
      </div>
    );
  }

  // Related products
  const relatedProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-800">
                {service.badge}
              </span>
              <span className="text-xs text-slate-400 capitalize">
                {service.category} Division
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {service.heroSubtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openBooking(service.id)}
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Service Now</span>
              </button>

              <a
                href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-semibold rounded-xl flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>

            {/* SLA Badges */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Response: <strong className="text-white">{service.turnaround}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Warranty: <strong className="text-white">{service.warranty.split(" ")[0]}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certification: <strong className="text-white">NATE &amp; EPA 608</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Column Content: Symptoms & Diagnostic Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Common Symptoms */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <h2>Common Symptoms We Diagnose &amp; Resolve</h2>
              </div>
              <p className="text-xs text-slate-600">
                If your system is displaying any of these warning signs, our certified technicians can quickly identify the root mechanical or electrical cause:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.commonSymptoms.map((symptom, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnostic Checklist */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-sky-600" />
                <h2>Our Technical Diagnostic Checklist</h2>
              </div>
              <p className="text-xs text-slate-600">
                Every service visit includes an exhaustive multi-point technical assessment using calibrated instruments:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {service.diagnosticChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50">
                    <span className="w-5 h-5 rounded-full bg-sky-50 text-sky-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Advantages */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900">Why Choose Apex for {service.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.keyFeatures.map((feat, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                    <h3 className="font-bold text-slate-900 text-xs">{feat.title}</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <HelpCircle className="w-4 h-4 text-sky-600" />
                  <h2>Frequently Asked Questions About This Service</h2>
                </div>
                <div className="space-y-2">
                  {service.faqs.map((faq, i) => {
                    const isOpen = expandedFaq === i;
                    return (
                      <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setExpandedFaq(isOpen ? null : i)}
                          className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs font-bold text-slate-900 hover:bg-slate-50"
                        >
                          <span>{faq.question}</span>
                          <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                            {isOpen ? <Minus className="w-3.5 h-3.5 text-slate-600" /> : <Plus className="w-3.5 h-3.5 text-slate-600" />}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column: Transparent Pricing & Quick Booking (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Transparent Pricing Card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
              <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                Transparent Pricing Promise
              </span>
              <div>
                <div className="text-2xl font-extrabold text-slate-900 font-display">
                  {service.pricingGuide.diagnosticFee}
                </div>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">
                  Diagnostic Fee
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-2 border-t border-slate-200 pt-3">
                <div>
                  <span className="font-bold text-slate-900 block">Typical Repair/Service Range:</span>
                  <span className="font-mono-num font-semibold text-sky-700">{service.pricingGuide.typicalRange}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Includes:</span>
                  <span>{service.pricingGuide.includes}</span>
                </div>
                <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-800 text-[11px]">
                  <strong>No Hidden Surprises: </strong>
                  {service.pricingGuide.note}
                </div>
              </div>

              <button
                type="button"
                onClick={() => openBooking(service.id)}
                className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                Schedule Service Call
              </button>
            </div>

            {/* Emergency Call Box */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3">
              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                Need Immediate Help?
              </span>
              <h3 className="font-bold text-base">24/7 Rapid Emergency Dispatch</h3>
              <p className="text-xs text-slate-400">
                Our local dispatch team is active 24/7/365. Average arrival under 45 minutes.
              </p>
              <a
                href={`tel:${COMPANY.emergencyPhone.replace(/[^0-9]/g, "")}`}
                className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {COMPANY.emergencyPhone}</span>
              </a>
            </div>

            {/* Service Areas Link */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2 text-xs">
              <div className="font-bold text-slate-900">Local Service Locations:</div>
              <p className="text-slate-500 text-[11px]">
                Available across Metro City, North Valley, West Hills, South Bay, Oakridge, and Riverdale.
              </p>
              <Link href="/service-areas" className="text-sky-700 font-bold hover:underline inline-block pt-1">
                View Service Areas Map →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
