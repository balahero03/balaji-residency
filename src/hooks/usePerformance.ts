import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export const usePerformance = () => {
  useEffect(() => {
    // Track page load performance
    const trackPageLoad = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          
          // Track performance metrics
          trackEvent('page_load_time', 'performance', 'total', Math.round(loadTime));
          trackEvent('dom_content_loaded', 'performance', 'dom_ready', Math.round(domContentLoaded));
          
          // Track Core Web Vitals if available
          if ('web-vital' in window) {
            // This would require web-vitals library
            // import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
          }
        }
      }
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          // Track milestone scroll depths
          if (scrollPercent >= 25 && scrollPercent < 50) {
            trackEvent('scroll_depth', 'engagement', '25%');
          } else if (scrollPercent >= 50 && scrollPercent < 75) {
            trackEvent('scroll_depth', 'engagement', '50%');
          } else if (scrollPercent >= 75 && scrollPercent < 100) {
            trackEvent('scroll_depth', 'engagement', '75%');
          } else if (scrollPercent >= 100) {
            trackEvent('scroll_depth', 'engagement', '100%');
          }
        }
      };

      window.addEventListener('scroll', trackScroll, { passive: true });
      return () => window.removeEventListener('scroll', trackScroll);
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      
      const trackTime = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        
        // Track time milestones
        if (timeSpent === 30) {
          trackEvent('time_on_page', 'engagement', '30s');
        } else if (timeSpent === 60) {
          trackEvent('time_on_page', 'engagement', '1m');
        } else if (timeSpent === 120) {
          trackEvent('time_on_page', 'engagement', '2m');
        } else if (timeSpent === 300) {
          trackEvent('time_on_page', 'engagement', '5m');
        }
      };

      const interval = setInterval(trackTime, 1000);
      return () => clearInterval(interval);
    };

    // Initialize tracking
    const cleanupScroll = trackScrollDepth();
    const cleanupTime = trackTimeOnPage();
    
    // Track page load after a short delay to ensure everything is loaded
    setTimeout(trackPageLoad, 1000);

    return () => {
      cleanupScroll();
      cleanupTime();
    };
  }, []);
};

// Hook for tracking component interactions
export const useInteractionTracking = (componentName: string) => {
  const trackInteraction = (action: string, details?: string) => {
    trackEvent(action, 'interaction', `${componentName}_${details || ''}`);
  };

  return { trackInteraction };
};
