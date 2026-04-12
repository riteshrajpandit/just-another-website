/**
 * @file Dashboard Page
 * @description Admin dashboard with sidebar navigation and content panels
 */

'use client';

import { useState } from 'react';
import type { DashPage } from '@/data/dashboard';
import { analyticsKPIs, overviewKPIs } from '@/data/dashboard';
import {
  DashSidebar,
  DashTopbar,
  KPICard,
  OverviewPanel,
  ProductsPanel,
  ServicesPanel,
  InquiriesPanel,
  BookingsPanel,
  ResumesPanel,
} from '@/components/dashboard';
import styles from './dashboard.module.css';

function PlaceholderPanel({ title }: { title: string }) {
  return (
    <div className={styles.placeholder}>
      <p className={styles.placeholderLabel}>{title}</p>
      <p className={styles.placeholderSub}>Panel coming soon</p>
    </div>
  );
}

function AnalyticsPanel() {
  return (
    <div className={styles.analyticsWrap}>
      <div className={styles.kpiGrid}>
        {analyticsKPIs.map((c) => <KPICard key={c.id} card={c} />)}
      </div>
      <PlaceholderPanel title="Analytics Charts" />
    </div>
  );
}

function SubscribersPanel() {
  return (
    <div className={styles.kpiGrid} style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
      {[
        { id: 's1', label: 'Total Subscribers', value: '1,293', trend: 7.8, icon: 'users' },
        { id: 's2', label: 'Open Rate', value: '42.1%', trend: 3.2, icon: 'mail' },
        { id: 's3', label: 'Unsubscribed', value: '48', trend: -1.5, icon: 'bell' },
      ].map((c) => <KPICard key={c.id} card={c} />)}
    </div>
  );
}

function JobsPanel() {
  return (
    <div className={styles.kpiGrid}>
      {overviewKPIs.slice(0, 4).map((c) => <KPICard key={c.id} card={c} />)}
    </div>
  );
}

const panels: Record<DashPage, React.ReactNode> = {
  overview: <OverviewPanel />,
  analytics: <AnalyticsPanel />,
  products: <ProductsPanel />,
  services: <ServicesPanel />,
  inquiries: <InquiriesPanel />,
  bookings: <BookingsPanel />,
  subscribers: <SubscribersPanel />,
  jobs: <JobsPanel />,
  resumes: <ResumesPanel />,
  appearance: <PlaceholderPanel title="Appearance" />,
  settings: <PlaceholderPanel title="Settings" />,
};

export default function DashboardPage() {
  const [activePage, setActivePage] = useState<DashPage>('overview');

  return (
    <div className={styles.shell}>
      <DashSidebar activePage={activePage} onNavigate={setActivePage} />
      <div className={styles.main}>
        <DashTopbar activePage={activePage} />
        <main className={styles.content} id="main-content">
          {panels[activePage]}
        </main>
      </div>
    </div>
  );
}
