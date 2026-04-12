/**
 * @file Culture Section
 * @description Mosaic grid tiles + employee quote strip
 */

'use client';

import { cultureTiles, cultureQuotes } from '@/data/careers';
import { useAnimateOnScroll } from '@/hooks/useInView';
import styles from './CultureSection.module.css';

export function CultureSection() {
  const { ref, className } = useAnimateOnScroll();

  return (
    <section id="culture" className={`section-pad ${styles.section}`} data-section-name="CULTURE">
      <div className="container">
        <div ref={ref} className={`section-header ${className}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Life at NEXACORE</span>
          </div>
          <h2 className="t-h2">Built on Ownership,<br />Transparency & Trust</h2>
        </div>

        <ul className={styles.mosaic} aria-label="Culture highlights">
          {cultureTiles.map((tile) => (
            <li
              key={tile.id}
              className={`${styles.tile} ${styles[`tile--${tile.variant}`]} ${tile.wide ? styles.tileWide : ''} ${tile.tall ? styles.tileTall : ''}`}
            >
              <div className={styles.tileBg} aria-hidden="true" />
              <div className={styles.tileOverlay} aria-hidden="true" />
              <div className={styles.tileLabel}>
                <span className="t-label">{tile.label}</span>
                <p className={styles.tileTitle}>{tile.title}</p>
                <p className={styles.tileSub}>{tile.sub}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Quote Strip */}
        <ul className={styles.quoteStrip} aria-label="Employee testimonials">
          {cultureQuotes.map((q) => (
            <li key={q.id} className={styles.quoteCard}>
              <p className={styles.quoteText}>&ldquo;{q.text}&rdquo;</p>
              <div className={styles.quoteAuthor}>
                <div className={styles.quoteAvatar}>{q.initials}</div>
                <div>
                  <p className={styles.quoteName}>{q.authorName}</p>
                  <p className={styles.quoteRole}>{q.authorRole}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
