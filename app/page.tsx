"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Shield,
  Clock,
  Car,
  Star,
  CheckCircle2,
  Calendar,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Award,
  MapPin,
  Check,
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import PackageComparison from "@/components/PackageComparison";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import GallerySection from "@/components/GallerySection";
import FAQAccordion from "@/components/FAQAccordion";
import { REVIEWS } from "@/data/reviews";

export default function HomePage() {
  const { openModal } = useAppointment();

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION (Matching Mike's preferred baseline with background car) */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#09090b] border-b border-white/5">
        {/* Car in background with darkened overlay for high contrast readability */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-car.jpg"
            alt="Tyree's Auto Detailing Finished Car Background"
            fill
            priority
            className="object-cover object-center brightness-[0.38] contrast-[1.12]"
            sizes="100vw"
          />
          {/* Subtle radial vignette and gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/40 to-[#09090b]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.65)_100%)]" />
        </div>

        <div className="container relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Top Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary text-primary text-xs font-extrabold uppercase tracking-widest bg-primary/10 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(15,163,251,0.25)]">
            BUILT ON EXPERIENCE! KNOWN FOR QUALITY!
          </div>

          {/* Centered Circular Logo */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6 drop-shadow-[0_0_25px_rgba(15,163,251,0.35)]">
            <Image
              src="/images/tyrees-logo.webp"
              alt="Tyree's Auto Detailing"
              fill
              priority
              className="object-contain"
              sizes="96px"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-heading leading-[1.08] mb-5">
            Your Car Deserves to <br />
            <span className="text-primary">Look Amazing</span> Again
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-6 font-sans">
            Over 20 years of detailing experience in Clayton, NC and surrounding areas. Full-package details typically run 6–8 hours, on-site when conditions allow, with pickup/drop-off available when it&apos;s the better fit.
          </p>

          {/* Social Proof Line */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-white/90 mb-8 font-medium">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span>
              <strong className="text-white">Trusted by 200+ local vehicle owners</strong>, backed by real 5-star reviews
            </span>
          </div>

          {/* Two Centered Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openModal()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(15,163,251,0.45)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Appointment</span>
            </button>

            <a
              href="#packages"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-black/40 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-bold text-sm tracking-wider transition-all flex items-center justify-center"
            >
              <span>See Our Services</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED BEFORE & AFTER COMPARISON SECTION */}
      <section className="py-16 md:py-20 bg-[#0e0f14] border-b border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Real Transformations
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white font-heading">
              See the Difference <span className="text-gradient">Yourself</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Slide left and right to inspect authentic paint decontamination, swirl removal, and gloss revival on real client vehicles.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* 2. "LET'S BE HONEST ABOUT YOUR CAR" - Empathy & Problem section */}
      <section className="py-20 bg-background-elevated border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground font-heading">
              Let’s Be Honest <span className="text-gradient">About Your Car</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Between daily commutes, Carolina pollen, road grime, food spills, and pet hair, your vehicle loses that fresh-from-the-dealership magic fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-surface border border-border hover:border-border-strong transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-bold uppercase text-foreground font-heading">
                Drive-Thru Washes Do Damage
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Automated brush washes trap grit from hundreds of prior trucks, leaving fine spiderweb swirl marks and microscratches across your clear coat.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border hover:border-border-strong transition-all">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-bold uppercase text-foreground font-heading">
                Interior Grime Builds Deep
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Coffee splatters, ground-in soil, and pet dander get trapped deep in carpet fibers and seat seams that basic consumer vacuums cannot reach.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border hover:border-border-strong transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-bold uppercase text-foreground font-heading">
                Sun & Pollen Degrade Paint
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Without chemical decontamination and durable ceramic sealant protection, Carolina UV rays oxidize clear coats and fade exterior trim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERIOUS DETAILING, DONE PRACTICALLY - Differentiator */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Real Vehicle Image */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-surface">
              <div className="aspect-[4/3] relative w-full">
                <Image
                  src="/black-car.png"
                  alt="Deep gloss black sports coupe detailed by Tyree's"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 bg-surface border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Black Clear Coat Paint Decontamination</span>
                <span className="text-primary font-bold">Zero Swirl Reflection</span>
              </div>
            </div>

            {/* Value Proposition Points */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                <Award className="w-3.5 h-3.5" />
                The Tyree Difference
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground font-heading">
                Serious Detailing, <br />
                <span className="text-gradient">Done Practically</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                We do not rush 45-minute splash-and-dash jobs. We take the time required to do things properly — cleaning door jambs, extracting seat stains, decontaminating iron fallout, and sealing your finish.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">6 to 8 Hour Deep Focus</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Every comprehensive detail receives meticulous care. No cut corners, no rushed wipe-downs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Full Equipment & Insurance</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Fully licensed and insured. We bring spot-free filtered water, safe PH-balanced chemicals, and gentle microfiber pads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border">
                  <Car className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Mobile Driveway or Pickup/Drop-off</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      We come directly to your driveway, or arrange pickup/drop-off when weather or site space makes shop care a better fit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="px-6 py-3.5 rounded-lg bg-primary hover:bg-primary-hover text-black font-extrabold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
                >
                  <span>Request Your Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PACKAGES & PRICING */}
      <PackageComparison showComparisonTable={true} />

      {/* 5. PROOF GALLERY (Boats, RVs, Trucks, Cars) */}
      <GallerySection limit={6} />

      {/* 7. MORE THAN JUST A CLEAN CAR - Key Benefits */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground font-heading">
              More Than Just A <span className="text-gradient">Clean Car</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Professional detailing delivers measurable long-term value for every vehicle owner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-surface border border-border">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-base font-bold uppercase text-foreground font-heading">
                Paint Longevity
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Ceramic sealants and clay decontamination prevent Carolina sun oxidation and premature clear coat peeling.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border">
              <Sparkles className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-base font-bold uppercase text-foreground font-heading">
                Higher Resale Value
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                A spotless interior and flawless paint add thousands to private sales or trade-in appraisals.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border">
              <Car className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-base font-bold uppercase text-foreground font-heading">
                Healthier Cabin Air
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Steam sanitization and deep fabric extraction remove trapped dust, allergens, bacteria, and stale odors.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border">
              <Award className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-base font-bold uppercase text-foreground font-heading">
                Pride of Ownership
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Nothing beats walking out to a slick, glossy, mirror-reflection vehicle every single morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS / PROCESS */}
      <section className="py-20 bg-background-elevated border-t border-border">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Simple 3-Step Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground font-heading">
              Trusted Detailing, <br />
              <span className="text-gradient">Right At Your Driveway</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Booking high-end car care shouldn&apos;t be complicated. Here is how we get your vehicle scheduled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="p-6 rounded-xl bg-surface border border-border relative">
              <div className="w-8 h-8 rounded-full bg-primary text-black font-extrabold text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-lg font-bold uppercase text-foreground font-heading">
                Request Your Package
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Choose Gold, Platinum, Titanium, or Diamond and send your vehicle details and preferred timing via our quick form.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border relative">
              <div className="w-8 h-8 rounded-full bg-primary text-black font-extrabold text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-lg font-bold uppercase text-foreground font-heading">
                Mike Confirms Details
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Mike personally reviews your vehicle condition, confirms exact pricing and timing, and coordinates driveway or shop logistics.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border relative">
              <div className="w-8 h-8 rounded-full bg-primary text-black font-extrabold text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-lg font-bold uppercase text-foreground font-heading">
                6–8 Hour Transformation
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                We perform an exhaustive, multi-step detail. You inspect the finished vehicle and enjoy that genuine new-car feeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER REVIEWS */}
      <section id="reviews" className="py-20 bg-background border-t border-border">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              Verified Local Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground font-heading">
              What Customers <span className="text-gradient">Are Saying</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Real reviews from real vehicle owners across Clayton, Raleigh, and Johnston County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-xl bg-surface border border-border flex flex-col justify-between"
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

          <div className="mt-10 text-center">
            <a
              href="https://maps.google.com/?q=Tyrees+Auto+Detailing+Clayton+NC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider"
            >
              <span>Verify all reviews on Google Maps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <FAQAccordion />

      {/* 11. FINAL CONVERSION BANNER */}
      <section className="py-20 bg-background-elevated border-t border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center rounded-2xl bg-surface border border-border p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground font-heading">
              Ready to Request <br />
              <span className="text-gradient">Your Appointment?</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Spots fill quickly because Mike spends 6 to 8 dedicated hours per full detail. Request your preferred day online or call directly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(15,163,251,0.35)] flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment</span>
              </button>

              <a
                href="tel:9193203010"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-surface-elevated hover:bg-surface-hover text-foreground border border-border font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call (919) 320-3010</span>
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              Appointment requests are tentative until Mike confirms your scheduling, vehicle conditions, and final quote.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
