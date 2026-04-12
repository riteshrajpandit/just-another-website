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

const tabFromHash: Record<string, ContactTab> = {
  'get-started': 'get-started',
  'book-demo': 'book-demo',
  'contact': 'contact',
};

function getInitialTab(): ContactTab {
  if (typeof window === 'undefined') return 'get-started';
  const hash = window.location.hash.slice(1);
  return tabFromHash[hash] || 'get-started';
}

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<ContactTab>(getInitialTab);

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (tabFromHash[newHash]) {
        setActiveTab(tabFromHash[newHash]);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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