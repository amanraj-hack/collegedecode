import { useEffect } from 'react';
import { ADS_CONFIG } from '../config/ads';

export const useAdSense = () => {
  useEffect(() => {
    if (!ADS_CONFIG.enabled) return;

    try {
      if (window) {
        // Only push if the array exists and we haven't already pushed for this ad slot
        // In React 18 strict mode, useEffect runs twice. The adsbygoogle script handles
        // deduplication mostly, but wrapping it prevents console errors.
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);
};
