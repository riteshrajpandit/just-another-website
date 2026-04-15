/**
 * @file Products Page
 * @description Full product catalogue at /products
 */

import type { Metadata } from 'next';
import { Header, Footer, ScrollRail } from '@/components/layout';
import { ProductsHeroSection } from '@/components/sections/ProductsHeroSection';
import { ProductsCatalogueSection } from '@/components/sections/ProductsCatalogueSection';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Products — NEXACORE',
  description:
    'Explore the full NEXACORE product suite — six composable enterprise tools for automation, integration, security, observability, infrastructure, and ITSM.',
};

export default function ProductsPage() {
  return (
    <>
      <ScrollRail />
      <Header />
      <main id="main-content">
        <ProductsHeroSection />
        <ProductsCatalogueSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
