'use client';

import React, { useState, useEffect } from 'react';
import { useAppointment } from '@/context/AppointmentContext';
import { CORE_PACKAGES, MAINTENANCE_PLANS } from '@/data/packages';
import { AppointmentLeadPayload, AppointmentSubmissionResult, ServicePackageId } from '@/types/lead';
import { X, CalendarCheck, Phone, MessageSquare, AlertCircle, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';

export default function AppointmentModal() {
  const { isOpen, selectedPackage, closeModal, openModal } = useAppointment();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [pkg, setPkg] = useState<ServicePackageId>(selectedPackage);
  const [preference, setPreference] = useState<'onsite' | 'pickup_dropoff' | 'undecided'>('undecided');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [smsConsent, setSmsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AppointmentSubmissionResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedPackage) {
      setPkg(selectedPackage);
    }
  }, [selectedPackage]);

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

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setResult(null);

    // Validation
    const validationErrors: Record<string, string> = {};
    if (!fullName.trim()) validationErrors.fullName = 'Please enter your full name.';
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) validationErrors.phone = 'Please provide a valid 10-digit phone number.';
    if (!vehicle.trim()) validationErrors.vehicle = 'Please describe your vehicle (year, make, model).';
    if (!location.trim()) validationErrors.location = 'Please specify your location or address in the Clayton/Triangle area.';
    if (!smsConsent) validationErrors.smsConsent = 'Please agree to receive transactional text messages regarding your appointment request.';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const payload: AppointmentLeadPayload = {
      fullName,
      phone,
      email: email.trim() || undefined,
      preferredContactMethod: 'text',
      vehicleYearMakeModel: vehicle,
      vehicleType: 'sedan_coupe',
      vehicleConditionNotes: notes.trim() || undefined,
      packageId: pkg,
      packageName: CORE_PACKAGES.find(p => p.id === pkg)?.name || MAINTENANCE_PLANS.find(p => p.id === pkg)?.name || 'Custom Package',
      servicePreference: preference,
      serviceAddressOrCity: location,
      sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/',
      submittedAt: new Date().toISOString(),
      appointmentSmsConsent: smsConsent,
      marketingConsent: marketingConsent
    };

    try {
      const res = await fetch('/api/appointment-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data: AppointmentSubmissionResult = await res.json();
      setResult(data);
    } catch {
      setResult({
        success: false,
        preview: false,
        message: 'A network error occurred. Please call or text (919) 320-3010 directly.',
        directPhoneAlternative: '(919) 320-3010'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="lightbox-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div 
        className="animate-rise"
        style={{
          backgroundColor: '#13141b',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '580px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem 1.75rem',
          position: 'relative',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(15, 163, 251, 0.15)'
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
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--muted-foreground)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'left', marginBottom: '1.5rem', paddingRight: '2.5rem' }}>
          <span className="badge-pill" style={{ marginBottom: '0.6rem' }}>
            <CalendarCheck size={12} /> Direct Appointment Request
          </span>
          <h2 id="modal-title" style={{ fontSize: '1.85rem', fontWeight: 900, color: 'var(--foreground)' }}>
            Request Your Detail
          </h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', marginTop: '0.35rem' }}>
            Tell us about your vehicle. Mike reviews every request personally and will confirm your date, on-site vs pickup arrangements, and final pricing before work starts.
          </p>
        </div>

        {/* Result Message (Preview Mode or Success/Failure) */}
        {result && (
          <div 
            style={{
              padding: '1.25rem',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              backgroundColor: result.preview ? 'rgba(234, 179, 8, 0.12)' : result.success ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.12)',
              border: `1px solid ${result.preview ? 'rgba(234, 179, 8, 0.4)' : result.success ? 'rgba(34, 197, 94, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
              color: 'var(--foreground)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              {result.preview ? (
                <AlertCircle size={22} style={{ color: '#eab308', flexShrink: 0, marginTop: '2px' }} />
              ) : result.success ? (
                <CheckCircle2 size={22} style={{ color: '#22c55e', flexShrink: 0, marginTop: '2px' }} />
              ) : (
                <AlertCircle size={22} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
              )}
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                  {result.preview ? 'Preview Mode Active' : result.success ? 'Request Received' : 'Notice'}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>
                  {result.message}
                </p>
                {result.directPhoneAlternative && (
                  <div style={{ marginTop: '0.85rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <a 
                      href="sms:+19193203010" 
                      className="btn-primary" 
                      style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', minHeight: '38px' }}
                    >
                      <MessageSquare size={14} /> Text Mike: (919) 320-3010
                    </a>
                    <a 
                      href="tel:+19193203010" 
                      className="btn-outline" 
                      style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', minHeight: '38px' }}
                    >
                      <Phone size={14} /> Call (919) 320-3010
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* The Form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Name & Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">
                Your Full Name <span style={{ color: 'var(--brand-blue)' }}>*</span>
              </label>
              <input
                id="fullName"
                type="text"
                className="form-input"
                placeholder="e.g. Michael Smith"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              {errors.fullName && <p className="form-error">{errors.fullName}</p>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                Phone Number (Text / Call) <span style={{ color: 'var(--brand-blue)' }}>*</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="form-input"
                placeholder="(919) 555-0123"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              {errors.phone && <p className="form-error">{errors.phone}</p>}
            </div>
          </div>

          {/* Email (Optional) */}
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address <span style={{ color: 'var(--muted-foreground)', fontWeight: 400 }}>(Optional)</span>
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Vehicle Year / Make / Model */}
          <div className="form-group">
            <label className="form-label" htmlFor="vehicle">
              Vehicle Year, Make & Model <span style={{ color: 'var(--brand-blue)' }}>*</span>
            </label>
            <input
              id="vehicle"
              type="text"
              className="form-input"
              placeholder="e.g. 2022 Ford F-150 SuperCrew or 2018 Honda CR-V"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              required
            />
            {errors.vehicle && <p className="form-error">{errors.vehicle}</p>}
          </div>

          {/* Selected Package */}
          <div className="form-group">
            <label className="form-label" htmlFor="packageSelect">
              Service Package Selected <span style={{ color: 'var(--brand-blue)' }}>*</span>
            </label>
            <select
              id="packageSelect"
              className="form-select"
              value={pkg}
              onChange={(e) => setPkg(e.target.value as ServicePackageId)}
            >
              <optgroup label="Core Detail Packages">
                {CORE_PACKAGES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — Starts at {p.priceDisplay} ({p.tagline})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Maintenance (Existing Customers Only)">
                {MAINTENANCE_PLANS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} — {m.priceDisplay} (Existing clients only)
                  </option>
                ))}
              </optgroup>
              <optgroup label="Other Inquiries">
                <option value="custom">Paint Correction / Boat / RV / Specialty Quote</option>
                <option value="undecided">Not Sure / Want Recommendation</option>
              </optgroup>
            </select>
          </div>

          {/* Service Preference: On-site vs Pickup/Drop-off */}
          <div className="form-group">
            <label className="form-label">
              Service Location Preference
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.6rem' }}>
              <label 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 0.9rem',
                  borderRadius: '12px',
                  border: `1px solid ${preference === 'onsite' ? 'var(--brand-blue)' : 'var(--border)'}`,
                  background: preference === 'onsite' ? 'rgba(15, 163, 251, 0.1)' : 'rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                <input
                  type="radio"
                  name="servicePreference"
                  checked={preference === 'onsite'}
                  onChange={() => setPreference('onsite')}
                />
                <span>On-site Mobile</span>
              </label>

              <label 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 0.9rem',
                  borderRadius: '12px',
                  border: `1px solid ${preference === 'pickup_dropoff' ? 'var(--brand-blue)' : 'var(--border)'}`,
                  background: preference === 'pickup_dropoff' ? 'rgba(15, 163, 251, 0.1)' : 'rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                <input
                  type="radio"
                  name="servicePreference"
                  checked={preference === 'pickup_dropoff'}
                  onChange={() => setPreference('pickup_dropoff')}
                />
                <span>Pickup / Drop-off</span>
              </label>

              <label 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 0.9rem',
                  borderRadius: '12px',
                  border: `1px solid ${preference === 'undecided' ? 'var(--brand-blue)' : 'var(--border)'}`,
                  background: preference === 'undecided' ? 'rgba(15, 163, 251, 0.1)' : 'rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                <input
                  type="radio"
                  name="servicePreference"
                  checked={preference === 'undecided'}
                  onChange={() => setPreference('undecided')}
                />
                <span>Whichever Fits Best</span>
              </label>
            </div>
          </div>

          {/* Location / City */}
          <div className="form-group">
            <label className="form-label" htmlFor="location">
              Service Address or City <span style={{ color: 'var(--brand-blue)' }}>*</span>
            </label>
            <input
              id="location"
              type="text"
              className="form-input"
              placeholder="e.g. Clayton (Flowers Plantation), Smithfield, or Garner"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            {errors.location && <p className="form-error">{errors.location}</p>}
          </div>

          {/* Condition Notes */}
          <div className="form-group">
            <label className="form-label" htmlFor="notes">
              Vehicle Condition Notes <span style={{ color: 'var(--muted-foreground)', fontWeight: 400 }}>(Optional)</span>
            </label>
            <textarea
              id="notes"
              className="form-textarea"
              rows={2}
              placeholder="e.g. Pet hair on back seats, tree sap on hood, preparing for trade-in, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Mandatory Transactional SMS Consent */}
          <div style={{ marginTop: '1.25rem', marginBottom: '0.75rem', textAlign: 'left' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', cursor: 'pointer', fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.45 }}>
              <input
                type="checkbox"
                checked={smsConsent}
                onChange={(e) => setSmsConsent(e.target.checked)}
                style={{ marginTop: '3px' }}
              />
              <span>
                <strong style={{ color: 'var(--foreground)' }}>Required:</strong> I agree to receive text messages or calls from Tyree’s Auto Detailing at this number to discuss my appointment request, scheduling, and pricing confirmation. Standard message & data rates may apply. Reply STOP to opt out.
              </span>
            </label>
            {errors.smsConsent && <p className="form-error">{errors.smsConsent}</p>}
          </div>

          {/* Optional Marketing Consent (NOT prechecked) */}
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', cursor: 'pointer', fontSize: '0.82rem', color: 'var(--muted-foreground)', lineHeight: 1.45 }}>
              <input
                type="checkbox"
                checked={marketingConsent}
                onChange={(e) => setMarketingConsent(e.target.checked)}
                style={{ marginTop: '3px' }}
              />
              <span>
                (Optional) Send me occasional seasonal maintenance reminders and detailing tips. (Never shared, opt-out anytime).
              </span>
            </label>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', fontSize: '1rem', minHeight: '52px' }}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Submitting Request...
              </>
            ) : (
              <>
                <CalendarCheck size={18} /> Send Appointment Request
              </>
            )}
          </button>

          <p style={{ fontSize: '0.78rem', color: 'var(--faint-foreground)', textAlign: 'center', marginTop: '0.75rem' }}>
            <ShieldCheck size={13} style={{ display: 'inline', verticalAlign: '-1px', color: 'var(--brand-blue)' }} /> No immediate payment required. Mike will contact you to confirm details before scheduling.
          </p>
        </form>

        {/* Direct Call / Text Alternative Banner */}
        <div 
          style={{ 
            marginTop: '1.75rem', 
            paddingTop: '1.25rem', 
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.6rem'
          }}
        >
          <p style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)' }}>
            Need faster assistance or prefer direct messaging?
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a 
              href="sms:+19193203010" 
              className="btn-outline" 
              style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem', minHeight: '40px' }}
            >
              <MessageSquare size={14} style={{ color: 'var(--brand-blue)' }} /> Text (919) 320-3010
            </a>
            <a 
              href="tel:+19193203010" 
              className="btn-outline" 
              style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem', minHeight: '40px' }}
            >
              <Phone size={14} style={{ color: 'var(--brand-blue)' }} /> Call (919) 320-3010
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
