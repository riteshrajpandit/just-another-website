/**
 * @file Resources Training Section
 * @description Course grid with level badges and certification flags
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { Button } from '@/components/ui';
import { trainingCourses } from '@/data/resources';
import styles from './ResourcesTrainingSection.module.css';

const levelColor = {
  Beginner: styles.levelBeginner,
  Intermediate: styles.levelIntermediate,
  Advanced: styles.levelAdvanced,
} as const;

export function ResourcesTrainingSection() {
  const { ref, className } = useAnimateOnScroll();

  return (
    <section id="training" className={`section-pad ${styles.section}`} data-section-name="TRAINING">
      <div className="container">
        <div ref={ref} className={`section-header ${className}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">End User Training</span>
          </div>
          <div className={styles.headerRow}>
            <div>
              <h2 className="t-h2">
                Courses &amp;<br />
                <span style={{ color: 'var(--brand-primary)' }}>Certifications</span>
              </h2>
              <p className="t-body" style={{ maxWidth: '460px', marginTop: '1rem' }}>
                Self-paced video courses with hands-on labs. Complete a course to earn a
                NEXACORE certification recognised across the industry.
              </p>
            </div>
            <Button href="#" variant="outline" size="sm">All Courses →</Button>
          </div>
        </div>

        <div className={styles.grid}>
          {trainingCourses.map((course, idx) => (
            <a
              key={course.id}
              href="#"
              className={styles.card}
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <div className={styles.cardTop}>
                <span className={`${styles.level} ${levelColor[course.level]}`}>
                  {course.level}
                </span>
                {course.certified && (
                  <span className={styles.cert}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3" />
                    </svg>
                    Certified
                  </span>
                )}
              </div>

              <p className={styles.title}>{course.title}</p>
              <span className={styles.product}>{course.product}</span>

              <div className={styles.meta}>
                <span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                  {course.duration}
                </span>
                <span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  {course.modules} modules
                </span>
              </div>

              <span className={styles.startBtn}>Start Course →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
