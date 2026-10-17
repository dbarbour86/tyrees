'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppointment } from '@/context/AppointmentContext';
import { Phone, CalendarCheck, Menu, X, MessageSquare } from 'lucide-react';

export default function Header() {
  const { openModal } = useAppointment();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '70px',
          backgroundColor: scrolled ? 'rgba(9, 9, 11, 0.92)' : 'rgba(9, 9, 11, 0.6)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          transition: 'all 0.3s ease'
        }}
      >
        <div 
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          {/* Logo Brand */}
          <Link 
            href="/" 
            aria-label="Tyree's Auto Detailing Home"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              textDecoration: 'none',
              color: 'var(--foreground)'
            }}
          >
            <div style={{ position: 'relative', width: '42px', height: '42px' }}>
              <Image
                src="/images/tyrees-logo.webp"
                alt="Tyree's Auto Detailing Logo"
                fill
                sizes="42px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.15rem', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                TYREE&apos;S
              </span>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--brand-blue)', textTransform: 'uppercase' }}>
                Auto Detailing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            style={{ display: 'none' }} 
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            <Link href="/services" className="nav-link">Services &amp; Pricing</Link>
            <Link href="/gallery" className="nav-link">Gallery</Link>
            <Link href="/service-area" className="nav-link">Service Area</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/reviews" className="nav-link">Reviews</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {/* Direct Phone / SMS Links */}
            <a 
              href="sms:+19193203010" 
              className="action-icon-btn" 
              aria-label="Text Tyree's Auto Detailing"
              title="Text (919) 320-3010"
            >
              <MessageSquare size={18} />
            </a>

            <a 
              href="tel:+19193203010" 
              className="action-icon-btn" 
              aria-label="Call Tyree's Auto Detailing"
              title="Call (919) 320-3010"
            >
              <Phone size={18} />
            </a>

            {/* Request Appointment Button */}
            <button
              onClick={() => openModal()}
              className="btn-primary"
              style={{ fontSize: '0.88rem', padding: '0.6rem 1.25rem', minHeight: '42px' }}
            >
              <CalendarCheck size={16} />
              <span className="cta-text">Request Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="action-icon-btn mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            top: '70px',
            backgroundColor: 'rgba(9, 9, 11, 0.98)',
            backdropFilter: 'blur(16px)',
            zIndex: 45,
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            overflowY: 'auto'
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/services" onClick={closeMobile} className="mobile-nav-link">
              Services &amp; Pricing
            </Link>
            <Link href="/gallery" onClick={closeMobile} className="mobile-nav-link">
              Portfolio &amp; Gallery
            </Link>
            <Link href="/service-area" onClick={closeMobile} className="mobile-nav-link">
              Service Area (Clayton &amp; Triangle)
            </Link>
            <Link href="/about" onClick={closeMobile} className="mobile-nav-link">
              About Mike Tyree
            </Link>
            <Link href="/reviews" onClick={closeMobile} className="mobile-nav-link">
              Customer Reviews (5.0 Stars)
            </Link>
            <Link href="/contact" onClick={closeMobile} className="mobile-nav-link">
              Contact &amp; Details
            </Link>
          </nav>

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={() => {
                closeMobile();
                openModal();
              }}
              className="btn-primary"
              style={{ width: '100%', minHeight: '50px' }}
            >
              <CalendarCheck size={18} /> Request Appointment
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <a 
                href="sms:+19193203010" 
                className="btn-outline" 
                style={{ justifyContent: 'center' }}
              >
                <MessageSquare size={16} style={{ color: 'var(--brand-blue)' }} /> Text Us
              </a>
              <a 
                href="tel:+19193203010" 
                className="btn-outline" 
                style={{ justifyContent: 'center' }}
              >
                <Phone size={16} style={{ color: 'var(--brand-blue)' }} /> Call Us
              </a>
            </div>

            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>
              Built on experience! Known for quality! · Clayton, NC
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
            align-items: center;
            gap: 1.5rem;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .cta-text {
            display: none;
          }
        }
        .nav-link {
          color: var(--muted-foreground);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: var(--foreground);
        }
        .action-icon-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.03);
          color: var(--foreground);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
        }
        .action-icon-btn:hover {
          border-color: var(--brand-blue);
          color: var(--brand-blue);
          background: var(--brand-blue-subtle);
        }
        .mobile-nav-link {
          color: var(--foreground);
          text-decoration: none;
          font-size: 1.25rem;
          font-weight: 700;
          font-family: var(--font-display);
          padding: 0.6rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </>
  );
}
