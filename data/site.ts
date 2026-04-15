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
    href: '/products#nexaflow',
    featured: true,
    headline: 'Automate any process. No code required.',
    features: [
      'Drag-and-drop visual builder with 200+ pre-built connectors',
      'AI decision nodes with explainable logic and audit trails',
      'Multi-tenant deployment with per-tenant isolated execution',
      'Real-time monitoring dashboard with SLA tracking',
    ],
    stat: { value: '14h → 4h', label: 'Average process cycle time reduction' },
    gradient: 'linear-gradient(135deg, #0d2a45, #1b76bb33)',
  },
  {
    id: 'coresync',
    name: 'CoreSync',
    tag: 'Integration',
    description:
      'Real-time bidirectional data synchronization between cloud, on-premise, and edge systems. Sub-100ms latency across distributed environments.',
    icon: 'box',
    href: '/products#coresync',
    featured: true,
    headline: 'One data layer. Every system in sync.',
    features: [
      'Sub-100ms bidirectional sync across cloud, on-premise, and edge',
      'Schema-agnostic mapping engine with conflict resolution',
      'Zero-downtime migration tooling with rollback support',
      'Full observability with lineage tracking and data quality scoring',
    ],
    stat: { value: '99.99%', label: 'Data consistency across environments' },
    gradient: 'linear-gradient(135deg, #0a2a0a, #1b6b3a33)',
  },
  {
    id: 'securevault',
    name: 'SecureVault',
    tag: 'Security',
    description:
      'Zero-trust identity and access management with adaptive MFA, privileged access controls, and continuous compliance monitoring.',
    icon: 'shield',
    href: '/products#securevault',
    featured: true,
    headline: 'Zero-trust security. Zero compromises.',
    features: [
      'Adaptive MFA with contextual risk scoring',
      'Privileged access management with just-in-time provisioning',
      'Continuous compliance monitoring for ISO 27001, SOC 2, HIPAA',
      'Automated threat detection and incident response playbooks',
    ],
    stat: { value: '100%', label: 'ISO 27001 audit pass rate on first attempt' },
    gradient: 'linear-gradient(135deg, #2a0a0a, #7a1b1b33)',
  },
  {
    id: 'pulsemetrics',
    name: 'PulseMetrics',
    tag: 'Observability',
    description:
      'Full-stack observability platform unifying metrics, traces, and logs with AI-powered anomaly detection and automated root cause analysis.',
    icon: 'activity',
    href: '/products#pulsemetrics',
    featured: false,
    headline: 'See everything. Miss nothing.',
    features: [
      'Unified metrics, traces, and logs in a single pane of glass',
      'AI anomaly detection with automated root cause analysis',
      'Custom SLA dashboards with executive-level reporting',
      'Integrates with Prometheus, Datadog, Grafana, and more',
    ],
    stat: { value: '74%', label: 'Reduction in mean time to resolution' },
    gradient: 'linear-gradient(135deg, #1a1a0a, #7a7a1b33)',
  },
  {
    id: 'cloudorchestra',
    name: 'CloudOrchestra',
    tag: 'Infrastructure',
    description:
      'Unified multi-cloud infrastructure management with policy-as-code, cost optimization, and automated provisioning across AWS, Azure, and GCP.',
    icon: 'cloud',
    href: '/products#cloudorchestra',
    featured: false,
    headline: 'Multi-cloud without the complexity.',
    features: [
      'Policy-as-code governance across AWS, Azure, and GCP',
      'Automated cost optimization with rightsizing recommendations',
      'One-click provisioning with Terraform and Pulumi integration',
      'Drift detection and auto-remediation for infrastructure compliance',
    ],
    stat: { value: '31%', label: 'Average cloud cost reduction in 90 days' },
    gradient: 'linear-gradient(135deg, #0a1a2a, #0d4a7833)',
  },
  {
    id: 'deskcanvas',
    name: 'DeskCanvas',
    tag: 'ITSM',
    description:
      'Intelligent service desk and ITSM suite with AI-powered ticket routing, SLA management, and self-service knowledge base built-in.',
    icon: 'monitor',
    href: '/products#deskcanvas',
    featured: false,
    headline: 'ITSM that actually learns your business.',
    features: [
      'AI-powered ticket classification and auto-routing',
      'Built-in knowledge base with semantic search',
      'Full ITIL alignment with customizable workflow templates',
      'SLA management with escalation rules and real-time alerts',
    ],
    stat: { value: '68%', label: 'Tickets resolved without human escalation' },
    gradient: 'linear-gradient(135deg, #1a0a2a, #5a1b8a33)',
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
    href: '/services#cloud-migration',
    featured: true,
    deliverables: [
      'Migration readiness assessment and TCO analysis',
      'Reference architecture design for target cloud environment',
      'Phased migration execution with rollback checkpoints',
      'Post-migration 90-day hypercare and optimization',
    ],
    outcome: 'Average 40% infrastructure cost reduction within 12 months of migration.',
  },
  {
    id: 'devsecops',
    number: '02',
    name: 'DevSecOps & CI/CD',
    description:
      'Integrate security into every stage of your delivery pipeline. We build automated gates, compliance checks, and deployment workflows that ship fast without sacrificing safety.',
    href: '/services#devsecops',
    featured: true,
    deliverables: [
      'Pipeline design and implementation (GitHub Actions, GitLab, Jenkins)',
      'SAST/DAST integration with policy-as-code gates',
      'Container and IaC security scanning with Snyk, Trivy, Checkov',
      'Developer security training and secure coding standards',
    ],
    outcome: 'Teams ship 3× more frequently with 60% fewer security findings in production.',
  },
  {
    id: 'cybersecurity',
    number: '03',
    name: 'Cybersecurity Operations',
    description:
      '24/7 SOC monitoring, threat intelligence feeds, and incident response retainers. Our security engineers are battle-tested across financial services, healthcare, and government sectors.',
    href: '/services#cybersecurity',
    featured: true,
    deliverables: [
      '24/7 SOC with dedicated tier-2 and tier-3 analysts',
      'Threat intelligence integration with MITRE ATT&CK mapping',
      'Incident response retainer with 1-hour SLA',
      'Monthly executive security briefings and risk scoring',
    ],
    outcome: 'Average 8-minute mean time to detect; 94% of incidents contained before breach.',
  },
  {
    id: 'data-engineering',
    number: '04',
    name: 'Data Engineering & Analytics',
    description:
      'Design and build enterprise data warehouses, real-time streaming pipelines, and governed data lakes that turn raw operational data into executive-level intelligence.',
    href: '/services#data-engineering',
    featured: false,
    deliverables: [
      'Modern data stack design (dbt, Snowflake, Databricks, Spark)',
      'Real-time streaming pipelines with Kafka and Flink',
      'Data governance framework with lineage and quality monitoring',
      'Executive BI dashboards and self-service analytics enablement',
    ],
    outcome: 'From raw data to boardroom insight in under 48 hours for 94% of report requests.',
  },
  {
    id: 'managed-infra',
    number: '05',
    name: 'Managed Infrastructure',
    description:
      'Proactive network operations, patch management, capacity planning, and incident resolution — so your internal teams can focus on business innovation, not firefighting.',
    href: '/services#managed-infra',
    featured: false,
    deliverables: [
      '24/7 NOC monitoring with proactive incident management',
      'Patch management and vulnerability remediation SLA',
      'Capacity planning and cost optimization reviews (quarterly)',
      'Dedicated infrastructure engineer with monthly strategy calls',
    ],
    outcome: '99.97% uptime SLA maintained across all managed client environments.',
  },
  {
    id: 'digital-advisory',
    number: '06',
    name: 'Digital Transformation Advisory',
    description:
      'Strategic roadmaps, technology selection, and organizational change management for enterprises beginning or accelerating their digital transformation journey.',
    href: '/services#digital-advisory',
    featured: false,
    deliverables: [
      'Current-state technology audit and maturity assessment',
      '3-year digital transformation roadmap with prioritized initiatives',
      'Vendor selection and technology evaluation frameworks',
      'Organizational change management and adoption planning',
    ],
    outcome: 'Clients achieve target digital maturity 2× faster than industry average.',
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
      { label: 'NexaFlow', href: '/products#nexaflow' },
      { label: 'CoreSync', href: '/products#coresync' },
      { label: 'SecureVault', href: '/products#securevault' },
      { label: 'PulseMetrics', href: '/products#pulsemetrics' },
      { label: 'CloudOrchestra', href: '/products#cloudorchestra' },
      { label: 'DeskCanvas', href: '/products#deskcanvas' },
      { label: 'View All Products', href: '/products', highlight: true },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Cloud Migration', href: '/services#cloud-migration' },
      { label: 'DevSecOps', href: '/services#devsecops' },
      { label: 'Data Engineering', href: '/services#data-engineering' },
      { label: 'Managed Infrastructure', href: '/services#managed-infra' },
      { label: 'Cybersecurity', href: '/services#cybersecurity' },
      { label: 'Digital Advisory', href: '/services#digital-advisory' },
      { label: 'Free Consultation', href: '/contact#book-demo', highlight: true },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/resources#docs' },
      { label: 'FAQs', href: '/resources#faq' },
      { label: 'Case Studies', href: '/resources#case-studies' },
      { label: 'End User Training', href: '/resources#training' },
      { label: 'Gallery', href: '/resources#gallery' },
      { label: 'Trust Center', href: '/resources#trust-center' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Overview', href: '/about#overview' },
      { label: 'Leadership', href: '/about#team' },
      { label: 'Team', href: '/about#team' },
      { label: 'Careers', href: '/careers', badge: '18 Open' },
      { label: 'Partners', href: '/#brands' },
      { label: 'Press', href: '/contact' },
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
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Sitemap', href: '/sitemap' },
  { label: 'Accessibility', href: '/accessibility' },
] as const;
