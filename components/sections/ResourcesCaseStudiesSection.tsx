/**
 * @file Resources Case Studies Section
 * @description Client success story cards with metrics
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { Button } from '@/components/ui';
import { caseStudies } from '@/data/resources';
import styles from './ResourcesCaseStudiesSection.module.css';

export function ResourcesCaseStudiesSection() {
  const { ref, className } = useAnimateOnScroll();

  return (
    <section id="case-studies" className={`section-pad ${styles.section}`} data-section-name="CASE STUDIES">
      <div className="container">
        <div ref={ref} className={`section-header ${className}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Case Studies</span>
          </div>
          <h2 className="t-h2">
            Real Problems.<br />
            <span style={{ color: 'var(--brand-primary)' }}>Measurable Results.</span>
          </h2>
          <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            Every number below is from a live production deployment — no synthetic benchmarks.
          </p>
        </div>

        <div className={styles.grid}>
          {caseStudies.map((cs, idx) => (
            <article
              key={cs.id}
              className={styles.card}
              style={{ transitionDelay: `${idx * 0.06}s` }}
            >
              <div className={styles.cardHeader}>
                <div>
                  <p className={styles.client}>{cs.client}</p>
                  <span className={styles.industry}>{cs.industry}</span>
                </div>
                <div className={styles.products}>
                  {cs.products.map((p) => (
                    <span key={p} className={styles.productPill}>{p}</span>
                  ))}
                </div>
              </div>

              <div className={styles.body}>
                <div className={styles.blockLabel}>Challenge</div>
                <p className={styles.blockText}>{cs.challenge}</p>
                <div className={styles.blockLabel} style={{ marginTop: '1rem' }}>Outcome</div>
                <p className={styles.blockText}>{cs.outcome}</p>
              </div>

              <div className={styles.metrics}>
                {cs.metrics.map((m) => (
                  <div key={m.label} className={styles.metric}>
                    <span className={styles.metricVal}>{m.value}</span>
                    <span className={styles.metricLbl}>{m.label}</span>
                  </div>
                ))}
              </div>

              <a href="#" className={styles.readMore}>Read Full Case Study →</a>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <Button href="/contact#book-demo" variant="brand">
            Get Results Like These
          </Button>
        </div>
      </div>
    </section>
  );
}
