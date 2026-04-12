/**
 * @file Benefits Section
 * @description 6-benefit grid with hover effects
 */

'use client';

import { benefits } from '@/data/careers';
import { useAnimateOnScroll } from '@/hooks/useInView';
import styles from './BenefitsSection.module.css';

const benefitIcons: Record<string, string> = {
  calendar: 'M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  'trending-up': 'M23 6l-9.5 9.5-5-5L1 18 M17 6h6v6',
  'book-open': 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  monitor: 'M8 21h8 M12 17v4 M20 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z',
  heart: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  sun: 'M12 1v2 M12 21v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42 M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z',
};

export function BenefitsSection() {
  const { ref, className } = useAnimateOnScroll();

  return (
    <section id="benefits" className={`section-pad ${styles.section}`} data-section-name="BENEFITS">
      <div className="container">
        <div ref={ref} className={`section-header ${className}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Why Join Us</span>
          </div>
          <h2 className="t-h2">What You Get<br />Beyond the Salary</h2>
        </div>

        <ul className={styles.grid} role="list">
          {benefits.map((b) => (
            <li key={b.id} className={styles.card}>
              <span className={styles.bgNum} aria-hidden="true">{b.number}</span>
              <div className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d={benefitIcons[b.icon]} />
                </svg>
              </div>
              <div>
                <span className={styles.num}>{b.number}</span>
                <span className={styles.category}>{b.category}</span>
              </div>
              <h3 className={styles.title}>{b.title}</h3>
              <p className={styles.desc}>{b.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
