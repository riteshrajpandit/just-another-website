/**
 * @file About Hero Section component
 * @description Hero section for the About page with breadcrumb and badges
 */

'use client';

import Link from 'next/link';
import { useAnimateOnScroll } from '@/hooks';
import { aboutHero, aboutBadges } from '@/data/about';

export function AboutHeroSection() {
  return (
    <section id="about-hero" data-section-name="ABOUT">
      <div className="about-hero-bg" aria-hidden="true" />
      <div className="about-hero-accent" aria-hidden="true" />
      <div className="about-hero-vert" aria-hidden="true">
        ABOUT
      </div>

      <div className="container about-hero-inner">
        <div className="about-hero-grid">
          <div>
            <nav className="about-crumb anim-up in" aria-label="Breadcrumb">
              {aboutHero.breadcrumb.map((item, index) => (
                <span key={index}>
                  {'current' in item && item.current ? (
                    <span className="about-crumb-current">{item.label}</span>
                  ) : (
                    <>
                      <Link href={item.href}>{item.label}</Link>
                      <span className="about-crumb-sep">/</span>
                    </>
                  )}
                </span>
              ))}
            </nav>

            <h1 className="t-display about-hero-headline anim-up in" style={{ transitionDelay: '0.15s' }}>
              <span className="line1">{aboutHero.headline.line1}</span>
              <span className="line2">{aboutHero.headline.line2}</span>
            </h1>

            <p className="about-hero-sub anim-up in" style={{ transitionDelay: '0.25s' }}>
              {aboutHero.description}
            </p>

            <div className="about-hero-badges anim-up in" style={{ transitionDelay: '0.35s' }}>
              {aboutBadges.map((badge) => (
                <span key={badge.id} className="about-badge">
                  <span className="about-badge-dot" />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          <div className="about-hero-visual anim-up in" aria-hidden="true" style={{ transitionDelay: '0.2s' }}>
            <div className="ahv-block ahv-block--lg" />
            <div className="ahv-block ahv-block--md" />
            <div className="ahv-block ahv-block--sm" />
            <div className="ahv-block ahv-block--xs" />
            <div className="ahv-line-h" />
            <div className="ahv-line-v" />
            <div className="ahv-label">EST. 2012</div>
          </div>
        </div>
      </div>
    </section>
  );
}
