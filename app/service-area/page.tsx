import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { SERVICE_AREAS } from "@/data/serviceAreas";

export const metadata: Metadata = {
  title: "Service Areas | Mobile Auto Detailing in Clayton, NC & Greater Triangle",
  description:
    "Explore communities served by Tyree's Auto Detailing: Clayton, Smithfield, Garner, Knightdale, Wendell, Zebulon, Raleigh, and Johnston County.",
};

export default function ServiceAreaHubPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <MapPin className="w-3.5 h-3.5" />
            North Carolina Coverage
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground font-heading">
            Service <span className="text-gradient">Areas</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Based in Clayton, NC, Tyree’s provides full mobile and shop detailing to vehicle owners throughout Johnston and Wake counties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/service-area/${area.slug}`}
              className="p-6 rounded-xl bg-surface border border-border hover:border-primary/50 hover:bg-surface-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold uppercase text-foreground font-heading group-hover:text-primary transition-colors">
                    {area.name}
                  </h2>
                  <span className="text-[11px] font-semibold text-muted-foreground bg-surface-elevated px-2 py-0.5 rounded border border-border">
                    {area.distance}
                  </span>
                </div>
                <div className="text-xs text-primary font-medium mb-3">{area.county}</div>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                <span>View local detailing info</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
