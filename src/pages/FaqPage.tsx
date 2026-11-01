import React, { useState } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { FAQS, FaqItem } from "../data/faqs";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Search, Plus, Minus, HelpCircle, Phone, Calendar } from "lucide-react";
import { COMPANY } from "../data/company";

export function FaqPage() {
  const { openBooking } = useRouter();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>("res-1");

  const categories = ["All", "Residential", "Commercial", "Equipment", "Pricing", "Emergency"];

  const filteredFaqs = FAQS.filter((faq) => {
    if (selectedCategory !== "All" && faq.category !== selectedCategory) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
          Clear Answers Without Jargon
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 font-display">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Everything you need to know about HVAC maintenance, emergency repairs, equipment warranties, and financing.
        </p>

        {/* Search */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions (e.g. leaking, replacement, financing)..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-4 flex flex-wrap justify-center gap-1.5 text-xs">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                selectedCategory === c
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordions List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = expandedId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs"
            >
              <button
                type="button"
                onClick={() => setExpandedId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 uppercase tracking-wider shrink-0">
                    {faq.category}
                  </span>
                  <span>{faq.question}</span>
                </div>
                <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  {isOpen ? <Minus className="w-4 h-4 text-slate-600" /> : <Plus className="w-4 h-4 text-slate-600" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Still Have Questions Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Have a Specific Mechanical Question?</h3>
            <p className="text-xs text-slate-400">
              Speak directly with an on-duty master technician or schedule an in-home diagnostic.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 text-xs font-semibold rounded-xl"
            >
              Call {COMPANY.phone}
            </a>
            <button
              type="button"
              onClick={() => openBooking()}
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-xs"
            >
              Book Service Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
