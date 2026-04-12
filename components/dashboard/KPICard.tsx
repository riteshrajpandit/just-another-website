/**
 * @file KPI Card
 * @description Reusable KPI metric card with trend indicator
 */

import type { KPICard as KPICardType } from '@/types';
import styles from './KPICard.module.css';

const iconPaths: Record<string, string> = {
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
  calendar: 'M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  bell: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0',
  eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2',
  activity: 'M22 12h-4l-3 9L9 3l-3 9H2',
  'trending-up': 'M23 6l-9.5 9.5-5-5L1 18 M17 6h6v6',
};

interface Props {
  card: KPICardType;
}

export function KPICard({ card }: Props) {
  const isUp = card.trend >= 0;
  const trendAbs = Math.abs(card.trend).toFixed(1);

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <span className={styles.label}>{card.label}</span>
        <div className={styles.iconWrap} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d={iconPaths[card.icon] ?? ''} />
          </svg>
        </div>
      </div>
      <p className={styles.value}>{card.value}</p>
      <div className={`${styles.trend} ${isUp ? styles.trendUp : styles.trendDown}`}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={isUp ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
        </svg>
        <span>{trendAbs}% vs last month</span>
      </div>
    </div>
  );
}
