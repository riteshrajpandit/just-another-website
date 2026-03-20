/**
 * @file Logo component
 * @description Brand mark and wordmark components
 */

interface LogoProps {
  variant?: 'default' | 'footer';
  showName?: boolean;
  className?: string;
}

export function Logo({ variant = 'default', showName = true, className = '' }: LogoProps) {
  const markSize = variant === 'footer' ? 36 : 32;
  const markClass = variant === 'footer' ? 'footer-logo-mark' : 'nav-logo-mark';
  const nameClass = variant === 'footer' ? 'footer-logo-name' : 'nav-logo-name';
  const containerClass = variant === 'footer' ? 'footer-logo' : 'nav-logo';

  return (
    <div className={`${containerClass} ${className}`}>
      <div
        className={markClass}
        style={{ width: markSize, height: markSize }}
        aria-hidden="true"
      />
      {showName && (
        <span className={nameClass}>
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
