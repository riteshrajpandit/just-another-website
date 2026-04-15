/**
 * @file CookieConsentBanner
 * @description GDPR cookie consent banner that slides up from the bottom of the screen
 */

'use client';

import { useCookieConsent } from '@/hooks/useCookieConsent';
import styles from './CookieConsentBanner.module.css';

function CookieIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="9" r="1" fill="currentColor" />
      <circle cx="15" cy="8" r="1" fill="currentColor" />
      <circle cx="9" cy="15" r="1" fill="currentColor" />
      <circle cx="14" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function CookieConsentBanner() {
  const { isVisible, acceptAll, manage, decline } = useCookieConsent();

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className={`${styles.banner}${isVisible ? ' ' + styles.visible : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <CookieIcon />
          </div>
          <div>
            <p className={styles.title}>We use cookies</p>
            <p className={styles.text}>
              We use essential cookies to make our site work, and optional analytics cookies to
              understand how you use it. See our{' '}
              <a href="/cookies">Cookie Policy</a> and{' '}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <button onClick={decline} className={styles.btnDecline} type="button">
            Decline
          </button>
          <button onClick={manage} className={styles.btnManage} type="button">
            Manage Preferences
          </button>
          <button onClick={acceptAll} className={styles.btnAccept} type="button">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
