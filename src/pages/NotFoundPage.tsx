import React from "react";
import { Link, useRouter } from "../context/RouterContext";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { COMPANY } from "../data/company";
import { AlertCircle, Home, Phone, Wrench, Search } from "lucide-react";

export function NotFoundPage() {
  const { openBooking } = useRouter();

  return (
    <div className="space-y-12 pb-20">
      <Breadcrumbs items={[{ label: "Page Not Found (404)" }]} />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-10">
        <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto border border-orange-200">
          <AlertCircle className="w-8 h-8 text-orange-600" />
        </div>

        <div className="space-y-2">
          <span className="font-mono-num font-bold text-xs text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
            Error 404
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 font-display">
            The Requested Page Could Not Be Located
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            The page or service address you entered might have been relocated or updated. Here are helpful links to get you back on track:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs max-w-md mx-auto pt-2">
          <Link
            href="/"
            className="p-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 font-semibold text-slate-800 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 text-sky-600" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/services"
            className="p-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 font-semibold text-slate-800 flex items-center justify-center gap-2"
          >
            <Wrench className="w-4 h-4 text-sky-600" />
            <span>Browse Services Hub</span>
          </Link>
          <Link
            href="/shop"
            className="p-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 font-semibold text-slate-800 flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4 text-sky-600" />
            <span>Equipment Shop</span>
          </Link>
          <button
            type="button"
            onClick={() => openBooking()}
            className="p-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Book Service Call</span>
          </button>
        </div>

        <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
          Need immediate 24/7 help? Call dispatch at{" "}
          <a href={`tel:${COMPANY.emergencyPhone.replace(/[^0-9]/g, "")}`} className="font-bold text-red-600 hover:underline font-mono-num">
            {COMPANY.emergencyPhone}
          </a>
        </div>
      </section>
    </div>
  );
}
