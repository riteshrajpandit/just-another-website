/**
 * @file Resources Page
 * @description Knowledge base, documentation, case studies, training, gallery, blog, trust center
 */

import type { Metadata } from 'next';
import { Header, Footer, ScrollRail } from '@/components/layout';
import { CTASection } from '@/components/sections';
import { ResourcesHeroSection } from '@/components/sections/ResourcesHeroSection';
import { ResourcesFaqSection } from '@/components/sections/ResourcesFaqSection';
import { ResourcesDocSection } from '@/components/sections/ResourcesDocSection';
import { ResourcesCaseStudiesSection } from '@/components/sections/ResourcesCaseStudiesSection';
import { ResourcesTrainingSection } from '@/components/sections/ResourcesTrainingSection';
import { ResourcesGallerySection } from '@/components/sections/ResourcesGallerySection';
import { ResourcesBlogSection } from '@/components/sections/ResourcesBlogSection';
import { ResourcesTrustCenterSection } from '@/components/sections/ResourcesTrustCenterSection';

export const metadata: Metadata = {
  title: 'Resources — NEXACORE',
  description:
    'Documentation, FAQs, case studies, training courses, product gallery, engineering blog, and Trust Center — everything you need to evaluate, implement, and optimise NEXACORE.',
};

export default function ResourcesPage() {
  return (
    <>
      <ScrollRail />
      <Header />
      <main id="main-content">
        <ResourcesHeroSection />
        <ResourcesFaqSection />
        <ResourcesDocSection />
        <ResourcesCaseStudiesSection />
        <ResourcesTrainingSection />
        <ResourcesGallerySection />
        <ResourcesBlogSection />
        <ResourcesTrustCenterSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
