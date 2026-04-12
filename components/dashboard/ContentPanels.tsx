/**
 * @file Content Panels
 * @description Products, Services, Inquiries, Bookings, Jobs, Resumes panels
 */

'use client';

import { DataTable, StatusBadge, ScoreBadge } from './DataTable';
import type { TableColumn } from './DataTable';
import {
  dashboardProducts,
  dashboardServices,
  inquiries,
  bookings,
  jobApplications,
} from '@/data/dashboard';
import type {
  DashboardProduct,
  DashboardService,
  Inquiry,
  Booking,
  JobApplication,
} from '@/types';
import styles from './ContentPanels.module.css';

function ActionBtn({ label, danger }: { label: string; danger?: boolean }) {
  return (
    <button className={`${styles.actionBtn} ${danger ? styles.danger : ''}`}>
      {label}
    </button>
  );
}

function AddBtn({ label }: { label: string }) {
  return <button className={styles.addBtn}>{label}</button>;
}

// ─────────────────────────────────────────────
// Products Panel
// ─────────────────────────────────────────────

const productCols: TableColumn<DashboardProduct>[] = [
  { key: 'name', label: 'Name' },
  { key: 'category', label: 'Category', render: (r) => <StatusBadge value={r.category} /> },
  { key: 'status', label: 'Status', render: (r) => <StatusBadge value={r.status} /> },
  { key: 'inquiries', label: 'Inquiries', mono: true },
  { key: 'featured', label: 'Featured', render: (r) => <StatusBadge value={r.featured ? 'Yes' : 'No'} /> },
];

export function ProductsPanel() {
  return (
    <DataTable
      title="Products"
      columns={productCols}
      rows={dashboardProducts}
      headerAction={<AddBtn label="+ Add Product" />}
      actions={() => (
        <div className={styles.rowActions}>
          <ActionBtn label="Edit" />
          <ActionBtn label="Delete" danger />
        </div>
      )}
    />
  );
}

// ─────────────────────────────────────────────
// Services Panel
// ─────────────────────────────────────────────

const serviceCols: TableColumn<DashboardService>[] = [
  { key: 'name', label: 'Service Name' },
  { key: 'category', label: 'Category', render: (r) => <StatusBadge value={r.category} /> },
  { key: 'leads', label: 'Leads', mono: true },
  { key: 'status', label: 'Status', render: (r) => <StatusBadge value={r.status} /> },
  { key: 'highlight', label: 'Highlight', render: (r) => <StatusBadge value={r.highlight ? 'Yes' : 'No'} /> },
];

export function ServicesPanel() {
  return (
    <DataTable
      title="Services"
      columns={serviceCols}
      rows={dashboardServices}
      headerAction={<AddBtn label="+ Add Service" />}
      actions={() => (
        <div className={styles.rowActions}>
          <ActionBtn label="Edit" />
          <ActionBtn label="Delete" danger />
        </div>
      )}
    />
  );
}

// ─────────────────────────────────────────────
// Inquiries Panel
// ─────────────────────────────────────────────

const inquiryCols: TableColumn<Inquiry>[] = [
  { key: 'name', label: 'Name' },
  { key: 'company', label: 'Company' },
  { key: 'type', label: 'Type', render: (r) => <StatusBadge value={r.type} /> },
  { key: 'subject', label: 'Subject' },
  { key: 'date', label: 'Date', mono: true },
  { key: 'status', label: 'Status', render: (r) => <StatusBadge value={r.status} /> },
];

export function InquiriesPanel() {
  return (
    <DataTable
      title="Inquiries"
      columns={inquiryCols}
      rows={inquiries}
      actions={() => <ActionBtn label="View" />}
    />
  );
}

// ─────────────────────────────────────────────
// Bookings Panel
// ─────────────────────────────────────────────

const bookingCols: TableColumn<Booking>[] = [
  { key: 'name', label: 'Name' },
  { key: 'company', label: 'Company' },
  { key: 'date', label: 'Date', mono: true },
  { key: 'time', label: 'Time', mono: true },
  { key: 'architect', label: 'Architect' },
  {
    key: 'products',
    label: 'Products',
    render: (r) => <span>{r.products.join(', ')}</span>,
  },
  { key: 'status', label: 'Status', render: (r) => <StatusBadge value={r.status} /> },
];

export function BookingsPanel() {
  return (
    <DataTable
      title="Demo Bookings"
      columns={bookingCols}
      rows={bookings}
      actions={() => <ActionBtn label="View" />}
    />
  );
}

// ─────────────────────────────────────────────
// Job Applications Panel
// ─────────────────────────────────────────────

const appCols: TableColumn<JobApplication>[] = [
  { key: 'applicant', label: 'Applicant' },
  { key: 'role', label: 'Role Applied' },
  { key: 'department', label: 'Dept', render: (r) => <StatusBadge value={r.department} /> },
  { key: 'appliedDate', label: 'Applied', mono: true },
  { key: 'stage', label: 'Stage', render: (r) => <StatusBadge value={r.stage} /> },
  { key: 'score', label: 'Score', render: (r) => <ScoreBadge score={r.score} /> },
];

export function ResumesPanel() {
  return (
    <DataTable
      title="Resumes & Applications"
      columns={appCols}
      rows={jobApplications}
      actions={() => (
        <div className={styles.rowActions}>
          <ActionBtn label="Review" />
        </div>
      )}
    />
  );
}
