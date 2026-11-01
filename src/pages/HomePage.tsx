import React, { useState } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { COMPANY } from "../data/company";
import { SERVICES } from "../data/services";
import { PRODUCTS } from "../data/products";
import { REVIEWS } from "../data/reviews";
import { BLOG_POSTS } from "../data/blogPosts";
import { FAQS } from "../data/faqs";
import { BtuCalculator } from "../components/BtuCalculator";
import {
  Phone,
  Calendar,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  ChevronRight,
  Flame,
  Snowflake,
  Star,
  Wrench,
  Building2,
  Home,
  ArrowRight,
  Plus,
  Minus,
  Sparkles,
  MapPin,
  FileText,
} from "lucide-react";

export function HomePage() {
  const { openBooking, openQuote, addToCompare, comparedProducts } = useRouter();

  // Residential vs Commercial selector state
  const [activeSegment, setActiveSegment] = useState<"residential" | "commercial">("residential");

  // FAQ accordion state
  const [expandedFaq, setExpandedFaq] = useState<string | null>("res-1");

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const displayedServices = SERVICES.filter((s) => s.category === activeSegment);
  const featuredProducts = PRODUCTS.slice(0, 4);
  const homeFaqs = FAQS.slice(0, 5);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden pt-8 pb-16 lg:py-20 border-b border-slate-800">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Value Proposition & CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 bg-sky-950/80 border border-sky-800/80 px-3 py-1 rounded-full">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Metro City Licensed C-20 #948201 · EPA &amp; NATE Certified</span>
              </div>

              {/* H1 with Primary Keyword + Location */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
                Metro City HVAC Repair, Heat Pump Installation &amp; 24/7 Climate Service
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Engineered indoor comfort for homeowners and commercial facilities. We deliver upfront flat-rate pricing, same-day diagnostic dispatch, and up to 10-year parts &amp; labor warranties across Metro City and surrounding areas.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="px-6 py-3.5 text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 transition-colors rounded-xl shadow-md text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Service Online</span>
                </button>

                <Link
                  href="/shop"
                  className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
                >
                  <span>Browse Equipment Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                  className="sm:hidden px-6 py-3 text-sm font-semibold text-sky-400 bg-slate-800/80 border border-sky-800/60 rounded-xl text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY.phone}</span>
                </a>
              </div>

              {/* Trust Badges Adjacency */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>45-Min Avg Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>10-Yr Parts Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Upfront Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                  <span>4.9★ (486+ Reviews)</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Photography Asset (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 group">
                <img
                  src="/images/hero_hvac_technician.jpg"
                  alt="Certified Apex Climate technician conducting precision diagnostics on a high-efficiency outdoor heat pump condenser"
                  className="w-full h-80 sm:h-96 lg:h-112 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  width={640}
                  height={520}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700 text-xs text-slate-300 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">Certified Factory Service</span>
                    <span className="text-[11px] text-slate-400">Carrier · Daikin · Trane · Lennox · Mitsubishi</span>
                  </div>
                  <span className="text-emerald-400 font-semibold text-[11px] bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
                    On Duty 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (QUANTITATIVE RIGOR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="pt-2 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display font-mono-num">
              {COMPANY.stats.yearsInBusiness}
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Years in Business (Since 2008)
            </div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-sky-600 font-display font-mono-num">
              14,800+
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Heating &amp; Cooling Jobs Completed
            </div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-500 font-display font-mono-num flex items-center justify-center gap-1">
              <span>{COMPANY.stats.averageRating}</span>
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Average Rating ({COMPANY.stats.reviewCount} Reviews)
            </div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-orange-600 font-display font-mono-num">
              45 Min
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Average Emergency Arrival
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESIDENTIAL VS COMMERCIAL SEGMENT SELECTOR & SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
            Comprehensive Mechanical Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Engineered Services for Homes &amp; Commercial Facilities
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Select your property sector below to explore specialized diagnostics, certified installations, and scheduled maintenance.
          </p>

          {/* Segment Selector Controls */}
          <div className="mt-6 inline-flex p-1.5 bg-slate-100 rounded-xl border border-slate-200 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveSegment("residential")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeSegment === "residential"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Home className="w-4 h-4 text-sky-600" />
              <span>Residential Services</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveSegment("commercial")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeSegment === "commercial"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building2 className="w-4 h-4 text-sky-600" />
              <span>Commercial &amp; Industrial</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((svc, idx) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                    {svc.badge}
                  </span>
                  <span className="text-xs font-mono-num text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  <Link href={`/services/${svc.slug}`} className="hover:text-sky-600 transition-colors">
                    {svc.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {svc.shortDescription}
                </p>

                {/* Common Symptoms checklist */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-700 mb-1.5">Common Issues We Resolve:</div>
                  <ul className="space-y-1 text-xs text-slate-500">
                    {svc.commonSymptoms.slice(0, 3).map((sym, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">Warranty</span>
                  <span className="font-semibold text-slate-700">{svc.warranty.split(" ")[0]} Guarantee</span>
                </div>
                <Link
                  href={`/services/${svc.slug}`}
                  className="font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1 group"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50"
          >
            <span>Explore All 10+ Residential &amp; Commercial Services</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>
      </section>

      {/* 4. FEATURED EQUIPMENT SHOWCASE */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                Authorized Dealer &amp; Installer
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Featured High-Efficiency Equipment
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Certified factory authorized dealer for Carrier, Daikin, Trane, Lennox, and Mitsubishi Electric.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:underline shrink-0"
            >
              <span>View All 15+ Models in Equipment Shop</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => {
              const isCompared = comparedProducts.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* Product Image */}
                    <div className="relative h-44 bg-slate-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                        width={300}
                        height={200}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {product.brand}
                      </div>
                      {product.taxCreditEligible && (
                        <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          $2,000 IRA Credit
                        </div>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="text-[11px] font-semibold text-slate-500">
                        {product.categoryLabel} · {product.tonnage}
                      </div>
                      <h3 className="font-bold text-sm text-slate-900 line-clamp-2">
                        <Link href={`/shop/product/${product.id}`} className="hover:text-sky-600">
                          {product.name}
                        </Link>
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono-num text-slate-700 pt-1">
                        <span className="font-bold text-sky-700">{product.efficiencyRating}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-slate-500">{product.soundRating.split(" ")[0]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0 space-y-2">
                    <div className="text-xs font-bold text-slate-900 font-mono-num">
                      {product.priceRange}
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => openQuote(product.name)}
                        className="py-1.5 px-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] rounded-lg text-center"
                      >
                        Request Quote
                      </button>
                      <button
                        type="button"
                        onClick={() => addToCompare(product.id)}
                        className={`py-1.5 px-2 border text-[11px] font-semibold rounded-lg text-center transition-colors ${
                          isCompared
                            ? "bg-sky-50 border-sky-300 text-sky-700"
                            : "border-slate-300 hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        {isCompared ? "Comparing ✓" : "Compare"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE BTU & TONNAGE CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BtuCalculator />
      </section>

      {/* 6. WHY CHOOSE US (DIFFERENTIATORS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
            The Apex Climate Difference
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Why Property Owners Trust Us for Heating &amp; Cooling
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            No bait-and-switch pricing. No cut corners. Real licensed mechanical professionals delivering dependable indoor comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY.differentiators.map((diff, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 hover:border-slate-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-display font-bold text-base">
                0{index + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900">{diff.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. HOW IT WORKS (4 STEPS) */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              How We Solve Your HVAC Challenges
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              From initial dispatch to finished testing, here is what you can expect during an Apex service call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {COMPANY.howItWorks.map((step) => (
              <div
                key={step.step}
                className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 space-y-3 relative"
              >
                <div className="w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-xs">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => openBooking()}
              className="px-6 py-3 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition-colors shadow-md"
            >
              Schedule Your 28-Point Diagnostic Call
            </button>
          </div>
        </div>
      </section>

      {/* 8. BRANDS WE SELL & SERVICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Factory Authorized &amp; Serviced Brands
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {COMPANY.brandsSoldAndServiced.map((brand) => (
            <div
              key={brand.name}
              className="p-3 bg-white rounded-xl border border-slate-200 text-center hover:border-slate-300 transition-colors"
            >
              <div className="font-extrabold text-slate-900 text-sm">{brand.name}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{brand.type.split(" ")[0]} Partner</div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONIALS & REVIEWS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold mb-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-800">4.9 Out of 5 Stars ({COMPANY.stats.reviewCount} Verified Reviews)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What Homeowners &amp; Facility Managers Say
            </h2>
          </div>
          <Link
            href="/reviews"
            className="text-xs font-bold text-sky-700 hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Read All Verified Customer Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified Customer
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{rev.author}</div>
                  <div className="text-[11px] text-slate-500">{rev.city} · {rev.service}</div>
                </div>
                <span className="text-[10px] text-slate-400">{rev.date.split(",")[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. MAINTENANCE PLAN TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                Apex Shield Protection Plan
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Prevent 85% of Breakdowns with Seasonal Tune-Ups
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Starting at just $14.99/mo. Includes biannual 28-point precision tune-ups, 15% discount on all repairs, $0 overtime fees, and VIP front-of-line priority dispatch during summer heatwaves.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/maintenance-plans"
                  className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  View Membership Tiers &amp; Pricing
                </Link>
                <button
                  type="button"
                  onClick={() => openBooking("maintenance-plans")}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-xs font-semibold rounded-lg"
                >
                  Schedule Seasonal Tune-Up
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 space-y-2 text-xs">
              <div className="font-bold text-sky-300 text-sm">Membership Perks:</div>
              <ul className="space-y-1.5 text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>2 Seasonal precision tune-ups yearly</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>15% Off all replacement parts &amp; labor</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Zero after-hours or overtime charges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Protects factory equipment warranties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SERVICE AREAS LIST & MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
            Fast Local Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Service Areas Across Metro City &amp; Beyond
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Our rolling warehouse trucks are stationed strategically across 6 regional sectors for fast, reliable dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY.serviceAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-sky-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-slate-900">{area.name}</span>
                  <span className="text-[11px] font-mono-num font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    {area.avgEta}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Serving zip codes: {area.zipCodes.join(", ")}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <Link
                  href={`/service-areas/${area.id}`}
                  className="font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1"
                >
                  <span>Local Landing Page</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => openBooking(`service-area-${area.id}`)}
                  className="text-slate-600 hover:text-slate-900 font-semibold"
                >
                  Book Dispatch
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. LATEST BLOG POSTS */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                Expert Advice &amp; Guides
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Latest Articles from Our Mechanical Engineers
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-bold text-sky-700 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View All 6 Starter Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-sky-700">{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-sky-600">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>By {post.author.name}</span>
                  <Link href={`/blog/${post.slug}`} className="font-bold text-sky-700 hover:underline">
                    Read Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQ PREVIEW WITH ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Clear answers to common questions about HVAC repairs, pricing, and system longevity.
          </p>
        </div>

        <div className="space-y-3">
          {homeFaqs.map((faq) => {
            const isOpen = expandedFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:bg-slate-50"
                >
                  <span>{faq.question}</span>
                  <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5 text-slate-600" /> : <Plus className="w-3.5 h-3.5 text-slate-600" />}
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
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="text-xs font-bold text-sky-700 hover:underline"
          >
            Browse Full FAQ Directory (Categorized by Residential, Commercial, Pricing) →
          </Link>
        </div>
      </section>
    </div>
  );
}
