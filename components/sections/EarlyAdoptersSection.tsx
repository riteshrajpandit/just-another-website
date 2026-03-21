/**
 * @file Early Adopters Section component
 * @description Early adopter showcase with timeline
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { earlyAdopters, timeline } from '@/data/site';
import styles from './EarlyAdoptersSection.module.css';

export function EarlyAdoptersSection() {
  const { ref: headerRef, className: headerClass } = useAnimateOnScroll();
  const { ref: gridRef, className: gridClass } = useAnimateOnScroll();
  const { ref: timelineRef, className: timelineClass } = useAnimateOnScroll();

  return (
    <section id="early-adopters" className={`${styles.earlyAdopters} section-pad`} data-section-name="ADOPTERS">
      <div className="container">
        <div ref={headerRef} className={`section-header ${headerClass}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Early Adopters</span>
          </div>
          <h2 className="t-h2">
            Organizations That<br />
            <span style={{ color: 'var(--brand-primary)' }}>Chose Us First</span>
          </h2>
          <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            Our earliest clients helped shape the NEXACORE platform. Their trust and feedback are
            the foundation every product is built on.
          </p>
        </div>
        <div ref={gridRef} className={`${styles.adoptersGrid} ${gridClass}`}>
          {earlyAdopters.map((adopter) => (
            <div key={adopter.id} className={styles.adopterCard}>
              <div className={styles.adopterBadge}>{adopter.badge}</div>
              <div className={styles.adopterName}>{adopter.name}</div>
              <div className={styles.adopterIndustry}>{adopter.industry}</div>
            </div>
          ))}
        </div>

        <div ref={timelineRef} className={timelineClass} style={{ transitionDelay: '0.2s' }}>
          <div className="t-label" style={{ marginBottom: '1.5rem' }}>
            Company Milestones
          </div>
          <div className={styles.timelineWrap}>
            <div className={styles.timeline}>
              {timeline.map((item) => (
                <div key={item.year} className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineEvent}>{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
