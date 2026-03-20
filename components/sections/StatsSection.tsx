/**
 * @file Stats Section component
 * @description Statistical highlights with animated counters
 */

'use client';

import { useInView, useCountUp, useAnimateOnScroll } from '@/hooks';
import { stats } from '@/data/site';

function StatCounter({ target, suffix }: { target: number; suffix: string }) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const count = useCountUp(target, isInView);

  return (
    <span ref={ref} className="stat-num">
      <span className="counter">{count}</span>
      <span className="accent">{suffix}</span>
    </span>
  );
}

export function StatsSection() {
  const { ref: gridRef, className: gridClass } = useAnimateOnScroll();

  return (
    <section id="stats" data-section-name="STATS">
      <div className="container--full">
        <div ref={gridRef} className={`stats-grid ${gridClass}`}>
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className="stat-item"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <StatCounter target={stat.value} suffix={stat.suffix} />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
