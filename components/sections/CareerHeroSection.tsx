/**
 * @file Careers Hero Section
 * @description Hero with live openings ticker panel
 */

'use client';

import { Button } from '@/components/ui';
import { careersHero, careerHeroBadges, liveOpenings } from '@/data/careers';
import { useAnimateOnScroll } from '@/hooks/useInView';
import styles from './CareerHeroSection.module.css';

export function CareerHeroSection() {
  const { ref, className } = useAnimateOnScroll();

  return (
    <section id="careers-hero" className={styles.hero} data-section-name="CAREERS">
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.heroBlob} aria-hidden="true" />
      <div className={styles.heroBgWord} aria-hidden="true">CAREERS</div>

      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left: content */}
          <div ref={ref} className={className}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Careers</span>
            </nav>

            <h1 className={`t-display ${styles.headline}`}>
              <span className={styles.line1}>{careersHero.headline.line1}</span>
              <span className={styles.line2}>{careersHero.headline.line2}</span>
            </h1>

            <p className={styles.sub}>{careersHero.description}</p>

            <ul className={styles.badges} aria-label="Highlights">
              {careerHeroBadges.map((b) => (
                <li key={b.id} className={styles.badge}>
                  <span className={styles.badgeDot} aria-hidden="true" />
                  {b.label}
                </li>
              ))}
            </ul>

            <div className={styles.ctas}>
              <Button href={careersHero.primaryCta.href} variant="primary">
                {careersHero.primaryCta.label}
              </Button>
              <Button href={careersHero.secondaryCta.href} variant="outline">
                {careersHero.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Right: live openings ticker */}
          <div className={styles.visualPanel} aria-label="Live job openings">
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>Live Openings</span>
              <span className={styles.panelLive}>
                <span className={styles.liveDot} aria-hidden="true" />
                Updating
              </span>
            </div>
            <ul>
              {liveOpenings.map((role, i) => (
                <li key={i} className={styles.roleRow}>
                  <div>
                    <p className={styles.roleTitle}>{role.title}</p>
                    <p className={styles.roleMeta}>{role.department} · {role.location}</p>
                  </div>
                  <span className={`${styles.roleTag} ${role.tag === 'New' ? styles.roleTagNew : ''}`}>
                    {role.tag}
                  </span>
                </li>
              ))}
            </ul>
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
