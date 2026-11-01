import React, { useState, useEffect } from "react";
import { useRouter } from "../context/RouterContext";
import { COMPANY } from "../data/company";
import { PRODUCTS } from "../data/products";
import { X, FileText, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function QuoteModal() {
  const { isQuoteOpen, closeQuote, quoteProductInitial } = useRouter();

  const [selectedProduct, setSelectedProduct] = useState("");
  const [squareFootage, setSquareFootage] = useState("2000");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (quoteProductInitial) {
      setSelectedProduct(quoteProductInitial);
    }
  }, [quoteProductInitial]);

  if (!isQuoteOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-sky-400" />
            <h2 id="quote-modal-title" className="text-sm font-bold">
              Request Free Equipment Quote &amp; Estimate
            </h2>
          </div>
          <button
            type="button"
            onClick={closeQuote}
            className="text-slate-400 hover:text-white p-1 rounded-md"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Quote Request Received!</h3>
            <p className="text-xs text-slate-600">
              Our engineering estimator will calculate equipment sizing, available federal tax credits (up to $2,000), and utility rebates, emailing your itemized estimate to <span className="font-semibold">{email}</span> within 2 business hours.
            </p>
            <button
              type="button"
              onClick={closeQuote}
              className="px-5 py-2 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div>
              <label htmlFor="quote-product-select" className="block font-semibold text-slate-700 mb-1">
                Equipment Model / System Interest
              </label>
              <select
                id="quote-product-select"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
              >
                <option value="">-- General Whole-Home Consultation --</option>
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} ({p.tonnage})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="quote-sqft" className="block font-semibold text-slate-700 mb-1">Approx. Home/Building Sq. Ft.</label>
                <input
                  id="quote-sqft"
                  type="number"
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(e.target.value)}
                  placeholder="e.g. 2200"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
              <div>
                <label htmlFor="quote-phone" className="block font-semibold text-slate-700 mb-1">Phone Number *</label>
                <input
                  id="quote-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="quote-name" className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Henderson"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
              <div>
                <label htmlFor="quote-email" className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                <input
                  id="quote-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="quote-notes" className="block font-semibold text-slate-700 mb-1">Project Details or Existing Setup</label>
              <textarea
                id="quote-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Replacing 15-year-old Carrier unit; interested in 0% APR financing and federal tax credit..."
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-lg p-2.5 text-[11px] text-sky-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Free quote includes full Manual J load calculation &amp; warranty certificate.</span>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={closeQuote}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2 font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm"
              >
                {isSubmitting ? "Calculating Estimate..." : "Send Free Quote Request"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
