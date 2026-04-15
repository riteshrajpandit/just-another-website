/**
 * @file Sitemap Page
 * @description HTML sitemap listing all NEXACORE pages and content areas
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import styles from './Sitemap.module.css';

export const metadata: Metadata = {
  title: 'Sitemap — NEXACORE',
  description: 'A complete overview of all NEXACORE pages and content areas.',
  robots: { index: true, follow: true },
};

interface SitemapLink {
  label: string;
  href: string;
  isSub?: boolean;
}

interface SitemapCard {
  title: string;
  links: SitemapLink[];
}

const SITEMAP_CARDS: SitemapCard[] = [
  {
    title: 'Home',
    links: [{ label: 'Home', href: '/' }],
  },
  {
    title: 'Products',
    links: [
      { label: 'Products', href: '/products' },
      { label: 'NexaFlow', href: '/products#nexaflow', isSub: true },
      { label: 'CoreSync', href: '/products#coresync', isSub: true },
      { label: 'SecureVault', href: '/products#securevault', isSub: true },
      { label: 'PulseMetrics', href: '/products#pulsemetrics', isSub: true },
      { label: 'CloudOrchestra', href: '/products#cloudorchestra', isSub: true },
      { label: 'DeskCanvas', href: '/products#deskcanvas', isSub: true },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Cloud Migration', href: '/services#cloud-migration', isSub: true },
      { label: 'DevSecOps', href: '/services#devsecops', isSub: true },
      { label: 'Cybersecurity', href: '/services#cybersecurity', isSub: true },
      { label: 'Data Engineering', href: '/services#data-engineering', isSub: true },
      { label: 'Managed Infrastructure', href: '/services#managed-infra', isSub: true },
      { label: 'Digital Advisory', href: '/services#digital-advisory', isSub: true },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Resources', href: '/resources' },
      { label: 'FAQs', href: '/resources#faq', isSub: true },
      { label: 'Documentation', href: '/resources#docs', isSub: true },
      { label: 'Case Studies', href: '/resources#case-studies', isSub: true },
      { label: 'Training', href: '/resources#training', isSub: true },
      { label: 'Gallery', href: '/resources#gallery', isSub: true },
      { label: 'Blog', href: '/blog', isSub: true },
      { label: 'Trust Center', href: '/resources#trust-center', isSub: true },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Overview', href: '/about#overview', isSub: true },
      { label: 'Leadership', href: '/about#team', isSub: true },
      { label: 'Values', href: '/about#values', isSub: true },
      { label: 'Team', href: '/about#team', isSub: true },
    ],
  },
  {
    title: 'Careers',
    links: [
      { label: 'Careers', href: '/careers' },
      { label: 'Open Positions', href: '/careers#jobs', isSub: true },
      { label: 'Culture', href: '/careers#culture', isSub: true },
      { label: 'Benefits', href: '/careers#benefits', isSub: true },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Get Started', href: '/contact#get-started', isSub: true },
      { label: 'Book a Demo', href: '/contact#book-demo', isSub: true },
      { label: 'Contact Us', href: '/contact#contact', isSub: true },
    ],
  },
  {
    title: 'Blog',
    links: [{ label: 'Blog', href: '/blog' }],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
  {
    title: 'Account',
    links: [{ label: 'Login', href: '/login' }],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <p className="t-label">Navigation</p>
            <h1 className="t-display">Site Map</h1>
            <p className="t-body">
              A complete overview of all NEXACORE pages and content areas.
            </p>
          </div>
        </section>

        {/* Sitemap Grid */}
        <section className="section-pad">
          <div className="container">
            <div className={styles.grid}>
              {SITEMAP_CARDS.map((card) => (
                <div key={card.title} className={styles.card}>
                  <p className={styles.cardTitle}>{card.title}</p>
                  <ul className={styles.linkList} role="list">
                    {card.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className={link.isSub ? styles.subLink : styles.siteLink}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
