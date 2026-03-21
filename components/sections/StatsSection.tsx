/**
 * @file Stats Section component
 * @description Statistical highlights with animated counters
 */

'use client';

import { useInView, useCountUp, useAnimateOnScroll } from '@/hooks';
import { stats } from '@/data/site';
import styles from './StatsSection.module.css';

function StatCounter({ target, suffix }: { target: number; suffix: string }) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const count = useCountUp(target, isInView);

  return (
    <span ref={ref} className={styles.statNum}>
      <span className={styles.counter}>{count}</span>
      <span className={styles.accent}>{suffix}</span>
    </span>
  );
}

export function StatsSection() {
  const { ref: gridRef, className: gridClass } = useAnimateOnScroll();

  return (
    <section id="stats" className={styles.stats} data-section-name="STATS">
      <div className="container--full">
        <div ref={gridRef} className={`${styles.statsGrid} ${gridClass}`}>
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={styles.statItem}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <StatCounter target={stat.value} suffix={stat.suffix} />
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
