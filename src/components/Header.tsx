import React, { useState, useEffect } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { COMPANY } from "../data/company";
import { Phone, Menu, X, ChevronDown, Flame, Snowflake, ShieldCheck, Wrench, Building2, Home } from "lucide-react";

export function Header() {
  const { path, openBooking } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [path]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-slate-200/80"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-18">
            {/* Zone 1: Single text element wordmark */}
            <Link
              href="/"
              className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group"
              aria-label="Apex Climate Solutions Home"
            >
              <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-sky-400">
                <Snowflake className="w-4 h-4 text-sky-400 absolute left-1 top-1.5" />
                <Flame className="w-4 h-4 text-orange-500 absolute right-1 bottom-1" />
              </span>
              <span className="font-display font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                Apex<span className="text-sky-600 font-semibold">Climate</span>
              </span>
            </Link>

            {/* Zone 2: 4–5 clean single-line text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700" aria-label="Main Navigation">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link
                  href="/services"
                  className={`inline-flex items-center gap-1.5 py-1.5 hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 ${
                    path.startsWith("/services") ? "text-sky-600 font-semibold" : ""
                  }`}
                  aria-expanded={servicesDropdown}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesDropdown ? "rotate-180" : ""}`} />
                </Link>

                {/* Dropdown panel */}
                {servicesDropdown && (
                  <div className="absolute top-full -left-4 w-120 pt-2 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-5 grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100 text-xs font-bold text-slate-900 uppercase tracking-wider">
                          <Home className="w-3.5 h-3.5 text-sky-600" />
                          <span>Residential</span>
                        </div>
                        <ul className="space-y-1 text-xs">
                          <li>
                            <Link href="/services/ac-repair" className="block p-1.5 rounded-md hover:bg-slate-50 text-slate-700 hover:text-sky-700">
                              AC Repair &amp; Troubleshooting
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/heating-repair" className="block p-1.5 rounded-md hover:bg-slate-50 text-slate-700 hover:text-sky-700">
                              Furnace &amp; Heating Repair
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/installation-replacement" className="block p-1.5 rounded-md hover:bg-slate-50 text-slate-700 hover:text-sky-700">
                              New Heat Pump &amp; AC Install
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/duct-cleaning-air-quality" className="block p-1.5 rounded-md hover:bg-slate-50 text-slate-700 hover:text-sky-700">
                              Duct Cleaning &amp; IAQ
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100 text-xs font-bold text-slate-900 uppercase tracking-wider">
                          <Building2 className="w-3.5 h-3.5 text-sky-600" />
                          <span>Commercial</span>
                        </div>
                        <ul className="space-y-1 text-xs">
                          <li>
                            <Link href="/services/commercial-repair" className="block p-1.5 rounded-md hover:bg-slate-50 text-slate-700 hover:text-sky-700">
                              Emergency Commercial Repair
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/rooftop-vrf-chillers" className="block p-1.5 rounded-md hover:bg-slate-50 text-slate-700 hover:text-sky-700">
                              Rooftop RTU, VRF &amp; Chillers
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/commercial-installation" className="block p-1.5 rounded-md hover:bg-slate-50 text-slate-700 hover:text-sky-700">
                              Tenant Buildouts &amp; Ductwork
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/commercial-maintenance" className="block p-1.5 rounded-md hover:bg-slate-50 text-slate-700 hover:text-sky-700">
                              Preventative Maintenance SLAs
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <Link href="/services" className="font-medium text-sky-700 hover:underline">
                          View All Services Hub →
                        </Link>
                        <span className="text-slate-400">NATE &amp; EPA 608 Certified</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Shop / Equipment */}
              <Link
                href="/shop"
                className={`py-1.5 hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 ${
                  path.startsWith("/shop") ? "text-sky-600 font-semibold" : ""
                }`}
              >
                Equipment Shop
              </Link>

              {/* Maintenance Plans */}
              <Link
                href="/maintenance-plans"
                className={`py-1.5 hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 ${
                  path === "/maintenance-plans" ? "text-sky-600 font-semibold" : ""
                }`}
              >
                Maintenance Plans
              </Link>

              {/* Service Areas */}
              <Link
                href="/service-areas"
                className={`py-1.5 hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 ${
                  path.startsWith("/service-areas") ? "text-sky-600 font-semibold" : ""
                }`}
              >
                Service Areas
              </Link>

              {/* Projects & Proof */}
              <Link
                href="/projects"
                className={`py-1.5 hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 ${
                  path === "/projects" ? "text-sky-600 font-semibold" : ""
                }`}
              >
                Case Studies
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`py-1.5 hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 ${
                  path === "/about" ? "text-sky-600 font-semibold" : ""
                }`}
              >
                About Us
              </Link>
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-sky-700 transition-colors py-2 px-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50/70"
                aria-label={`Call us 24/7 at ${COMPANY.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span className="font-mono-num">{COMPANY.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => openBooking()}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 transition-colors rounded-lg shadow-xs whitespace-nowrap shrink-0"
              >
                Book Service
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-slate-900/60 backdrop-blur-xs">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center text-sky-400">
                    <Snowflake className="w-4 h-4 text-sky-400" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">Apex Climate</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-1 text-sm font-medium">
                <Link href="/" className="block py-2 text-slate-800 hover:text-sky-600">
                  Home
                </Link>
                <Link href="/services" className="block py-2 text-slate-800 hover:text-sky-600">
                  All Services (Residential &amp; Commercial)
                </Link>
                <div className="pl-3 py-1 space-y-1 text-xs text-slate-600 border-l border-slate-200">
                  <Link href="/services/ac-repair" className="block py-1">AC Repair (24/7)</Link>
                  <Link href="/services/heating-repair" className="block py-1">Furnace &amp; Heating Repair</Link>
                  <Link href="/services/installation-replacement" className="block py-1">Heat Pump Installation</Link>
                  <Link href="/services/rooftop-vrf-chillers" className="block py-1">Commercial RTUs &amp; VRF</Link>
                </div>
                <Link href="/shop" className="block py-2 text-slate-800 hover:text-sky-600">
                  Equipment Shop &amp; Sizing
                </Link>
                <Link href="/maintenance-plans" className="block py-2 text-slate-800 hover:text-sky-600">
                  Maintenance Plans
                </Link>
                <Link href="/service-areas" className="block py-2 text-slate-800 hover:text-sky-600">
                  Service Areas
                </Link>
                <Link href="/projects" className="block py-2 text-slate-800 hover:text-sky-600">
                  Case Studies &amp; Projects
                </Link>
                <Link href="/reviews" className="block py-2 text-slate-800 hover:text-sky-600">
                  Reviews &amp; Ratings (4.9★)
                </Link>
                <Link href="/blog" className="block py-2 text-slate-800 hover:text-sky-600">
                  Resources &amp; Guides
                </Link>
                <Link href="/faq" className="block py-2 text-slate-800 hover:text-sky-600">
                  FAQ
                </Link>
                <Link href="/financing" className="block py-2 text-slate-800 hover:text-sky-600">
                  Financing &amp; Rebates
                </Link>
                <Link href="/about" className="block py-2 text-slate-800 hover:text-sky-600">
                  About Us
                </Link>
                <Link href="/contact" className="block py-2 text-slate-800 hover:text-sky-600">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full py-2.5 px-4 text-xs font-bold text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700"
              >
                Schedule Service Online
              </button>
              <a
                href={`tel:${COMPANY.emergencyPhone.replace(/[^0-9]/g, "")}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-slate-100 rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>24/7 Hotline: {COMPANY.emergencyPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
