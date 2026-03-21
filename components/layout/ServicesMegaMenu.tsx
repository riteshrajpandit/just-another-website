/**
 * @file Services Mega Menu
 */

import { Button } from '@/components/ui';
import styles from './Header.module.css';

const coreServices = [
  { name: 'Cloud Migration', desc: 'End-to-end lift-and-shift or re-architect' },
  { name: 'DevSecOps', desc: 'Pipelines, security gates, and deployment' },
  { name: 'Data Engineering', desc: 'Warehouse design, ETL, and governance' },
];

const managedServices = [
  { name: '24/7 NOC Support', desc: 'Round-the-clock network operations' },
  { name: 'Cybersecurity', desc: 'SOC, threat intelligence, and incident response' },
  { name: 'Compliance Audit', desc: 'ISO 27001, SOC2, GDPR readiness' },
];

const advisoryServices = [
  { name: 'Digital Transformation', desc: 'Strategy, roadmap, and execution' },
  { name: 'Architecture Review', desc: 'Infrastructure and system design audit' },
];

export function ServicesMegaMenu() {
  return (
    <div className={`${styles.megaMenu} ${styles.megaMenuWide}`} role="region" aria-label="Services menu">
      <div className={styles.megaInner} style={{ gridTemplateColumns: 'repeat(3, 1fr) 240px', gap: '1rem' }}>
        <div>
          <div className={styles.megaSectionLabel}>Core Services</div>
          <ul className={styles.megaList} role="list">
            {coreServices.map(({ name, desc }) => (
              <li key={name} className={styles.megaListItem} tabIndex={0}>
                <div className={styles.megaItemText}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.desc}>{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.megaSectionLabel}>Managed Services</div>
          <ul className={styles.megaList} role="list">
            {managedServices.map(({ name, desc }) => (
              <li key={name} className={styles.megaListItem} tabIndex={0}>
                <div className={styles.megaItemText}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.desc}>{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.megaSectionLabel}>Advisory</div>
          <ul className={styles.megaList} role="list">
            {advisoryServices.map(({ name, desc }) => (
              <li key={name} className={styles.megaListItem} tabIndex={0}>
                <div className={styles.megaItemText}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.desc}>{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.megaHighlight} ${styles.megaHighlightBrand}`}>
          <div className={styles.megaHighlightBadge} style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
            Free
          </div>
          <div className={styles.megaHighlightTitle}>Free Consultation</div>
          <div className={styles.megaHighlightDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>
            30-minute strategy call with a senior solutions architect. No obligations, no sales pitch.
          </div>
          <Button href="#cta" variant="white-outline" size="sm">
            Book Your Slot
          </Button>
        </div>
      </div>
    </div>
  );
}
