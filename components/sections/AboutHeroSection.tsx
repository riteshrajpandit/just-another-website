/**
 * @file About Hero Section component
 * @description Hero section for the About page with breadcrumb and badges
 */

'use client';

import Link from 'next/link';
import { aboutHero, aboutBadges } from '@/data/about';
import styles from './AboutHeroSection.module.css';

export function AboutHeroSection() {
  return (
    <section id="about-hero" className={styles.aboutHero} data-section-name="ABOUT">
      <div className={styles.aboutHeroBg} aria-hidden="true" />
      <div className={styles.aboutHeroAccent} aria-hidden="true" />
      <div className={styles.aboutHeroVert} aria-hidden="true">
        ABOUT
      </div>

      <div className={`container ${styles.aboutHeroInner}`}>
        <div className={styles.aboutHeroGrid}>
          <div>
            <nav className={`${styles.aboutCrumb} anim-up in`} aria-label="Breadcrumb">
              {aboutHero.breadcrumb.map((item, index) => (
                <span key={index}>
                  {'current' in item && item.current ? (
                    <span className={styles.aboutCrumbCurrent}>{item.label}</span>
                  ) : (
                    <>
                      <Link href={item.href}>{item.label}</Link>
                      <span className={styles.aboutCrumbSep}>/</span>
                    </>
                  )}
                </span>
              ))}
            </nav>

            <h1 className={`t-display ${styles.aboutHeroHeadline} anim-up in`} style={{ transitionDelay: '0.15s' }}>
              <span className={styles.line1}>{aboutHero.headline.line1}</span>
              <span className={styles.line2}>{aboutHero.headline.line2}</span>
            </h1>

            <p className={`${styles.aboutHeroSub} anim-up in`} style={{ transitionDelay: '0.25s' }}>
              {aboutHero.description}
            </p>

            <div className={`${styles.aboutHeroBadges} anim-up in`} style={{ transitionDelay: '0.35s' }}>
              {aboutBadges.map((badge) => (
                <span key={badge.id} className={styles.aboutBadge}>
                  <span className={styles.aboutBadgeDot} />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          <div className={`${styles.aboutHeroVisual} anim-up in`} aria-hidden="true" style={{ transitionDelay: '0.2s' }}>
            <div className={`${styles.ahvBlock} ${styles.ahvBlockLg}`} />
            <div className={`${styles.ahvBlock} ${styles.ahvBlockMd}`} />
            <div className={`${styles.ahvBlock} ${styles.ahvBlockSm}`} />
            <div className={`${styles.ahvBlock} ${styles.ahvBlockXs}`} />
            <div className={styles.ahvLineH} />
            <div className={styles.ahvLineV} />
            <div className={styles.ahvLabel}>EST. 2012</div>
          </div>
        </div>
      </div>
    </section>
  );
}
