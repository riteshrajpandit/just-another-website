/**
 * @file Services Detail Section
 * @description Full service listing with deliverables on /services page
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { Button } from '@/components/ui';
import { services } from '@/data/site';
import styles from './ServicesDetailSection.module.css';

export function ServicesDetailSection() {
  const { ref, className } = useAnimateOnScroll();

  return (
    <section className={`${styles.section} section-pad`} data-section-name="HOW WE WORK">
      <div className="container">
        <div ref={ref} className={`section-header ${className}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">What&apos;s Included</span>
          </div>
          <h2 className="t-h2">
            Every Engagement.<br />
            <span style={{ color: 'var(--brand-primary)' }}>Fully Defined.</span>
          </h2>
          <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            No vague scoping. No surprises. Here is exactly what you get with each service.
          </p>
        </div>

        <div className={styles.servicesList}>
          {services.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className={`${styles.serviceRow} anim-up ${idx < 3 ? 'in' : ''}`}
              style={{ transitionDelay: `${(idx % 3) * 0.08}s` }}
            >
              {/* Left: meta */}
              <div className={styles.serviceMeta}>
                <span className={styles.serviceNum}>{service.number}</span>
                <span className={`${styles.featuredPill} ${service.featured ? styles.featuredPillVisible : ''}`}>
                  Core
                </span>
              </div>

              {/* Centre: content */}
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceName}>{service.name}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>

                {service.deliverables && (
                  <ul className={styles.deliverables}>
                    {service.deliverables.map((d) => (
                      <li key={d} className={styles.deliverable}>
                        <span className={styles.deliverableCheck} aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                {service.outcome && (
                  <div className={styles.outcomeBox}>
                    <span className={styles.outcomeLabel}>Outcome</span>
                    <p className={styles.outcomeText}>{service.outcome}</p>
                  </div>
                )}
              </div>

              {/* Right: CTA */}
              <div className={styles.serviceCta}>
                <Button href="/contact#book-demo" variant="primary" size="sm">
                  Book Consultation
                </Button>
                <Button href="/contact" variant="outline" size="sm">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
