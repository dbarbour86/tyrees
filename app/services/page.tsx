import React from "react";
import type { Metadata } from "next";
import PackageComparison from "@/components/PackageComparison";
import FAQAccordion from "@/components/FAQAccordion";
import { Check, ShieldAlert, Sparkles, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Auto Detailing Services & Packages | Tyree’s Auto Detailing",
  description:
    "Explore our complete detailing packages: Gold ($350), Platinum ($450), Titanium ($550), and Diamond ($650). 6–8 hour meticulous care in Clayton, NC.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Clear, Upfront Pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground font-heading">
            Detailing Packages <span className="text-gradient">& Inclusions</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Every vehicle receives our uncompromising 6 to 8 hour deep-clean standard. Select your package below to compare exact inclusions or request an appointment.
          </p>
        </div>
      </div>

      <PackageComparison showComparisonTable={true} />

      <div className="container mt-16 max-w-4xl">
        <div className="p-6 rounded-xl bg-surface border border-border">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-bold uppercase text-foreground font-heading">
                Important Pricing & Sizing Information
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed">
                Base prices reflect standard sedan or coupe sizes in average condition. Larger SUVs, full-size trucks, minivans, excessive pet hair, heavy mold/mildew, or severe staining require additional time and materials. Mike provides a clear, honest quote before beginning any work.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <FAQAccordion />
      </div>
    </div>
  );
}
