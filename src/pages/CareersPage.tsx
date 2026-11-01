import React, { useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { COMPANY } from "../data/company";
import { Briefcase, CheckCircle2, ShieldCheck, Heart, Award, ArrowRight } from "lucide-react";

export function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantExp, setApplicantExp] = useState("3-5 years");

  const jobs = [
    {
      id: "lead-service-tech",
      title: "Lead Residential HVAC Service Technician",
      type: "Full-Time · $85,000 – $115,000 / year + Bonuses",
      experience: "4+ Years Experience Required",
      desc: "Lead diagnostics, troubleshooting, and repairs on central ACs, inverter heat pumps, and gas furnaces across Metro City. Take-home equipped service van provided.",
      requirements: [
        "EPA Section 608 Universal Certification",
        "NATE Certification preferred (or willing to attain within 90 days)",
        "Valid driver's license with clean driving record",
        "Strong interpersonal communication and customer-first ethics",
      ],
    },
    {
      id: "commercial-refrigeration-mechanic",
      title: "Senior Commercial HVAC / RTU Mechanic",
      type: "Full-Time · $95,000 – $130,000 / year",
      experience: "5+ Years Commercial Experience",
      desc: "Specialized maintenance and replacement of commercial rooftop package units (up to 50 tons), Daikin VRV/VRF multi-zone systems, and building automation controls.",
      requirements: [
        "Extensive experience with 3-phase 208V/480V commercial power and VFD drives",
        "Familiarity with BACnet and commercial building automation controls",
        "OSHA-30 safety certification",
        "EPA Universal Certification",
      ],
    },
    {
      id: "apprentice-installer",
      title: "HVAC Installation Apprentice / Helper",
      type: "Full-Time · $24.00 – $28.00 / hour (Paid Training)",
      experience: "Entry-Level / Trade School Graduate",
      desc: "Learn from master mechanics on live ductwork fabrication, line-set brazing, and system commissioning. Full company sponsorship for EPA and NATE testing.",
      requirements: [
        "High school diploma or GED; trade school completion is a plus",
        "Eagerness to learn mechanical trades and rigorous attention to detail",
        "Ability to lift 50+ lbs and work in crawlspaces and attics",
      ],
    },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone || !applicantEmail) return;
    setApplied(true);
  };

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ label: "Careers" }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
          Join the Apex Climate Team
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 font-display">
          Careers for Dedicated Mechanical Professionals
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          We treat our technicians with respect: competitive wages, top-tier health &amp; dental benefits, 401(k) with 4% company match, brand new take-home vans, and paid factory certifications.
        </p>
      </section>

      {/* Perks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
          {[
            { title: "Top-Tier Compensation", desc: "Above-market hourly rates plus performance bonuses. Weekly direct deposit." },
            { title: "100% Medical & Dental", desc: "Comprehensive health insurance coverage for you and your family." },
            { title: "New Take-Home Trucks", desc: "Fully-stocked Ford Transit / Mercedes Sprinter vans with fuel card." },
            { title: "Paid Continued Education", desc: "Company pays for NATE, EPA, and Daikin VRV factory certifications." },
          ].map((perk, i) => (
            <div key={i} className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900">{perk.title}</span>
              <p className="text-slate-600 text-[11px]">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Openings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Current Job Openings</h2>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                  <div className="text-xs font-semibold text-emerald-700 font-mono-num">{job.type}</div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedJob(job.title);
                    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                  }}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl self-start sm:self-auto"
                >
                  Apply for Position
                </button>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{job.desc}</p>

              <div className="pt-2 border-t border-slate-100">
                <div className="text-[11px] font-bold text-slate-700 mb-1.5">Candidate Requirements:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {job.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Application Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold text-slate-900">Online Career Application</h2>
            <p className="text-xs text-slate-500">
              Submit your info below and our hiring director will schedule a confidential interview.
            </p>
          </div>

          {applied ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <div className="font-bold text-emerald-900 text-sm">Application Received!</div>
              <p className="text-xs text-emerald-700">Thank you, {applicantName}. We will review your qualifications and contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleApply} className="space-y-4 text-xs">
              <div>
                <label htmlFor="career-position" className="block font-semibold text-slate-700 mb-1">Target Position</label>
                <input
                  id="career-position"
                  type="text"
                  value={selectedJob || "Lead Residential HVAC Service Technician"}
                  onChange={(e) => setSelectedJob(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="career-name" className="block font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    id="career-name"
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="career-phone" className="block font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    id="career-phone"
                    type="tel"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="career-email" className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    id="career-email"
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="career-experience-select" className="block font-semibold text-slate-700 mb-1">Years of Mechanical / Field Experience</label>
                <select
                  id="career-experience-select"
                  value={applicantExp}
                  onChange={(e) => setApplicantExp(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                >
                  <option value="entry">Entry-Level / Trade School</option>
                  <option value="1-3">1 – 3 Years</option>
                  <option value="3-5">3 – 5 Years</option>
                  <option value="5+">5+ Years (Senior Mechanic)</option>
                </select>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
