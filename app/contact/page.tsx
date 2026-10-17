"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, MapPin, Clock, Calendar, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

export default function ContactPage() {
  const { openModal } = useAppointment();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleYearMakeModel: "",
    packageInterest: "Titanium ($550+)",
    locationType: "Mobile (Driveway)",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPreview, setIsPreview] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/appointment-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit appointment request");
      }

      setSubmitted(true);
      if (data.status === "preview") {
        setIsPreview(true);
      }
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred. Please call (919) 320-3010 directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <Phone className="w-3.5 h-3.5" />
            Fast Communication
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground font-heading">
            Get in Touch <span className="text-gradient">with Mike</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ready to schedule or have questions about vehicle condition? Call, text, or submit your appointment request below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-surface border border-border">
              <h2 className="text-xl font-bold uppercase text-foreground font-heading mb-4">
                Direct Contact
              </h2>
              <div className="space-y-4 text-sm">
                <a
                  href="tel:9193203010"
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border/60 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Phone Call</div>
                    <div className="text-xs text-primary font-bold">(919) 320-3010</div>
                  </div>
                </a>

                <a
                  href="sms:9193203010"
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border/60 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Text Message</div>
                    <div className="text-xs text-primary font-bold">Fast response from Mike</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-foreground">Service Headquarters</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Clayton, NC 27520 & 27527<br />
                    Mobile service across Johnston County and Greater Triangle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-foreground">Hours of Operation</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Monday – Saturday: 8:00 AM – 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-xl bg-surface border border-border">
              <h2 className="text-xl font-bold uppercase text-foreground font-heading mb-2">
                Request an Appointment
              </h2>
              <p className="text-xs text-muted-foreground mb-6">
                Tell us about your vehicle and we will follow up with pricing confirmation and availability.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-surface-elevated border border-primary/30 text-center">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-foreground">Request Received</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Thank you! Mike will review your vehicle specs and follow up by phone/text with confirmation.
                  </p>
                  {isPreview && (
                    <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300">
                      <strong>Preview Notice:</strong> Lead delivery endpoint is in staging mode. Call or text (919) 320-3010 for immediate booking.
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground/80 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-elevated border border-border text-foreground text-xs focus:border-primary focus:outline-none"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground/80 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-elevated border border-border text-foreground text-xs focus:border-primary focus:outline-none"
                        placeholder="(919) 555-0123"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground/80 mb-1">
                        Vehicle (Year / Make / Model) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.vehicleYearMakeModel}
                        onChange={(e) => setFormData({ ...formData, vehicleYearMakeModel: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-elevated border border-border text-foreground text-xs focus:border-primary focus:outline-none"
                        placeholder="e.g. 2022 Ford F-150"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground/80 mb-1">
                        Package Interest
                      </label>
                      <select
                        value={formData.packageInterest}
                        onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-elevated border border-border text-foreground text-xs focus:border-primary focus:outline-none"
                      >
                        <option value="Gold ($350+)">Gold Package ($350+)</option>
                        <option value="Platinum ($450+)">Platinum Package ($450+)</option>
                        <option value="Titanium ($550+)">Titanium Package ($550+ - Most Popular)</option>
                        <option value="Diamond ($650+)">Diamond Package ($650+)</option>
                        <option value="Maintenance Plan">Maintenance Plan (Existing Clients Only)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-1">
                      Service Location Preference
                    </label>
                    <select
                      value={formData.locationType}
                      onChange={(e) => setFormData({ ...formData, locationType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-surface-elevated border border-border text-foreground text-xs focus:border-primary focus:outline-none"
                    >
                      <option value="Mobile (Driveway)">Mobile (At my home/driveway in Clayton/Triangle)</option>
                      <option value="Pickup / Drop-off">Pickup / Drop-off preferred</option>
                      <option value="Not Sure">Not sure / Advise me</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-1">
                      Vehicle Notes (Stains, Pet Hair, Desired Timing)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-surface-elevated border border-border text-foreground text-xs focus:border-primary focus:outline-none"
                      placeholder="e.g. Dog hair in back seat, looking for next Wednesday or Friday..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 rounded-lg bg-primary hover:bg-primary-hover text-black font-extrabold text-xs uppercase tracking-wider transition-all disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Send Appointment Request"}
                  </button>

                  <p className="text-[11px] text-muted-foreground text-center">
                    Mike will confirm availability and pricing. No credit card required to request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
