'use client';

import React, { useEffect, useRef } from 'react';
import { useAppointment } from '@/context/AppointmentContext';
import { X, CalendarCheck, Phone, MessageSquare, ShieldCheck } from 'lucide-react';

declare global {
  interface Window {
    CRMEmbed?: {
      createWidget: (formId: string, opts?: Record<string, unknown>) => HTMLElement | undefined;
      createPopup?: (formId: string, opts?: Record<string, unknown>) => { open: () => void };
    };
    VotelEmbed?: unknown;
  }
}

export default function AppointmentModal() {
  const { isOpen, closeModal } = useAppointment();
  const formMountedRef = useRef(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (!isOpen) {
      formMountedRef.current = false;
      return;
    }

    const container = document.getElementById('crm-form-KnpJ');
    if (!container || formMountedRef.current) return;

    // If iframe is already mounted inside container, do not duplicate
    if (container.querySelector('iframe')) {
      formMountedRef.current = true;
      return;
    }

    // Read client-safe public key if provisioned
    const votelPublicKey = process.env.NEXT_PUBLIC_VOTEL_PUBLIC_KEY;

    // If CRMEmbed is already available on window, call createWidget
    if (window.CRMEmbed && typeof window.CRMEmbed.createWidget === 'function') {
      window.CRMEmbed.createWidget('KnpJ', {
        container: container,
        transparent: true,
        width: '100%',
        ...(votelPublicKey ? { publicKey: votelPublicKey, pk: votelPublicKey } : {})
      });
      formMountedRef.current = true;
      return;
    }

    // Otherwise, inject the official Votel embed script
    const script = document.createElement('script');
    script.src = 'https://app.votel.ai/form-embed/v1.js';
    script.setAttribute('data-form-id', 'KnpJ');
    script.setAttribute('data-transparent', '1');
    if (votelPublicKey) {
      script.setAttribute('data-public-key', votelPublicKey);
      script.setAttribute('data-pk', votelPublicKey);
    }
    script.async = true;
    script.onload = () => {
      formMountedRef.current = true;
    };
    container.appendChild(script);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="lightbox-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        backgroundColor: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div 
        className="animate-rise"
        style={{
          backgroundColor: '#0c0d12',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem 1.75rem',
          position: 'relative',
          margin: 'auto',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 50px rgba(15, 163, 251, 0.25)',
          color: '#f8fafc'
        }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a1a1aa',
            cursor: 'pointer',
            transition: 'all 0.2s',
            zIndex: 30
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = '#a1a1aa';
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'left', marginBottom: '1.25rem', paddingRight: '2.5rem' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              backgroundColor: 'rgba(15, 163, 251, 0.12)',
              border: '1px solid rgba(15, 163, 251, 0.25)',
              color: '#0FA3FB',
              marginBottom: '0.6rem'
            }}
          >
            <CalendarCheck size={12} /> Direct Appointment Booking
          </div>
          <h2 id="modal-title" style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f8fafc', margin: 0 }}>
            Book Your Appointment
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.88rem', marginTop: '0.35rem', lineHeight: 1.5 }}>
            Mike reviews every request personally and will confirm your date, drop-off or pickup arrangements, and final pricing before work starts.
          </p>
        </div>

        {/* Votel Form Container */}
        <div 
          id="crm-form-KnpJ" 
          style={{ 
            width: '100%', 
            minHeight: '520px',
            position: 'relative'
          }} 
        />

        {/* Direct Call / Text Alternative Banner */}
        <div 
          style={{ 
            marginTop: '1.75rem', 
            paddingTop: '1.25rem', 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.6rem'
          }}
        >
          <p style={{ fontSize: '0.82rem', color: '#a1a1aa', textAlign: 'center' }}>
            <ShieldCheck size={13} style={{ display: 'inline', verticalAlign: '-1px', color: '#0FA3FB', marginRight: '4px' }} />
            No immediate payment required. Prefer to message Mike directly?
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a 
              href="sms:+19193203010" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                padding: '0.5rem 1.1rem',
                minHeight: '40px',
                borderRadius: '0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#f8fafc',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
            >
              <MessageSquare size={14} style={{ color: '#0FA3FB' }} /> Text (919) 320-3010
            </a>
            <a 
              href="tel:+19193203010" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                padding: '0.5rem 1.1rem',
                minHeight: '40px',
                borderRadius: '0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#f8fafc',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
            >
              <Phone size={14} style={{ color: '#0FA3FB' }} /> Call (919) 320-3010
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
