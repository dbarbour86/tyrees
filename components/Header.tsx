"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppointment } from "@/context/AppointmentContext";
import { Phone, CalendarCheck, Menu, X, MessageSquare } from "lucide-react";

export default function Header() {
  const { openModal } = useAppointment();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40"
            : "bg-[#09090b]/75 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="container h-full flex items-center justify-between gap-4">
          {/* Logo Brand */}
          <Link
            href="/"
            aria-label="Tyree's Auto Detailing Home"
            className="flex items-center gap-3 text-foreground no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/images/tyrees-logo.webp"
                alt="Tyree's Auto Detailing Logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-lg md:text-xl tracking-tight leading-none text-white">
                TYREE&apos;S
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-primary uppercase">
                Auto Detailing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            <Link
              href="/services"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Services &amp; Pricing
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/service-area"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Service Area
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/reviews"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Quick SMS Link */}
            <a
              href="sms:9193203010"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-foreground flex items-center justify-center transition-colors"
              aria-label="Text Tyree's Auto Detailing"
              title="Text (919) 320-3010"
            >
              <MessageSquare className="w-4 h-4 text-primary" />
            </a>

            {/* Quick Call Link */}
            <a
              href="tel:9193203010"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-foreground flex items-center justify-center transition-colors"
              aria-label="Call Tyree's Auto Detailing"
              title="Call (919) 320-3010"
            >
              <Phone className="w-4 h-4 text-primary" />
            </a>

            {/* Request Appointment Button */}
            <button
              type="button"
              onClick={() => openModal()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-black text-xs md:text-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(15,163,251,0.35)]"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Request Appointment</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-foreground flex items-center justify-center transition-colors"
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#09090b]/98 backdrop-blur-xl z-40 p-6 flex flex-col gap-6 overflow-y-auto lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-semibold">
            <Link
              href="/services"
              onClick={closeMobile}
              className="py-2 border-b border-white/5 text-foreground hover:text-primary transition-colors"
            >
              Services &amp; Pricing
            </Link>
            <Link
              href="/gallery"
              onClick={closeMobile}
              className="py-2 border-b border-white/5 text-foreground hover:text-primary transition-colors"
            >
              Portfolio &amp; Gallery
            </Link>
            <Link
              href="/service-area"
              onClick={closeMobile}
              className="py-2 border-b border-white/5 text-foreground hover:text-primary transition-colors"
            >
              Service Area (Clayton &amp; Triangle)
            </Link>
            <Link
              href="/about"
              onClick={closeMobile}
              className="py-2 border-b border-white/5 text-foreground hover:text-primary transition-colors"
            >
              About Mike Tyree
            </Link>
            <Link
              href="/reviews"
              onClick={closeMobile}
              className="py-2 border-b border-white/5 text-foreground hover:text-primary transition-colors"
            >
              Customer Reviews (5.0 Stars)
            </Link>
            <Link
              href="/contact"
              onClick={closeMobile}
              className="py-2 border-b border-white/5 text-foreground hover:text-primary transition-colors"
            >
              Contact &amp; Details
            </Link>
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                closeMobile();
                openModal();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-primary hover:bg-primary-hover text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(15,163,251,0.35)] flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Request Appointment</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="sms:9193203010"
                className="py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-foreground flex items-center justify-center gap-2 text-xs font-bold transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Text Us</span>
              </a>
              <a
                href="tel:9193203010"
                className="py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-foreground flex items-center justify-center gap-2 text-xs font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call Us</span>
              </a>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-2">
              Clayton, NC • 6 to 8 Hour Craftsmanship
            </p>
          </div>
        </div>
      )}
    </>
  );
}
