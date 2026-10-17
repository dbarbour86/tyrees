import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tyree’s Auto Detailing",
  description: "Privacy policy and SMS/MMS disclosure for Tyree’s Auto Detailing in Clayton, NC.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground font-heading mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs text-muted-foreground mb-8">
          Last Updated: October 2026
        </p>

        <div className="space-y-6 text-xs md:text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">1. Overview</h2>
            <p>
              Tyree’s Auto Detailing (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard personal information collected through our website (tyreesautodetailing.com) and direct communications.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">2. Information We Collect</h2>
            <p>
              When you submit an appointment request, contact form, or communicate with us by phone or SMS, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Your name</li>
              <li>Your phone number and email address</li>
              <li>Vehicle specifications (year, make, model, condition notes)</li>
              <li>Your general service location (street address or city for mobile detailing)</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">3. How We Use Your Information</h2>
            <p>
              We use this information exclusively to communicate regarding your detailing appointment, confirm scheduling, provide transparent quotes, and service your vehicle.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">4. Mobile Messaging & SMS Terms</h2>
            <p>
              By providing your mobile number and requesting an appointment, you agree to receive transactional text messages from Tyree’s Auto Detailing regarding your service inquiry and scheduling.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Message frequency varies according to your appointment status.</li>
              <li>Standard message and data rates may apply.</li>
              <li>You may reply <strong>STOP</strong> at any time to opt out of SMS communications.</li>
              <li>You may reply <strong>HELP</strong> for assistance or contact us at (919) 320-3010.</li>
              <li>We <strong>never sell, rent, or share</strong> mobile phone numbers or SMS consent with third parties or affiliates for promotional purposes.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">5. Contact Us</h2>
            <p>
              If you have questions about this policy, contact Mike directly at (919) 320-3010 or visit tyreesautodetailing.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
