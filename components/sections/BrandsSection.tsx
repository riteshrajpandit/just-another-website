/**
 * @file Brands Section component
 * @description Infinite scrolling brand carousel
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { brandsRow1, brandsRow2 } from '@/data/site';
import styles from './BrandsSection.module.css';

export function BrandsSection() {
  const { ref: labelRef, className: labelClass } = useAnimateOnScroll();

  // Duplicate brands for seamless infinite scroll
  const row1Doubled = [...brandsRow1, ...brandsRow1];
  const row2Doubled = [...brandsRow2, ...brandsRow2];

  return (
    <section id="brands" className={styles.brands} data-section-name="PARTNERS">
      <div className="container--full">
        <div ref={labelRef} className={`${styles.brandsLabel} ${labelClass}`}>
          <span className="t-label">Trusted by organizations across industries</span>
        </div>
        <div className={styles.brandsTrackWrap}>
          <div className={styles.brandsTrack}>
            {row1Doubled.map((brand, idx) => (
              <div key={`${brand.id}-${idx}`} className={styles.brandLogo}>
                <span className={styles.brandLogoName}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.brandsTrackWrap} style={{ marginTop: '1rem' }}>
          <div className={`${styles.brandsTrack} ${styles.brandsTrackReverse}`}>
            {row2Doubled.map((brand, idx) => (
              <div key={`${brand.id}-${idx}`} className={styles.brandLogo}>
                <span className={styles.brandLogoName}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
