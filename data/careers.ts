/**
 * @file Careers page data
 * @description Type-safe content for the NEXACORE careers page
 */

import type {
  CareerStat,
  CareerGoal,
  HiringStep,
  Benefit,
  CultureTile,
  CultureQuote,
  JobListing,
  HeroBadge,
} from '@/types';

// ============================================================
// Hero Section
// ============================================================

export const careersHero = {
  eyebrow: 'Careers at NEXACORE',
  headline: {
    line1: 'Work on What',
    line2: 'Actually Matters.',
  },
  description:
    'We build infrastructure that powers thousands of enterprises. Join the engineers, architects, and operators who solve problems at scale — and take responsibility for it.',
  primaryCta: { label: 'See All Openings', href: '#openings' },
  secondaryCta: { label: 'Drop Your CV', href: '#open-application' },
} as const;

export const careerHeroBadges: readonly HeroBadge[] = [
  { id: 'roles', label: '18 Open Roles' },
  { id: 'remote', label: 'Full Remote Options' },
  { id: 'equity', label: 'Competitive Equity' },
  { id: 'offices', label: '4 Global Offices' },
  { id: 'offer', label: 'No-Interview-Day Offer Policy' },
] as const;

export const liveOpenings = [
  { title: 'Staff Platform Engineer', department: 'Engineering', location: 'Remote / Austin', tag: 'New' as const },
  { title: 'Senior Security Architect', department: 'Engineering', location: 'London, UK', tag: 'Full-time' as const },
  { title: 'Product Manager — NexaFlow', department: 'Product', location: 'Remote', tag: 'New' as const },
  { title: 'Solutions Engineer (EMEA)', department: 'Go-to-Market', location: 'London / Remote', tag: 'Full-time' as const },
  { title: 'DevSecOps Engineer', department: 'Engineering', location: 'Singapore', tag: 'Full-time' as const },
  { title: 'Graduate Software Engineer', department: 'Engineering', location: 'Austin, TX', tag: 'Internship' as const },
] as const;

// ============================================================
// Stats Band
// ============================================================

export const careerStats: readonly CareerStat[] = [
  { id: 'team', value: 287, suffix: '+', label: 'Team Members' },
  { id: 'nationalities', value: 42, suffix: '+', label: 'Nationalities' },
  { id: 'retention', value: 94, suffix: '%', label: 'Retention Rate' },
  { id: 'open', value: 18, suffix: '', label: 'Open Positions' },
  { id: 'offices', value: 4, suffix: '', label: 'Global Offices' },
] as const;

// ============================================================
// Mission Section
// ============================================================

export const missionData = {
  year: '12',
  eyebrow: 'Our Mission',
  statement: 'We believe the best infrastructure engineers deserve to work on the hardest problems — not the most <em>profitable</em> ones.',
  body: 'NEXACORE exists to give those people a home. Every tool we build, every client we serve, every system we run is an opportunity to get something important right.',
  primaryCta: { label: 'Read Our Story', href: '/about' },
  secondaryCta: { label: 'View Open Roles', href: '#openings' },
} as const;

export const careerGoals: readonly CareerGoal[] = [
  { id: 'g1', number: '01', title: '500 Enterprise Clients', text: 'Grow our enterprise footprint to 500 organizations across all verticals by end of 2026.' },
  { id: 'g2', number: '02', title: 'AI-Native Product Suite', text: 'Re-architect every product around AI-first decision engines — no bolt-ons, no wrappers.' },
  { id: 'g3', number: '03', title: 'Zero-Downtime Platform Guarantee', text: 'Move our SLA target from 99.97% to 99.999% across all production environments.' },
  { id: 'g4', number: '04', title: 'Carbon-Neutral Operations', text: 'Achieve full carbon neutrality for all data centre and cloud operations by Q2 2027.' },
] as const;

// ============================================================
// Hiring Process
// ============================================================

export const hiringSteps: readonly HiringStep[] = [
  {
    id: 'apply',
    number: '01',
    title: 'Application',
    description: 'Submit your CV and cover note. We read every application — no black hole.',
    time: '24h response',
    icon: 'file',
  },
  {
    id: 'intro',
    number: '02',
    title: 'Intro Call',
    description: '30-minute conversation with a recruiter about your background and goals.',
    time: '30 min',
    icon: 'phone',
  },
  {
    id: 'technical',
    number: '03',
    title: 'Technical Review',
    description: 'A take-home or live technical discussion — no LeetCode, just real problems.',
    time: '3–5 days',
    icon: 'code',
  },
  {
    id: 'team',
    number: '04',
    title: 'Team Interview',
    description: 'Meet your future team and discuss architecture, ownership, and culture.',
    time: '90 min',
    icon: 'users',
  },
  {
    id: 'offer',
    number: '05',
    title: 'Offer',
    description: 'Competitive compensation breakdown with full equity and benefits detail.',
    time: '48h decision',
    icon: 'check',
  },
] as const;

export const hiringFooterStats = [
  { value: '100%', label: 'Candidate Feedback' },
  { value: '48h', label: 'Response Time' },
  { value: '0', label: 'Ghostings' },
] as const;

// ============================================================
// Benefits
// ============================================================

export const benefits: readonly Benefit[] = [
  {
    id: 'no-meeting',
    number: '01',
    title: 'No Meeting Days',
    description: 'Wednesdays are fully protected focus time. No standups, no syncs, no exceptions. Deep work is non-negotiable.',
    icon: 'calendar',
    category: 'Time',
  },
  {
    id: 'pay',
    number: '02',
    title: 'Top-Quartile Pay',
    description: 'We benchmark against Radford and Levels.fyi annually. We pay at or above the 75th percentile for every role.',
    icon: 'trending-up',
    category: 'Compensation',
  },
  {
    id: 'learning',
    number: '03',
    title: 'Learning Budget',
    description: '$3,000 per year for courses, certifications, books, and conferences. Use it or lose it — we encourage you to use it.',
    icon: 'book-open',
    category: 'Growth',
  },
  {
    id: 'home-office',
    number: '04',
    title: 'Home Office Stipend',
    description: '$1,500 one-time setup allowance plus $100/month for internet and peripherals. Work well from anywhere.',
    icon: 'monitor',
    category: 'Remote',
  },
  {
    id: 'medical',
    number: '05',
    title: 'Comprehensive Medical',
    description: '100% employer-paid health, dental, and vision for you and your dependants. No deductibles on the base plan.',
    icon: 'heart',
    category: 'Health',
  },
  {
    id: 'pto',
    number: '06',
    title: 'Unlimited PTO',
    description: 'Actual unlimited time off with a 20-day minimum encouraged. We track usage and flag if you are not taking enough.',
    icon: 'sun',
    category: 'Time Off',
  },
] as const;

// ============================================================
// Culture
// ============================================================

export const cultureTiles: readonly CultureTile[] = [
  { id: 'engineering', label: 'Culture', title: 'Engineering-Led', sub: 'Every major product decision goes through an engineer first.', variant: 'a', wide: true },
  { id: 'transparency', label: 'Values', title: 'Radical Transparency', sub: 'Board decks, salary bands, and P&L are shared company-wide.', variant: 'b', tall: true },
  { id: 'ownership', label: 'Ownership', title: 'You Own It', sub: 'Ship it, run it, improve it. No handoff culture here.', variant: 'c' },
  { id: 'distributed', label: 'Team', title: 'Truly Distributed', sub: '42 nationalities, 4 offices, fully async-first.', variant: 'd' },
  { id: 'feedback', label: 'Growth', title: 'Feedback as Default', sub: 'Monthly 360s, quarterly reviews, public kudos board.', variant: 'e' },
] as const;

export const cultureQuotes: readonly CultureQuote[] = [
  {
    id: 'q1',
    text: 'I joined as a mid-level engineer. Within 18 months I was leading a team of 8 and owning a product line. That kind of growth is the norm here, not the exception.',
    authorName: 'Priya Nair',
    authorRole: 'Staff Engineer, Platform',
    initials: 'PN',
  },
  {
    id: 'q2',
    text: 'The no-meeting Wednesday policy changed my life. I do my best work on Wednesdays. I look forward to Wednesdays now. That sounds small but it is not.',
    authorName: 'Marcus Webb',
    authorRole: 'Senior SRE',
    initials: 'MW',
  },
  {
    id: 'q3',
    text: 'We debate everything openly. Architecture decisions, product direction, company strategy — all discussed in the open. Joining felt like joining a team, not a hierarchy.',
    authorName: 'Lena Fischer',
    authorRole: 'Product Manager',
    initials: 'LF',
  },
] as const;

// ============================================================
// Job Listings
// ============================================================

export const jobListings: readonly JobListing[] = [
  {
    id: 'staff-platform',
    title: 'Staff Platform Engineer',
    department: 'Engineering',
    location: 'Remote / Austin, TX',
    type: 'Full-time',
    description: 'Own the reliability and performance of NEXACORE\'s core infrastructure layer. Work on Kubernetes orchestration, Terraform IaC, and multi-cloud networking.',
    applicants: 24,
    isNew: true,
  },
  {
    id: 'security-arch',
    title: 'Senior Security Architect',
    department: 'Engineering',
    location: 'London, UK',
    type: 'Full-time',
    description: 'Design and implement zero-trust security models for enterprise clients. Threat modelling, SOC integration, and compliance automation.',
    applicants: 17,
    isNew: true,
  },
  {
    id: 'pm-nexaflow',
    title: 'Product Manager — NexaFlow',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description: 'Define the roadmap for our workflow automation engine. Collaborate with enterprise clients, triage features, and drive adoption metrics.',
    applicants: 31,
    isNew: false,
  },
  {
    id: 'solutions-emea',
    title: 'Solutions Engineer (EMEA)',
    department: 'Go-to-Market',
    location: 'London / Remote',
    type: 'Full-time',
    description: 'Bridge the gap between our product suite and enterprise client requirements. Lead technical demos and integration scoping.',
    applicants: 12,
    isNew: false,
  },
  {
    id: 'devsecops',
    title: 'DevSecOps Engineer',
    department: 'Engineering',
    location: 'Singapore',
    type: 'Full-time',
    description: 'Embed security into CI/CD pipelines for clients across APAC. Tooling: GitHub Actions, Snyk, Trivy, AWS Security Hub.',
    applicants: 9,
    isNew: false,
  },
  {
    id: 'data-eng',
    title: 'Senior Data Engineer',
    department: 'Engineering',
    location: 'Remote / Austin, TX',
    type: 'Full-time',
    description: 'Build and maintain client-facing data pipelines using dbt, Spark, and Snowflake. Own data quality, observability, and lineage tooling.',
    applicants: 22,
    isNew: false,
  },
  {
    id: 'ops-mgr',
    title: 'Operations Manager',
    department: 'Operations',
    location: 'Austin, TX',
    type: 'Full-time',
    description: 'Coordinate cross-functional delivery across engineering, product, and go-to-market teams. Process design, OKR tracking, and resource planning.',
    applicants: 8,
    isNew: false,
  },
  {
    id: 'grad-swe',
    title: 'Graduate Software Engineer',
    department: 'Engineering',
    location: 'Austin, TX',
    type: 'Internship',
    description: 'A structured 6-month programme for recent graduates. Rotate across platform, product, and data teams with a dedicated mentor.',
    applicants: 48,
    isNew: false,
  },
] as const;

export const jobDepartments = ['All', 'Engineering', 'Product', 'Operations', 'Go-to-Market'] as const;
