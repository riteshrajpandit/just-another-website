/**
 * @file Services Section component
 * @description Services showcase with numbered cards
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { services } from '@/data/site';

export function ServicesSection() {
  const { ref: headerRef, className: headerClass } = useAnimateOnScroll();
  const { ref: gridRef, className: gridClass } = useAnimateOnScroll();

  return (
    <section id="services" className="section-pad" data-section-name="SERVICES">
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
        <div ref={gridRef} className={`services-grid ${gridClass}`}>
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="service-card"
              style={{ transitionDelay: `${idx * 0.07}s` }}
            >
              <div className="service-num">{service.number}</div>
              <div className="service-name">{service.name}</div>
              <div className="service-desc">{service.description}</div>
              <div className="service-arrow">
                Read More <span>&#8594;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
