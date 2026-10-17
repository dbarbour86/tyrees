"use client";

import React from "react";
import { Calendar, Phone, MessageSquare, Sparkles } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

export default function MobileFloatingBar() {
  const { openModal } = useAppointment();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0e1017]/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href="tel:9193203010"
          className="flex-1 py-2.5 px-3 rounded-lg bg-surface-elevated hover:bg-surface-hover text-foreground border border-border flex items-center justify-center gap-1.5 text-xs font-bold transition-colors active:scale-95"
          aria-label="Call Tyree's Auto Detailing at 919-320-3010"
        >
          <Phone className="w-3.5 h-3.5 text-primary" />
          <span>Call</span>
        </a>

        {/* Direct Text Button */}
        <a
          href="sms:9193203010"
          className="flex-1 py-2.5 px-3 rounded-lg bg-surface-elevated hover:bg-surface-hover text-foreground border border-border flex items-center justify-center gap-1.5 text-xs font-bold transition-colors active:scale-95"
          aria-label="Text Mike at 919-320-3010"
        >
          <MessageSquare className="w-3.5 h-3.5 text-primary" />
          <span>Text</span>
        </a>

        {/* Prominent Floating Request / Quote Button */}
        <button
          type="button"
          onClick={() => openModal()}
          className="flex-[2] py-2.5 px-3 rounded-lg bg-primary hover:bg-primary-hover text-black flex items-center justify-center gap-1.5 text-xs font-extrabold uppercase tracking-wider shadow-[0_0_15px_rgba(15,163,251,0.4)] transition-all active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
}
