/**
 * @file Logo component
 * @description Brand mark and wordmark components
 */

import styles from './Logo.module.css';

interface LogoProps {
  variant?: 'default' | 'footer';
  showName?: boolean;
  className?: string;
}

export function Logo({ variant = 'default', showName = true, className = '' }: LogoProps) {
  const variantClass = variant === 'footer' ? styles.logoFooter : styles.logoDefault;

  return (
    <div className={`${styles.logo} ${variantClass} ${className}`}>
      <div className={styles.logoMark} aria-hidden="true" />
      {showName && (
        <span className={styles.logoName}>
          {variant === 'default' ? (
            <>
              NEXA<span>CORE</span>
            </>
          ) : (
            'NEXACORE'
          )}
        </span>
      )}
    </div>
  );
}

export function LoaderMark() {
  return (
    <div className="loader-mark" aria-hidden="true" />
  );
}
