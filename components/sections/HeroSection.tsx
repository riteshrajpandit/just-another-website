/**
 * @file Hero Section component
 * @description Main hero section with animated elements
 */

'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui';
import { heroData, heroMetaItems } from '@/data/site';

interface HeroProps {
  isLoaded: boolean;
}

export function HeroSection({ isLoaded }: HeroProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setAnimated(true);
    }
  }, [isLoaded]);

  return (
    <section id="hero" data-section-name="HOME">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-blob" aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div
              className={`hero-eyebrow hero-animate ${animated ? 'in' : ''}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="hero-eyebrow-line" />
              <span className="t-label">{heroData.eyebrow}</span>
            </div>
            <h1
              className={`t-display hero-headline hero-animate ${animated ? 'in' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span className="line1">{heroData.headline.line1}</span>
              <span className="line2">{heroData.headline.line2}</span>
            </h1>
            <p
              className={`hero-sub hero-animate ${animated ? 'in' : ''}`}
              style={{ transitionDelay: '0.35s' }}
            >
              {heroData.description}
            </p>
            <div
              className={`hero-ctas hero-animate ${animated ? 'in' : ''}`}
              style={{ transitionDelay: '0.45s' }}
            >
              <Button href={heroData.primaryCta.href} variant="primary">
                {heroData.primaryCta.label}
              </Button>
              <Button href={heroData.secondaryCta.href} variant="outline">
                {heroData.secondaryCta.label}
              </Button>
            </div>
            <div
              className={`hero-meta hero-animate ${animated ? 'in' : ''}`}
              style={{ transitionDelay: '0.55s' }}
            >
              {heroMetaItems.map((item, idx) => (
                <div key={idx} className="hero-meta-item">
                  <span className="num">
                    {item.value}
                    <span style={{ color: 'var(--brand-primary)' }}>{item.accent}</span>
                  </span>
                  <span className="lbl">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`hero-visual hero-animate ${animated ? 'in' : ''}`}
            style={{ transitionDelay: '0.3s' }}
            aria-hidden="true"
          >
            <div className="hero-geo-outer" />
            <div className="hero-geo-inner" />
            <div className="hero-geo-core" />
            <div className="hero-geo-accent" />
            <div className="hero-geo-dot" />
          </div>
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span className="scroll-cue-label">Scroll</span>
        <div className="scroll-cue-arrow" />
      </div>
    </section>
  );
}
