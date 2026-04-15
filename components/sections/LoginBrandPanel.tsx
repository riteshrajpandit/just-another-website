/**
 * @file Login Brand Panel
 * @description Left visual panel for the login page with stats
 */

import Link from 'next/link';
import styles from './LoginBrandPanel.module.css';

const stats = [
  { value: '340+', label: 'Clients' },
  { value: '99.97%', label: 'Uptime' },
  { value: '18M+', label: 'API/day' },
] as const;

export function LoginBrandPanel() {
  return (
    <aside className={styles.panel}>
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.blob} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      {/* Top bar */}
      <div className={styles.top}>
        <Link href="/" className={styles.logo} aria-label="NEXACORE Home">
          <div className={styles.logoMark} aria-hidden="true" />
          <span className={styles.logoName}>NEXA<span>CORE</span></span>
        </Link>
        <Link href="/" className={styles.backLink}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H5 M12 19l-7-7 7-7" />
          </svg>
          Back to site
        </Link>
      </div>

      {/* Visual & headline */}
      <div className={styles.visual}>
        <h1 className={styles.headline}>
          <span className={styles.line1}>Your Control</span>
          <span className={styles.line2}>Centre.</span>
        </h1>
        <p className={styles.sub}>
          Access your NEXACORE dashboard to manage products, services, client inquiries, and team operations.
        </p>

        {/* Geometric composition */}
        <div className={styles.geo} aria-hidden="true">
          <div className={styles.geoBox1} />
          <div className={styles.geoBox2} />
          <div className={styles.geoBox3} />
          <div className={styles.geoLine1} />
          <div className={styles.geoLine2} />
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsStrip}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statVal}>{s.value}</span>
            <span className={styles.statLbl}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Footer labels */}
      <div className={styles.footer}>
        <span className={styles.versionBadge}>
          <span className={styles.versionDot} aria-hidden="true" />
          v5.2.1 — Stable
        </span>
        <span className={styles.soc2Badge}>SOC 2 Type II</span>
      </div>
    </aside>
  );
}
