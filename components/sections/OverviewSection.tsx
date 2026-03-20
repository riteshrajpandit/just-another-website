/**
 * @file Overview Section component
 * @description Mission and approach overview with sticky sidebar
 */

'use client';

import Link from 'next/link';
import { useAnimateOnScroll } from '@/hooks';
import { overviewData, overviewBlocks } from '@/data/about';

export function OverviewSection() {
  const { ref: stickyRef, className: stickyClass } = useAnimateOnScroll();
  const { ref: blocksRef, className: blocksClass } = useAnimateOnScroll();

  return (
    <section id="overview" className="section-pad" data-section-name="OVERVIEW">
      <div className="container">
        <div className="overview-grid">
          {/* Sticky left */}
          <div ref={stickyRef} className={`overview-sticky ${stickyClass}`}>
            <span className="overview-year-mark">{overviewData.yearMark}</span>
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
                <Link
                  key={index}
                  href={cta.href}
                  className={index === 0 ? 'btn btn-brand' : 'btn btn-outline'}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right blocks */}
          <div ref={blocksRef} className={`overview-blocks ${blocksClass}`} style={{ transitionDelay: '0.15s' }}>
            {overviewBlocks.map((block) => (
              <div key={block.id} className="overview-block">
                <span className="overview-block-num">{block.number}</span>
                <div className="overview-block-title">{block.title}</div>
                <p className="overview-block-text">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
