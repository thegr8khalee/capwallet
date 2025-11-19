import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to manage page-level loading state with asset preloading
 */
export const usePageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Reset loading state on route change
    setIsLoading(true);
    
    // Small delay to allow component to mount and start loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const setLoadingComplete = () => setIsLoading(false);

  return { isLoading, setLoadingComplete };
};
