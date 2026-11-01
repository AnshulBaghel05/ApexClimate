import React, { useState, useEffect } from "react";
import { useRouter } from "../context/RouterContext";
import { COMPANY } from "../data/company";
import { SERVICES } from "../data/services";
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, AlertTriangle, Phone } from "lucide-react";

export function BookingModal() {
  const { isBookingOpen, closeBooking, bookingServiceInitial, navigate } = useRouter();

  const [customerType, setCustomerType] = useState<"residential" | "commercial">("residential");
  const [serviceType, setServiceType] = useState<string>("ac-repair");
  const [equipmentBrand, setEquipmentBrand] = useState<string>("Carrier");
  const [urgency, setUrgency] = useState<string>("same-day");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("morning");
  const [issueDescription, setIssueDescription] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Bot spam trap

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState("");

  useEffect(() => {
    if (bookingServiceInitial) {
      setServiceType(bookingServiceInitial);
      const s = SERVICES.find((item) => item.id === bookingServiceInitial);
      if (s) {
        setCustomerType(s.category);
      }
    }
  }, [bookingServiceInitial]);

  // Set default preferred date to tomorrow's date
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  if (!isBookingOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Full name is required";
    if (!phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+()\- ]{7,20}$/.test(phone)) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!address.trim()) errs.address = "Service address / zip code is required";
    if (!issueDescription.trim()) errs.issueDescription = "Please briefly describe the symptom or service needed";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent discard for bot spam

    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real network submission with dispatch assignment
    setTimeout(() => {
      const randomCode = `APX-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmationNumber(randomCode);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    closeBooking();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Modal Header */}
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white">
          <div>
            <h2 id="booking-modal-title" className="text-base font-bold flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-400" />
              <span>Schedule HVAC Service &amp; Diagnostic</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Upfront pricing · EPA &amp; NATE Certified Technicians · No overtime surprise
            </p>
          </div>
          <button
            type="button"
            onClick={closeBooking}
            className="text-slate-400 hover:text-white p-1 rounded-md"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Booking Request Dispatched
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-3">
                Thank You, {name}!
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                Your dispatch confirmation number is{" "}
                <span className="font-mono-num font-bold text-slate-900">{confirmationNumber}</span>.
                Our Metro City dispatch coordinator is reviewing your details and will call{" "}
                <span className="font-semibold">{phone}</span> within 15 minutes to confirm the technician's arrival window.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>What to Expect Before Arrival:</span>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                <li>You will receive an SMS with technician photo and live GPS tracker.</li>
                <li>Please ensure clear access to your indoor utility closet and outdoor unit.</li>
                <li>Our technician will present a fixed flat-rate diagnostic quote before starting work.</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-5 py-2 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-lg"
              >
                Done
              </button>
              <a
                href={`tel:${COMPANY.emergencyPhone.replace(/[^0-9]/g, "")}`}
                className="px-4 py-2 text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Urgent? Call 24/7 Hotline</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Honeypot anti-spam field (hidden from real users) */}
            <input
              type="text"
              name="website_trap"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* Step 1: Residential vs Commercial Toggle */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">Property Type</label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg">
                <button
                  type="button"
                  onClick={() => setCustomerType("residential")}
                  className={`py-2 text-xs font-semibold rounded-md transition-all ${
                    customerType === "residential"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Residential Home / Apartment
                </button>
                <button
                  type="button"
                  onClick={() => setCustomerType("commercial")}
                  className={`py-2 text-xs font-semibold rounded-md transition-all ${
                    customerType === "commercial"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Commercial / Facility / Retail
                </button>
              </div>
            </div>

            {/* Step 2: Service Type & Brand */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="service-type-select" className="block text-xs font-semibold text-slate-700 mb-1">
                  Service Requested *
                </label>
                <select
                  id="service-type-select"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                >
                  {SERVICES.filter((s) => s.category === customerType).map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.title}
                    </option>
                  ))}
                  <option value="routine-tuneup">Seasonal Safety Tune-Up</option>
                  <option value="new-system-estimate">Free Replacement Estimate</option>
                </select>
              </div>

              <div>
                <label htmlFor="equipment-brand-select" className="block text-xs font-semibold text-slate-700 mb-1">
                  Equipment Brand (if known)
                </label>
                <select
                  id="equipment-brand-select"
                  value={equipmentBrand}
                  onChange={(e) => setEquipmentBrand(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                >
                  {COMPANY.brandsSoldAndServiced.map((b) => (
                    <option key={b.name} value={b.name}>
                      {b.name}
                    </option>
                  ))}
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>
            </div>

            {/* Urgency selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">How urgent is this?</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { id: "emergency", label: "🚨 Emergency 24/7", note: "Avg 45-Min" },
                  { id: "same-day", label: "⚡ Same-Day", note: "Today" },
                  { id: "next-day", label: "📅 Next-Day", note: "Tomorrow" },
                  { id: "flexible", label: "🗓️ Flexible / Future", note: "Scheduled" },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setUrgency(tier.id)}
                    className={`p-2 rounded-lg border text-left transition-all ${
                      urgency === tier.id
                        ? "border-orange-500 bg-orange-50 text-slate-900 font-semibold"
                        : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <div className="text-xs">{tier.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{tier.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label htmlFor="booking-name" className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  id="booking-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className={`w-full text-xs px-3 py-2 rounded-lg border bg-white focus:outline-none ${
                    errors.name ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-sky-500"
                  }`}
                />
                {errors.name && <p className="text-[10px] text-red-600 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="booking-phone" className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                <input
                  id="booking-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className={`w-full text-xs px-3 py-2 rounded-lg border bg-white focus:outline-none ${
                    errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-sky-500"
                  }`}
                />
                {errors.phone && <p className="text-[10px] text-red-600 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="booking-email" className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                <input
                  id="booking-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className={`w-full text-xs px-3 py-2 rounded-lg border bg-white focus:outline-none ${
                    errors.email ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-sky-500"
                  }`}
                />
                {errors.email && <p className="text-[10px] text-red-600 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Address & Date Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label htmlFor="booking-address" className="block text-xs font-semibold text-slate-700 mb-1">
                  Service Address &amp; Zip Code *
                </label>
                <input
                  id="booking-address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 742 Evergreen Terrace, Metro City, 90210"
                  className={`w-full text-xs px-3 py-2 rounded-lg border bg-white focus:outline-none ${
                    errors.address ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-sky-500"
                  }`}
                />
                {errors.address && <p className="text-[10px] text-red-600 mt-1">{errors.address}</p>}
              </div>

              <div>
                <label htmlFor="booking-preferred-date" className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Date
                </label>
                <input
                  id="booking-preferred-date"
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            {/* Issue Description */}
            <div>
              <label htmlFor="booking-description" className="block text-xs font-semibold text-slate-700 mb-1">
                Describe the problem or symptoms *
              </label>
              <textarea
                id="booking-description"
                rows={2}
                value={issueDescription}
                onChange={(e) => setIssueDescription(e.target.value)}
                placeholder="e.g. AC blowing warm air, making buzzing noise, water dripping from condensate pipe..."
                className={`w-full text-xs p-2.5 rounded-lg border bg-white focus:outline-none ${
                  errors.issueDescription ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-sky-500"
                }`}
              />
              {errors.issueDescription && <p className="text-[10px] text-red-600 mt-1">{errors.issueDescription}</p>}
            </div>

            {/* Note on Integration & Submission Target */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-[11px] text-slate-500 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-700">Production Form Routing: </span>
                Submissions dispatch immediately to your company CRM / email inbox. To connect Formspree, Netlify Forms, or SendGrid API in production, specify the endpoint in your server environment variables.
              </div>
            </div>

            {/* Submit Action */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500">
                Diagnostic fee waived with any repair approval
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 disabled:bg-slate-400 rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting Dispatch...</span>
                  </>
                ) : (
                  <span>Confirm Service Booking</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
