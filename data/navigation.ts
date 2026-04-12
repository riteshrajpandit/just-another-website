/**
 * @file Navigation data configuration
 * @description Type-safe navigation structure with mega menu configurations
 */

import type { NavLink, MegaMenuConfig } from '@/types';

// ============================================================
// Main Navigation Links
// ============================================================

export const navLinks: readonly NavLink[] = [
  { id: 'home', label: 'Home', href: '/', hasSubmenu: false },
  { id: 'products', label: 'Products', href: '/#products', hasSubmenu: true },
  { id: 'services', label: 'Services', href: '/#services', hasSubmenu: true },
  { id: 'resources', label: 'Resources', href: '#', hasSubmenu: true },
  { id: 'about', label: 'About Us', href: '/about', hasSubmenu: true },
  { id: 'careers', label: 'Careers', href: '/careers', hasSubmenu: false },
] as const;

// ============================================================
// Products Mega Menu
// ============================================================

export const productsMegaMenu: MegaMenuConfig = {
  width: 'wide',
  sections: [
    {
      label: 'Product Suite',
      items: [
        {
          id: 'nexaflow',
          name: 'NexaFlow',
          description: 'Visual workflow automation engine',
          icon: 'workflow',
        },
        {
          id: 'coresync',
          name: 'CoreSync',
          description: 'Real-time data synchronization platform',
          icon: 'clock',
        },
        {
          id: 'securevault',
          name: 'SecureVault',
          description: 'Zero-trust identity and access management',
          icon: 'shield',
        },
        {
          id: 'pulsemetrics',
          name: 'PulseMetrics',
          description: 'Enterprise observability and analytics',
          icon: 'activity',
        },
        {
          id: 'cloudorchestra',
          name: 'CloudOrchestra',
          description: 'Multi-cloud infrastructure management',
          icon: 'box',
        },
        {
          id: 'deskcanvas',
          name: 'DeskCanvas',
          description: 'Intelligent service desk and ITSM suite',
          icon: 'monitor',
        },
      ],
    },
  ],
  highlight: {
    badge: 'Featured',
    title: 'NexaFlow 4.0\nNow with AI Orchestration',
    description:
      'The most powerful workflow engine we have ever built. Automate complex enterprise processes with no-code visual builder and built-in AI decision nodes.',
    ctaLabel: 'Explore NexaFlow',
    ctaHref: '#products',
  },
};

// ============================================================
// Services Mega Menu
// ============================================================

export const servicesMegaMenu: MegaMenuConfig = {
  width: 'wide',
  sections: [
    {
      label: 'Core Services',
      items: [
        {
          id: 'cloud-migration',
          name: 'Cloud Migration',
          description: 'End-to-end lift-and-shift or re-architect',
        },
        {
          id: 'devsecops',
          name: 'DevSecOps',
          description: 'Pipelines, security gates, and deployment',
        },
        {
          id: 'data-engineering',
          name: 'Data Engineering',
          description: 'Warehouse design, ETL, and governance',
        },
      ],
    },
    {
      label: 'Managed Services',
      items: [
        {
          id: 'noc',
          name: '24/7 NOC Support',
          description: 'Round-the-clock network operations',
        },
        {
          id: 'cybersecurity',
          name: 'Cybersecurity',
          description: 'SOC, threat intelligence, and incident response',
        },
        {
          id: 'compliance',
          name: 'Compliance Audit',
          description: 'ISO 27001, SOC2, GDPR readiness',
        },
      ],
    },
    {
      label: 'Advisory',
      items: [
        {
          id: 'digital-transformation',
          name: 'Digital Transformation',
          description: 'Strategy, roadmap, and execution',
        },
        {
          id: 'architecture-review',
          name: 'Architecture Review',
          description: 'Infrastructure and system design audit',
        },
      ],
    },
  ],
  highlight: {
    badge: 'Free',
    title: 'Free Consultation',
    description:
      '30-minute strategy call with a senior solutions architect. No obligations, no sales pitch.',
    ctaLabel: 'Book Your Slot',
    ctaHref: '#cta',
    variant: 'brand',
  },
};

// ============================================================
// Resources Mega Menu
// ============================================================

export const resourcesMegaMenu: MegaMenuConfig = {
  width: 'wide',
  sections: [
    {
      label: 'Knowledge Base',
      items: [
        {
          id: 'faqs',
          name: 'FAQs',
          description: 'Common questions answered',
        },
        {
          id: 'documentation',
          name: 'Documentation',
          description: 'Technical API and product guides',
        },
        {
          id: 'case-studies',
          name: 'Case Studies',
          description: 'Client success stories and outcomes',
        },
      ],
    },
    {
      label: 'Learning',
      items: [
        {
          id: 'training',
          name: 'End User Training',
          description: 'Video courses and certification paths',
        },
        {
          id: 'gallery',
          name: 'Gallery',
          description: 'Product screenshots and demos',
        },
        {
          id: 'blog',
          name: 'Blog',
          description: 'Engineering and thought leadership',
        },
      ],
    },
  ],
  highlight: {
    badge: 'Security',
    title: 'Trust Center',
    description:
      'SOC 2 Type II certified. View our security posture, compliance reports, and data handling policies.',
    ctaLabel: 'View Trust Center',
    ctaHref: '#',
  },
};

// ============================================================
// About Mega Menu
// ============================================================

export const aboutMegaMenu: MegaMenuConfig = {
  width: 'narrow',
  sections: [
    {
      label: 'Company',
      items: [
        {
          id: 'overview',
          name: 'Overview',
          description: 'Our mission and founding story',
        },
        {
          id: 'leadership',
          name: 'Leadership',
          description: 'Executive team and board',
        },
        {
          id: 'partners',
          name: 'Partners',
          description: 'Our global technology alliances',
        },
      ],
    },
  ],
};

// ============================================================
// Mobile Navigation Items
// ============================================================

export const mobileNavItems = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    submenu: null,
  },
  {
    id: 'products',
    label: 'Products',
    href: '/#products',
    submenu: [
      'NexaFlow',
      'CoreSync',
      'SecureVault',
      'PulseMetrics',
      'CloudOrchestra',
      'DeskCanvas',
    ],
  },
  {
    id: 'services',
    label: 'Services',
    href: '/#services',
    submenu: [
      'Cloud Migration',
      'DevSecOps',
      'Data Engineering',
      '24/7 NOC Support',
      'Cybersecurity',
      'Free Consultation',
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    href: '#',
    submenu: [
      'FAQs',
      'Documentation',
      'Case Studies',
      'End User Training',
      'Gallery',
      'Trust Center',
      'Tools',
    ],
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about',
    submenu: ['Overview', 'Team', 'Careers'],
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    submenu: null,
  },
] as const;
