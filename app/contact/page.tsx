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

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<ContactTab>('get-started');

  // Handle hash-based tab switching
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const tabFromHash: Record<string, ContactTab> = {
      'get-started': 'get-started',
      'book-demo': 'book-demo',
      'contact': 'contact',
    };
    if (tabFromHash[hash]) {
      setActiveTab(tabFromHash[hash]);
    }

    // Listen for hash changes
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
