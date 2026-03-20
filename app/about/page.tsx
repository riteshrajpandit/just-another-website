/**
 * @file About Page
 * @description Company information, team, and values page
 */

'use client';

import { useState, useCallback } from 'react';
import { Header, Footer, LoadingScreen, ScrollRail } from '@/components/layout';
import {
  AboutHeroSection,
  OverviewSection,
  TeamStatsSection,
  ValuesSection,
  TeamSection,
  CTASection,
} from '@/components/sections';

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      <ScrollRail />
      <Header />
      <main id="main-content">
        <AboutHeroSection />
        <OverviewSection />
        <TeamStatsSection />
        <ValuesSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
