/**
 * @file Products Mega Menu
 */

import { Button, Workflow, Clock, Shield, Activity, Box, Monitor } from '@/components/ui';
import styles from './Header.module.css';

const products = [
  { name: 'NexaFlow', desc: 'Visual workflow automation engine', Icon: Workflow },
  { name: 'CoreSync', desc: 'Real-time data synchronization platform', Icon: Clock },
  { name: 'SecureVault', desc: 'Zero-trust identity and access management', Icon: Shield },
  { name: 'PulseMetrics', desc: 'Enterprise observability and analytics', Icon: Activity },
  { name: 'CloudOrchestra', desc: 'Multi-cloud infrastructure management', Icon: Box },
  { name: 'DeskCanvas', desc: 'Intelligent service desk and ITSM suite', Icon: Monitor },
];

export function ProductsMegaMenu() {
  return (
    <div className={`${styles.megaMenu} ${styles.megaMenuWide}`} role="region" aria-label="Products menu">
      <div className={`${styles.megaInner} ${styles.megaCol2}`}>
        <div>
          <div className={styles.megaSectionLabel}>Product Suite</div>
          <ul className={styles.megaList} role="list">
            {products.map(({ name, desc, Icon }) => (
              <li key={name} className={styles.megaListItem} tabIndex={0}>
                <div className={styles.megaItemIcon}>
                  <Icon size={14} />
                </div>
                <div className={styles.megaItemText}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.desc}>{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.megaHighlight}>
          <div className={styles.megaHighlightBadge}>Featured</div>
          <div className={styles.megaHighlightTitle}>
            NexaFlow 4.0<br />Now with AI Orchestration
          </div>
          <div className={styles.megaHighlightDesc}>
            The most powerful workflow engine we have ever built. Automate complex enterprise processes with no-code visual builder and built-in AI decision nodes.
          </div>
          <Button href="#products" variant="brand" size="sm">
            Explore NexaFlow
          </Button>
        </div>
      </div>
    </div>
  );
}
