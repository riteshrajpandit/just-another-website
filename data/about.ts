/**
 * @file About page data configuration
 * @description Type-safe content data for the About page
 */

import type {
  AboutBadge,
  OverviewBlock,
  TeamStatsItem,
  ValueCard,
  TeamMember,
} from '@/types';

// ============================================================
// About Hero Data
// ============================================================

export const aboutHero = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about', current: true },
  ],
  headline: {
    line1: 'People Behind',
    line2: 'The Platform.',
  },
  description:
    'NEXACORE was built by engineers, architects, and operators who grew tired of enterprise software that overpromises and underdelivers. We have spent twelve years proving that infrastructure can be both powerful and humane.',
} as const;

export const aboutBadges: readonly AboutBadge[] = [
  { id: 'founded', label: 'Founded 2012' },
  { id: 'hq', label: 'Austin, TX Headquarters' },
  { id: 'offices', label: '4 Global Offices' },
  { id: 'iso', label: 'ISO 27001 Certified' },
  { id: 'soc', label: 'SOC 2 Type II' },
] as const;

// ============================================================
// Overview Section Data
// ============================================================

export const overviewData = {
  yearMark: '12',
  eyebrow: 'Company Overview',
  headline: {
    line1: 'Built to Last.',
    line2: 'Built to Scale.',
  },
  description:
    'Twelve years of shipping enterprise software has given us a clear point of view: complexity is the enemy of reliability. Every NEXACORE product is designed to reduce operational complexity, not add to it.',
  ctas: [
    { label: 'Meet the Team', href: '#team' },
    { label: 'Work With Us', href: '/#cta' },
  ],
} as const;

export const overviewBlocks: readonly OverviewBlock[] = [
  {
    id: 'mission',
    number: '01 — Mission',
    title: 'Simplify Enterprise Operations',
    text: 'We exist to remove the operational drag that slows enterprises down. Our products are built around the belief that technology should create leverage, not dependencies. When your infrastructure works the way it is supposed to, your teams spend their time building rather than maintaining.',
  },
  {
    id: 'approach',
    number: '02 — Approach',
    title: 'Engineering-Led, Outcome-Focused',
    text: 'Every engagement starts with a deep technical discovery. We do not begin with a product pitch — we begin with your architecture. Our solutions architects spend the first two weeks mapping your current state before recommending anything. This is why our implementations succeed where others fail.',
  },
  {
    id: 'culture',
    number: '03 — Culture',
    title: 'Transparent by Default',
    text: 'We publish our service status publicly. Our SLA reports are visible to all clients. Our engineering team writes openly about what went wrong and how it was fixed. Transparency is not a marketing position for us — it is how we build trust over contracts that span years, not quarters.',
  },
  {
    id: 'scale',
    number: '04 — Scale',
    title: 'From Series A to Global Enterprise',
    text: 'Our client base spans pre-IPO technology companies, regional financial institutions, and Fortune 500 enterprises. We have designed our platform to grow with you — the same product that supports fifty engineers today is running the infrastructure for operations that process eighteen million API calls per day.',
  },
] as const;

// ============================================================
// Team Stats Data
// ============================================================

export const teamStats: readonly TeamStatsItem[] = [
  { id: 'team', value: 287, suffix: '+', label: 'Team Members Worldwide' },
  { id: 'engineering', value: 31, suffix: '%', label: 'Engineering Staff' },
  { id: 'open', value: 18, suffix: '', label: 'Open Positions Right Now' },
  { id: 'nationalities', value: 42, suffix: '+', label: 'Nationalities Represented' },
  { id: 'retention', value: 94, suffix: '%', label: 'Annual Retention Rate' },
] as const;

// ============================================================
// Core Values Data
// ============================================================

export const values: readonly ValueCard[] = [
  {
    id: 'reliability',
    number: '01 — Reliability First',
    title: 'We Ship on Time,\nEvery Time',
    description:
      'Deadlines are commitments, not estimates. When we tell a client something will be live on a specific date, the engineering team plans backward from that date and treats it as a hard constraint — not a target.',
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  {
    id: 'transparency',
    number: '02 — Radical Transparency',
    title: 'Say the Hard\nThing Early',
    description:
      'Bad news does not improve with age. We expect every team member to raise issues the moment they are identified — to the client, to management, to the team. Silence is the most expensive option.',
    iconPath: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z M12 8v4M12 16h.01',
  },
  {
    id: 'depth',
    number: '03 — Depth Over Breadth',
    title: 'Master Your\nDomain',
    description:
      'We do not hire generalists and hope they become specialists. We hire people who are already expert in their domain and give them the space to go deeper. Shallow expertise is a liability at enterprise scale.',
    iconPath: 'M22 12 18 12 15 21 9 3 6 12 2 12',
  },
  {
    id: 'client-obsession',
    number: '04 — Client Obsession',
    title: 'Their Problem\nIs Our Problem',
    description:
      'We do not consider an engagement finished when the contract closes — we consider it finished when the client can demonstrate a measurable outcome. Our post-deployment support model reflects this commitment.',
    iconPath: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  },
  {
    id: 'systems-thinking',
    number: '05 — Systems Thinking',
    title: 'See the Whole\nBefore the Part',
    description:
      'Every technical decision has downstream consequences. Before we touch architecture, we map the full system — dependencies, failure modes, organizational constraints, and long-term maintenance burden.',
    iconPath: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
  },
  {
    id: 'continuous-improvement',
    number: '06 — Continuous Improvement',
    title: 'Last Year\'s Best\nIs Today\'s Baseline',
    description:
      'We run quarterly retrospectives on every product, every service, and every internal process. The goal is not to celebrate what worked — it is to identify what can be one percent better by next quarter.',
    iconPath: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
  },
] as const;

// ============================================================
// Team Members Data
// ============================================================

export const teamMembers: readonly TeamMember[] = [
  // Leadership
  {
    id: 'adrian-royce',
    name: 'Adrian Royce',
    role: 'Chief Executive Officer',
    initials: 'AR',
    department: 'leadership',
    bio: 'Former VP Infrastructure at Stratosys. MIT Computer Science, 2001. Believes that every organizational problem is ultimately a systems design problem.',
    gradient: 'linear-gradient(145deg, #0d4a78 0%, #1b76bb 50%, #00d4ff22 100%)',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    id: 'kavya-menon',
    name: 'Kavya Menon',
    role: 'Chief Technology Officer',
    initials: 'KM',
    department: 'leadership',
    bio: 'Distributed systems architect. Previously led platform engineering at three unicorn-stage companies. Holds six US patents in data synchronization.',
    gradient: 'linear-gradient(145deg, #1a1a4a 0%, #2d2d8a 50%, #1b76bb33 100%)',
    social: {
      linkedin: '#',
      github: '#',
      email: '#',
    },
  },
  {
    id: 'patrick-ng',
    name: 'Patrick Ng',
    role: 'Chief Product Officer',
    initials: 'PN',
    department: 'leadership',
    bio: '15 years in enterprise product management. Former product lead at Salesforce and ServiceNow. Relentless advocate for reducing friction in complex workflows.',
    gradient: 'linear-gradient(145deg, #2a1a0a 0%, #78400d 50%, #f5a62322 100%)',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  // Engineering
  {
    id: 'sofia-larsen',
    name: 'Sofia Larsen',
    role: 'Principal Engineer',
    initials: 'SL',
    department: 'engineering',
    gradient: 'linear-gradient(145deg, #0a2a1a, #1b6b3a)',
    social: { linkedin: '#', github: '#', email: '#' },
  },
  {
    id: 'daniel-kim',
    name: 'Daniel Kim',
    role: 'Cloud Architect',
    initials: 'DK',
    department: 'engineering',
    gradient: 'linear-gradient(145deg, #1a0a2a, #5a1b8a)',
    social: { linkedin: '#', github: '#', email: '#' },
  },
  {
    id: 'maya-rivera',
    name: 'Maya Rivera',
    role: 'Security Engineer',
    initials: 'MR',
    department: 'engineering',
    gradient: 'linear-gradient(145deg, #0a1a2a, #1b4a7a)',
    social: { linkedin: '#', github: '#', email: '#' },
  },
  {
    id: 'tom-walsh',
    name: 'Tom Walsh',
    role: 'DevOps Lead',
    initials: 'TW',
    department: 'engineering',
    gradient: 'linear-gradient(145deg, #1a2a0a, #4a7a1b)',
    social: { linkedin: '#', github: '#', email: '#' },
  },
  {
    id: 'farid-said',
    name: 'Farid Said',
    role: 'Data Engineer',
    initials: 'FS',
    department: 'engineering',
    gradient: 'linear-gradient(145deg, #0a0a2a, #1b1b8a)',
    social: { linkedin: '#', github: '#', email: '#' },
  },
  // Product
  {
    id: 'laura-chen',
    name: 'Laura Chen',
    role: 'Product Manager',
    initials: 'LC',
    department: 'product',
    gradient: 'linear-gradient(145deg, #2a0a1a, #8a1b5a)',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
  {
    id: 'james-oduya',
    name: 'James Oduya',
    role: 'UX Lead',
    initials: 'JO',
    department: 'product',
    gradient: 'linear-gradient(145deg, #0a1a2a, #1b5a8a)',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
  // Operations
  {
    id: 'anna-byrne',
    name: 'Anna Byrne',
    role: 'Head of Operations',
    initials: 'AB',
    department: 'operations',
    gradient: 'linear-gradient(145deg, #1a1a0a, #7a7a1b)',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
  {
    id: 'rahul-patel',
    name: 'Rahul Patel',
    role: 'Solutions Architect',
    initials: 'RP',
    department: 'operations',
    gradient: 'linear-gradient(145deg, #2a1a0a, #8a5a1b)',
    social: { linkedin: '#', github: '#', email: '#' },
  },
  // Go-to-Market
  {
    id: 'elena-fischer',
    name: 'Elena Fischer',
    role: 'VP Marketing',
    initials: 'EF',
    department: 'gtm',
    gradient: 'linear-gradient(145deg, #0a2a2a, #1b7a7a)',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
  {
    id: 'ben-torres',
    name: 'Ben Torres',
    role: 'Enterprise Sales Lead',
    initials: 'BT',
    department: 'gtm',
    gradient: 'linear-gradient(145deg, #1a0a2a, #6b1b8a)',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
  {
    id: 'nadia-johansson',
    name: 'Nadia Johansson',
    role: 'Customer Success',
    initials: 'NJ',
    department: 'gtm',
    gradient: 'linear-gradient(145deg, #0a2a1a, #1b7a4a)',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
] as const;

export const teamFilters = [
  { id: 'all', label: 'All' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'product', label: 'Product' },
  { id: 'operations', label: 'Operations' },
  { id: 'gtm', label: 'Go-to-Market' },
] as const;
