/**
 * @file Services Hero Section
 * @description Hero for the /services page
 */

import Link from 'next/link';
import { Button } from '@/components/ui';
import { services } from '@/data/site';
import styles from './ServicesHeroSection.module.css';

const stats = [
  { value: '12yr', label: 'In the field' },
  { value: '340+', label: 'Enterprise clients' },
  { value: '4×', label: 'Average ROI' },
];

export function ServicesHeroSection() {
  return (
    <section className={styles.hero} data-section-name="SERVICES">
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.heroBlob} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Services</span>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <h1 className={`t-display ${styles.headline}`}>
              <span className={styles.line1}>Deep Expertise.</span>
              <span className={styles.line2}>Real Outcomes.</span>
            </h1>
            <p className={styles.sub}>
              NEXACORE services are outcome-based engagements, not time-and-materials contracts.
              We measure success by what changes in your business — not hours logged.
            </p>
            <div className={styles.ctas}>
              <Button href="/contact#book-demo" variant="primary">Free Consultation</Button>
              <Button href="/contact" variant="outline">Get Started</Button>
            </div>
          </div>

          {/* Services quick index */}
          <div className={styles.indexPanel}>
            <div className={styles.indexHeader}>
              <span className="t-label">{services.length} Services</span>
              <div className={styles.statsRow}>
                {stats.map((s) => (
                  <div key={s.label} className={styles.heroStat}>
                    <span className={styles.heroStatVal}>{s.value}</span>
                    <span className={styles.heroStatLbl}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <ul className={styles.indexList}>
              {services.map((svc) => (
                <li key={svc.id} className={styles.indexItem}>
                  <a href={`#${svc.id}`} className={styles.indexLink}>
                    <span className={styles.indexNum}>{svc.number}</span>
                    <span className={styles.indexName}>{svc.name}</span>
                    <span className={styles.indexArrow}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
