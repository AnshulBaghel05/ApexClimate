import React, { useEffect } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { PRODUCTS, ProductItem } from "../data/products";
import { COMPANY } from "../data/company";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  ShieldCheck,
  Scale,
  Sparkles,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  FileText,
  Volume2,
  Zap,
} from "lucide-react";

export function ProductDetailPage({ productId }: { productId: string }) {
  const { openQuote, openBooking, addToCompare, comparedProducts } = useRouter();
  const product = PRODUCTS.find((p) => p.id === productId);

  // Dynamic Product JSON-LD Schema
  useEffect(() => {
    if (!product) return;

    document.title = `${product.name} | Specs & Quotes | ${COMPANY.name}`;

    const existing = document.getElementById("product-schema");
    if (existing) existing.remove();

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "image": product.image,
      "description": product.description,
      "brand": {
        "@type": "Brand",
        "name": product.brand,
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "price": product.priceNumeric,
        "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
        "seller": {
          "@type": "HVACBusiness",
          "name": COMPANY.name,
        },
      },
    };

    const script = document.createElement("script");
    script.id = "product-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("product-schema");
      if (el) el.remove();
    };
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Equipment Model Not Found</h1>
        <p className="text-xs text-slate-600">The product you are looking for has been updated or moved.</p>
        <Link href="/shop" className="inline-block px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg">
          Return to Equipment Catalog
        </Link>
      </div>
    );
  }

  const isCompared = comparedProducts.includes(product.id);
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs
        items={[
          { label: "Equipment Shop", href: "/shop" },
          { label: product.categoryLabel, href: "/shop" },
          { label: product.brand },
        ]}
      />

      {/* Main Product Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
            {/* Left: Image Box (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-4/3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                  width={600}
                  height={450}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white font-bold text-xs px-3 py-1 rounded">
                  {product.brand} Factory Authorized
                </div>
                {product.taxCreditEligible && (
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded shadow-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>$2,000 IRA Tax Credit</span>
                  </div>
                )}
              </div>

              {/* Trust Badges */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span>Apex Professional Installation Guarantee:</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
                  <li>ACCA Manual J Load Calculated before sizing</li>
                  <li>Old equipment removed &amp; recycled according to EPA 608</li>
                  <li>Title 24 duct leakage testing &amp; city permit included</li>
                  <li>{product.warranty}</li>
                </ul>
              </div>
            </div>

            {/* Right: Product Details & Purchase Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                  <span className="text-sky-700 font-bold">{product.categoryLabel}</span>
                  <span>·</span>
                  <span>{product.tonnage}</span>
                  <span>·</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    In Stock / Ready for Dispatch
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  {product.name}
                </h1>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-100">
                    <span className="text-[10px] text-sky-800 font-bold uppercase tracking-wider block">Efficiency</span>
                    <span className="text-sm font-extrabold text-sky-950 font-mono-num">{product.efficiencyRating}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Sound Rating</span>
                    <span className="text-sm font-bold text-slate-900 font-mono-num">{product.soundRating}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Warranty</span>
                    <span className="text-xs font-bold text-slate-900">{product.warranty.split("/")[0]}</span>
                  </div>
                </div>

                {/* Ideal For Box */}
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/60 text-xs text-amber-900">
                  <span className="font-bold">Ideal Application: </span>
                  <span>{product.idealFor}</span>
                </div>
              </div>

              {/* Price & Actions Box */}
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-500 block">Estimated Turnkey Installed Investment:</span>
                    <span className="text-2xl font-extrabold text-slate-900 font-mono-num">{product.priceRange}</span>
                    <span className="text-[11px] text-slate-400 block">0% APR for 18 Months available with approved credit</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => openQuote(product.name)}
                    className="py-3 px-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Exact Quote &amp; Sizing</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => addToCompare(product.id)}
                    className={`py-3 px-4 border text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 ${
                      isCompared
                        ? "bg-sky-50 border-sky-300 text-sky-700 font-bold"
                        : "border-slate-300 hover:bg-slate-50 text-slate-800"
                    }`}
                  >
                    <Scale className="w-4 h-4" />
                    <span>{isCompared ? "In Side-by-Side Compare (✓)" : "Add to Compare List"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 font-display">
              Technical Specifications &amp; Engineering Details
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Factory performance metrics tested according to AHRI 210/240 and DOE standards.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <tbody className="divide-y divide-slate-100">
                {product.specs.map((spec, i) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-semibold text-slate-700 w-1/3 bg-slate-50/50">
                      {spec.label}
                    </td>
                    <td className="py-3 px-4 text-slate-900 font-mono-num">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Features Bullet List */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h3 className="font-bold text-sm text-slate-900">Key Engineering Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
              {product.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Related {product.categoryLabel} Systems</h2>
            <Link href="/shop" className="text-xs font-bold text-sky-700 hover:underline">
              View All Equipment →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div key={rel.id} className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
                <div className="font-bold text-xs text-slate-900">
                  <Link href={`/shop/product/${rel.id}`} className="hover:text-sky-600">
                    {rel.name}
                  </Link>
                </div>
                <div className="text-[11px] text-slate-500 font-mono-num">
                  {rel.efficiencyRating} · {rel.tonnage}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <span className="font-bold font-mono-num">{rel.priceRange.split(" ")[0]}</span>
                  <Link href={`/shop/product/${rel.id}`} className="text-sky-700 font-semibold hover:underline">
                    View Specs →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
