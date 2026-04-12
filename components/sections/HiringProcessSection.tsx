/**
 * @file Hiring Process Section
 * @description 5-step hiring process with stats footer
 */

'use client';

import { hiringSteps, hiringFooterStats, careerStats } from '@/data/careers';
import { useAnimateOnScroll, useCountUp, useInView } from '@/hooks/useInView';
import styles from './HiringProcessSection.module.css';

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, isInView } = useInView();
  const count = useCountUp(value, isInView);
  return (
    <div ref={ref} className={styles.numberItem}>
      <span className={styles.numberVal}>
        {count}<span className={styles.accent}>{suffix}</span>
      </span>
      <span className={styles.numberLbl}>{label}</span>
    </div>
  );
}

const stepIcons: Record<string, string> = {
  file: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z',
  code: 'M16 18l6-6-6-6 M8 6l-6 6 6 6',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  check: 'M20 6L9 17l-5-5',
};

export function HiringProcessSection() {
  const { ref, className } = useAnimateOnScroll();

  return (
    <>
      {/* Numbers Band */}
      <section id="numbers-band" className={styles.numbersBand} data-section-name="STATS">
        <div className="container--full">
          <div className={styles.numbersGrid}>
            {careerStats.map((s) => (
              <StatCounter key={s.id} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section id="hiring-process" className={`section-pad ${styles.section}`} data-section-name="PROCESS">
        <div className="container">
          <div ref={ref} className={`section-header ${className}`}>
            <div className="section-eyebrow">
              <div className="section-eyebrow-line" />
              <span className="t-label">Our Process</span>
            </div>
            <h2 className="t-h2">From Application<br />to Offer in 2–3 Weeks</h2>
          </div>

          <div className={styles.processTrack}>
            {hiringSteps.map((step) => (
              <div key={step.id} className={styles.processStep}>
                <div className={styles.processNode}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={stepIcons[step.icon]} />
                  </svg>
                  <span className={styles.processNum}>{step.number}</span>
                </div>
                <p className={styles.processTitle}>{step.title}</p>
                <p className={styles.processDesc}>{step.description}</p>
                <span className={styles.processTime}>{step.time}</span>
              </div>
            ))}
          </div>

          <div className={styles.processFooter}>
            <p className={styles.processFooterLabel}>2 to 3 weeks — start to offer</p>
            <div className={styles.processFooterStats}>
              {hiringFooterStats.map((s, i) => (
                <div key={i} className={styles.footerStat}>
                  <span className={styles.footerStatVal}>{s.value}</span>
                  <span className={styles.footerStatLbl}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
