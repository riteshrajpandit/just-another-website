/**
 * @file Resources Mega Menu
 */

import { Button, File, Activity, Info, MessageSquare } from '@/components/ui';
import styles from './Header.module.css';

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
    <div className={`${styles.megaMenu} ${styles.megaMenuWide}`} role="region" aria-label="Resources menu">
      <div className={styles.megaInner} style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem 1rem' }}>
        <div>
          <div className={styles.megaSectionLabel}>Knowledge Base</div>
          <ul className={styles.megaList} role="list">
            {knowledge.map(({ name, desc }) => (
              <li key={name} className={styles.megaListItem} tabIndex={0}>
                <div className={styles.megaItemText}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.desc}>{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.megaSectionLabel}>Learning</div>
          <ul className={styles.megaList} role="list">
            {learning.map(({ name, desc }) => (
              <li key={name} className={styles.megaListItem} tabIndex={0}>
                <div className={styles.megaItemText}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.desc}>{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={styles.megaHighlight}
          style={{ background: 'rgba(13,74,120,0.1)', borderLeft: '2px solid var(--brand-primary)' }}
        >
          <div className={styles.megaHighlightBadge}>Security</div>
          <div className={styles.megaHighlightTitle}>Trust Center</div>
          <div className={styles.megaHighlightDesc}>
            SOC 2 Type II certified. View our security posture, compliance reports, and data handling policies.
          </div>
          <Button href="#" variant="outline" size="sm">
            View Trust Center
          </Button>
        </div>
        <div className={styles.megaToolsRow} style={{ gridColumn: '1/-1' }}>
          <span className="t-label">Quick Tools:</span>
          {tools.map(({ name, Icon }) => (
            <a key={name} href="#" className={styles.megaToolLink}>
              <Icon size={14} />
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
