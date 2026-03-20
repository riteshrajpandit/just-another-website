/**
 * @file About Mega Menu
 */

import Link from 'next/link';
import { Button } from '@/components/ui';

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
    <div className="mega-menu mega-menu--narrow" role="region" aria-label="About menu">
      <div className="mega-inner mega-col-about">
        <div>
          <div className="mega-section-label">Company</div>
          <ul className="mega-list" role="list">
            {company.map(({ name, desc, href }) => (
              <li key={name}>
                <Link href={href} className="mega-list-item" tabIndex={0}>
                  <div className="mega-item-text">
                    <span className="name">{name}</span>
                    <span className="desc">{desc}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mega-stat-row">
            {stats.map(({ value, label }) => (
              <div key={label} className="mega-stat">
                <span className="num">{value}</span>
                <span className="lbl">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mega-section-label">Team</div>
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
          <div className="mega-section-label">Careers</div>
          <div className="mega-highlight" style={{ padding: '1.25rem', height: 'fit-content', border: '1px solid var(--border)' }}>
            <div className="careers-badge">We Are Hiring</div>
            <div className="mega-highlight-title" style={{ marginTop: '0.75rem' }}>
              18 Open Positions
            </div>
            <div className="mega-highlight-desc">
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
