/**
 * @file Brands Section component
 * @description Infinite scrolling brand carousel
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { brandsRow1, brandsRow2 } from '@/data/site';

export function BrandsSection() {
  const { ref: labelRef, className: labelClass } = useAnimateOnScroll();

  // Duplicate brands for seamless infinite scroll
  const row1Doubled = [...brandsRow1, ...brandsRow1];
  const row2Doubled = [...brandsRow2, ...brandsRow2];

  return (
    <section id="brands" data-section-name="PARTNERS">
      <div className="container--full">
        <div ref={labelRef} className={`brands-label ${labelClass}`}>
          <span className="t-label">Trusted by organizations across industries</span>
        </div>
        <div className="brands-track-wrap">
          <div className="brands-track">
            {row1Doubled.map((brand, idx) => (
              <div key={`${brand.id}-${idx}`} className="brand-logo">
                <span className="brand-logo-name">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="brands-track-wrap" style={{ marginTop: '1rem' }}>
          <div className="brands-track brands-track--reverse">
            {row2Doubled.map((brand, idx) => (
              <div key={`${brand.id}-${idx}`} className="brand-logo">
                <span className="brand-logo-name">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
