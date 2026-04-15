/**
 * @file Resources Documentation Section
 * @description Doc category grid linking to product guides
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { Button } from '@/components/ui';
import { docSections } from '@/data/resources';
import styles from './ResourcesDocSection.module.css';

const iconPaths: Record<string, string> = {
  play: 'M5 3l14 9-14 9V3z',
  workflow: 'M3 3h7v9H3z M14 3h7v5h-7z M14 12h7v9h-7z M3 16h7v5H3z',
  box: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  activity: 'M22 12h-4l-3 9L9 3l-3 9H2',
  code: 'M16 18l6-6-6-6 M8 6l-6 6 6 6',
  cloud: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z',
  monitor: 'M8 21h8 M12 17v4 M20 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z',
};

export function ResourcesDocSection() {
  const { ref, className } = useAnimateOnScroll();

  return (
    <section id="documentation" className={`section-pad ${styles.section}`} data-section-name="DOCS">
      <div className="container">
        <div ref={ref} className={`section-header ${className}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Documentation</span>
          </div>
          <div className={styles.headerRow}>
            <div>
              <h2 className="t-h2">
                Technical Guides<br />
                <span style={{ color: 'var(--brand-primary)' }}>& API Reference</span>
              </h2>
            </div>
            <Button href="#" variant="outline" size="sm">Full Docs Portal →</Button>
          </div>
        </div>

        <div className={styles.grid}>
          {docSections.map((doc, idx) => (
            <a
              key={doc.id}
              href="#"
              className={styles.card}
              style={{ transitionDelay: `${idx * 0.04}s` }}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d={iconPaths[doc.icon] ?? iconPaths.box} />
                  </svg>
                </div>
                <span className={styles.articles}>{doc.articles} articles</span>
              </div>
              <p className={styles.title}>{doc.title}</p>
              <p className={styles.desc}>{doc.description}</p>
              <div className={styles.footer}>
                <span className={styles.updated}>Updated {doc.updated}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
