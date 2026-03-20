/**
 * @file Cookie consent hook
 * @description GDPR-compliant cookie consent management
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { STORAGE_KEYS } from '@/lib/constants';
import type { CookieConsentStatus } from '@/types';

export function useCookieConsent() {
  const [status, setStatus] = useState<CookieConsentStatus>('pending');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.COOKIES);
    if (stored) {
      setStatus(stored as CookieConsentStatus);
      setIsVisible(false);
    } else {
      // Delay showing cookie bar for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = useCallback(() => {
    localStorage.setItem(STORAGE_KEYS.COOKIES, 'accepted');
    setStatus('accepted');
    setIsVisible(false);
  }, []);

  const manage = useCallback(() => {
    localStorage.setItem(STORAGE_KEYS.COOKIES, 'managed');
    setStatus('managed');
    setIsVisible(false);
  }, []);

  const decline = useCallback(() => {
    localStorage.setItem(STORAGE_KEYS.COOKIES, 'declined');
    setStatus('declined');
    setIsVisible(false);
  }, []);

  const hasConsent = status === 'accepted' || status === 'managed';

  return {
    status,
    isVisible,
    hasConsent,
    acceptAll,
    manage,
    decline,
  };
}
