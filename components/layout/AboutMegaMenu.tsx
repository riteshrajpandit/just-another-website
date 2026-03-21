/**
 * @file About Mega Menu
 */

import Link from 'next/link';
import { Button } from '@/components/ui';
import styles from './Header.module.css';

const company = [
  { name: 'Overview', desc: 'Our mission and founding story', href: '/about#overview' },
  { name: 'Leadership', desc: 'Executive team and board', href: '/about#team' },
  { name: 'Partners', desc: 'Our global technology alliances', href: '/#brands' },
];

const teamInitials = ['AR', 'KM', 'PN', 'SL', 'DK', 'MR'];
const teamColors = ['#1b76bb', '#0d4a78', '#1a1a4a', '#2a4a1a', '#4a1a2a', '#2a1a4a'];

const stats = [
  { value: '12+', label: 'Years' },
  { value: '340+', label: 'Clients' },
  { value: '4', label: 'Offices' },
];

export function AboutMegaMenu() {
  return (
    <div className={`${styles.megaMenu} ${styles.megaMenuNarrow}`} role="region" aria-label="About menu">
      <div className={`${styles.megaInner} ${styles.megaColAbout}`}>
        <div>
          <div className={styles.megaSectionLabel}>Company</div>
          <ul className={styles.megaList} role="list">
            {company.map(({ name, desc, href }) => (
              <li key={name}>
                <Link href={href} className={styles.megaListItem} tabIndex={0}>
                  <div className={styles.megaItemText}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.desc}>{desc}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.megaStatRow}>
            {stats.map(({ value, label }) => (
              <div key={label} className={styles.megaStat}>
                <span className={styles.num}>{value}</span>
                <span className={styles.lbl}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.megaSectionLabel}>Team</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
            {teamInitials.map((initials, idx) => (
              <div
                key={initials}
                style={{
                  aspectRatio: '1',
                  background: teamColors[idx],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: '#fff',
                  fontSize: '0.85rem',
                }}
              >
                {initials}
              </div>
            ))}
          </div>
          <Button href="/about#team" variant="outline" size="sm" style={{ width: '100%', justifyContent: 'center' }}>
            Meet the Team
          </Button>
        </div>
        <div>
          <div className={styles.megaSectionLabel}>Careers</div>
          <div className={styles.megaHighlight} style={{ padding: '1.25rem', height: 'fit-content', border: '1px solid var(--border)' }}>
            <div className={styles.careersBadge}>We Are Hiring</div>
            <div className={styles.megaHighlightTitle} style={{ marginTop: '0.75rem' }}>
              18 Open Positions
            </div>
            <div className={styles.megaHighlightDesc}>
              Join a team building infrastructure that powers thousands of businesses worldwide.
            </div>
            <Button href="#" variant="brand" size="sm" style={{ marginTop: '0.75rem' }}>
              View Openings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
