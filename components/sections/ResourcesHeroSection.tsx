/**
 * @file Resources Hero Section
 * @description Hero + sticky section nav for /resources page
 */

import Link from 'next/link';
import { resourcesHero, resourcesNavItems } from '@/data/resources';
import styles from './ResourcesHeroSection.module.css';

export function ResourcesHeroSection() {
  return (
    <>
      <section className={styles.hero} data-section-name="RESOURCES">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroBlob} aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Resources</span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <h1 className={`t-display ${styles.headline}`}>
                <span className={styles.line1}>{resourcesHero.headline.line1}</span>
                <span className={styles.line2}>{resourcesHero.headline.line2}</span>
              </h1>
              <p className={styles.sub}>{resourcesHero.description}</p>
            </div>

            {/* Quick-jump index */}
            <nav className={styles.quickJump} aria-label="Resources sections">
              <p className={styles.quickJumpLabel}>Jump to Section</p>
              <ul className={styles.quickJumpList}>
                {resourcesNavItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.anchor} className={styles.quickJumpLink}>
                      <span className={styles.quickJumpArrow}>→</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <div className={styles.subNav} aria-label="Resources sub-navigation">
        <div className={styles.subNavInner}>
          {resourcesNavItems.map((item) => (
            <a key={item.id} href={item.anchor} className={styles.subNavLink}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
