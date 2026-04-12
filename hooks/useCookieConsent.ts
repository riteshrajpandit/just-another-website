/**
 * @file Cookie consent hook
 * @description GDPR-compliant cookie consent management
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { STORAGE_KEYS } from '@/lib/constants';
import type { CookieConsentStatus } from '@/types';

function getInitialConsent(): { status: CookieConsentStatus; isVisible: boolean } {
  if (typeof window === 'undefined') {
    return { status: 'pending', isVisible: false };
  }
  const stored = localStorage.getItem(STORAGE_KEYS.COOKIES) as CookieConsentStatus | null;
  if (stored) {
    return { status: stored, isVisible: false };
  }
  return { status: 'pending', isVisible: false };
}

export function useCookieConsent() {
  const initial = getInitialConsent();
  const [status, setStatus] = useState<CookieConsentStatus>(initial.status);
  const [isVisible, setIsVisible] = useState(initial.isVisible);

  useEffect(() => {
    // Delay showing cookie bar for better UX if not yet consented
    if (status === 'pending') {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [status]);

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