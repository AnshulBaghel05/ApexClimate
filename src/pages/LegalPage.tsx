import React, { useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { COMPANY } from "../data/company";
import { Shield, FileText, Lock } from "lucide-react";

export function LegalPage({ initialTab = "privacy" }: { initialTab?: "privacy" | "terms" | "warranty" }) {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms" | "warranty">(initialTab);

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumbs items={[{ label: "Legal & Policies" }]} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Tab selection */}
        <div className="flex border-b border-slate-200 gap-6 text-sm font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab("privacy")}
            className={`pb-3 transition-colors ${
              activeTab === "privacy"
                ? "border-b-2 border-sky-600 text-sky-700 font-bold"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("terms")}
            className={`pb-3 transition-colors ${
              activeTab === "terms"
                ? "border-b-2 border-sky-600 text-sky-700 font-bold"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Terms of Service
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("warranty")}
            className={`pb-3 transition-colors ${
              activeTab === "warranty"
                ? "border-b-2 border-sky-600 text-sky-700 font-bold"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Warranty &amp; Guarantee Policy
          </button>
        </div>

        {/* Privacy Policy */}
        {activeTab === "privacy" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 text-xs text-slate-700 leading-relaxed">
            <h1 className="text-xl font-bold text-slate-900 font-display">Privacy Policy</h1>
            <p className="text-slate-500 font-mono-num text-[11px]">Last Updated: October 2026</p>
            <p>
              At {COMPANY.legalName} ("Apex Climate", "we", "our", or "us"), we are deeply committed to protecting your personal privacy. This Privacy Policy outlines our procedures regarding the collection, handling, and storage of customer information when you use our website, book diagnostic service, or communicate with our dispatch personnel.
            </p>
            <h2 className="text-sm font-bold text-slate-900 pt-2">1. Information We Collect</h2>
            <p>
              When you submit a service booking, quote request, or career application, we collect essential service data including your name, telephone number, email address, physical address, and mechanical equipment details required for technician dispatch.
            </p>
            <h2 className="text-sm font-bold text-slate-900 pt-2">2. How We Use Your Information</h2>
            <p>
              Customer data is utilized exclusively for: (a) dispatching licensed service technicians to your property; (b) issuing itemized diagnostic estimates and invoices; (c) registering equipment warranties with manufacturers; and (d) emergency heating/cooling status communications.
            </p>
            <h2 className="text-sm font-bold text-slate-900 pt-2">3. Zero Selling of Personal Data</h2>
            <p>
              We never sell, rent, monetize, or lease your personal contact information to third-party marketing brokers or advertisers under any circumstances.
            </p>
            <h2 className="text-sm font-bold text-slate-900 pt-2">4. Contact Privacy Officer</h2>
            <p>
              For privacy inquiries or to request data deletion, contact us at {COMPANY.email} or by mail at {COMPANY.address.full}.
            </p>
          </div>
        )}

        {/* Terms of Service */}
        {activeTab === "terms" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 text-xs text-slate-700 leading-relaxed">
            <h1 className="text-xl font-bold text-slate-900 font-display">Terms of Service</h1>
            <p className="text-slate-500 font-mono-num text-[11px]">Last Updated: October 2026</p>
            <p>
              By accessing the {COMPANY.name} website or scheduling mechanical services with our technicians, you agree to comply with and be bound by the following Terms of Service.
            </p>
            <h2 className="text-sm font-bold text-slate-900 pt-2">1. Authorization for Diagnostics &amp; Estimates</h2>
            <p>
              Our technicians perform an exhaustive diagnostic inspection. Prior to commencing any repair or component replacement, a transparent, itemized flat-rate quote will be presented for your signed approval. No unauthorized work will be undertaken.
            </p>
            <h2 className="text-sm font-bold text-slate-900 pt-2">2. Payment Terms</h2>
            <p>
              Residential repairs are payable upon completion of service via major credit card, check, or approved financing. Commercial accounts may qualify for Net-30 invoicing upon credit review.
            </p>
            <h2 className="text-sm font-bold text-slate-900 pt-2">3. Licensing &amp; Compliance</h2>
            <p>
              All heating, ventilation, air conditioning, and refrigerant recovery services comply with California State Contractors License Board regulations (C-20 Lic. #948201) and Title VI of the Clean Air Act (EPA Section 608).
            </p>
          </div>
        )}

        {/* Warranty Policy */}
        {activeTab === "warranty" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 text-xs text-slate-700 leading-relaxed">
            <h1 className="text-xl font-bold text-slate-900 font-display">Warranty &amp; Workmanship Guarantee</h1>
            <p className="text-slate-500 font-mono-num text-[11px]">Official Warranty Charter</p>
            <p>
              At {COMPANY.name}, we hold our craftsmanship to the highest mechanical standards. Every service and installation is accompanied by clear, written warranty terms:
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs">New System Installation Warranty:</span>
                <span className="text-slate-600">
                  Up to 10-year limited manufacturer warranty on compressors and internal functional parts, paired with our exclusive 2-Year Workmanship Installation Guarantee.
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs">Repair Component Warranty:</span>
                <span className="text-slate-600">
                  All replacement components (capacitors, blower motors, contactors, control boards) carry a 1-Year Parts &amp; Labor Guarantee from date of repair.
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs">100% Satisfaction Money-Back Guarantee:</span>
                <span className="text-slate-600">
                  If an installed system does not perform to specified design criteria within the first 12 months, we will modify, repair, or remove the equipment with a full refund.
                </span>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
