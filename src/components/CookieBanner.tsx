import React, { useState, useEffect } from "react";
import { ShieldCheck, Cookie, X, Check } from "lucide-react";

export function CookieBanner() {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("apex_cookie_consent");
    if (saved) {
      setConsentGiven(true);
    } else {
      setConsentGiven(false);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("apex_cookie_consent", "all");
    setConsentGiven(true);
    // Placeholder to initialize GA4 / Meta Pixel after consent:
    // window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("apex_cookie_consent", "essential");
    setConsentGiven(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "apex_cookie_consent",
      JSON.stringify({ analytics: analyticsEnabled, marketing: marketingEnabled })
    );
    setShowPreferences(false);
    setConsentGiven(true);
  };

  if (consentGiven !== false) return null;

  return (
    <aside
      aria-label="Privacy and Cookie Consent"
      className="fixed bottom-16 md:bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-40 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 text-xs text-slate-700 animate-in slide-in-from-bottom"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-sky-50 text-sky-600 rounded-xl shrink-0">
          <Cookie className="w-5 h-5 text-sky-600" />
        </div>
        <div className="space-y-1.5 flex-1">
          <h2 className="font-bold text-slate-900 text-sm">Privacy &amp; Cookie Preferences</h2>
          <p className="text-slate-600 text-xs leading-relaxed">
            We use essential cookies to maintain equipment comparisons and secure booking forms. With your permission, analytical cookies help us optimize emergency dispatch times.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleAcceptEssential}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={() => setShowPreferences(!showPreferences)}
              className="px-2.5 py-1.5 text-slate-500 hover:text-slate-900 font-medium underline"
            >
              Customize
            </button>
          </div>
        </div>
      </div>

      {showPreferences && (
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-semibold text-slate-900">Essential Cookies</span>
              <p className="text-[10px] text-slate-500">Required for forms, booking, and session security.</p>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">Always Active</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="cookie-analytics-toggle" className="font-semibold text-slate-900 cursor-pointer">Performance &amp; Analytics (GA4)</label>
              <p className="text-[10px] text-slate-500">Measures page load speeds and service area response times.</p>
            </div>
            <input
              id="cookie-analytics-toggle"
              type="checkbox"
              checked={analyticsEnabled}
              onChange={(e) => setAnalyticsEnabled(e.target.checked)}
              className="accent-sky-600 w-4 h-4 cursor-pointer"
            />
          </div>

          <button
            type="button"
            onClick={handleSavePreferences}
            className="w-full mt-2 py-1.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-md"
          >
            Save Preferences
          </button>
        </div>
      )}
    </aside>
  );
}
