import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Tyree’s Auto Detailing",
  description: "Terms of service and vehicle detailing policies for Tyree’s Auto Detailing in Clayton, NC.",
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground font-heading mb-6">
          Terms of Service
        </h1>
        <p className="text-xs text-muted-foreground mb-8">
          Last Updated: October 2026
        </p>

        <div className="space-y-6 text-xs md:text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">1. Appointment Requests vs. Confirmed Bookings</h2>
            <p>
              Submitting an appointment request through our website does not constitute a guaranteed or confirmed booking. Mike will review your request, assess vehicle conditions and location, and contact you directly to confirm the date, arrival window, and final price quote.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">2. Estimates & Vehicle Sizing</h2>
            <p>
              Listed starting prices ($350 Gold, $450 Platinum, $550 Titanium, $650 Diamond) reflect standard sized coupes or sedans in normal condition. Larger vehicles (SUVs, minivans, lifted trucks), heavy pet hair, biological hazards, mold, or severe oxidation require additional time and materials and will be quoted prior to service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">3. Mobile Service Conditions</h2>
            <p>
              Mobile detailing requires safe, legal parking access and reasonable weather conditions. High winds, heavy rain, extreme cold, or restrictive HOA rules may require rescheduling or arranging vehicle pickup and drop-off to our facility.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">4. Maintenance Plans</h2>
            <p>
              Routine maintenance detailing pricing ($60 bi-weekly, $95 monthly) is exclusively available to existing clients whose vehicles have previously received a full comprehensive detail from Tyree’s Auto Detailing.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">5. Personal Items</h2>
            <p>
              Please remove all personal belongings, car seats, and valuables from the vehicle prior to our arrival. While our team exercises utmost care, we are not responsible for uncollected personal items left inside pockets or compartments.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
