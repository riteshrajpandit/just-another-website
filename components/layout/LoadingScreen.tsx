/**
 * @file Loading Screen component
 * @description Initial loading screen with brand animation
 */

'use client';

import { useEffect, useState, useCallback } from 'react';
import { useCookieConsent } from '@/hooks';
import { LoaderMark, Button } from '@/components/ui';
import { ANIMATION } from '@/lib/constants';
import styles from './LoadingScreen.module.css';

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
        className={`${styles.loadingScreen} ${isExiting ? styles.loadingScreenExit : ''}`}
        role="status"
        aria-label="Loading NEXACORE"
      >
        <div className={styles.loaderLogo}>
          <LoaderMark />
          <div className={styles.loaderName}>NEXACORE</div>
          <div className={styles.loaderTagline}>Enterprise Technology Solutions</div>
        </div>
        <div className={styles.loaderProgress} aria-hidden="true">
          <div className={styles.loaderProgressBar} />
        </div>
      </div>

      <div
        className={`${styles.cookieBar} ${showCookieBar && !hasConsent ? styles.cookieBarVisible : ''}`}
        role="dialog"
        aria-label="Cookie consent"
      >
        <p className={styles.cookieText}>
          <strong>We use cookies</strong> to enhance your experience and analyze site traffic.
          By continuing, you agree to our use of cookies as described in our Cookie Policy.
        </p>
        <div className={styles.cookieActions}>
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
