/**
 * @file Early Adopters Section component
 * @description Early adopter showcase with timeline
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { earlyAdopters, timeline } from '@/data/site';

export function EarlyAdoptersSection() {
  const { ref: headerRef, className: headerClass } = useAnimateOnScroll();
  const { ref: gridRef, className: gridClass } = useAnimateOnScroll();
  const { ref: timelineRef, className: timelineClass } = useAnimateOnScroll();

  return (
    <section id="early-adopters" className="section-pad" data-section-name="ADOPTERS">
      <div className="container">
        <div ref={headerRef} className={`section-header ${headerClass}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Early Adopters</span>
          </div>
          <h2 className="t-h2">
            Organizations That<br />
            <span style={{ color: 'var(--brand-primary)' }}>Chose Us First</span>
          </h2>
          <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            Our earliest clients helped shape the NEXACORE platform. Their trust and feedback are
            the foundation every product is built on.
          </p>
        </div>
        <div ref={gridRef} className={`adopters-grid ${gridClass}`}>
          {earlyAdopters.map((adopter) => (
            <div key={adopter.id} className="adopter-card">
              <div className="adopter-badge">{adopter.badge}</div>
              <div className="adopter-name">{adopter.name}</div>
              <div className="adopter-industry">{adopter.industry}</div>
            </div>
          ))}
        </div>

        <div ref={timelineRef} className={timelineClass} style={{ transitionDelay: '0.2s' }}>
          <div className="t-label" style={{ marginBottom: '1.5rem' }}>
            Company Milestones
          </div>
          <div className="timeline-wrap">
            <div className="timeline">
              {timeline.map((item) => (
                <div key={item.year} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-dot" />
                  <div className="timeline-event">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
