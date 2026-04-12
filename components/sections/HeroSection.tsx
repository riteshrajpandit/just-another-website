/**
 * @file Hero Section component
 * @description Main hero section with animated elements
 */

'use client';

import { Button } from '@/components/ui';
import { heroData, heroMetaItems } from '@/data/site';
import styles from './HeroSection.module.css';

interface HeroProps {
  isLoaded: boolean;
}

export function HeroSection({ isLoaded }: HeroProps) {
  return (
    <section id="hero" className={styles.hero} data-section-name="HOME">
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.heroBlob} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <div
              className={`${styles.heroEyebrow} ${styles.heroAnimate} ${isLoaded ? styles.heroAnimateIn : ''}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className={styles.heroEyebrowLine} />
              <span className="t-label">{heroData.eyebrow}</span>
            </div>
            <h1
              className={`t-display ${styles.heroHeadline} ${styles.heroAnimate} ${isLoaded ? styles.heroAnimateIn : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span className={styles.line1}>{heroData.headline.line1}</span>
              <span className={styles.line2}>{heroData.headline.line2}</span>
            </h1>
            <p
              className={`${styles.heroSub} ${styles.heroAnimate} ${isLoaded ? styles.heroAnimateIn : ''}`}
              style={{ transitionDelay: '0.35s' }}
            >
              {heroData.description}
            </p>
            <div
              className={`${styles.heroCtas} ${styles.heroAnimate} ${isLoaded ? styles.heroAnimateIn : ''}`}
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
              className={`${styles.heroMeta} ${styles.heroAnimate} ${isLoaded ? styles.heroAnimateIn : ''}`}
              style={{ transitionDelay: '0.55s' }}
            >
              {heroMetaItems.map((item, idx) => (
                <div key={idx} className={styles.heroMetaItem}>
                  <span className={styles.num}>
                    {item.value}
                    <span style={{ color: 'var(--brand-primary)' }}>{item.accent}</span>
                  </span>
                  <span className={styles.lbl}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`${styles.heroVisual} ${styles.heroAnimate} ${isLoaded ? styles.heroAnimateIn : ''}`}
            style={{ transitionDelay: '0.3s' }}
            aria-hidden="true"
          >
            <div className={styles.heroGeoOuter} />
            <div className={styles.heroGeoInner} />
            <div className={styles.heroGeoCore} />
            <div className={styles.heroGeoAccent} />
            <div className={styles.heroGeoDot} />
          </div>
        </div>
      </div>
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollCueLabel}>Scroll</span>
        <div className={styles.scrollCueArrow} />
      </div>
    </section>
  );
}
