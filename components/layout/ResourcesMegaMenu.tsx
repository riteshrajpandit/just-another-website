/**
 * @file Resources Mega Menu
 */

import { Button, File, Activity, Info, MessageSquare } from '@/components/ui';

const knowledge = [
  { name: 'FAQs', desc: 'Common questions answered' },
  { name: 'Documentation', desc: 'Technical API and product guides' },
  { name: 'Case Studies', desc: 'Client success stories and outcomes' },
];

const learning = [
  { name: 'End User Training', desc: 'Video courses and certification paths' },
  { name: 'Gallery', desc: 'Product screenshots and demos' },
  { name: 'Blog', desc: 'Engineering and thought leadership' },
];

const tools = [
  { name: 'API Explorer', Icon: File },
  { name: 'Status Page', Icon: Activity },
  { name: 'Changelog', Icon: Info },
  { name: 'Community', Icon: MessageSquare },
];

export function ResourcesMegaMenu() {
  return (
    <div className="mega-menu mega-menu--wide" role="region" aria-label="Resources menu">
      <div className="mega-inner" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem 1rem' }}>
        <div>
          <div className="mega-section-label">Knowledge Base</div>
          <ul className="mega-list" role="list">
            {knowledge.map(({ name, desc }) => (
              <li key={name} className="mega-list-item" tabIndex={0}>
                <div className="mega-item-text">
                  <span className="name">{name}</span>
                  <span className="desc">{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mega-section-label">Learning</div>
          <ul className="mega-list" role="list">
            {learning.map(({ name, desc }) => (
              <li key={name} className="mega-list-item" tabIndex={0}>
                <div className="mega-item-text">
                  <span className="name">{name}</span>
                  <span className="desc">{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="mega-highlight"
          style={{ background: 'rgba(13,74,120,0.1)', borderLeft: '2px solid var(--brand-primary)' }}
        >
          <div className="mega-highlight-badge">Security</div>
          <div className="mega-highlight-title">Trust Center</div>
          <div className="mega-highlight-desc">
            SOC 2 Type II certified. View our security posture, compliance reports, and data handling policies.
          </div>
          <Button href="#" variant="outline" size="sm">
            View Trust Center
          </Button>
        </div>
        <div className="mega-tools-row" style={{ gridColumn: '1/-1' }}>
          <span className="t-label">Quick Tools:</span>
          {tools.map(({ name, Icon }) => (
            <a key={name} href="#" className="mega-tool-link">
              <Icon size={14} />
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
