/**
 * @file Products Mega Menu
 */

import { Button, Workflow, Clock, Shield, Activity, Box, Monitor } from '@/components/ui';

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
    <div className="mega-menu mega-menu--wide" role="region" aria-label="Products menu">
      <div className="mega-inner mega-col-2">
        <div>
          <div className="mega-section-label">Product Suite</div>
          <ul className="mega-list" role="list">
            {products.map(({ name, desc, Icon }) => (
              <li key={name} className="mega-list-item" tabIndex={0}>
                <div className="mega-item-icon">
                  <Icon size={14} />
                </div>
                <div className="mega-item-text">
                  <span className="name">{name}</span>
                  <span className="desc">{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mega-highlight">
          <div className="mega-highlight-badge">Featured</div>
          <div className="mega-highlight-title">
            NexaFlow 4.0<br />Now with AI Orchestration
          </div>
          <div className="mega-highlight-desc">
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
