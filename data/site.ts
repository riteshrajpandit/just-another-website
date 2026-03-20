/**
 * @file Site data configuration
 * @description Type-safe content data for the NEXACORE portfolio site
 * @compliance GDPR-compliant - No personal data stored without consent
 */

import type {
  Product,
  Service,
  Brand,
  EarlyAdopter,
  TimelineEvent,
  Testimonial,
  StatItem,
  HeroMetaItem,
  FooterColumn,
  SocialLink,
  CompanyInfo,
  SectionConfig,
} from '@/types';

// ============================================================
// Company Information
// ============================================================

export const companyInfo: CompanyInfo = {
  name: 'NEXACORE',
  tagline: 'Enterprise technology infrastructure for organizations that cannot afford to slow down.',
  foundedYear: 2012,
  copyright: '2024 NEXACORE, Inc. All rights reserved.',
};

// ============================================================
// Section Configuration
// ============================================================

export const sections: readonly SectionConfig[] = [
  { id: 'hero', name: 'HOME', title: 'Home' },
  { id: 'stats', name: 'STATS', title: 'Stats' },
  { id: 'products', name: 'PRODUCTS', title: 'Products' },
  { id: 'services', name: 'SERVICES', title: 'Services' },
  { id: 'brands', name: 'PARTNERS', title: 'Partners' },
  { id: 'early-adopters', name: 'ADOPTERS', title: 'Early Adopters' },
  { id: 'testimonials', name: 'TESTIMONIALS', title: 'Testimonials' },
  { id: 'cta', name: 'START', title: 'Get Started' },
] as const;

// ============================================================
// Hero Section Data
// ============================================================

export const heroData = {
  eyebrow: 'Enterprise Technology Solutions',
  headline: {
    line1: 'Infrastructure',
    line2: 'That Scales.',
  },
  description:
    'NEXACORE delivers cloud-native platforms, intelligent automation, and enterprise security architecture that empowers organizations to operate at the speed of modern business.',
  primaryCta: {
    label: 'Explore Platform',
    href: '#products',
  },
  secondaryCta: {
    label: 'Book a Demo',
    href: '/contact#book-demo',
  },
} as const;

export const heroMetaItems: readonly HeroMetaItem[] = [
  { value: '340', accent: '+', label: 'Enterprise Clients' },
  { value: '99.97', accent: '%', label: 'Uptime SLA' },
  { value: '12', accent: 'yr', label: 'In the Industry' },
] as const;

// ============================================================
// Stats Section Data
// ============================================================

export const stats: readonly StatItem[] = [
  { id: 'clients', value: 340, suffix: '+', label: 'Enterprise Clients Worldwide' },
  { id: 'api-calls', value: 18, suffix: 'M+', label: 'API Calls Processed Daily' },
  { id: 'uptime', value: 99, suffix: '.97%', label: 'Guaranteed Uptime SLA' },
  { id: 'roi', value: 4, suffix: 'x', label: 'Average ROI Improvement' },
] as const;

// ============================================================
// Products Data
// ============================================================

export const products: readonly Product[] = [
  {
    id: 'nexaflow',
    name: 'NexaFlow',
    tag: 'Automation',
    description:
      'Visual workflow automation engine with drag-and-drop process builder, AI decision nodes, and enterprise-grade audit trails.',
    icon: 'workflow',
    href: '#',
  },
  {
    id: 'coresync',
    name: 'CoreSync',
    tag: 'Integration',
    description:
      'Real-time bidirectional data synchronization between cloud, on-premise, and edge systems. Sub-100ms latency across distributed environments.',
    icon: 'box',
    href: '#',
  },
  {
    id: 'securevault',
    name: 'SecureVault',
    tag: 'Security',
    description:
      'Zero-trust identity and access management with adaptive MFA, privileged access controls, and continuous compliance monitoring.',
    icon: 'shield',
    href: '#',
  },
  {
    id: 'pulsemetrics',
    name: 'PulseMetrics',
    tag: 'Observability',
    description:
      'Full-stack observability platform unifying metrics, traces, and logs with AI-powered anomaly detection and automated root cause analysis.',
    icon: 'activity',
    href: '#',
  },
  {
    id: 'cloudorchestra',
    name: 'CloudOrchestra',
    tag: 'Infrastructure',
    description:
      'Unified multi-cloud infrastructure management with policy-as-code, cost optimization, and automated provisioning across AWS, Azure, and GCP.',
    icon: 'cloud',
    href: '#',
  },
  {
    id: 'deskcanvas',
    name: 'DeskCanvas',
    tag: 'ITSM',
    description:
      'Intelligent service desk and ITSM suite with AI-powered ticket routing, SLA management, and self-service knowledge base built-in.',
    icon: 'monitor',
    href: '#',
  },
] as const;

// ============================================================
// Services Data
// ============================================================

export const services: readonly Service[] = [
  {
    id: 'cloud-migration',
    number: '01',
    name: 'Cloud Migration & Modernization',
    description:
      'End-to-end migration strategy and execution — from legacy lift-and-shift to full cloud-native re-architecture. We assess, plan, and migrate with zero business disruption.',
    href: '#',
  },
  {
    id: 'devsecops',
    number: '02',
    name: 'DevSecOps & CI/CD',
    description:
      'Integrate security into every stage of your delivery pipeline. We build automated gates, compliance checks, and deployment workflows that ship fast without sacrificing safety.',
    href: '#',
  },
  {
    id: 'cybersecurity',
    number: '03',
    name: 'Cybersecurity Operations',
    description:
      '24/7 SOC monitoring, threat intelligence feeds, and incident response retainers. Our security engineers are battle-tested across financial services, healthcare, and government sectors.',
    href: '#',
  },
  {
    id: 'data-engineering',
    number: '04',
    name: 'Data Engineering & Analytics',
    description:
      'Design and build enterprise data warehouses, real-time streaming pipelines, and governed data lakes that turn raw operational data into executive-level intelligence.',
    href: '#',
  },
  {
    id: 'managed-infra',
    number: '05',
    name: 'Managed Infrastructure',
    description:
      'Proactive network operations, patch management, capacity planning, and incident resolution — so your internal teams can focus on business innovation, not firefighting.',
    href: '#',
  },
  {
    id: 'digital-advisory',
    number: '06',
    name: 'Digital Transformation Advisory',
    description:
      'Strategic roadmaps, technology selection, and organizational change management for enterprises beginning or accelerating their digital transformation journey.',
    href: '#',
  },
] as const;

// ============================================================
// Brands Data
// ============================================================

export const brandsRow1: readonly Brand[] = [
  { id: 'meridian', name: 'Meridian' },
  { id: 'arcturus', name: 'Arcturus' },
  { id: 'verilink', name: 'Verilink' },
  { id: 'stratosys', name: 'Stratosys' },
  { id: 'pinnacle', name: 'Pinnacle' },
  { id: 'celadon', name: 'Celadon' },
  { id: 'ironbay', name: 'Ironbay' },
  { id: 'luminos', name: 'Luminos' },
] as const;

export const brandsRow2: readonly Brand[] = [
  { id: 'orelix', name: 'Orelix' },
  { id: 'quantex', name: 'Quantex' },
  { id: 'novaris', name: 'Novaris' },
  { id: 'halcyon', name: 'Halcyon' },
  { id: 'deltavex', name: 'Deltavex' },
  { id: 'zenith', name: 'Zenith' },
  { id: 'paragon', name: 'Paragon' },
  { id: 'colossus', name: 'Colossus' },
] as const;

// ============================================================
// Early Adopters Data
// ============================================================

export const earlyAdopters: readonly EarlyAdopter[] = [
  { id: 'meridian-financial', name: 'Meridian Financial Group', industry: 'Financial Services', badge: 'Early Adopter' },
  { id: 'arcturus-healthcare', name: 'Arcturus Healthcare', industry: 'Healthcare Technology', badge: 'Early Adopter' },
  { id: 'stratosys-logistics', name: 'Stratosys Logistics', industry: 'Supply Chain', badge: 'Early Adopter' },
  { id: 'pinnacle-energy', name: 'Pinnacle Energy', industry: 'Energy & Utilities', badge: 'Early Adopter' },
  { id: 'celadon-retail', name: 'Celadon Retail Group', industry: 'Retail & Commerce', badge: 'Early Adopter' },
  { id: 'ironbay-govt', name: 'Ironbay Government', industry: 'Public Sector', badge: 'Early Adopter' },
  { id: 'luminos-edu', name: 'Luminos Education', industry: 'EdTech', badge: 'Early Adopter' },
  { id: 'orelix-mfg', name: 'Orelix Manufacturing', industry: 'Industrial IoT', badge: 'Early Adopter' },
] as const;

// ============================================================
// Timeline Data
// ============================================================

export const timeline: readonly TimelineEvent[] = [
  { year: '2012', event: 'Company founded in Austin, TX' },
  { year: '2014', event: 'First enterprise client — Meridian Financial' },
  { year: '2016', event: 'CoreSync v1.0 launched' },
  { year: '2018', event: 'Series B — $42M raised' },
  { year: '2020', event: 'NexaFlow and SecureVault launched' },
  { year: '2022', event: 'Expanded to EMEA and APAC markets' },
  { year: '2024', event: 'AI Orchestration suite introduced' },
  { year: '2025', event: '340+ enterprise clients globally' },
] as const;

// ============================================================
// Testimonials Data
// ============================================================

export const testimonials: readonly Testimonial[] = [
  {
    id: 'testimonial-1',
    text: 'NEXACORE did not just migrate our infrastructure — they rebuilt the way our engineering organization thinks about reliability. Our incident rate dropped by 74% in the first year.',
    authorName: 'James Whitmore',
    authorRole: 'CTO — Meridian Financial Group',
    authorInitials: 'JW',
  },
  {
    id: 'testimonial-2',
    text: 'We evaluated seven vendors. NEXACORE was the only team that understood healthcare compliance at a deep technical level. They built our entire HIPAA-compliant data pipeline in eleven weeks.',
    authorName: 'Sophia Reyes',
    authorRole: 'VP Engineering — Arcturus Healthcare',
    authorInitials: 'SR',
  },
  {
    id: 'testimonial-3',
    text: 'NexaFlow transformed our procurement process from a 14-day manual bottleneck into a four-hour automated workflow. That is not an improvement — that is a category change.',
    authorName: 'Daniel Kim',
    authorRole: 'Director of Operations — Stratosys Logistics',
    authorInitials: 'DK',
  },
  {
    id: 'testimonial-4',
    text: 'The SecureVault deployment passed our external ISO 27001 audit on the first attempt. The NEXACORE security team knows their craft better than any vendor we have worked with.',
    authorName: 'Amanda Lee',
    authorRole: 'CISO — Pinnacle Energy',
    authorInitials: 'AL',
  },
] as const;

// ============================================================
// CTA Section Data
// ============================================================

export const ctaData = {
  label: 'Ready to transform your infrastructure?',
  headline: 'Start Building\nSmarter Today',
  description:
    'Join 340+ enterprises running mission-critical operations on NEXACORE. Your first consultation is free.',
  primaryCta: {
    label: 'Get Started Free',
    href: '/contact',
  },
  secondaryCta: {
    label: 'Book a Demo',
    href: '/contact#book-demo',
  },
} as const;

// ============================================================
// Footer Data
// ============================================================

export const footerColumns: readonly FooterColumn[] = [
  {
    title: 'Products',
    links: [
      { label: 'NexaFlow', href: '#' },
      { label: 'CoreSync', href: '#' },
      { label: 'SecureVault', href: '#' },
      { label: 'PulseMetrics', href: '#' },
      { label: 'CloudOrchestra', href: '#' },
      { label: 'DeskCanvas', href: '#' },
      { label: 'View All Products', href: '#', highlight: true },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Cloud Migration', href: '#' },
      { label: 'DevSecOps', href: '#' },
      { label: 'Data Engineering', href: '#' },
      { label: 'Managed Infrastructure', href: '#' },
      { label: 'Cybersecurity', href: '#' },
      { label: 'Digital Advisory', href: '#' },
      { label: 'Free Consultation', href: '/contact#book-demo', highlight: true },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'End User Training', href: '#' },
      { label: 'Gallery', href: '#' },
      { label: 'Trust Center', href: '#' },
      { label: 'API Status', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Overview', href: '/about#overview' },
      { label: 'Leadership', href: '/about#team' },
      { label: 'Team', href: '/about#team' },
      { label: 'Careers', href: '/about#team', badge: '18 Open' },
      { label: 'Partners', href: '/#brands' },
      { label: 'Press', href: '#' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
] as const;

export const socialLinks: readonly SocialLink[] = [
  { id: 'linkedin', label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { id: 'twitter', label: 'Twitter/X', href: '#', icon: 'twitter' },
  { id: 'github', label: 'GitHub', href: '#', icon: 'github' },
  { id: 'youtube', label: 'YouTube', href: '#', icon: 'youtube' },
] as const;

export const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Sitemap', href: '#' },
  { label: 'Accessibility', href: '#' },
] as const;
