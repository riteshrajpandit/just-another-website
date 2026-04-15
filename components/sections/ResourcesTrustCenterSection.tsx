/**
 * @file Resources Trust Center Section
 * @description Compliance certifications + security policies
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { Button } from '@/components/ui';
import { complianceCerts, securityPolicies } from '@/data/resources';
import styles from './ResourcesTrustCenterSection.module.css';

const policyIconPaths: Record<string, string> = {
  lock: 'M18 11H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z M8 11V7a4 4 0 1 1 8 0v4',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  alert: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01',
  search: 'M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z',
  server: 'M20 3H4v7h16V3z M4 14h16v7H4z M8 7h.01 M8 18h.01',
  check: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3',
};

export function ResourcesTrustCenterSection() {
  const { ref, className } = useAnimateOnScroll();

  return (
    <section id="trust-center" className={`section-pad ${styles.section}`} data-section-name="TRUST">
      <div className="container">
        <div ref={ref} className={`section-header ${className}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Trust Center</span>
          </div>
          <div className={styles.headerRow}>
            <div>
              <h2 className="t-h2">
                Security &amp;<br />
                <span style={{ color: 'var(--brand-primary)' }}>Compliance</span>
              </h2>
              <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
                SOC 2 Type II certified. ISO 27001 certified. GDPR compliant. We take the
                security of your data seriously — and we can prove it.
              </p>
            </div>
            <div className={styles.headerCtas}>
              <Button href="/contact" variant="outline" size="sm">Request Audit Report</Button>
            </div>
          </div>
        </div>

        <div className={styles.twoCol}>
          {/* Certifications */}
          <div>
            <h3 className={styles.colTitle}>Certifications &amp; Compliance</h3>
            <div className={styles.certList}>
              {complianceCerts.map((cert) => (
                <div key={cert.id} className={styles.certCard}>
                  <div className={styles.certTop}>
                    <div>
                      <p className={styles.certName}>{cert.name}</p>
                      <p className={styles.certIssuer}>{cert.issuer}</p>
                    </div>
                    <span className={`${styles.certBadge} ${cert.status === 'Current' ? styles.certBadgeCurrent : styles.certBadgeProgress}`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className={styles.certDesc}>{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Policies */}
          <div>
            <h3 className={styles.colTitle}>Security Policies</h3>
            <div className={styles.policyGrid}>
              {securityPolicies.map((policy) => (
                <div key={policy.id} className={styles.policyCard}>
                  <div className={styles.policyIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d={policyIconPaths[policy.icon] ?? policyIconPaths.shield} />
                    </svg>
                  </div>
                  <p className={styles.policyTitle}>{policy.title}</p>
                  <p className={styles.policyDesc}>{policy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status strip */}
        <div className={styles.statusStrip}>
          <div className={styles.statusItem}>
            <span className={styles.statusDot} />
            <span className={styles.statusLabel}>All systems operational</span>
          </div>
          <a href="#" className={styles.statusLink}>View Status Page →</a>
          <a href="#" className={styles.statusLink}>Security Posture Report →</a>
          <a href="#" className={styles.statusLink}>Data Processing Agreement →</a>
        </div>
      </div>
    </section>
  );
}
