/**
 * @file Overview Panel
 * @description Main dashboard overview with KPIs, charts, quick actions, activity
 */

import { KPICard } from './KPICard';
import { overviewKPIs, activityFeed, topPages } from '@/data/dashboard';
import styles from './OverviewPanel.module.css';

const quickActions = [
  { label: 'Add Product', icon: 'M12 5v14 M5 12h14' },
  { label: 'Add Service', icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' },
  { label: 'Post Job', icon: 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2' },
  { label: 'Edit Brand', icon: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' },
  { label: 'Preview Site', icon: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 M15 3h6v6 M10 14L21 3' },
] as const;

const activityIcons: Record<string, string> = {
  inquiry: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
  booking: 'M8 2v4 M16 2v4 M3 10h18',
  subscriber: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
  job: 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z',
  system: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2',
};

export function OverviewPanel() {
  return (
    <div className={styles.panel}>
      {/* KPI Grid */}
      <div className={styles.kpiGrid}>
        {overviewKPIs.map((card) => (
          <KPICard key={card.id} card={card} />
        ))}
      </div>

      {/* Charts row — placeholder bars */}
      <div className={styles.chartsRow}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <span className={styles.chartTitle}>Visitor Traffic</span>
            <div className={styles.chartTabs}>
              {['7D', '30D', '90D'].map((t, i) => (
                <button key={t} className={`${styles.chartTab} ${i === 0 ? styles.chartTabActive : ''}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className={styles.chartBody}>
            <div className={styles.sparklineWrap} aria-label="Visitor traffic chart placeholder">
              {[45, 62, 38, 71, 55, 88, 67, 94, 58, 76, 82, 69].map((h, i) => (
                <div key={i} className={styles.bar} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <span className={styles.chartTitle}>Traffic Sources</span>
          </div>
          <div className={styles.chartBody}>
            <div className={styles.donut} aria-label="Traffic sources">
              {[
                { label: 'Organic', pct: 48, color: 'var(--brand-primary)' },
                { label: 'Direct', pct: 27, color: 'var(--brand-warm)' },
                { label: 'Referral', pct: 15, color: 'var(--brand-accent)' },
                { label: 'Social', pct: 10, color: '#22c55e' },
              ].map((s) => (
                <div key={s.label} className={styles.sourceRow}>
                  <span className={styles.sourceDot} style={{ background: s.color }} />
                  <span className={styles.sourceLabel}>{s.label}</span>
                  <span className={styles.sourcePct}>{s.pct}%</span>
                  <div className={styles.sourceBar}>
                    <div style={{ width: `${s.pct}%`, background: s.color, height: '4px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Quick Actions + Activity Feed */}
      <div className={styles.bottomRow}>
        <div className={styles.actionCard}>
          <div className={styles.chartHeader}>
            <span className={styles.chartTitle}>Quick Actions</span>
          </div>
          <div className={styles.actions}>
            {quickActions.map((a) => (
              <button key={a.label} className={styles.actionBtn}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={a.icon} />
                </svg>
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.activityCard}>
          <div className={styles.chartHeader}>
            <span className={styles.chartTitle}>Recent Activity</span>
          </div>
          <ul className={styles.activityList}>
            {activityFeed.map((item) => (
              <li key={item.id} className={styles.activityItem}>
                <div className={styles.activityIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d={activityIcons[item.type]} />
                  </svg>
                </div>
                <div className={styles.activityContent}>
                  <p className={styles.activityDesc}>{item.description}</p>
                  <span className={styles.activityTime}>{item.timestamp}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Top Pages */}
      <div className={styles.topPagesCard}>
        <div className={styles.chartHeader}>
          <span className={styles.chartTitle}>Top Pages</span>
        </div>
        <table className={styles.miniTable}>
          <thead>
            <tr>
              <th>Page</th><th>Views</th><th>Avg Time</th><th>Exit Rate</th>
            </tr>
          </thead>
          <tbody>
            {topPages.map((p) => (
              <tr key={p.page}>
                <td className={styles.monoCell}>{p.page}</td>
                <td>{p.views.toLocaleString()}</td>
                <td>{p.avgTime}</td>
                <td>{p.exitRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
