import React, { useState, useMemo } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { PRODUCTS, ProductItem } from "../data/products";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  Search,
  Filter,
  SlidersHorizontal,
  Scale,
  Sparkles,
  Check,
  ArrowUpDown,
  Calculator,
} from "lucide-react";

export function ShopPage() {
  const { openQuote, addToCompare, comparedProducts } = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedTonnage, setSelectedTonnage] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"featured" | "efficiency-desc" | "price-asc" | "price-desc">("featured");

  const categories = [
    { id: "all", label: "All Equipment" },
    { id: "air-conditioners", label: "Air Conditioners" },
    { id: "heat-pumps", label: "Heat Pumps" },
    { id: "furnaces", label: "Gas Furnaces" },
    { id: "thermostats", label: "Thermostats & Smart Controls" },
    { id: "air-purifiers", label: "Air Purifiers & Filters" },
    { id: "commercial-units", label: "Commercial RTUs & VRF" },
  ];

  const brands = ["Carrier", "Daikin", "Trane", "Lennox", "Mitsubishi Electric", "Rheem", "Ecobee"];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) return false;
      // Brand filter
      if (selectedBrand !== "all" && item.brand !== selectedBrand) return false;
      // Tonnage filter
      if (selectedTonnage !== "all") {
        const num = parseFloat(selectedTonnage);
        if (Math.abs(item.tonnageNumeric - num) > 0.5) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchBrand = item.brand.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "efficiency-desc") return b.efficiencyNumeric - a.efficiencyNumeric;
      if (sortBy === "price-asc") return a.priceNumeric - b.priceNumeric;
      if (sortBy === "price-desc") return b.priceNumeric - a.priceNumeric;
      return 0; // default featured
    });
  }, [selectedCategory, selectedBrand, selectedTonnage, searchQuery, sortBy]);

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ label: "Shop Equipment" }]} />

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Factory Direct High-Efficiency Systems
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              HVAC Equipment &amp; Smart Controls Catalog
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore energy-certified central air conditioners, cold-climate heat pumps, modulating gas furnaces, and whole-home filtration from top brands. Full installation warranties included.
            </p>
          </div>

          <Link
            href="/calculator"
            className="px-4 py-3 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-xl flex items-center gap-2 shrink-0 shadow-md"
          >
            <Calculator className="w-4 h-4" />
            <span>Need Help Sizing? Use BTU Tool</span>
          </Link>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-4">
          {/* Search & Sort Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models, brands, or features..."
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-semibold shrink-0">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs px-3 py-2 border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-sky-500"
              >
                <option value="featured">Featured Systems</option>
                <option value="efficiency-desc">Highest Efficiency (SEER2 / AFUE)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Filters: Brand & Tonnage */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">Brand:</span>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-2 py-1 border border-slate-300 rounded-md bg-white focus:outline-none"
              >
                <option value="all">All Brands</option>
                {brands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">Capacity / Tonnage:</span>
              <select
                value={selectedTonnage}
                onChange={(e) => setSelectedTonnage(e.target.value)}
                className="px-2 py-1 border border-slate-300 rounded-md bg-white focus:outline-none"
              >
                <option value="all">All Capacities</option>
                <option value="2.0">2.0 Tons (~1,200 sq ft)</option>
                <option value="3.0">3.0 Tons (~1,800 sq ft)</option>
                <option value="3.5">3.5 Tons (~2,100 sq ft)</option>
                <option value="4.0">4.0 Tons (~2,400 sq ft)</option>
                <option value="10.0">10+ Tons (Commercial)</option>
              </select>
            </div>

            <span className="ml-auto font-mono-num text-slate-400 text-xs">
              Showing {filteredProducts.length} of {PRODUCTS.length} Systems
            </span>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <p className="text-sm font-semibold text-slate-800">No equipment matches your filter criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSelectedBrand("all");
                setSelectedTonnage("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isCompared = comparedProducts.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative h-52 bg-slate-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                        width={400}
                        height={260}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded">
                        {product.brand}
                      </div>
                      {product.taxCreditEligible && (
                        <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-xs">
                          <Sparkles className="w-3 h-3" />
                          <span>$2,000 IRA Credit</span>
                        </div>
                      )}
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="text-[11px] font-semibold text-slate-500">
                        {product.categoryLabel} · {product.tonnage}
                      </div>

                      <h2 className="font-bold text-base text-slate-900 line-clamp-2">
                        <Link href={`/shop/product/${product.id}`} className="hover:text-sky-600 transition-colors">
                          {product.name}
                        </Link>
                      </h2>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Specs pills */}
                      <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono-num">
                        <span className="font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                          {product.efficiencyRating}
                        </span>
                        <span className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {product.soundRating.split(" ")[0]}
                        </span>
                        <span className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {product.warranty.split(" ")[0]} Warranty
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 space-y-3 border-t border-slate-100 mt-2">
                    <div className="flex items-center justify-between pt-3">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Installed Estimate</span>
                        <span className="text-xs font-bold text-slate-900 font-mono-num">{product.priceRange}</span>
                      </div>
                      <Link
                        href={`/shop/product/${product.id}`}
                        className="text-xs font-bold text-sky-700 hover:underline"
                      >
                        Full Specs →
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => openQuote(product.name)}
                        className="py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors text-center"
                      >
                        Request Quote
                      </button>
                      <button
                        type="button"
                        onClick={() => addToCompare(product.id)}
                        className={`py-2 px-3 border text-xs font-semibold rounded-lg transition-colors text-center ${
                          isCompared
                            ? "bg-sky-50 border-sky-300 text-sky-700 font-bold"
                            : "border-slate-300 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        {isCompared ? "In Compare (✓)" : "Add to Compare"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
