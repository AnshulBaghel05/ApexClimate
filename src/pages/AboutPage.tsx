import React from "react";
import { Link, useRouter } from "../context/RouterContext";
import { COMPANY } from "../data/company";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ShieldCheck, Award, Users, CheckCircle2, Phone, Calendar, Wrench, Building2, HeartHandshake } from "lucide-react";

export function AboutPage() {
  const { openBooking } = useRouter();

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
              18 Years of Mechanical Excellence (Est. 2008)
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Built on Precision Diagnostics, Integrity, and Genuine Craftsmanship
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded in 2008 in Metro City, {COMPANY.name} started with a single service van and an unyielding commitment: eliminate the dishonest upselling and surprise pricing that plagued the HVAC industry. Over 18 years and 14,800+ completed installations and repairs later, our team has grown into one of the region's most respected mechanical contracting providers for residential homes and commercial enterprises.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openBooking()}
                className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-xs"
              >
                Schedule Service with Our Team
              </button>
              <Link
                href="/projects"
                className="px-5 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl"
              >
                View Our Commercial Case Studies
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="/images/technician_indoor_maintenance.jpg"
                alt="Lead HVAC diagnostic specialist inspecting heating equipment"
                className="w-full h-80 object-cover"
                width={500}
                height={350}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">Our Four Cornerstones</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "1. Diagnostic Accuracy",
                desc: "We test subcooling, capacitance, amp draws, and airflow with precision digital instrumentation. We identify root causes rather than swapping parts blindly.",
              },
              {
                title: "2. Flat-Rate Honesty",
                desc: "You will always see a clear, upfront estimate before work begins. No open-ended hourly billing, no overtime surprise fees, ever.",
              },
              {
                title: "3. Continuous Education",
                desc: "Every mechanic on staff attends 40+ hours of mandatory annual factory training on cutting-edge inverter technologies, VRV systems, and ASHRAE ventilation codes.",
              },
              {
                title: "4. Lasting Accountability",
                desc: "We stand behind every repair and install with our written 1-to-10 year warranty policies and 100% Satisfaction Money-Back Guarantee.",
              },
            ].map((v, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Licenses & Fleet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                Certified Qualifications
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Verified Credentials &amp; Legal Protection
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Never risk your home or commercial facility with unlicensed, uninsured handymen. HVAC systems operate with high-voltage 240V/480V electricity, flammable natural gas, and high-pressure chemical refrigerants.
              </p>
              <div className="space-y-2 text-xs">
                {COMPANY.licenses.map((lic, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">{lic.type}: <span className="font-mono-num">{lic.number}</span></div>
                      <div className="text-[11px] text-slate-500">{lic.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-xl space-y-4 text-xs">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-orange-400" />
                <span>Our 100% Satisfaction Guarantee</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                If you are not completely satisfied with the craftsmanship or performance of our installed system or repair within the first 12 months, our team will return, correct the issue at zero charge, or refund your service fee in full.
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                Signed, The Executive Mechanical Team at {COMPANY.name}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
