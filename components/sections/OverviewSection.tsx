/**
 * @file Overview Section component
 * @description Mission and approach overview with sticky sidebar
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { Button } from '@/components/ui';
import { overviewData, overviewBlocks } from '@/data/about';
import styles from './OverviewSection.module.css';

export function OverviewSection() {
  const { ref: stickyRef, className: stickyClass } = useAnimateOnScroll();
  const { ref: blocksRef, className: blocksClass } = useAnimateOnScroll();

  return (
    <section id="overview" className={`${styles.overview} section-pad`} data-section-name="OVERVIEW">
      <div className="container">
        <div className={styles.overviewGrid}>
          {/* Sticky left */}
          <div ref={stickyRef} className={`${styles.overviewSticky} ${stickyClass}`}>
            <span className={styles.overviewYearMark}>{overviewData.yearMark}</span>
            <div className="section-eyebrow">
              <div className="section-eyebrow-line" />
              <span className="t-label">{overviewData.eyebrow}</span>
            </div>
            <h2 className="t-h2" style={{ marginBottom: '1.5rem' }}>
              {overviewData.headline.line1}
              <br />
              <span style={{ color: 'var(--brand-primary)' }}>{overviewData.headline.line2}</span>
            </h2>
            <p className="t-body" style={{ marginBottom: '2rem' }}>
              {overviewData.description}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {overviewData.ctas.map((cta, index) => (
                <Button
                  key={index}
                  href={cta.href}
                  variant={index === 0 ? 'brand' : 'outline'}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Right blocks */}
          <div ref={blocksRef} className={`${styles.overviewBlocks} ${blocksClass}`} style={{ transitionDelay: '0.15s' }}>
            {overviewBlocks.map((block) => (
              <div key={block.id} className={styles.overviewBlock}>
                <span className={styles.overviewBlockNum}>{block.number}</span>
                <div className={styles.overviewBlockTitle}>{block.title}</div>
                <p className={styles.overviewBlockText}>{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
