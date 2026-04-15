/**
 * @file Contact Page
 * @description Contact page with tabbed interface for Get Started, Book Demo, and Contact Us
 */

'use client';

import { useState, useEffect } from 'react';
import { Header, Footer, ScrollRail } from '@/components/layout';
import { ContactTabsBar, type ContactTab } from '@/components/sections/ContactTabsBar';
import { GetStartedPanel } from '@/components/sections/GetStartedPanel';
import { BookDemoPanel } from '@/components/sections/BookDemoPanel';
import { ContactPanel } from '@/components/sections/ContactPanel';

const VALID_TABS = new Set<ContactTab>(['get-started', 'book-demo', 'contact']);

function hashToTab(hash: string): ContactTab | null {
  const key = hash.replace(/^#/, '') as ContactTab;
  return VALID_TABS.has(key) ? key : null;
}

export default function ContactPage() {
  // Always start with the default tab — keeps server and client HTML identical
  const [activeTab, setActiveTab] = useState<ContactTab>('get-started');

  // Sync to hash only after mount (client-only), avoiding hydration mismatch
  useEffect(() => {
    const syncFromHash = () => {
      const tab = hashToTab(window.location.hash);
      if (tab) setActiveTab(tab);
    };

    syncFromHash(); // apply hash on first mount
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const handleTabChange = (tab: ContactTab) => {
    setActiveTab(tab);
    window.history.pushState(null, '', `#${tab}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ScrollRail />
      <Header />
      <ContactTabsBar activeTab={activeTab} onTabChange={handleTabChange} />

      <main>
        {activeTab === 'get-started' && <GetStartedPanel />}
        {activeTab === 'book-demo' && <BookDemoPanel />}
        {activeTab === 'contact' && <ContactPanel />}
      </main>

      <Footer />
    </>
  );
}