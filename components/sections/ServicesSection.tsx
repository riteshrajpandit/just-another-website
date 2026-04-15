/**
 * @file Services Section component
 * @description Featured services preview on home page (3 items + View All)
 */

'use client';

import Link from 'next/link';
import { useAnimateOnScroll } from '@/hooks';
import { Button } from '@/components/ui';
import { services } from '@/data/site';
import styles from './ServicesSection.module.css';

const featuredServices = services.filter((s) => s.featured);

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
          <div className={styles.headerRow}>
            <div>
              <h2 className="t-h2">
                Services That<br />
                <span style={{ color: 'var(--brand-primary)' }}>Drive Outcomes</span>
              </h2>
              <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
                From cloud migration to managed security operations, our certified experts
                bring deep domain knowledge to every engagement.
              </p>
            </div>
            <div className={styles.headerCta}>
              <Button href="/services" variant="outline" size="sm">
                View All {services.length} Services →
              </Button>
            </div>
          </div>
        </div>

        <div ref={gridRef} className={`${styles.servicesGrid} ${gridClass}`}>
          {featuredServices.map((service, idx) => (
            <Link
              key={service.id}
              href={service.href ?? '/services'}
              className={styles.serviceCard}
              style={{ transitionDelay: `${idx * 0.07}s` }}
            >
              <span className={styles.serviceNum}>{service.number}</span>
              <p className={styles.serviceName}>{service.name}</p>
              <p className={styles.serviceDesc}>{service.description}</p>
              {service.outcome && (
                <p className={styles.serviceOutcome}>{service.outcome}</p>
              )}
              <span className={styles.serviceArrow}>
                Learn More <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className={styles.viewAllBand}>
          <div className={styles.viewAllLeft}>
            <span className="t-label">+{services.length - featuredServices.length} more services</span>
            <p className={styles.viewAllText}>
              Data Engineering, Managed Infrastructure, Digital Advisory and more.
            </p>
          </div>
          <Button href="/services" variant="brand">Explore All Services</Button>
        </div>
      </div>
    </section>
  );
}
