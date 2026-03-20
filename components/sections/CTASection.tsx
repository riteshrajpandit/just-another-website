/**
 * @file CTA Section component
 * @description Call-to-action section
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { Button } from '@/components/ui';
import { ctaData } from '@/data/site';

export function CTASection() {
  const { ref, className } = useAnimateOnScroll();

  return (
    <section id="cta" data-section-name="START">
      <div className="cta-bg-pattern" aria-hidden="true" />
      <div className="container--full">
        <div ref={ref} className={`cta-inner ${className}`}>
          <div className="cta-label">{ctaData.label}</div>
          <h2 className="cta-headline">
            {ctaData.headline.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                {idx === 0 && <br />}
              </span>
            ))}
          </h2>
          <p className="cta-sub">{ctaData.description}</p>
          <div className="cta-btns">
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
