import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Clock, MapPin, Phone, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Tyree’s Auto Detailing | Clayton, NC Craftsman",
  description:
    "Learn about Mike and the philosophy behind Tyree’s Auto Detailing in Clayton, NC. Dedicated 6 to 8 hour full vehicle transformations.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <Award className="w-3.5 h-3.5" />
            Local Craftsmanship
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground font-heading">
            About <span className="text-gradient">Tyree’s Auto Detailing</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Founded on honest workmanship, meticulous care, and a refusal to cut corners. We treat every customer vehicle like our own pride and joy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden border border-border bg-surface aspect-[4/3]">
            <Image
              src="/black-car.png"
              alt="Detailed black sports car by Tyree's"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold uppercase text-foreground font-heading">
              Why We Take 6 to 8 Hours
            </h2>
            <p>
              In an industry dominated by quick 45-minute car washes that leave swirl marks and half-vacuumed seats, Tyree’s was built for vehicle owners who want true showroom precision.
            </p>
            <p>
              Mike takes the time to systematically decontaminate exterior clear coat, extract ground-in cabin dirt, revive leather surfaces, and protect your vehicle against tough Carolina sun and road grime.
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-surface border border-border">
            <Clock className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-base font-bold uppercase text-foreground font-heading">
              No Rushed Jobs
            </h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              We limit appointments per day so your vehicle gets undivided attention from start to finish.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-border">
            <ShieldCheck className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-base font-bold uppercase text-foreground font-heading">
              Insured & Certified Care
            </h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Fully insured with safe, professional-grade equipment, spot-free water, and PH-neutral chemistry.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-border">
            <MapPin className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-base font-bold uppercase text-foreground font-heading">
              Local to Clayton, NC
            </h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Proudly serving our neighbors in Clayton, Garner, Smithfield, Knightdale, and surrounding Triangle communities.
            </p>
          </div>
        </div>

        {/* Action card */}
        <div className="p-8 rounded-2xl bg-surface border border-border text-center">
          <h3 className="text-2xl font-extrabold uppercase text-foreground font-heading">
            Talk Directly with Mike
          </h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-lg mx-auto">
            Ready to give your vehicle the care it deserves? Contact us today to discuss your car and reserve a slot.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9193203010"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call (919) 320-3010</span>
            </a>
            <Link
              href="/services"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-surface-elevated hover:bg-surface-hover text-foreground border border-border font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>View Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
