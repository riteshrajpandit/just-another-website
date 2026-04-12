/**
 * @file Careers Page
 * @description Join NEXACORE — open roles, hiring process, benefits, culture
 */

import type { Metadata } from 'next';
import { Header, Footer, ScrollRail } from '@/components/layout';
import {
  CareerHeroSection,
  HiringProcessSection,
  CareerMissionSection,
  BenefitsSection,
  CultureSection,
  JobListingsSection,
  OpenApplicationSection,
} from '@/components/sections';

export const metadata: Metadata = {
  title: 'Careers — NEXACORE',
  description:
    'Build the infrastructure that powers thousands of enterprises. Join NEXACORE — where engineers, architects, and operators solve problems that matter.',
};

export default function CareersPage() {
  return (
    <>
      <ScrollRail />
      <Header />
      <main id="main-content">
        <CareerHeroSection />
        <HiringProcessSection />
        <CareerMissionSection />
        <BenefitsSection />
        <CultureSection />
        <JobListingsSection />
        <OpenApplicationSection />
      </main>
      <Footer />
    </>
  );
}
