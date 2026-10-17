import React from "react";
import type { Metadata } from "next";
import GallerySection from "@/components/GallerySection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Sparkles, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Vehicle Gallery & Real Results | Tyree’s Auto Detailing",
  description:
    "See real detailing transformations by Tyree's Auto Detailing in Clayton, NC. Cars, trucks, boats, RVs, and powersports vehicles.",
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mb-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <Camera className="w-3.5 h-3.5" />
            Authentic Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground font-heading">
            Real Details, <span className="text-gradient">Real Results</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Every photo shown here represents authentic work performed by Mike on client vehicles across Clayton, Garner, Raleigh, and Johnston County. No stock mockups or filtered claims.
          </p>
        </div>
      </div>

      <BeforeAfterSlider />

      <div className="mt-8">
        <GallerySection />
      </div>
    </div>
  );
}
