import React from "react";
import type { Metadata } from "next";
import { Star, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import { REVIEWS } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews & Ratings | Tyree’s Auto Detailing",
  description:
    "Read 5-star customer reviews for Tyree's Auto Detailing in Clayton, NC. Verified feedback from real vehicle owners.",
};

export default function ReviewsPage() {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            Verified Customer Feedback
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground font-heading">
            Client <span className="text-gradient">Reviews & Ratings</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Honest feedback from neighbors and enthusiasts across Clayton, Raleigh, and Johnston County who trust Mike with their vehicles.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 p-3 px-5 rounded-full bg-surface border border-border text-xs">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-foreground">5.0 Star Average</span>
            <span className="text-border">•</span>
            <a
              href="https://maps.google.com/?q=Tyrees+Auto+Detailing+Clayton+NC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline flex items-center gap-1"
            >
              <span>View on Google</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-xl bg-surface border border-border flex flex-col justify-between hover:border-border-strong transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                    {rev.source}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 italic leading-relaxed mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-foreground">{rev.author}</div>
                  <div className="text-muted-foreground">{rev.vehicle}</div>
                </div>
                <span className="text-muted-foreground/80">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
