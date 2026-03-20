/**
 * @file Contact page data configuration
 * @description Type-safe data for the contact page including plans, steps, and contact details
 */

// ============================================================
// Types
// ============================================================

export interface Plan {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly period?: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly recommended?: boolean;
  readonly badge?: string;
}

export interface Step {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface TrustBadge {
  readonly id: string;
  readonly label: string;
}

export interface Office {
  readonly id: string;
  readonly flag: string;
  readonly city: string;
  readonly address: string;
  readonly type: string;
}

export interface ContactDetail {
  readonly id: string;
  readonly icon: 'email' | 'phone' | 'chat' | 'partnership';
  readonly label: string;
  readonly value: string;
  readonly subtext: string;
}

export interface Architect {
  readonly initials: string;
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly specialties: readonly string[];
}

export interface ExpectItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

// ============================================================
// Pricing Plans
// ============================================================

export const plans: readonly Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '299',
    period: '/mo',
    description: 'For growing teams getting their first enterprise infrastructure layer in place.',
    features: [
      'Up to 10 users',
      '3 NexaCore products',
      'Standard SLA',
      'Email support',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '899',
    period: '/mo',
    description: 'For mid-market organizations requiring deeper integration and compliance tooling.',
    features: [
      'Up to 100 users',
      'Full product suite',
      '99.9% SLA',
      'Priority support, 24/7',
      'SSO and audit logs',
    ],
    recommended: true,
    badge: 'Most Popular',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom Pricing',
    description: 'For large organizations with complex infrastructure, compliance, and multi-region requirements.',
    features: [
      'Unlimited users',
      'Custom SLA (up to 99.99%)',
      'Dedicated CSM',
      'On-premise option',
      'Custom integrations',
    ],
  },
] as const;

// ============================================================
// Onboarding Steps
// ============================================================

export const onboardingSteps: readonly Step[] = [
  {
    number: '01',
    title: 'Submit Your Details',
    description: 'Tell us about your organization, team size, and the products you are interested in. No commitment required — this is purely exploratory.',
  },
  {
    number: '02',
    title: 'Meet Your Onboarding Engineer',
    description: 'Within one business day, a dedicated NEXACORE engineer contacts you to map your current architecture and design the integration plan.',
  },
  {
    number: '03',
    title: 'Go Live',
    description: 'Your environment is provisioned and configured. Your team gets access, training is scheduled, and you have a direct line to engineering support for the first 90 days.',
  },
] as const;

// ============================================================
// Trust Badges
// ============================================================

export const trustBadges: readonly TrustBadge[] = [
  { id: 'soc2', label: 'SOC 2 Type II' },
  { id: 'iso', label: 'ISO 27001' },
  { id: 'gdpr', label: 'GDPR Ready' },
  { id: 'hipaa', label: 'HIPAA Compliant' },
] as const;

// ============================================================
// Office Locations
// ============================================================

export const offices: readonly Office[] = [
  {
    id: 'austin',
    flag: 'US',
    city: 'Austin, Texas',
    address: '200 Congress Avenue, Suite 14F\nAustin, TX 78701, United States',
    type: 'Global HQ',
  },
  {
    id: 'london',
    flag: 'UK',
    city: 'London, England',
    address: '1 Canada Square, Level 22\nCanary Wharf, London E14 5AB',
    type: 'EMEA HQ',
  },
  {
    id: 'singapore',
    flag: 'SG',
    city: 'Singapore',
    address: 'One Raffles Quay, North Tower\nLevel 35, Singapore 048583',
    type: 'APAC HQ',
  },
  {
    id: 'sydney',
    flag: 'AU',
    city: 'Sydney, Australia',
    address: 'Level 25, Tower One, Barangaroo\nInternational Towers, Sydney NSW 2000',
    type: 'Regional Office',
  },
] as const;

// ============================================================
// Contact Details
// ============================================================

export const contactDetails: readonly ContactDetail[] = [
  {
    id: 'general',
    icon: 'email',
    label: 'General Enquiries',
    value: 'hello@nexacore.io',
    subtext: 'We respond within 4 business hours',
  },
  {
    id: 'sales',
    icon: 'phone',
    label: 'Sales',
    value: '+1 (512) 400-7700',
    subtext: 'Mon–Fri, 08:00–18:00 CST',
  },
  {
    id: 'support',
    icon: 'chat',
    label: 'Technical Support',
    value: 'support@nexacore.io',
    subtext: '24/7 for Professional and Enterprise',
  },
  {
    id: 'partners',
    icon: 'partnership',
    label: 'Partnerships',
    value: 'partners@nexacore.io',
    subtext: 'Technology alliances and resellers',
  },
] as const;

// ============================================================
// Solutions Architect (for Demo)
// ============================================================

export const architect: Architect = {
  initials: 'KM',
  name: 'Kavya Menon',
  role: 'Principal Solutions Architect',
  bio: 'Kavya has led over 180 enterprise demos and implementations across financial services, healthcare, and logistics. She will match your session to your stack — not a generic script.',
  specialties: ['Cloud Migration', 'Data Architecture', 'Zero-Trust Security', 'DevSecOps'],
};

// ============================================================
// What to Expect (Demo)
// ============================================================

export const expectItems: readonly ExpectItem[] = [
  {
    number: '01',
    title: 'Architecture Discovery',
    description: 'We start by understanding your current setup — cloud providers, data sources, team structure, and primary pain points.',
  },
  {
    number: '02',
    title: 'Live Product Walkthrough',
    description: 'A real environment, not a sandbox. We demonstrate the products most relevant to your requirements using actual data flows.',
  },
  {
    number: '03',
    title: 'Integration Feasibility',
    description: 'We map your existing tools to NEXACORE APIs and identify any custom work required before you commit to anything.',
  },
  {
    number: '04',
    title: 'Pricing Indication',
    description: 'No generic pricing sheets. You leave with a rough cost model based on your actual usage profile and product selection.',
  },
] as const;

// ============================================================
// SLA Response Times
// ============================================================

export const slaResponseTimes = [
  {
    id: 'critical',
    title: 'Critical Incidents',
    description: 'System down or data at risk',
    time: '15 min',
    color: '#ef4444',
  },
  {
    id: 'high',
    title: 'High Priority',
    description: 'Service degraded, business impact',
    time: '2 hours',
    color: 'var(--brand-warm)',
  },
  {
    id: 'general',
    title: 'General Support',
    description: 'Questions and configuration help',
    time: '4 hours',
    color: 'var(--brand-primary)',
  },
  {
    id: 'sales',
    title: 'Sales Enquiries',
    description: 'Pre-sales and demos',
    time: '1 business day',
    color: 'var(--brand-primary)',
  },
] as const;

// ============================================================
// Form Options
// ============================================================

export const roleOptions = [
  'CTO / CIO',
  'Engineering Director',
  'Product Manager',
  'DevOps / Platform Engineer',
  'IT Manager',
  'Other',
] as const;

export const teamSizeOptions = [
  '1–10',
  '11–50',
  '51–200',
  '201–1000',
  '1000+',
] as const;

export const companySizeOptions = [
  '1–50',
  '51–200',
  '201–1000',
  '1000+',
] as const;

export const timelineOptions = [
  'Within 2 weeks',
  '1 month',
  '1–3 months',
  '3–6 months',
  'Exploring options',
] as const;

export const subjectOptions = [
  'Pre-sales Enquiry',
  'Technical Support',
  'Partnership',
  'Press / Media',
  'Careers',
  'Other',
] as const;

export const productOptions = [
  { id: 'nexaflow', label: 'NexaFlow — Workflow Automation' },
  { id: 'coresync', label: 'CoreSync — Data Synchronization' },
  { id: 'securevault', label: 'SecureVault — Identity Management' },
  { id: 'pulsemetrics', label: 'PulseMetrics — Observability' },
  { id: 'cloudorchestra', label: 'CloudOrchestra — Infrastructure' },
] as const;

export const demoProductOptions = [
  { id: 'nexaflow', label: 'NexaFlow' },
  { id: 'coresync', label: 'CoreSync' },
  { id: 'securevault', label: 'SecureVault' },
  { id: 'pulsemetrics', label: 'PulseMetrics' },
  { id: 'all', label: 'Full Suite' },
] as const;

// ============================================================
// Hero Content
// ============================================================

export const getStartedHero = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Get Started', current: true },
  ],
  headline: {
    line1: 'Start in',
    line2: 'Minutes.',
  },
  description: 'Choose a plan, submit your details, and a NEXACORE onboarding engineer will reach out within one business day to configure your environment and get your team running.',
  statusItems: [
    { label: 'Average onboarding time', value: '1 business day', accent: false },
    { label: 'Dedicated onboarding engineer', value: 'Included', accent: true },
    { label: 'Free trial period', value: '30 days', accent: false },
    { label: 'Credit card required', value: 'No', muted: true },
  ],
};

export const bookDemoHero = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Book a Demo', current: true },
  ],
  headline: {
    line1: 'See It',
    line2: 'Live.',
  },
  description: 'A 45-minute live walkthrough with a senior NEXACORE solutions architect — tailored to your industry, stack, and the specific problems you are trying to solve. No slides. No sales script.',
  badges: [
    { icon: 'clock', label: '45 minutes' },
    { icon: 'user', label: 'Senior architect' },
    { icon: 'grid', label: 'Live product' },
  ],
};

export const contactHero = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Contact Us', current: true },
  ],
  headline: {
    line1: "Let's",
    line2: 'Talk.',
  },
  description: 'Whether you have a pre-sales question, a support issue, or a partnership enquiry — every message goes directly to a human who knows the platform.',
};
