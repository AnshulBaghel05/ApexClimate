import React, { useState } from "react";
import { Link, useRouter } from "../context/RouterContext";
import { PROJECTS, ProjectItem } from "../data/projects";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  Home,
  ArrowRight,
  TrendingDown,
  DollarSign,
  Zap,
} from "lucide-react";

export function ProjectsPage() {
  const { openBooking, openQuote } = useRouter();
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial">("All");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    return p.clientType === filter;
  });

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumbs items={[{ label: "Projects & Case Studies" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
          Proven Engineering Results
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 font-display">
          HVAC Case Studies &amp; Before/After Transformations
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Real mechanical projects delivered on-schedule and within budget. See documented utility savings, equipment specifications, and client outcomes.
        </p>

        {/* Filter Controls */}
        <div className="mt-6 inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
          {["All", "Residential", "Commercial"].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f as any)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                filter === f ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {f} Projects
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
              {/* Left Column: Image & Quick Stats (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center"
                    width={500}
                    height={375}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white font-bold text-[10px] px-2.5 py-0.5 rounded">
                    {proj.clientType} Project
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md text-white p-2.5 rounded-xl text-xs flex items-center justify-between">
                    <span className="text-slate-300">Energy Savings:</span>
                    <span className="font-bold text-emerald-400 font-mono-num">{proj.energySavings.split("/")[0]}</span>
                  </div>
                </div>

                {/* Client Quote */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                  <p className="text-slate-700 italic">"{proj.clientQuote.quote}"</p>
                  <div className="font-bold text-slate-900">
                    {proj.clientQuote.clientName} <span className="font-normal text-slate-500">· {proj.clientQuote.role}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Case Study Narrative (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-sky-700">{proj.location}</span>
                    <span>·</span>
                    <span>Completed {proj.completionDate}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    {proj.title}
                  </h2>
                  <div className="text-xs font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md inline-block">
                    Scope: {proj.scope}
                  </div>
                </div>

                {/* Before vs After Comparison Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                  {/* Before */}
                  <div className="p-4 bg-red-50/50 rounded-xl border border-red-100 space-y-2">
                    <div className="font-bold text-red-900 uppercase tracking-wider text-[10px]">
                      Before Installation:
                    </div>
                    <div className="text-slate-700 text-[11px] leading-relaxed">
                      {proj.beforeStats.problem}
                    </div>
                    <div className="pt-2 border-t border-red-200/60 font-mono-num text-[11px] text-red-800 font-semibold">
                      Monthly Cost: {proj.beforeStats.monthlyEnergyCost}
                    </div>
                  </div>

                  {/* After */}
                  <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-2">
                    <div className="font-bold text-emerald-900 uppercase tracking-wider text-[10px]">
                      After Apex Solution:
                    </div>
                    <div className="text-slate-700 text-[11px] leading-relaxed">
                      {proj.afterStats.solution}
                    </div>
                    <div className="pt-2 border-t border-emerald-200/60 font-mono-num text-[11px] text-emerald-800 font-bold">
                      Monthly Cost: {proj.afterStats.monthlyEnergyCost}
                    </div>
                  </div>
                </div>

                {/* Challenge & Engineering Execution */}
                <div className="space-y-2 text-xs">
                  <div className="font-bold text-slate-900">Mechanical Engineering Execution:</div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    <strong>Challenge: </strong>{proj.challenge}
                  </p>
                  <ul className="space-y-1 text-slate-600 text-[11px]">
                    {proj.executionSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openQuote(`System similar to: ${proj.title}`)}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
                  >
                    Request Similar Project Proposal
                  </button>
                  <button
                    type="button"
                    onClick={() => openBooking()}
                    className="px-4 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl"
                  >
                    Schedule On-Site Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
