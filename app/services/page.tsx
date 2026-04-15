/**
 * @file Services Page
 * @description Full services catalogue at /services
 */

import type { Metadata } from 'next';
import { Header, Footer, ScrollRail } from '@/components/layout';
import { ServicesHeroSection } from '@/components/sections/ServicesHeroSection';
import { ServicesDetailSection } from '@/components/sections/ServicesDetailSection';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Services — NEXACORE',
  description:
    'Outcome-based enterprise services: cloud migration, DevSecOps, cybersecurity operations, data engineering, managed infrastructure, and digital transformation advisory.',
};

export default function ServicesPage() {
  return (
    <>
      <ScrollRail />
      <Header />
      <main id="main-content">
        <ServicesHeroSection />
        <ServicesDetailSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
