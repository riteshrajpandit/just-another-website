/**
 * @file Services Section component
 * @description Services showcase with numbered cards
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { services } from '@/data/site';
import styles from './ServicesSection.module.css';

export function ServicesSection() {
  const { ref: headerRef, className: headerClass } = useAnimateOnScroll();
  const { ref: gridRef, className: gridClass } = useAnimateOnScroll();

  return (
    <section id="services" className={`${styles.services} section-pad`} data-section-name="SERVICES">
      <div className="container">
        <div ref={headerRef} className={`section-header ${headerClass}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">What We Do</span>
          </div>
          <h2 className="t-h2">
            Services That<br />
            <span style={{ color: 'var(--brand-primary)' }}>Drive Outcomes</span>
          </h2>
          <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            From cloud migration to managed security operations, our team of certified experts
            brings deep domain knowledge to every engagement.
          </p>
        </div>
        <div ref={gridRef} className={`${styles.servicesGrid} ${gridClass}`}>
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={styles.serviceCard}
              style={{ transitionDelay: `${idx * 0.07}s` }}
            >
              <div className={styles.serviceNum}>{service.number}</div>
              <div className={styles.serviceName}>{service.name}</div>
              <div className={styles.serviceDesc}>{service.description}</div>
              <div className={styles.serviceArrow}>
                Read More <span>&#8594;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
