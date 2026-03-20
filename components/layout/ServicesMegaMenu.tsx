/**
 * @file Services Mega Menu
 */

import { Button } from '@/components/ui';

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
    <div className="mega-menu mega-menu--wide" role="region" aria-label="Services menu">
      <div className="mega-inner" style={{ gridTemplateColumns: 'repeat(3, 1fr) 240px', gap: '1rem' }}>
        <div>
          <div className="mega-section-label">Core Services</div>
          <ul className="mega-list" role="list">
            {coreServices.map(({ name, desc }) => (
              <li key={name} className="mega-list-item" tabIndex={0}>
                <div className="mega-item-text">
                  <span className="name">{name}</span>
                  <span className="desc">{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mega-section-label">Managed Services</div>
          <ul className="mega-list" role="list">
            {managedServices.map(({ name, desc }) => (
              <li key={name} className="mega-list-item" tabIndex={0}>
                <div className="mega-item-text">
                  <span className="name">{name}</span>
                  <span className="desc">{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mega-section-label">Advisory</div>
          <ul className="mega-list" role="list">
            {advisoryServices.map(({ name, desc }) => (
              <li key={name} className="mega-list-item" tabIndex={0}>
                <div className="mega-item-text">
                  <span className="name">{name}</span>
                  <span className="desc">{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mega-highlight mega-highlight--brand">
          <div className="mega-highlight-badge" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
            Free
          </div>
          <div className="mega-highlight-title">Free Consultation</div>
          <div className="mega-highlight-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>
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
