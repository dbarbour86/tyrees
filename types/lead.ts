/**
 * Votel Lead Submission Data Boundary
 * 
 * Defines the clean payload for appointment requests and future CRM/Votel sync.
 * Kept independent of specific vendor API implementations.
 */

export type ServicePackageId = 'gold' | 'platinum' | 'titanium' | 'diamond' | 'biweekly' | 'monthly' | 'custom' | 'undecided';

export interface AppointmentLeadPayload {
  // Contact Information
  fullName: string;
  phone: string;
  email?: string;
  preferredContactMethod: 'text' | 'call' | 'email';

  // Vehicle Details
  vehicleYearMakeModel: string;
  vehicleType: 'sedan_coupe' | 'suv_crossover' | 'truck' | 'van' | 'boat' | 'rv_camper' | 'trailer_specialty' | 'other';
  vehicleConditionNotes?: string;

  // Selected Service
  packageId: ServicePackageId;
  packageName: string;
  requestedServiceDate?: string;
  servicePreference: 'onsite' | 'pickup_dropoff' | 'undecided';

  // Service Location
  serviceAddressOrCity: string;

  // Metadata & Attribution
  sourcePage: string;
  submittedAt: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;

  // Consent (Marketing consent must be optional and never prechecked)
  appointmentSmsConsent: boolean; // Consent to receive transactional SMS regarding this request
  marketingConsent?: boolean;    // Optional promotional consent
}

export interface AppointmentSubmissionResult {
  success: boolean;
  preview: boolean;
  message: string;
  leadId?: string;
  directPhoneAlternative?: string;
  errors?: Record<string, string>;
}
