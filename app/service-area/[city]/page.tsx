import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Check, Phone, Calendar, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import { SERVICE_AREAS } from "@/data/serviceAreas";
import PackageComparison from "@/components/PackageComparison";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({
    city: area.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === city);
  if (!area) return { title: "Location Not Found" };

  return {
    title: `Mobile Auto Detailing in ${area.name}, NC | Tyree’s Auto Detailing`,
    description: `Professional mobile and shop auto detailing in ${area.name}, NC (${area.county}). 6 to 8 hour comprehensive deep cleaning, ceramic protection, and swirl removal.`,
  };
}

export default async function CityServiceAreaPage({ params }: PageProps) {
  const { city } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === city);

  if (!area) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-5xl">
        {/* City Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <MapPin className="w-3.5 h-3.5" />
            {area.county} • {area.distance}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground font-heading">
            Mobile Auto Detailing in <span className="text-gradient">{area.name}, NC</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {area.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:9193203010"
              className="px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call (919) 320-3010</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-hover text-foreground border border-border font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span>Request Appointment</span>
            </Link>
          </div>
        </div>

        {/* Why Tyree's in This City */}
        <div className="p-8 rounded-2xl bg-surface border border-border mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold uppercase text-foreground font-heading mb-4">
                Driveway Convenience or Shop Care for {area.name} Residents
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Whether you live in a neighborhood in {area.name} or work in Johnston County, we bring our full mobile detailing setup directly to your driveway. We bring spot-free water, specialized power, and high-end detailing chemicals so you don&apos;t lift a finger.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Need extensive paint correction or does your HOA restrict driveway washing? We also offer convenient vehicle pickup and drop-off.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-surface-elevated border border-border/80 flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-foreground">Dedicated 6–8 Hour Service</div>
                  <div className="text-xs text-muted-foreground mt-0.5">We don&apos;t rush through appointments. Your car gets our complete attention.</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-elevated border border-border/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-foreground">Full Insurance & Licensing</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Peace of mind knowing your vehicle is handled by an insured specialist.</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-elevated border border-border/80 flex items-start gap-3">
                <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-foreground">5-Star Local Reputation</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Consistent 5-star customer ratings from local vehicle owners.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Services in this city */}
        <div className="mb-16">
          <h3 className="text-xl font-bold uppercase text-foreground font-heading mb-4 text-center">
            Popular Services in {area.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {area.popularServices.map((service, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-surface border border-border flex items-center gap-2">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-semibold text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Package comparison embedded */}
      <PackageComparison showComparisonTable={false} />
    </div>
  );
}
