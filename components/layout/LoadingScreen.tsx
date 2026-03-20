/**
 * @file Loading Screen component
 * @description Initial loading screen with brand animation
 */

'use client';

import { useEffect, useState, useCallback } from 'react';
import { useCookieConsent } from '@/hooks';
import { LoaderMark, Button } from '@/components/ui';
import { ANIMATION } from '@/lib/constants';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { isVisible: showCookieBar, acceptAll, manage, hasConsent } = useCookieConsent();

  const dismissLoading = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsHidden(true);
      document.body.classList.remove('loading');
      onLoadingComplete();
    }, 700);
  }, [onLoadingComplete]);

  useEffect(() => {
    document.body.classList.add('loading');

    if (hasConsent) {
      const timer = setTimeout(dismissLoading, ANIMATION.LOADING_DURATION);
      return () => clearTimeout(timer);
    }
  }, [hasConsent, dismissLoading]);

  const handleAccept = useCallback(() => {
    acceptAll();
    dismissLoading();
  }, [acceptAll, dismissLoading]);

  const handleManage = useCallback(() => {
    manage();
    dismissLoading();
  }, [manage, dismissLoading]);

  if (isHidden) return null;

  return (
    <>
      <div
        id="loading-screen"
        className={isExiting ? 'exit' : ''}
        role="status"
        aria-label="Loading NEXACORE"
      >
        <div className="loader-logo">
          <LoaderMark />
          <div className="loader-name">NEXACORE</div>
          <div className="loader-tagline">Enterprise Technology Solutions</div>
        </div>
        <div className="loader-progress" aria-hidden="true">
          <div className="loader-progress-bar" />
        </div>
      </div>

      <div
        id="cookie-bar"
        className={showCookieBar && !hasConsent ? 'visible' : ''}
        role="dialog"
        aria-label="Cookie consent"
      >
        <p className="cookie-text">
          <strong>We use cookies</strong> to enhance your experience and analyze site traffic.
          By continuing, you agree to our use of cookies as described in our Cookie Policy.
        </p>
        <div className="cookie-actions">
          <Button variant="ghost" onClick={handleManage}>
            Manage Preferences
          </Button>
          <Button variant="primary" onClick={handleAccept}>
            Accept All
          </Button>
        </div>
      </div>
    </>
  );
}
