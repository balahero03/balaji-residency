import { useEffect } from 'react';

/**
 * Custom hook to scroll to top of the page
 * @param dependencies - Array of dependencies to watch for changes
 * @param behavior - Scroll behavior ('smooth' | 'instant' | 'auto')
 */
export const useScrollToTop = (
  dependencies: any[] = [],
  behavior: ScrollBehavior = 'smooth'
) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: behavior
    });
  }, dependencies);
};

/**
 * Hook to scroll to top when component mounts
 * @param behavior - Scroll behavior ('smooth' | 'instant' | 'auto')
 */
export const useScrollToTopOnMount = (behavior: ScrollBehavior = 'smooth') => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: behavior
    });
  }, []); // Empty dependency array means this runs only on mount
};
