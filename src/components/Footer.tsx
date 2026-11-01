import React, { useState } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { COMPANY } from "../data/company";
import { Phone, Mail, MapPin, Clock, MessageSquare, Snowflake, Flame, Shield, CheckCircle2 } from "lucide-react";

export function Footer() {
  const { openBooking } = useRouter();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterSuccess(true);
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      {/* Pre-Footer Action Banner */}
      <div className="bg-slate-900 border-b border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Ready for Reliable Indoor Comfort?
              </h3>
              <p className="text-slate-400 mt-1 text-sm">
                Upfront flat-rate pricing. EPA &amp; NATE certified technicians. 24/7 rapid emergency dispatch.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => openBooking()}
                className="px-5 py-2.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 transition-colors rounded-lg shadow-sm"
              >
                Schedule Service Online
              </button>
              <a
                href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                className="px-4 py-2.5 text-xs font-semibold text-slate-100 bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & NAP */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white font-bold text-lg">
              <span className="w-7 h-7 rounded-md bg-slate-800 flex items-center justify-center text-sky-400">
                <Snowflake className="w-4 h-4 text-sky-400" />
              </span>
              <span className="font-display font-extrabold">
                Apex<span className="text-sky-400">Climate</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              {COMPANY.tagline}. Providing certified residential and commercial HVAC design, installation, 24/7 repair, and proactive maintenance for over 18 years.
            </p>

            {/* NAP (Name, Address, Phone) */}
            <div className="pt-2 space-y-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{COMPANY.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>
                  Office: <a href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`} className="hover:text-white font-mono-num">{COMPANY.phone}</a>
                  {" · "}
                  24/7: <a href={`tel:${COMPANY.emergencyPhone.replace(/[^0-9]/g, "")}`} className="text-orange-400 hover:underline font-mono-num">{COMPANY.emergencyPhone}</a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%20Apex%20Climate%2C%20I%20need%20HVAC%20service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300"
                >
                  WhatsApp: {COMPANY.whatsappFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{COMPANY.hours.weekdays} | 24/7 Emergency Dispatch</span>
              </div>
            </div>

            {/* License Badges */}
            <div className="pt-3 border-t border-slate-900 flex flex-wrap gap-2 text-[11px] text-slate-400">
              <span className="border border-slate-800 bg-slate-900 px-2 py-1 rounded">CA C-20 Lic. #948201</span>
              <span className="border border-slate-800 bg-slate-900 px-2 py-1 rounded">EPA Section 608 Universal</span>
              <span className="border border-slate-800 bg-slate-900 px-2 py-1 rounded">NATE Certified Staff</span>
            </div>
          </div>

          {/* Column 2: Residential Services */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">Residential</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/services/ac-repair" className="hover:text-white">Emergency AC Repair</Link></li>
              <li><Link href="/services/heating-repair" className="hover:text-white">Furnace &amp; Heating Repair</Link></li>
              <li><Link href="/services/installation-replacement" className="hover:text-white">Heat Pump &amp; AC Installation</Link></li>
              <li><Link href="/services/duct-cleaning-air-quality" className="hover:text-white">Air Duct Cleaning &amp; IAQ</Link></li>
              <li><Link href="/services/maintenance-plans" className="hover:text-white">Apex Shield Maintenance</Link></li>
              <li><Link href="/financing" className="hover:text-white">0% APR Financing &amp; Rebates</Link></li>
              <li><Link href="/calculator" className="hover:text-white">AC Tonnage Calculator</Link></li>
            </ul>
          </div>

          {/* Column 3: Commercial Services */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">Commercial</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/services/commercial-repair" className="hover:text-white">Commercial HVAC Repair (24/7)</Link></li>
              <li><Link href="/services/rooftop-vrf-chillers" className="hover:text-white">Rooftop Units (RTU) &amp; VRF</Link></li>
              <li><Link href="/services/commercial-installation" className="hover:text-white">Tenant Improvements &amp; Ductwork</Link></li>
              <li><Link href="/services/commercial-maintenance" className="hover:text-white">Preventive Maintenance Contracts</Link></li>
              <li><Link href="/services/commercial-emergency" className="hover:text-white">Server Room &amp; Critical Cooling</Link></li>
              <li><Link href="/projects" className="hover:text-white">Commercial Case Studies</Link></li>
            </ul>
          </div>

          {/* Column 4: Service Areas & Newsletter */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">Service Areas</h4>
            <ul className="space-y-1.5 text-slate-400 mb-5">
              {COMPANY.serviceAreas.map((area) => (
                <li key={area.id}>
                  <Link href={`/service-areas/${area.id}`} className="hover:text-white">
                    {area.name} <span className="text-slate-500 text-[10px]">({area.avgEta})</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-2">Seasonal Tips &amp; Rebates</h4>
            {newsletterSuccess ? (
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs py-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Thank you! You are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <label htmlFor="newsletter-email" className="sr-only">Email address for seasonal tips</label>
                <div className="flex">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Enter email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-l text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-r font-medium text-xs whitespace-nowrap"
                  >
                    Join
                  </button>
                </div>
                <p className="text-[10px] text-slate-500">Unsubscribe anytime. No spam ever.</p>
              </form>
            )}
          </div>
        </div>

        {/* Company Quick Links */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-slate-400 text-xs">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="/reviews" className="hover:text-white">Customer Reviews (4.9★)</Link>
            <Link href="/blog" className="hover:text-white">HVAC Guides &amp; Blog</Link>
            <Link href="/faq" className="hover:text-white">Frequently Asked Questions</Link>
            <Link href="/careers" className="hover:text-white">Careers &amp; Apprenticeships</Link>
            <Link href="/contact" className="hover:text-white">Contact &amp; Map</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/warranty" className="hover:text-white">Warranty &amp; Guarantee</Link>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900/60 text-[11px] text-slate-500 space-y-2 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved. California State Contractor License C-20 #948201. EPA Universal Section 608 Certified. Fully bonded and insured with $2,000,000 General Liability coverage.
          </p>
          <p>
            Carrier, Daikin, Trane, Lennox, Mitsubishi Electric, and Rheem are registered trademarks of their respective brand owners. Apex Climate Solutions is an independent licensed HVAC sales, installation, and mechanical service contractor.
          </p>
        </div>
      </div>
    </footer>
  );
}
