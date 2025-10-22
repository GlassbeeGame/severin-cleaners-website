// Google Tag Manager event tracking utilities

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Push event to GTM dataLayer
 */
export const gtmEvent = (event: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
    });
  }
};

/**
 * Track phone number clicks
 */
export const trackPhoneClick = (phoneNumber: string, location: string) => {
  gtmEvent('phone_click', {
    phone_number: phoneNumber,
    location: location,
    value: 100, // Conversion value for agency reporting
  });
};

/**
 * Track form submissions
 */
export const trackFormSubmit = (formName: string, formLocation: string) => {
  gtmEvent('form_submit', {
    form_name: formName,
    form_location: formLocation,
    value: 75, // Conversion value for agency reporting
  });
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (ctaText: string, ctaLocation: string) => {
  gtmEvent('cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation,
    value: 50,
  });
};

/**
 * Track service page views
 */
export const trackServiceView = (serviceName: string) => {
  gtmEvent('service_view', {
    service_name: serviceName,
    value: 25,
  });
};

/**
 * Track location page views
 */
export const trackLocationView = (locationName: string) => {
  gtmEvent('location_view', {
    location_name: locationName,
    value: 20,
  });
};
