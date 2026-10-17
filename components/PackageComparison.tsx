"use client";

import React, { useState } from "react";
import { Check, Info, Sparkles, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { PACKAGES, MAINTENANCE_PLANS, PACKAGE_COMPARISON_FEATURES } from "@/data/packages";
import { useAppointment } from "@/context/AppointmentContext";

export default function PackageComparison({ showComparisonTable = true }: { showComparisonTable?: boolean }) {
  const { openModal } = useAppointment();
  const [activeTab, setActiveTab] = useState<"standard" | "maintenance">("standard");

  return (
    <section id="packages" className="py-20 bg-background border-t border-border relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Pricing & Inclusions
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground font-heading">
            Pick Your <span className="text-gradient">Package</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            Every vehicle gets treated to meticulous craftsmanship. We dedicate 6 to 8 hours per complete detail to restore that true showroom shine.
          </p>

          {/* Toggle between full details and maintenance plans */}
          <div className="mt-8 inline-flex p-1 rounded-lg bg-surface border border-border">
            <button
              type="button"
              onClick={() => setActiveTab("standard")}
              className={`px-5 py-2 rounded-md text-xs md:text-sm font-semibold transition-all ${
                activeTab === "standard"
                  ? "bg-primary text-black shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Full Detail Packages
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("maintenance")}
              className={`px-5 py-2 rounded-md text-xs md:text-sm font-semibold transition-all ${
                activeTab === "maintenance"
                  ? "bg-primary text-black shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Maintenance Plans (Existing Clients)
            </button>
          </div>
        </div>

        {activeTab === "standard" ? (
          <>
            {/* 4 Core Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {PACKAGES.map((pkg) => {
                const isTitanium = pkg.id === "titanium";
                return (
                  <div
                    key={pkg.id}
                    className={`relative rounded-xl flex flex-col p-6 transition-all duration-300 ${
                      isTitanium
                        ? "bg-surface border-2 border-primary shadow-[0_0_30px_rgba(15,163,251,0.2)] lg:-translate-y-2"
                        : "bg-surface/80 border border-border hover:border-border-strong hover:bg-surface"
                    }`}
                  >
                    {isTitanium && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-black text-[11px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                        Most Popular
                      </div>
                    )}

                    <div className="mb-4">
                      <h3 className="text-xl font-extrabold uppercase text-foreground font-heading">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 min-h-[32px]">
                        {pkg.tagline}
                      </p>
                    </div>

                    <div className="mb-6 pb-6 border-b border-border/80">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-muted-foreground font-medium">Starting at</span>
                        <span className="text-3xl font-black text-foreground font-heading">${pkg.startingPrice}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-primary mt-2">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{pkg.estimatedDuration} dedicated focus</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-8 flex-1 text-xs">
                      {pkg.inclusions.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground/90">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => openModal(pkg.id)}
                      className={`w-full py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        isTitanium
                          ? "bg-primary hover:bg-primary-hover text-black shadow-lg shadow-primary/20"
                          : "bg-surface-elevated hover:bg-surface-hover text-foreground border border-border hover:border-primary/50"
                      }`}
                    >
                      <span>Book {pkg.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Inclusions Footnote */}
            <div className="mt-8 p-4 rounded-lg bg-surface/40 border border-border/60 text-center max-w-2xl mx-auto">
              <p className="text-xs text-muted-foreground">
                <span className="text-primary font-semibold">Vehicle Sizing Notice:</span> Exact pricing depends on vehicle size, condition, and pet hair level. Mike confirms all final quotes before starting work.
              </p>
            </div>

            {/* Side-by-side Comparison Matrix */}
            {showComparisonTable && (
              <div className="mt-16">
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground font-heading">
                    Compare Packages Side-by-Side
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    See exactly what each tier includes so you get the ideal care for your vehicle.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-border bg-surface/50">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="py-4 px-4 font-bold text-foreground font-heading">Feature</th>
                        <th className="py-4 px-3 text-center font-bold text-foreground">
                          Gold
                          <div className="text-[11px] text-muted-foreground font-normal">$350+</div>
                        </th>
                        <th className="py-4 px-3 text-center font-bold text-foreground">
                          Platinum
                          <div className="text-[11px] text-muted-foreground font-normal">$450+</div>
                        </th>
                        <th className="py-4 px-3 text-center font-bold text-primary bg-primary/5">
                          Titanium
                          <div className="text-[11px] text-primary/80 font-normal">$550+</div>
                        </th>
                        <th className="py-4 px-3 text-center font-bold text-foreground">
                          Diamond
                          <div className="text-[11px] text-muted-foreground font-normal">$650+</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {PACKAGE_COMPARISON_FEATURES.map((item, idx) => (
                        <tr key={idx} className="hover:bg-surface-elevated/40 transition-colors">
                          <td className="py-3 px-4 font-medium text-foreground">{item.name}</td>
                          <td className="py-3 px-3 text-center">
                            {item.gold ? <Check className="w-4 h-4 text-primary mx-auto" /> : <span className="text-muted-foreground/40">—</span>}
                          </td>
                          <td className="py-3 px-3 text-center">
                            {item.platinum ? <Check className="w-4 h-4 text-primary mx-auto" /> : <span className="text-muted-foreground/40">—</span>}
                          </td>
                          <td className="py-3 px-3 text-center bg-primary/5">
                            {item.titanium ? <Check className="w-4 h-4 text-primary mx-auto" /> : <span className="text-muted-foreground/40">—</span>}
                          </td>
                          <td className="py-3 px-3 text-center">
                            {item.diamond ? <Check className="w-4 h-4 text-primary mx-auto" /> : <span className="text-muted-foreground/40">—</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Maintenance Plans for Existing Clients Only */
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-start gap-3">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-foreground">Exclusively for Repeat Clients</h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  To qualify for regular maintenance pricing, your vehicle must have first undergone a complete initial detail with Tyree’s. This ensures the baseline cleanliness is established and manageable on routine visits.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MAINTENANCE_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className="rounded-xl bg-surface border border-border p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider mb-3">
                      {plan.cadence}
                    </div>
                    <h3 className="text-xl font-bold uppercase text-foreground font-heading">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 my-3">
                      <span className="text-3xl font-black text-foreground font-heading">${plan.price}</span>
                      <span className="text-xs text-muted-foreground">/{plan.cadence.toLowerCase()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>
                    <ul className="space-y-2 mb-6 text-xs text-foreground/90">
                      {plan.includes.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-primary" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => openModal(plan.id)}
                    className="w-full py-2.5 px-4 rounded-lg bg-surface-elevated hover:bg-surface-hover text-foreground border border-border hover:border-primary/50 text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Book {plan.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
