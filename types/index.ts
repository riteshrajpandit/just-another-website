/**
 * @file Type definitions for the NEXACORE portfolio
 * @description Centralized TypeScript type definitions ensuring type safety across the application
 */

// ============================================================
// Navigation Types
// ============================================================

export interface NavLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly hasSubmenu?: boolean;
}

export interface MegaMenuItem {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly icon?: string;
  readonly href?: string;
}

export interface MegaMenuSection {
  readonly label: string;
  readonly items: readonly MegaMenuItem[];
}

export interface MegaMenuHighlight {
  readonly badge: string;
  readonly title: string;
  readonly description: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
  readonly variant?: 'default' | 'brand';
}

export interface MegaMenuConfig {
  readonly sections: readonly MegaMenuSection[];
  readonly highlight?: MegaMenuHighlight;
  readonly width?: 'default' | 'wide' | 'narrow';
}

// ============================================================
// Section Types
// ============================================================

export interface HeroMetaItem {
  readonly value: string;
  readonly label: string;
  readonly accent?: string;
}

export interface StatItem {
  readonly id: string;
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
}

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly tag: string;
  readonly description: string;
  readonly icon: string;
  readonly href?: string;
}

export interface Service {
  readonly id: string;
  readonly number: string;
  readonly name: string;
  readonly description: string;
  readonly href?: string;
}

export interface Brand {
  readonly id: string;
  readonly name: string;
}

export interface EarlyAdopter {
  readonly id: string;
  readonly name: string;
  readonly industry: string;
  readonly badge?: string;
}

export interface TimelineEvent {
  readonly year: string;
  readonly event: string;
}

export interface Testimonial {
  readonly id: string;
  readonly text: string;
  readonly authorName: string;
  readonly authorRole: string;
  readonly authorInitials: string;
}

// ============================================================
// Footer Types
// ============================================================

export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly highlight?: boolean;
  readonly badge?: string;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export interface SocialLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon: string;
}

// ============================================================
// Theme Types
// ============================================================

export type Theme = 'light' | 'dark';

export interface ThemeColors {
  readonly bgBase: string;
  readonly bgSurface: string;
  readonly bgElevated: string;
  readonly bgDarkBand: string;
  readonly textPrimary: string;
  readonly textSecondary: string;
  readonly textMuted: string;
  readonly border: string;
  readonly borderStrong: string;
}

// ============================================================
// GDPR/Cookie Consent Types
// ============================================================

export type CookieConsentStatus = 'pending' | 'accepted' | 'managed' | 'declined';

export interface CookiePreferences {
  readonly necessary: boolean;
  readonly analytics: boolean;
  readonly marketing: boolean;
}

// ============================================================
// Section Configuration Types
// ============================================================

export interface SectionConfig {
  readonly id: string;
  readonly name: string;
  readonly title: string;
}

// ============================================================
// Company Info Types
// ============================================================

export interface CompanyInfo {
  readonly name: string;
  readonly tagline: string;
  readonly foundedYear: number;
  readonly copyright: string;
}

export interface CompanyStat {
  readonly value: string;
  readonly label: string;
}

// ============================================================
// About Page Types
// ============================================================

export interface AboutBadge {
  readonly id: string;
  readonly label: string;
}

export interface OverviewBlock {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly text: string;
}

export interface TeamStatsItem {
  readonly id: string;
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
}

export interface ValueCard {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly iconPath: string;
}

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly initials: string;
  readonly department: 'leadership' | 'engineering' | 'product' | 'operations' | 'gtm';
  readonly bio?: string;
  readonly gradient: string;
  readonly social: {
    readonly linkedin?: string;
    readonly twitter?: string;
    readonly github?: string;
    readonly email?: string;
  };
}

// ============================================================
// Careers Page Types
// ============================================================

export interface CareerStat {
  readonly id: string;
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
}

export interface CareerGoal {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly text: string;
}

export interface HiringStep {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly time: string;
  readonly icon: string;
}

export interface Benefit {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly category: string;
}

export interface CultureTile {
  readonly id: string;
  readonly label: string;
  readonly title: string;
  readonly sub: string;
  readonly variant: 'a' | 'b' | 'c' | 'd' | 'e';
  readonly wide?: boolean;
  readonly tall?: boolean;
}

export interface CultureQuote {
  readonly id: string;
  readonly text: string;
  readonly authorName: string;
  readonly authorRole: string;
  readonly initials: string;
}

export type JobDepartment = 'Engineering' | 'Product' | 'Operations' | 'Go-to-Market';

export interface JobListing {
  readonly id: string;
  readonly title: string;
  readonly department: JobDepartment;
  readonly location: string;
  readonly type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  readonly description: string;
  readonly applicants: number;
  readonly isNew?: boolean;
}

export interface HeroBadge {
  readonly id: string;
  readonly label: string;
}

// ============================================================
// Dashboard Types
// ============================================================

export interface KPICard {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly trend: number;
  readonly icon: string;
}

export interface DashboardProduct {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly status: 'Active' | 'Beta' | 'Deprecated';
  readonly inquiries: number;
  readonly featured: boolean;
}

export interface DashboardService {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly leads: number;
  readonly status: 'Active' | 'Inactive';
  readonly highlight: boolean;
}

export interface Inquiry {
  readonly id: string;
  readonly name: string;
  readonly company: string;
  readonly type: 'Product Inquiry' | 'Get Started' | 'Contact' | 'Demo';
  readonly subject: string;
  readonly date: string;
  readonly status: 'Open' | 'In Progress' | 'Resolved';
}

export interface Booking {
  readonly id: string;
  readonly name: string;
  readonly company: string;
  readonly date: string;
  readonly time: string;
  readonly architect: string;
  readonly products: readonly string[];
  readonly status: 'Confirmed' | 'Pending' | 'Cancelled';
}

export interface JobApplication {
  readonly id: string;
  readonly applicant: string;
  readonly role: string;
  readonly department: string;
  readonly appliedDate: string;
  readonly stage: 'Applied' | 'Screening' | 'Interview' | 'Offer' | 'Rejected';
  readonly score: number;
}

export interface ActivityItem {
  readonly id: string;
  readonly type: 'inquiry' | 'booking' | 'subscriber' | 'job' | 'system';
  readonly description: string;
  readonly timestamp: string;
}
