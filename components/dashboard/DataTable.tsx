/**
 * @file DataTable
 * @description Reusable data table for dashboard listings
 */

import styles from './DataTable.module.css';

export interface TableColumn<T> {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
  mono?: boolean;
}

interface Props<T extends { id: string }> {
  columns: TableColumn<T>[];
  rows: readonly T[];
  actions?: (row: T) => React.ReactNode;
  headerAction?: React.ReactNode;
  title?: string;
}

type StatusColor = 'green' | 'blue' | 'amber' | 'red' | 'muted';

const statusMap: Record<string, StatusColor> = {
  Active: 'green', active: 'green', Confirmed: 'green', Resolved: 'green',
  Beta: 'blue', 'In Progress': 'blue', Interview: 'blue', Offer: 'blue',
  Pending: 'amber', Screening: 'amber',
  Inactive: 'muted', Deprecated: 'muted', Rejected: 'red', Cancelled: 'red', Open: 'amber',
};

export function StatusBadge({ value }: { value: string }) {
  const color = statusMap[value] ?? 'muted';
  return <span className={`${styles.badge} ${styles[`badge--${color}`]}`}>{value}</span>;
}

export function ScoreBadge({ score }: { score: number }) {
  const color = score >= 80 ? 'green' : score >= 65 ? 'blue' : 'amber';
  return <span className={`${styles.badge} ${styles[`badge--${color}`]}`}>{score}</span>;
}

export function DataTable<T extends { id: string }>({ columns, rows, actions, headerAction, title }: Props<T>) {
  return (
    <div className={styles.wrapper}>
      {(title || headerAction) && (
        <div className={styles.tableHeader}>
          {title && <h3 className={styles.tableTitle}>{title}</h3>}
          {headerAction}
        </div>
      )}
      <div className={styles.scrollWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={String(col.key)} className={styles.th}>{col.label}</th>
              ))}
              {actions && <th className={styles.th}>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className={styles.tr}>
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className={`${styles.td} ${col.mono ? styles.mono : ''}`}
                  >
                    {col.render
                      ? col.render(row)
                      : String((row as Record<string, unknown>)[String(col.key)] ?? '')}
                  </td>
                ))}
                {actions && <td className={styles.td}>{actions(row)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
