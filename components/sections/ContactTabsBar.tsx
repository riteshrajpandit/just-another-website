/**
 * @file Contact Tabs Bar component
 * @description Sticky tab navigation bar matching the reference design.
 *              Three tabs: Get Started, Book a Demo, Contact Us.
 *              Sits directly below the fixed navbar (top: var(--nav-height)).
 */

'use client';

import styles from '@/styles/contact.module.css';

export type ContactTab = 'get-started' | 'book-demo' | 'contact';

interface ContactTabsBarProps {
  activeTab: ContactTab;
  onTabChange: (tab: ContactTab) => void;
}

const tabs: { id: ContactTab; label: string }[] = [
  { id: 'get-started', label: 'Get Started' },
  { id: 'book-demo',   label: 'Book a Demo' },
  { id: 'contact',     label: 'Contact Us'  },
];

export function ContactTabsBar({ activeTab, onTabChange }: ContactTabsBarProps) {
  return (
    <div className={styles.pageTabsBar} id="page-top" role="navigation" aria-label="Contact sections">
      <div className={styles.pageTabsInner}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`${styles.pageTab} ${activeTab === tab.id ? styles.pageTabActive : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className={styles.pageTabDot} aria-hidden="true" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
