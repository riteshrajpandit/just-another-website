/**
 * @file Contact Tabs Bar component
 * @description Tab navigation bar for the contact page
 */

'use client';

export type ContactTab = 'get-started' | 'book-demo' | 'contact';

interface ContactTabsBarProps {
  activeTab: ContactTab;
  onTabChange: (tab: ContactTab) => void;
}

const tabs = [
  { id: 'get-started' as const, label: 'Get Started' },
  { id: 'book-demo' as const, label: 'Book a Demo' },
  { id: 'contact' as const, label: 'Contact Us' },
];

export function ContactTabsBar({ activeTab, onTabChange }: ContactTabsBarProps) {
  return (
    <div className="page-tabs-bar" id="page-top">
      <div className="page-tabs-inner">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`page-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            aria-pressed={activeTab === tab.id}
          >
            <span className="page-tab-dot" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
