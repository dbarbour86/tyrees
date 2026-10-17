import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageSquare, MapPin, Facebook, Star, ShieldCheck } from 'lucide-react';
import { SERVICE_CITIES } from '@/data/serviceAreas';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', backgroundColor: '#070709', marginTop: '5rem' }}>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '3.5rem' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Col 1: Brand & NAP */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ position: 'relative', width: '46px', height: '46px' }}>
                <Image
                  src="/images/tyrees-logo.webp"
                  alt="Tyree's Auto Detailing Logo"
                  fill
                  sizes="46px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, lineHeight: 1.1 }}>TYREE&apos;S</h3>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--brand-blue)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Auto Detailing
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              <strong style={{ color: 'var(--foreground)' }}>Built on experience! Known for quality!</strong> Over 20 years of hands-on automotive restoration and detailing in Clayton, NC and surrounding areas.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '3px' }} />
                <span>2809 Merchantile Ct, Clayton, NC 27520</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
                <a href="tel:+19193203010" style={{ color: 'var(--foreground)', textDecoration: 'none', fontWeight: 600 }}>
                  (919) 320-3010
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.25rem' }}>
              <a 
                href="https://www.facebook.com/tyreesautodetailing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', minHeight: '36px' }}
                aria-label="Tyree's Auto Detailing on Facebook"
              >
                <Facebook size={14} style={{ color: 'var(--brand-blue)' }} /> Facebook
              </a>
              <a 
                href="https://share.google/SkrkDyliki5ooqSDi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', minHeight: '36px' }}
                aria-label="Tyree's Google Reviews"
              >
                <Star size={14} style={{ color: 'var(--brand-blue)' }} fill="var(--brand-blue)" /> Google 5.0
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', color: 'var(--foreground)' }}>
              Explore Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li>
                <Link href="/services#gold" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
                  Gold Package (Starts at $350)
                </Link>
              </li>
              <li>
                <Link href="/services#platinum" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
                  Platinum Package (Starts at $450)
                </Link>
              </li>
              <li>
                <Link href="/services#titanium" style={{ color: 'var(--brand-blue)', textDecoration: 'none', fontWeight: 600 }}>
                  Titanium Package (Starts at $550 · Most Popular)
                </Link>
              </li>
              <li>
                <Link href="/services#diamond" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
                  Diamond Package (Starts at $650 · Showroom)
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
                  Maintenance Plans (Existing Clients Only)
                </Link>
              </li>
              <li>
                <Link href="/gallery" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
                  Work Portfolio &amp; Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>
                  Verified Reviews &amp; Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Area Municipalities */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', color: 'var(--foreground)' }}>
              Service Area Hub
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)', marginBottom: '0.85rem' }}>
              Mobile on-site service across Johnston &amp; Wake Counties, or shop pickup/drop-off:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.45rem', fontSize: '0.82rem' }}>
              {SERVICE_CITIES.map((c) => (
                <Link 
                  key={c.slug} 
                  href={`/service-area/${c.slug}`}
                  style={{ color: 'var(--muted-foreground)', textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  ✓ {c.name}, NC
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '1rem' }}>
              <Link href="/service-area" style={{ color: 'var(--brand-blue)', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}>
                View Full Service Area Map &rarr;
              </Link>
            </div>
          </div>

          {/* Col 4: Quick Action & Direct Contact */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', color: 'var(--foreground)' }}>
              Get In Touch
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.5, marginBottom: '1rem' }}>
              Texting photos of your vehicle is the fastest way to receive a tailored estimate and time window.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a 
                href="sms:+19193203010" 
                className="btn-primary"
                style={{ width: '100%', fontSize: '0.9rem', padding: '0.65rem 1rem', minHeight: '44px' }}
              >
                <MessageSquare size={16} /> Text (919) 320-3010
              </a>
              <a 
                href="tel:+19193203010" 
                className="btn-outline"
                style={{ width: '100%', fontSize: '0.9rem', padding: '0.65rem 1rem', minHeight: '44px', justifyContent: 'center' }}
              >
                <Phone size={16} style={{ color: 'var(--brand-blue)' }} /> Call (919) 320-3010
              </a>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--faint-foreground)', marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={14} style={{ color: 'var(--brand-blue)' }} /> 20+ Years Detailing Experience
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div 
          style={{
            marginTop: '3.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'var(--faint-foreground)'
          }}
        >
          <p>© {new Date().getFullYear()} Tyree&apos;s Auto Detailing. All rights reserved. Clayton, NC.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: 'var(--faint-foreground)', textDecoration: 'none' }}>
              Privacy Policy &amp; SMS Terms
            </Link>
            <Link href="/terms" style={{ color: 'var(--faint-foreground)', textDecoration: 'none' }}>
              Terms of Service
            </Link>
            <Link href="/contact" style={{ color: 'var(--faint-foreground)', textDecoration: 'none' }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
