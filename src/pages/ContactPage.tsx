import React, { useState } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { COMPANY } from "../data/company";
import { SERVICES } from "../data/services";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

export function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ label: "Contact & Book Service" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
          Direct Mechanical Support 24/7
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 font-display">
          Contact Apex Climate Solutions
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Call our 24/7 local dispatch hotline, request an in-home diagnostic estimate, or send our mechanical engineers a technical message.
        </p>
      </section>

      {/* Contact Grid: NAP & Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Full NAP & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900">Company Information (NAP)</h2>

              <div className="space-y-4 text-xs">
                {/* Physical Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-sky-50 text-sky-600 rounded-lg shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Headquarters &amp; Dispatch Facility:</strong>
                    <span className="text-slate-600">{COMPANY.address.full}</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-sky-50 text-sky-600 rounded-lg shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Telephone Dispatch:</strong>
                    <div className="text-slate-700">
                      Toll-Free: <a href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`} className="font-bold text-sky-700 hover:underline font-mono-num">{COMPANY.phone}</a>
                    </div>
                    <div className="text-slate-700 mt-0.5">
                      24/7 Emergency: <a href={`tel:${COMPANY.emergencyPhone.replace(/[^0-9]/g, "")}`} className="font-bold text-red-600 hover:underline font-mono-num">{COMPANY.emergencyPhone}</a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">WhatsApp Chat:</strong>
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%20Apex%20Climate`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline font-semibold"
                    >
                      {COMPANY.whatsappFormatted} (Instant Mobile Messaging)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-sky-50 text-sky-600 rounded-lg shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Email Correspondence:</strong>
                    <a href={`mailto:${COMPANY.email}`} className="text-slate-700 hover:text-sky-700">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                {/* Hours of Operation */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="p-2 bg-slate-100 text-slate-600 rounded-lg shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Operating Hours:</strong>
                    <div className="text-slate-600">{COMPANY.hours.weekdays}</div>
                    <div className="text-slate-600">{COMPANY.hours.saturday}</div>
                    <div className="text-red-600 font-semibold mt-0.5">{COMPANY.hours.emergency}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Callout Card */}
            <div className="bg-red-950 text-white rounded-2xl p-6 border border-red-800 space-y-2 text-xs">
              <div className="font-bold text-red-400 flex items-center gap-1.5 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>24/7 Rapid Emergency Hotline</span>
              </div>
              <p className="text-red-200 leading-relaxed">
                If you have an urgent heating or cooling breakdown, gas odor, or water leaking from your ceiling, call our emergency hotline directly for immediate dispatch.
              </p>
              <a
                href={`tel:${COMPANY.emergencyPhone.replace(/[^0-9]/g, "")}`}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg font-mono-num"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {COMPANY.emergencyPhone}</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Contact & Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 mb-1">Send a Message or Request Consultation</h2>
            <p className="text-xs text-slate-500 mb-6">
              Fill out this form and our local customer service team will respond within 30 minutes during normal business hours.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-950">Message Transmitted Successfully!</h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Thank you, {name}. A member of our Metro City dispatch team has received your inquiry and will contact you at {phone} or {email}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Robert Vance"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 000-0000"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service-select" className="block font-semibold text-slate-700 mb-1">Service Category</label>
                    <select
                      id="contact-service-select"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-sky-500"
                    >
                      <option value="General Inquiry">General Question / Inquiry</option>
                      <option value="Emergency Repair">Emergency AC or Heating Repair</option>
                      <option value="System Replacement">New Heat Pump / AC Replacement</option>
                      <option value="Commercial Contract">Commercial Maintenance Contract</option>
                      <option value="Duct Cleaning">Duct Cleaning &amp; Air Quality</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-semibold text-slate-700 mb-1">Your Message or Issue Details *</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your home/business square footage, existing system issues, or specific equipment questions..."
                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-[11px] text-slate-500 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Your privacy is protected. We will never sell or share your contact details. Form responses route directly to our local service coordinators.
                  </span>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Embedded Map Section Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-bold text-base text-slate-900">Map &amp; Service Radius</h3>
              <p className="text-xs text-slate-500">
                1420 Industrial Parkway, Suite 100, Metro City, CA 90210
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=1420+Industrial+Parkway+Metro+City+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-sky-700 hover:underline flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <MapPin className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Visual Map Card */}
          <div className="h-64 rounded-2xl bg-slate-100 border border-slate-200 relative flex items-center justify-center text-center p-6 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 space-y-2 max-w-md">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-sky-400 mx-auto flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5 text-sky-400" />
              </div>
              <div className="font-bold text-slate-900 text-sm">
                Apex Climate Central Service Hub
              </div>
              <p className="text-xs text-slate-500">
                Centrally positioned adjacent to major transportation arteries to guarantee our 45-minute average emergency arrival window across all 6 service sectors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
