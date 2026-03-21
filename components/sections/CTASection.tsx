/**
 * @file CTA Section component
 * @description Call-to-action section
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { Button } from '@/components/ui';
import { ctaData } from '@/data/site';
import styles from './CTASection.module.css';

export function CTASection() {
  const { ref, className } = useAnimateOnScroll();

  return (
    <section id="cta" className={styles.cta} data-section-name="START">
      <div className={styles.ctaBgPattern} aria-hidden="true" />
      <div className="container--full">
        <div ref={ref} className={`${styles.ctaInner} ${className}`}>
          <div className={styles.ctaLabel}>{ctaData.label}</div>
          <h2 className={styles.ctaHeadline}>
            {ctaData.headline.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                {idx === 0 && <br />}
              </span>
            ))}
          </h2>
          <p className={styles.ctaSub}>{ctaData.description}</p>
          <div className={styles.ctaBtns}>
            <Button href={ctaData.primaryCta.href} variant="white">
              {ctaData.primaryCta.label}
            </Button>
            <Button href={ctaData.secondaryCta.href} variant="white-outline">
              {ctaData.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
