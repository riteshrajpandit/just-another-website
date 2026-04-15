/**
 * @file Resources page data
 * @description Content for all sections of the /resources page
 */

import type {
  FaqItem,
  DocSection,
  CaseStudy,
  TrainingCourse,
  GalleryItem,
  ComplianceCert,
  SecurityPolicy,
} from '@/types';

// ============================================================
// Hero
// ============================================================

export const resourcesHero = {
  eyebrow: 'Resources',
  headline: { line1: 'Everything You Need', line2: 'to Succeed.' },
  description:
    'Documentation, training, case studies, and engineering insights — all in one place. Whether you are evaluating, implementing, or optimising, we have you covered.',
} as const;

export const resourcesNavItems = [
  { id: 'faqs', label: 'FAQs', anchor: '#faqs' },
  { id: 'documentation', label: 'Documentation', anchor: '#documentation' },
  { id: 'case-studies', label: 'Case Studies', anchor: '#case-studies' },
  { id: 'training', label: 'Training', anchor: '#training' },
  { id: 'gallery', label: 'Gallery', anchor: '#gallery' },
  { id: 'blog', label: 'Blog', anchor: '#blog' },
  { id: 'trust-center', label: 'Trust Center', anchor: '#trust-center' },
] as const;

// ============================================================
// FAQs
// ============================================================

export const faqCategories = ['All', 'Platform', 'Pricing', 'Security', 'Integration', 'Support'] as const;

export const faqs: readonly FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Platform',
    question: 'Can I use NEXACORE products independently or do I need the full suite?',
    answer: 'Every NEXACORE product is designed as a standalone, composable unit. You can deploy NexaFlow without CoreSync, or SecureVault without PulseMetrics. Products are built on shared infrastructure but operate with full independence. Most clients start with one or two products and expand over time.',
  },
  {
    id: 'faq-2',
    category: 'Pricing',
    question: 'How does NEXACORE pricing work?',
    answer: 'We offer three tiers: Starter ($299/month), Professional ($899/month), and Enterprise (custom). All plans include access to the core product suite, onboarding support, and uptime SLA. Enterprise plans include custom integrations, a dedicated CSM, and on-premise deployment options. Annual billing includes a 20% discount.',
  },
  {
    id: 'faq-3',
    category: 'Security',
    question: 'Is NEXACORE SOC 2 Type II certified?',
    answer: 'Yes. NEXACORE has held SOC 2 Type II certification since 2019. Our security controls are audited annually by an independent third party. We are also ISO 27001 certified and maintain GDPR compliance for all EU-based clients. Full audit reports are available to enterprise customers upon request.',
  },
  {
    id: 'faq-4',
    category: 'Integration',
    question: 'What systems does CoreSync integrate with out of the box?',
    answer: 'CoreSync ships with 200+ pre-built connectors including Salesforce, SAP, Oracle ERP, Microsoft 365, AWS services, Azure, GCP, HubSpot, Workday, and major databases (PostgreSQL, MySQL, MSSQL, MongoDB). Custom connectors can be built using our REST/GraphQL connector SDK in under a day.',
  },
  {
    id: 'faq-5',
    category: 'Support',
    question: 'What is the SLA for support tickets?',
    answer: 'Starter plans receive email support with a 24-hour response SLA. Professional plans include priority support with a 4-hour SLA and 24/7 emergency escalation. Enterprise plans have a 1-hour SLA with a dedicated support engineer and 15-minute SLA for P1 incidents.',
  },
  {
    id: 'faq-6',
    category: 'Platform',
    question: 'Does NEXACORE support multi-tenancy?',
    answer: 'Yes. NexaFlow, CoreSync, and SecureVault are all built multi-tenant from the ground up with full tenant isolation at the data, execution, and network layers. Each tenant has isolated compute, separate encryption keys, and configurable data residency options.',
  },
  {
    id: 'faq-7',
    category: 'Security',
    question: 'How is data encrypted at rest and in transit?',
    answer: 'All data at rest is encrypted using AES-256. Data in transit uses TLS 1.3 with certificate pinning. Encryption keys are managed per-tenant using NEXACORE Key Management Service (backed by AWS KMS or Azure Key Vault depending on deployment). Customers on Enterprise can bring their own keys (BYOK).',
  },
  {
    id: 'faq-8',
    category: 'Pricing',
    question: 'Is there a free trial available?',
    answer: 'Yes. All plans include a 30-day free trial with no credit card required. During the trial, you get full access to the selected product tier. Our onboarding team will configure your environment and schedule a walkthrough within one business day of signup.',
  },
] as const;

// ============================================================
// Documentation
// ============================================================

export const docSections: readonly DocSection[] = [
  { id: 'getting-started', title: 'Getting Started', description: 'Account setup, environment provisioning, and first workflow in under 30 minutes.', articles: 12, icon: 'play', updated: 'Apr 2026' },
  { id: 'nexaflow-docs', title: 'NexaFlow', description: 'Workflow builder, trigger types, AI decision nodes, and audit trail configuration.', articles: 38, icon: 'workflow', updated: 'Apr 2026' },
  { id: 'coresync-docs', title: 'CoreSync', description: 'Connector setup, mapping engine, conflict resolution, and monitoring dashboards.', articles: 31, icon: 'box', updated: 'Mar 2026' },
  { id: 'securevault-docs', title: 'SecureVault', description: 'Identity policies, MFA flows, PAM configuration, and compliance reporting.', articles: 27, icon: 'shield', updated: 'Apr 2026' },
  { id: 'pulsemetrics-docs', title: 'PulseMetrics', description: 'Instrumentation, dashboards, alert rules, anomaly detection, and SLA tracking.', articles: 24, icon: 'activity', updated: 'Mar 2026' },
  { id: 'api-reference', title: 'API Reference', description: 'REST and GraphQL API endpoints, authentication, rate limits, and SDK documentation.', articles: 45, icon: 'code', updated: 'Apr 2026' },
  { id: 'cloudorchestra-docs', title: 'CloudOrchestra', description: 'Multi-cloud setup, policy-as-code, cost dashboards, and provisioning templates.', articles: 22, icon: 'cloud', updated: 'Mar 2026' },
  { id: 'deskcanvas-docs', title: 'DeskCanvas', description: 'Ticket routing, SLA rules, knowledge base, and ITIL workflow templates.', articles: 19, icon: 'monitor', updated: 'Feb 2026' },
] as const;

// ============================================================
// Case Studies
// ============================================================

export const caseStudies: readonly CaseStudy[] = [
  {
    id: 'meridian-financial',
    client: 'Meridian Financial Group',
    industry: 'Financial Services',
    challenge: 'Fragmented legacy infrastructure causing 14-day manual reconciliation cycles and growing compliance exposure.',
    outcome: 'Full platform migration with CoreSync + SecureVault reduced reconciliation to 4 hours and achieved ISO 27001 on first audit.',
    metrics: [
      { value: '74%', label: 'Incident rate reduction' },
      { value: '4h', label: 'Reconciliation cycle' },
      { value: '100%', label: 'Audit pass rate' },
    ],
    products: ['CoreSync', 'SecureVault', 'NexaFlow'],
  },
  {
    id: 'arcturus-healthcare',
    client: 'Arcturus Healthcare',
    industry: 'Healthcare Technology',
    challenge: 'Building a HIPAA-compliant data pipeline to unify patient data across 12 hospital systems in 11 weeks.',
    outcome: 'NEXACORE data engineering team delivered a fully governed pipeline on time, passing all HIPAA compliance checks on first review.',
    metrics: [
      { value: '11wk', label: 'Delivery timeline' },
      { value: '12', label: 'Systems unified' },
      { value: '0', label: 'Compliance failures' },
    ],
    products: ['CoreSync', 'SecureVault', 'PulseMetrics'],
  },
  {
    id: 'stratosys-logistics',
    client: 'Stratosys Logistics',
    industry: 'Supply Chain',
    challenge: 'A 14-day manual procurement process creating delivery bottlenecks and vendor SLA violations across 200+ suppliers.',
    outcome: 'NexaFlow automated the entire procurement workflow end-to-end, reducing cycle time by 71% and eliminating vendor escalations.',
    metrics: [
      { value: '71%', label: 'Cycle time reduction' },
      { value: '200+', label: 'Suppliers automated' },
      { value: '4h', label: 'New cycle time' },
    ],
    products: ['NexaFlow', 'CoreSync'],
  },
  {
    id: 'ironbay-govt',
    client: 'Ironbay Government',
    industry: 'Public Sector',
    challenge: 'Modernising a 15-year-old on-premise network operations centre to meet new government cloud mandates.',
    outcome: 'CloudOrchestra + managed infrastructure services completed the migration with zero downtime and achieved compliance in 6 months.',
    metrics: [
      { value: '6mo', label: 'Migration timeline' },
      { value: '0', label: 'Downtime minutes' },
      { value: '40%', label: 'Infrastructure cost reduction' },
    ],
    products: ['CloudOrchestra', 'SecureVault'],
  },
] as const;

// ============================================================
// Training
// ============================================================

export const trainingCourses: readonly TrainingCourse[] = [
  { id: 'nexaflow-101', title: 'NexaFlow Foundations', level: 'Beginner', duration: '4 hours', modules: 8, product: 'NexaFlow', certified: true },
  { id: 'nexaflow-adv', title: 'NexaFlow: AI Decision Nodes', level: 'Advanced', duration: '3 hours', modules: 6, product: 'NexaFlow', certified: true },
  { id: 'coresync-101', title: 'CoreSync Essentials', level: 'Beginner', duration: '3.5 hours', modules: 7, product: 'CoreSync', certified: true },
  { id: 'securevault-101', title: 'SecureVault Zero-Trust Setup', level: 'Intermediate', duration: '5 hours', modules: 10, product: 'SecureVault', certified: true },
  { id: 'pulsemetrics-101', title: 'PulseMetrics Observability', level: 'Intermediate', duration: '4 hours', modules: 8, product: 'PulseMetrics', certified: false },
  { id: 'cloudorchestra-101', title: 'CloudOrchestra Multi-Cloud', level: 'Advanced', duration: '6 hours', modules: 12, product: 'CloudOrchestra', certified: true },
] as const;

// ============================================================
// Gallery
// ============================================================

export const galleryItems: readonly GalleryItem[] = [
  { id: 'g1', title: 'NexaFlow Workflow Builder', caption: 'Visual drag-and-drop canvas with AI decision node configuration', product: 'NexaFlow', category: 'UI' },
  { id: 'g2', title: 'PulseMetrics Dashboard', caption: 'Real-time observability with anomaly detection overlay', product: 'PulseMetrics', category: 'Dashboard' },
  { id: 'g3', title: 'CoreSync Mapping Engine', caption: 'Schema mapper with field-level transformation preview', product: 'CoreSync', category: 'Integration' },
  { id: 'g4', title: 'SecureVault IAM Console', caption: 'Privilege access matrix and just-in-time provisioning panel', product: 'SecureVault', category: 'UI' },
  { id: 'g5', title: 'CloudOrchestra Multi-Cloud View', caption: 'Unified infrastructure topology across AWS, Azure, and GCP', product: 'CloudOrchestra', category: 'Architecture' },
  { id: 'g6', title: 'DeskCanvas Ticket Queue', caption: 'AI-routed ticket queue with SLA countdown and priority scoring', product: 'DeskCanvas', category: 'Dashboard' },
] as const;

// Blog posts have been moved to data/blog.ts for the full /blog page.
// ResourcesBlogSection now imports from data/blog.ts directly.

// ============================================================
// Trust Center
// ============================================================

export const complianceCerts: readonly ComplianceCert[] = [
  { id: 'soc2', name: 'SOC 2 Type II', issuer: 'AICPA', status: 'Current', description: 'Annual third-party audit of security, availability, and confidentiality controls. Last audited February 2026.' },
  { id: 'iso27001', name: 'ISO 27001:2022', issuer: 'BSI Group', status: 'Current', description: 'International standard for information security management systems. Certified since 2019.' },
  { id: 'gdpr', name: 'GDPR Compliance', issuer: 'EU DPA', status: 'Current', description: 'Full compliance with EU General Data Protection Regulation. Data processing agreements available on request.' },
  { id: 'hipaa', name: 'HIPAA Readiness', issuer: 'HHS', status: 'Current', description: 'BAA available for all Enterprise clients. Healthcare data handling meets all HIPAA technical safeguards.' },
  { id: 'pci-dss', name: 'PCI DSS Level 1', issuer: 'PCI SSC', status: 'In Progress', description: 'Payment card data compliance certification in progress. Expected Q3 2026.' },
] as const;

export const securityPolicies: readonly SecurityPolicy[] = [
  { id: 'encryption', title: 'Encryption at Rest & in Transit', description: 'AES-256 at rest, TLS 1.3 in transit, per-tenant keys, BYOK for Enterprise.', icon: 'lock' },
  { id: 'access', title: 'Access Controls', description: 'Role-based access, MFA enforced, just-in-time privilege escalation, full audit log.', icon: 'shield' },
  { id: 'incident', title: 'Incident Response', description: '24/7 security operations, 1-hour P1 SLA, public status page, customer notification within 72 hours.', icon: 'alert' },
  { id: 'pentest', title: 'Penetration Testing', description: 'Annual third-party pen test by NCC Group. Results summarised in the Security Posture Report.', icon: 'search' },
  { id: 'backup', title: 'Data Backup & Recovery', description: 'Daily encrypted backups with 30-day retention, cross-region replication, 4-hour RTO.', icon: 'server' },
  { id: 'vendor', title: 'Vendor Risk Management', description: 'All third-party vendors assessed against SOC 2 and ISO 27001 before onboarding.', icon: 'check' },
] as const;
