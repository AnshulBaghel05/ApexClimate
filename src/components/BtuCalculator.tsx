import React, { useState, useId } from "react";
import { PRODUCTS, ProductItem } from "../data/products";
import { useRouter } from "../context/RouterContext";
import { Calculator, Check, ArrowRight, ShieldCheck, Zap, ThermometerSnowflake } from "lucide-react";

export function BtuCalculator() {
  const { openQuote, navigate } = useRouter();
  const sqftInputId = useId();
  const ceilingInputId = useId();
  const insulationInputId = useId();
  const sunInputId = useId();
  const climateInputId = useId();

  const [sqft, setSqft] = useState<number>(2000);
  const [ceilingHeight, setCeilingHeight] = useState<number>(8); // 8, 10, 12
  const [insulation, setInsulation] = useState<string>("average"); // poor, average, excellent
  const [sunlight, setSunlight] = useState<string>("moderate"); // shaded, moderate, sunny
  const [climate, setClimate] = useState<string>("warm"); // mild, warm, extreme

  // Sizing Formula
  const calculateCapacity = () => {
    // Base: ~20-25 BTU per sq ft
    let baseBtu = sqft * 22;

    // Ceiling multiplier
    if (ceilingHeight === 10) baseBtu *= 1.12;
    if (ceilingHeight === 12) baseBtu *= 1.25;

    // Insulation modifier
    if (insulation === "poor") baseBtu *= 1.2;
    if (insulation === "excellent") baseBtu *= 0.88;

    // Sunlight modifier
    if (sunlight === "shaded") baseBtu *= 0.9;
    if (sunlight === "sunny") baseBtu *= 1.15;

    // Climate modifier
    if (climate === "mild") baseBtu *= 0.9;
    if (climate === "extreme") baseBtu *= 1.2;

    const roundedBtu = Math.round(baseBtu / 1000) * 1000;
    // Standard tonnage step (1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 5.0)
    const rawTons = baseBtu / 12000;
    let recommendedTons = 2.0;
    if (rawTons <= 1.75) recommendedTons = 1.5;
    else if (rawTons <= 2.25) recommendedTons = 2.0;
    else if (rawTons <= 2.75) recommendedTons = 2.5;
    else if (rawTons <= 3.25) recommendedTons = 3.0;
    else if (rawTons <= 3.75) recommendedTons = 3.5;
    else if (rawTons <= 4.5) recommendedTons = 4.0;
    else recommendedTons = 5.0;

    return {
      btu: roundedBtu,
      tonnage: recommendedTons,
    };
  };

  const result = calculateCapacity();

  // Find matching equipment in catalog
  const matchingUnits = PRODUCTS.filter(
    (p) => p.category === "air-conditioners" || p.category === "heat-pumps"
  ).filter((p) => Math.abs(p.tonnageNumeric - result.tonnage) <= 0.5);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-sky-400" />
          </div>
          <div>
            <h3 className="text-base font-bold">Interactive HVAC Sizing &amp; BTU Calculator</h3>
            <p className="text-xs text-slate-400">
              Estimate your home's cooling tonnage and compare high-efficiency system matches
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex text-[11px] font-mono-num font-semibold text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded border border-sky-800">
          ACCA Manual J Reference
        </span>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Square Footage Slider */}
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label htmlFor={sqftInputId} className="font-bold text-slate-800">Conditioned Floor Area</label>
              <span className="font-mono-num font-bold text-sky-600 text-sm">
                {sqft.toLocaleString()} sq. ft.
              </span>
            </div>
            <input
              id={sqftInputId}
              type="range"
              min={600}
              max={4500}
              step={50}
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>600 sq ft</span>
              <span>2,000 sq ft</span>
              <span>3,500 sq ft</span>
              <span>4,500+ sq ft</span>
            </div>
          </div>

          {/* Grid of parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Ceiling Height */}
            <div>
              <label htmlFor={ceilingInputId} className="block font-semibold text-slate-700 mb-1">Average Ceiling Height</label>
              <select
                id={ceilingInputId}
                value={ceilingHeight}
                onChange={(e) => setCeilingHeight(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
              >
                <option value={8}>Standard 8 ft ceilings</option>
                <option value={10}>High 9 – 10 ft ceilings (+12% volume)</option>
                <option value={12}>Vaulted / 12+ ft cathedral ceilings</option>
              </select>
            </div>

            {/* Insulation */}
            <div>
              <label htmlFor={insulationInputId} className="block font-semibold text-slate-700 mb-1">Attic &amp; Wall Insulation</label>
              <select
                id={insulationInputId}
                value={insulation}
                onChange={(e) => setInsulation(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
              >
                <option value="average">Standard / Average (Built 1990-2015)</option>
                <option value="poor">Older / Drafty / Minimal (Pre-1990)</option>
                <option value="excellent">Modern High-Efficiency (Spray Foam / Low-E)</option>
              </select>
            </div>

            {/* Sunlight Exposure */}
            <div>
              <label htmlFor={sunInputId} className="block font-semibold text-slate-700 mb-1">Sunlight &amp; Tree Shading</label>
              <select
                id={sunInputId}
                value={sunlight}
                onChange={(e) => setSunlight(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
              >
                <option value="moderate">Moderate Sun / Partial Shade</option>
                <option value="shaded">Heavily Shaded by Mature Trees</option>
                <option value="sunny">Direct Unshaded Sun / West Exposure</option>
              </select>
            </div>

            {/* Climate Zone */}
            <div>
              <label htmlFor={climateInputId} className="block font-semibold text-slate-700 mb-1">Local Climate Zone</label>
              <select
                id={climateInputId}
                value={climate}
                onChange={(e) => setClimate(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
              >
                <option value="warm">Warm Valley (85°F–98°F typical summer)</option>
                <option value="mild">Mild Coastal (South Bay / Marina)</option>
                <option value="extreme">Extreme Desert / Inland (100°F+ frequent)</option>
              </select>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 italic">
            * Note: While this calculator provides an accurate engineering baseline, our licensed technicians perform a verified ACCA Manual J &amp; D load calculation during your free in-home consultation to guarantee warranty compliance.
          </p>
        </div>

        {/* Results Card (5 cols) */}
        <div className="lg:col-span-5 bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Estimated Cooling Requirement
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900 font-display">
                {result.tonnage.toFixed(1)} Tons
              </span>
              <span className="text-sm font-semibold text-sky-700 font-mono-num">
                (~{result.btu.toLocaleString()} BTU/h)
              </span>
            </div>

            <div className="mt-4 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Prevents short-cycling and muggy summer humidity</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Up to 35% monthly energy reduction with variable speed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Eligible for up to $2,000 Federal IRA 25C Tax Credit</span>
              </div>
            </div>

            {/* Matched Systems */}
            <div className="mt-5 pt-4 border-t border-slate-200">
              <div className="text-xs font-bold text-slate-800 mb-2">
                Recommended Systems for {result.tonnage.toFixed(1)} Tons:
              </div>
              <div className="space-y-2">
                {matchingUnits.slice(0, 2).map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="font-bold text-slate-900">{item.brand} {item.name.split(" ")[1]}</div>
                      <div className="text-[11px] text-slate-500">{item.efficiencyRating} · {item.tonnage}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => openQuote(item.name)}
                      className="px-2.5 py-1 text-[11px] font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded border border-sky-200 shrink-0"
                    >
                      Quote
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex gap-2">
            <button
              type="button"
              onClick={() => openQuote(`Estimated ${result.tonnage.toFixed(1)} Ton AC/Heat Pump System`)}
              className="flex-1 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors text-center"
            >
              Get Free Itemized Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
