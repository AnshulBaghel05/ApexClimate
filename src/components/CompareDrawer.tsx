import React from "react";
import { useRouter } from "../context/RouterContext";
import { PRODUCTS, ProductItem } from "../data/products";
import { X, Scale, Check, Trash2, ArrowRight } from "lucide-react";

export function CompareDrawer() {
  const {
    comparedProducts,
    removeFromCompare,
    clearCompare,
    isCompareModalOpen,
    setIsCompareModalOpen,
    openQuote,
  } = useRouter();

  if (comparedProducts.length === 0) return null;

  const items = comparedProducts
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as ProductItem[];

  return (
    <>
      {/* Floating Dock (Bottom Right) */}
      <aside
        aria-label="Product Comparison Bar"
        className="fixed bottom-16 md:bottom-6 right-4 z-40 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700 p-3 flex items-center gap-3 text-xs max-w-sm animate-in fade-in"
      >
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-sky-400" />
          <span className="font-semibold">
            Compare ({items.length}/3)
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-hidden">
          {items.map((item) => (
            <span
              key={item.id}
              className="inline-flex items-center gap-1 bg-slate-800 text-[10px] text-slate-200 px-2 py-0.5 rounded border border-slate-700 truncate max-w-[90px]"
            >
              <span className="truncate">{item.brand}</span>
              <button
                type="button"
                onClick={() => removeFromCompare(item.id)}
                className="text-slate-400 hover:text-white"
                aria-label={`Remove ${item.name} from comparison`}
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsCompareModalOpen(true)}
          className="ml-auto px-2.5 py-1 font-bold text-white bg-sky-600 hover:bg-sky-500 rounded text-[11px] whitespace-nowrap"
        >
          Compare Now
        </button>
      </aside>

      {/* Side-by-Side Comparison Modal */}
      {isCompareModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="compare-modal-title"
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
        >
          <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-sky-400" />
                <h2 id="compare-modal-title" className="text-base font-bold">
                  Side-by-Side Equipment Comparison ({items.length} Systems)
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={clearCompare}
                  className="text-xs text-slate-400 hover:text-red-400 flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsCompareModalOpen(false)}
                  className="p-1 rounded text-slate-400 hover:text-white"
                  aria-label="Close comparison window"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Table Comparison */}
            <div className="overflow-x-auto p-6">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-3 px-4 font-bold text-slate-400 uppercase tracking-wider text-[10px] w-48">
                      Specification
                    </th>
                    {items.map((item) => (
                      <th key={item.id} className="py-3 px-4 min-w-[220px]">
                        <div className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">{item.brand}</div>
                        <div className="font-bold text-slate-900 text-sm mt-0.5">{item.name}</div>
                        <div className="text-slate-500 font-mono-num mt-1">{item.priceRange}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-700 bg-slate-50/60">Tonnage / Output</td>
                    {items.map((i) => (
                      <td key={i.id} className="py-2.5 px-4 font-mono-num font-semibold text-slate-900">{i.tonnage} ({i.btuCooling.toLocaleString()} BTU)</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-700 bg-slate-50/60">Efficiency Rating</td>
                    {items.map((i) => (
                      <td key={i.id} className="py-2.5 px-4 font-bold text-sky-800">{i.efficiencyRating}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-700 bg-slate-50/60">Sound Level</td>
                    {items.map((i) => (
                      <td key={i.id} className="py-2.5 px-4 font-mono-num text-slate-700">{i.soundRating}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-700 bg-slate-50/60">Compressor / Tech</td>
                    {items.map((i) => (
                      <td key={i.id} className="py-2.5 px-4 text-slate-700">{i.type}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-700 bg-slate-50/60">IRA Tax Credit Eligible</td>
                    {items.map((i) => (
                      <td key={i.id} className="py-2.5 px-4">
                        {i.taxCreditEligible ? (
                          <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            <Check className="w-3 h-3" /> Yes (Up to $2,000)
                          </span>
                        ) : (
                          <span className="text-slate-400">Standard Warranty</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-700 bg-slate-50/60">Warranty Coverage</td>
                    {items.map((i) => (
                      <td key={i.id} className="py-2.5 px-4 text-slate-700">{i.warranty}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-700 bg-slate-50/60">Recommended For</td>
                    {items.map((i) => (
                      <td key={i.id} className="py-2.5 px-4 text-slate-600">{i.idealFor}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 px-4 bg-slate-50/60 font-semibold text-slate-700">Actions</td>
                    {items.map((i) => (
                      <td key={i.id} className="py-4 px-4">
                        <button
                          type="button"
                          onClick={() => {
                            setIsCompareModalOpen(false);
                            openQuote(i.name);
                          }}
                          className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold text-xs shadow-xs"
                        >
                          Request Quote
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
