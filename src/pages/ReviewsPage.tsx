import React, { useState } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { REVIEWS, ReviewItem } from "../data/reviews";
import { COMPANY } from "../data/company";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  MessageSquare,
  ShieldCheck,
  Building2,
  Home,
  Send,
} from "lucide-react";

export function ReviewsPage() {
  const { openBooking } = useRouter();
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial">("All");

  const [reviewAuthor, setReviewAuthor] = useState("");
  const [reviewCity, setReviewCity] = useState("Metro City");
  const [reviewService, setReviewService] = useState("Emergency AC Repair");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredReviews = REVIEWS.filter((r) => {
    if (filter === "All") return true;
    return r.clientType === filter;
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor || !reviewText) return;
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ label: "Customer Reviews" }]} />

      {/* Header & Rating Breakdown Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Overall Score (5 cols) */}
            <div className="lg:col-span-5 space-y-3 text-center lg:text-left lg:border-r border-slate-100 lg:pr-8">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                Verified Customer Feedback
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                Customer Reviews &amp; Ratings
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="text-4xl font-extrabold text-slate-900 font-mono-num">
                  {COMPANY.stats.averageRating}
                </span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 font-semibold">
                    Based on {COMPANY.stats.reviewCount} Verified Reviews
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 pt-2 leading-relaxed">
                We take immense pride in our craftsmanship. All reviews are collected from real residential homeowners and commercial facility managers across Metro City.
              </p>
            </div>

            {/* Rating distribution breakdown (7 cols) */}
            <div className="lg:col-span-7 space-y-2 text-xs">
              {[
                { stars: 5, pct: 92, count: 447 },
                { stars: 4, pct: 7, count: 34 },
                { stars: 3, pct: 1, count: 5 },
                { stars: 2, pct: 0, count: 0 },
                { stars: 1, pct: 0, count: 0 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="w-12 font-semibold text-slate-700 flex items-center gap-1 font-mono-num">
                    {row.stars} <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </span>
                  <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-16 text-right font-mono-num text-slate-400 text-[11px]">
                    {row.count} ({row.pct}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl">
            {["All", "Residential", "Commercial"].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f as any)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  filter === f ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {f} Reviews
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => openBooking()}
            className="hidden sm:inline-flex px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl"
          >
            Experience Our 5-Star Service
          </button>
        </div>
      </section>

      {/* Reviews List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified Customer</span>
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{rev.author}</div>
                  <div className="text-[11px] text-slate-500">
                    {rev.city} · {rev.service}
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-mono-num">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leave Feedback Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              Recently Used Our Services? Leave a Review!
            </h2>
            <p className="text-xs text-slate-500">
              Your honest feedback helps our technicians continually improve.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <div className="font-bold text-emerald-900 text-sm">Thank You for Your Feedback!</div>
              <p className="text-xs text-emerald-700">Your review will be verified and published on our website.</p>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="review-name" className="block font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    id="review-name"
                    type="text"
                    required
                    value={reviewAuthor}
                    onChange={(e) => setReviewAuthor(e.target.value)}
                    placeholder="e.g. Michael S."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="review-city-select" className="block font-semibold text-slate-700 mb-1">Service City *</label>
                  <select
                    id="review-city-select"
                    value={reviewCity}
                    onChange={(e) => setReviewCity(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-sky-500"
                  >
                    {COMPANY.serviceAreas.map((a) => (
                      <option key={a.id} value={a.name}>{a.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="review-service" className="block font-semibold text-slate-700 mb-1">Service Performed</label>
                  <input
                    id="review-service"
                    type="text"
                    value={reviewService}
                    onChange={(e) => setReviewService(e.target.value)}
                    placeholder="e.g. AC Tune-Up / Heat Pump Install"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="review-rating-select" className="block font-semibold text-slate-700 mb-1">Rating</label>
                  <select
                    id="review-rating-select"
                    value={reviewRating}
                    onChange={(e) => setReviewRating(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-sky-500"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 Stars - Outstanding)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 Stars - Good)</option>
                    <option value={3}>⭐⭐⭐ (3 Stars - Average)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="review-comments" className="block font-semibold text-slate-700 mb-1">Your Review *</label>
                <textarea
                  id="review-comments"
                  rows={3}
                  required
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Share details about the technician's arrival, diagnostic clarity, and clean work..."
                  className="w-full p-2.5 border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg"
                >
                  Submit Verified Review
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
