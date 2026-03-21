/**
 * @file About Page
 * @description Company information, team, and values page
 */

import { Header, Footer, ScrollRail } from '@/components/layout';
import {
  AboutHeroSection,
  OverviewSection,
  TeamStatsSection,
  ValuesSection,
  TeamSection,
  CTASection,
} from '@/components/sections';

export default function AboutPage() {
  return (
    <>
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
