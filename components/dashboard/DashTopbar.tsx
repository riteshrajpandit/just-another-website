/**
 * @file Dashboard Topbar
 * @description Fixed top bar with page title, search, and actions
 */

'use client';

import type { DashPage } from '@/data/dashboard';
import styles from './DashTopbar.module.css';

const pageTitles: Record<DashPage, string> = {
  overview: 'Overview',
  analytics: 'Analytics',
  products: 'Products',
  services: 'Services',
  inquiries: 'Inquiries',
  bookings: 'Bookings',
  subscribers: 'Subscribers',
  jobs: 'Job Openings',
  resumes: 'Resumes',
  appearance: 'Appearance',
  settings: 'Settings',
};

interface Props {
  activePage: DashPage;
}

export function DashTopbar({ activePage }: Props) {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <span className={styles.pageTitle}>{pageTitles[activePage]}</span>
        <span className={styles.breadcrumb}>
          Dashboard / {pageTitles[activePage]}
        </span>
      </div>
      <div className={styles.right}>
        <div className={styles.searchWrap}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
          </svg>
          <input type="search" placeholder="Search..." aria-label="Dashboard search" />
        </div>
        <button className={styles.iconBtn} title="Notifications" aria-label="Notifications">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className={styles.notifDot} />
        </button>
        <button className={styles.iconBtn} title="Help" aria-label="Help">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3 M12 17h.01" />
          </svg>
        </button>
        <a href="/" className={styles.previewBtn} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 M15 3h6v6 M10 14L21 3" />
          </svg>
          Preview Site
        </a>
      </div>
    </header>
  );
}
