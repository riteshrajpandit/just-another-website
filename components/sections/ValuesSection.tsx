/**
 * @file Values Section component
 * @description Core values cards with icons and hover effects
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { values } from '@/data/about';

export function ValuesSection() {
  const { ref: headerRef, className: headerClass } = useAnimateOnScroll();

  return (
    <section id="values" className="section-pad" data-section-name="VALUES">
      <div className="container">
        <div ref={headerRef} className={`section-header ${headerClass}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">What We Stand For</span>
          </div>
          <h2 className="t-h2">
            Core Values That
            <br />
            <span style={{ color: 'var(--brand-primary)' }}>Shape Every Decision</span>
          </h2>
          <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            These are not values written for a wall. They are the criteria we use in hiring
            decisions, product roadmap choices, and how we handle things when they go wrong.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, idx) => (
            <div
              key={value.id}
              className="value-card anim-up in"
              style={{ transitionDelay: `${idx * 0.07}s` }}
            >
              <div className="value-bg-num">{(idx + 1).toString().padStart(2, '0')}</div>
              <div className="value-icon">
                <svg viewBox="0 0 24 24">
                  <path d={value.iconPath} />
                </svg>
              </div>
              <span className="value-num">{value.number}</span>
              <div
                className="value-title"
                dangerouslySetInnerHTML={{ __html: value.title.replace(/\n/g, '<br>') }}
              />
              <p className="value-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
