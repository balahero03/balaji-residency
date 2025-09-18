// Google Analytics 4 Integration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Make gtag available globally
    (window as any).gtag = gtag;
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track booking interactions
export const trackBooking = (type: 'whatsapp' | 'phone' | 'form', source: string) => {
  trackEvent('booking_attempt', 'engagement', `${type}_${source}`);
};

// Track contact interactions
export const trackContact = (method: 'whatsapp' | 'phone' | 'email') => {
  trackEvent('contact', 'engagement', method);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  if (depth === 25 || depth === 50 || depth === 75 || depth === 100) {
    trackEvent('scroll', 'engagement', `${depth}%`);
  }
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds: number) => {
  if (timeInSeconds >= 30) {
    trackEvent('time_on_page', 'engagement', `${Math.floor(timeInSeconds / 30) * 30}s`);
  }
};
