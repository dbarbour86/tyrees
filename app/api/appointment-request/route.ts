import { NextRequest, NextResponse } from 'next/server';
import { AppointmentLeadPayload, AppointmentSubmissionResult } from '@/types/lead';

/**
 * Appointment Request API Endpoint (Votel Integration Boundary)
 * 
 * Boundary Specifications:
 * 1. Validates required lead fields (Name, Phone, Service, Location).
 * 2. Checks server-side environment variable `VOTEL_API_KEY`.
 * 3. In PREVIEW MODE (when Votel credentials are not configured):
 *    - Explicitly returns `preview: true` and `success: false`.
 *    - Informs the client that the request is in local preview mode.
 *    - Returns the verified direct phone and SMS alternative `(919) 320-3010`.
 * 4. When VOTEL_API_KEY is provisioned:
 *    - Dispatches standard payload to POST https://app.votel.ai/api/leads via X-API-Key.
 *    - Never exposes secret API keys to the client browser.
 */

export async function POST(req: NextRequest) {
  try {
    const body: AppointmentLeadPayload = await req.json();

    const errors: Record<string, string> = {};

    // Validate required fields
    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name.';
    }

    const cleanPhone = (body.phone || '').replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!body.vehicleYearMakeModel || body.vehicleYearMakeModel.trim().length < 3) {
      errors.vehicleYearMakeModel = 'Please describe your vehicle (e.g. 2021 Ford F-150 or 2019 Honda CR-V).';
    }

    if (!body.serviceAddressOrCity || body.serviceAddressOrCity.trim().length < 2) {
      errors.serviceAddressOrCity = 'Please enter your service address or city (e.g. Clayton, NC).';
    }

    if (!body.appointmentSmsConsent) {
      errors.appointmentSmsConsent = 'Please check the box to agree to receive text messages regarding your appointment request.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json<AppointmentSubmissionResult>(
        {
          success: false,
          preview: false,
          message: 'Please resolve the highlighted validation errors.',
          errors
        },
        { status: 400 }
      );
    }

    const votelApiKey = process.env.VOTEL_API_KEY;

    // Check if real Votel secret API key is configured
    if (!votelApiKey) {
      // HONEST UNCONFIGURED STATE — PREVIEW MODE ONLY
      // In accordance with Book Moar standards: never claim submission success without a real backend.
      return NextResponse.json<AppointmentSubmissionResult>({
        success: false,
        preview: true,
        message: 'Preview Mode: The appointment request system is currently running in preview mode while backend CRM integration is being connected. To book now or receive immediate confirmation, please text or call Mike directly.',
        directPhoneAlternative: '(919) 320-3010'
      });
    }

    // Live submission directly to Votel API (POST https://app.votel.ai/api/leads)
    const votelApiEndpoint = 'https://app.votel.ai/api/leads';
    const votelResponse = await fetch(votelApiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': votelApiKey
      },
      body: JSON.stringify({
        ...body,
        source: 'TyreesAutoDetailing-Website',
        submittedAt: new Date().toISOString()
      })
    });

    if (!votelResponse.ok) {
      const errText = await votelResponse.text().catch(() => 'Unknown upstream error');
      console.error('Votel upstream dispatch error:', errText);
      return NextResponse.json<AppointmentSubmissionResult>(
        {
          success: false,
          preview: false,
          message: 'Unable to deliver request to our dispatch system. Please text or call (919) 320-3010 for immediate assistance.',
          directPhoneAlternative: '(919) 320-3010'
        },
        { status: 502 }
      );
    }

    const resultData = await votelResponse.json().catch(() => ({}));

    return NextResponse.json<AppointmentSubmissionResult>({
      success: true,
      preview: false,
      message: 'Thank you! Your appointment request has been received. Mike will review your vehicle details and reach out via text or call to confirm arrangements and pricing.',
      leadId: resultData.id || resultData.leadId
    });

  } catch (err: unknown) {
    console.error('Appointment request route failure:', err);
    return NextResponse.json<AppointmentSubmissionResult>(
      {
        success: false,
        preview: false,
        message: 'A network error occurred while submitting. Please call or text (919) 320-3010 directly.',
        directPhoneAlternative: '(919) 320-3010'
      },
      { status: 500 }
    );
  }
}
