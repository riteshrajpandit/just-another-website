/**
 * @file Team Stats Section component
 * @description Team statistics with animated counters
 */

'use client';

import { useInView, useCountUp, useAnimateOnScroll } from '@/hooks';
import { teamStats } from '@/data/about';

function TeamStatCounter({ target, suffix }: { target: number; suffix: string }) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const count = useCountUp(target, isInView);

  return (
    <span ref={ref} className="ts-num">
      <span className="counter">{count}</span>
      <span className="accent">{suffix}</span>
    </span>
  );
}

export function TeamStatsSection() {
  const { ref: gridRef, className: gridClass } = useAnimateOnScroll();

  return (
    <section id="team-stats" data-section-name="BY THE NUMBERS">
      <div className="container--full">
        <div ref={gridRef} className={`team-stats-inner ${gridClass}`}>
          {teamStats.map((stat, idx) => (
            <div
              key={stat.id}
              className="ts-item"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <TeamStatCounter target={stat.value} suffix={stat.suffix} />
              <span className="ts-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
