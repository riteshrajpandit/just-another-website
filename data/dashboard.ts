/**
 * @file Dashboard mock data
 * @description Static mock data for the admin dashboard
 */

import type {
  KPICard,
  DashboardProduct,
  DashboardService,
  Inquiry,
  Booking,
  JobApplication,
  ActivityItem,
} from '@/types';

// ============================================================
// Overview KPIs
// ============================================================

export const overviewKPIs: readonly KPICard[] = [
  { id: 'visitors', label: 'Total Visitors', value: '12,847', trend: 18.4, icon: 'users' },
  { id: 'inquiries', label: 'Product Inquiries', value: '247', trend: 12.1, icon: 'mail' },
  { id: 'bookings', label: 'Demo Bookings', value: '38', trend: -4.2, icon: 'calendar' },
  { id: 'subscribers', label: 'Newsletter Subs', value: '1,293', trend: 7.8, icon: 'bell' },
] as const;

export const analyticsKPIs: readonly KPICard[] = [
  { id: 'pageviews', label: 'Page Views', value: '48,291', trend: 22.3, icon: 'eye' },
  { id: 'session', label: 'Avg Session', value: '3m 42s', trend: 8.1, icon: 'clock' },
  { id: 'bounce', label: 'Bounce Rate', value: '34.2%', trend: -5.6, icon: 'activity' },
  { id: 'conversion', label: 'Conversion Rate', value: '2.8%', trend: 14.9, icon: 'trending-up' },
] as const;

// ============================================================
// Products
// ============================================================

export const dashboardProducts: readonly DashboardProduct[] = [
  { id: 'nexaflow', name: 'NexaFlow', category: 'Automation', status: 'Active', inquiries: 84, featured: true },
  { id: 'coresync', name: 'CoreSync', category: 'Integration', status: 'Active', inquiries: 61, featured: true },
  { id: 'securevault', name: 'SecureVault', category: 'Security', status: 'Active', inquiries: 47, featured: false },
  { id: 'pulsemetrics', name: 'PulseMetrics', category: 'Observability', status: 'Active', inquiries: 39, featured: false },
  { id: 'cloudorchestra', name: 'CloudOrchestra', category: 'Infrastructure', status: 'Beta', inquiries: 28, featured: false },
  { id: 'deskcanvas', name: 'DeskCanvas', category: 'ITSM', status: 'Active', inquiries: 22, featured: false },
] as const;

// ============================================================
// Services
// ============================================================

export const dashboardServices: readonly DashboardService[] = [
  { id: 'cloud-migration', name: 'Cloud Migration & Modernization', category: 'Infrastructure', leads: 42, status: 'Active', highlight: true },
  { id: 'devsecops', name: 'DevSecOps & CI/CD', category: 'Security', leads: 38, status: 'Active', highlight: true },
  { id: 'cybersecurity', name: 'Cybersecurity Operations', category: 'Security', leads: 31, status: 'Active', highlight: false },
  { id: 'data-engineering', name: 'Data Engineering & Analytics', category: 'Data', leads: 27, status: 'Active', highlight: false },
  { id: 'managed-infra', name: 'Managed Infrastructure', category: 'Infrastructure', leads: 24, status: 'Active', highlight: false },
  { id: 'digital-advisory', name: 'Digital Transformation Advisory', category: 'Strategy', leads: 18, status: 'Active', highlight: false },
] as const;

// ============================================================
// Inquiries
// ============================================================

export const inquiries: readonly Inquiry[] = [
  { id: 'inq-1', name: 'Thomas Baxter', company: 'Meridian Financial', type: 'Product Inquiry', subject: 'NexaFlow enterprise pricing', date: '2026-04-11', status: 'Open' },
  { id: 'inq-2', name: 'Amelia Torres', company: 'Arcturus Healthcare', type: 'Get Started', subject: 'Starter plan onboarding', date: '2026-04-10', status: 'In Progress' },
  { id: 'inq-3', name: 'James Kurosawa', company: 'Stratosys Logistics', type: 'Demo', subject: 'CloudOrchestra walkthrough', date: '2026-04-10', status: 'Open' },
  { id: 'inq-4', name: 'Sara Mabunda', company: 'Pinnacle Energy', type: 'Contact', subject: 'Partnership enquiry', date: '2026-04-09', status: 'Resolved' },
  { id: 'inq-5', name: 'Luca Ferrante', company: 'Celadon Retail', type: 'Product Inquiry', subject: 'SecureVault HIPAA compliance', date: '2026-04-08', status: 'Open' },
  { id: 'inq-6', name: 'Priya Nair', company: 'Ironbay Government', type: 'Get Started', subject: 'Enterprise plan custom quote', date: '2026-04-07', status: 'In Progress' },
  { id: 'inq-7', name: 'Omar Khalil', company: 'Luminos Education', type: 'Contact', subject: 'API rate limit increase', date: '2026-04-06', status: 'Resolved' },
] as const;

// ============================================================
// Bookings
// ============================================================

export const bookings: readonly Booking[] = [
  { id: 'bk-1', name: 'Rachel Kim', company: 'Quantex Corp', date: '2026-04-14', time: '10:00 AM UTC', architect: 'Kavya Menon', products: ['NexaFlow', 'CoreSync'], status: 'Confirmed' },
  { id: 'bk-2', name: 'David Singh', company: 'Halcyon Pharma', date: '2026-04-15', time: '2:00 PM UTC', architect: 'Alex Rivera', products: ['SecureVault'], status: 'Pending' },
  { id: 'bk-3', name: 'Mia Okonkwo', company: 'Deltavex Retail', date: '2026-04-16', time: '11:00 AM UTC', architect: 'Kavya Menon', products: ['PulseMetrics', 'CloudOrchestra'], status: 'Confirmed' },
  { id: 'bk-4', name: 'Henrik Larsen', company: 'Zenith Logistics', date: '2026-04-17', time: '3:00 PM UTC', architect: 'Alex Rivera', products: ['DeskCanvas'], status: 'Pending' },
  { id: 'bk-5', name: 'Aiko Tanaka', company: 'Paragon FinTech', date: '2026-04-18', time: '9:00 AM UTC', architect: 'Kavya Menon', products: ['NexaFlow', 'SecureVault'], status: 'Confirmed' },
] as const;

// ============================================================
// Job Applications / Resumes
// ============================================================

export const jobApplications: readonly JobApplication[] = [
  { id: 'app-1', applicant: 'Nina Patel', role: 'Staff Platform Engineer', department: 'Engineering', appliedDate: '2026-04-10', stage: 'Interview', score: 88 },
  { id: 'app-2', applicant: 'Carlos Mendes', role: 'Senior Security Architect', department: 'Engineering', appliedDate: '2026-04-09', stage: 'Screening', score: 74 },
  { id: 'app-3', applicant: 'Emma Zhao', role: 'Product Manager — NexaFlow', department: 'Product', appliedDate: '2026-04-08', stage: 'Offer', score: 92 },
  { id: 'app-4', applicant: 'Samuel Osei', role: 'Solutions Engineer (EMEA)', department: 'Go-to-Market', appliedDate: '2026-04-07', stage: 'Applied', score: 61 },
  { id: 'app-5', applicant: 'Yuki Tanaka', role: 'DevSecOps Engineer', department: 'Engineering', appliedDate: '2026-04-06', stage: 'Interview', score: 79 },
  { id: 'app-6', applicant: 'Fatima Al-Hassan', role: 'Senior Data Engineer', department: 'Engineering', appliedDate: '2026-04-05', stage: 'Screening', score: 83 },
  { id: 'app-7', applicant: 'Lucas Dubois', role: 'Operations Manager', department: 'Operations', appliedDate: '2026-04-04', stage: 'Rejected', score: 52 },
] as const;

// ============================================================
// Activity Feed
// ============================================================

export const activityFeed: readonly ActivityItem[] = [
  { id: 'act-1', type: 'inquiry', description: 'New product inquiry from Thomas Baxter (Meridian Financial)', timestamp: '2 minutes ago' },
  { id: 'act-2', type: 'booking', description: 'Demo booking confirmed — Rachel Kim, Apr 14', timestamp: '18 minutes ago' },
  { id: 'act-3', type: 'subscriber', description: '4 new newsletter subscribers in the last hour', timestamp: '1 hour ago' },
  { id: 'act-4', type: 'job', description: 'Emma Zhao moved to Offer stage', timestamp: '3 hours ago' },
  { id: 'act-5', type: 'inquiry', description: 'Inquiry #inq-4 resolved by admin', timestamp: '5 hours ago' },
  { id: 'act-6', type: 'system', description: 'System health check passed — all services nominal', timestamp: '6 hours ago' },
] as const;

// ============================================================
// Top Pages (Analytics)
// ============================================================

export const topPages = [
  { page: '/', views: 8421, avgTime: '2m 14s', exitRate: '28%' },
  { page: '/contact', views: 3847, avgTime: '4m 02s', exitRate: '41%' },
  { page: '/about', views: 2193, avgTime: '3m 17s', exitRate: '35%' },
  { page: '/careers', views: 1482, avgTime: '5m 44s', exitRate: '22%' },
] as const;

// ============================================================
// Dashboard Navigation
// ============================================================

export type DashPage = 'overview' | 'analytics' | 'products' | 'services' | 'inquiries' | 'bookings' | 'subscribers' | 'jobs' | 'resumes' | 'appearance' | 'settings';

export const sidebarNav = [
  {
    label: 'Overview',
    items: [
      { id: 'overview' as DashPage, label: 'Overview', icon: 'layout' },
      { id: 'analytics' as DashPage, label: 'Analytics', icon: 'bar-chart' },
    ],
  },
  {
    label: 'Content CMS',
    items: [
      { id: 'products' as DashPage, label: 'Products', icon: 'box' },
      { id: 'services' as DashPage, label: 'Services', icon: 'tool' },
    ],
  },
  {
    label: 'Customers',
    items: [
      { id: 'inquiries' as DashPage, label: 'Inquiries', icon: 'mail', badge: 7 },
      { id: 'bookings' as DashPage, label: 'Bookings', icon: 'calendar', badge: 3 },
      { id: 'subscribers' as DashPage, label: 'Subscribers', icon: 'users' },
    ],
  },
  {
    label: 'HR & Careers',
    items: [
      { id: 'jobs' as DashPage, label: 'Job Openings', icon: 'briefcase' },
      { id: 'resumes' as DashPage, label: 'Resumes', icon: 'file-text', badge: 12 },
    ],
  },
  {
    label: 'Site Settings',
    items: [
      { id: 'appearance' as DashPage, label: 'Appearance', icon: 'palette' },
      { id: 'settings' as DashPage, label: 'Settings', icon: 'settings' },
    ],
  },
] as const;
