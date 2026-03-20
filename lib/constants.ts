/**
 * @file Application constants and configuration
 * @description Centralized constants for consistent values across the application
 */

// ============================================================
// Layout Constants
// ============================================================

export const LAYOUT = {
  NAV_HEIGHT: 64,
  LEFT_RAIL: 72,
  MAX_WIDTH: 1440,
  TRANSITION: '200ms ease',
  TRANSITION_SLOW: '400ms ease',
} as const;

// ============================================================
// Brand Colors
// ============================================================

export const BRAND_COLORS = {
  primary: '#1b76bb',
  secondary: '#0d4a78',
  accent: '#00d4ff',
  warm: '#f5a623',
  white: '#ffffff',
  black: '#0e0e0e',
} as const;

// ============================================================
// Theme Colors
// ============================================================

export const THEME_COLORS = {
  light: {
    bgBase: '#f5f4f0',
    bgSurface: '#ffffff',
    bgElevated: '#eceae4',
    bgDarkBand: '#e0ded8',
    textPrimary: '#0e0e0e',
    textSecondary: '#4a4a4a',
    textMuted: '#8a8a8a',
    border: '#d0cec8',
    borderStrong: '#0e0e0e',
  },
  dark: {
    bgBase: '#0a0a0a',
    bgSurface: '#111111',
    bgElevated: '#1a1a1a',
    bgDarkBand: '#050505',
    textPrimary: '#f0ede8',
    textSecondary: '#a8a5a0',
    textMuted: '#555550',
    border: '#2a2a2a',
    borderStrong: '#f0ede8',
  },
} as const;

// ============================================================
// Animation Durations
// ============================================================

export const ANIMATION = {
  LOADING_DURATION: 2800,
  HERO_DELAY: 0.1,
  SCROLL_THRESHOLD: 400,
  TESTIMONIAL_INTERVAL: 5000,
  COUNTER_DURATION: 1800,
} as const;

// ============================================================
// Breakpoints
// ============================================================

export const BREAKPOINTS = {
  xs: 479,
  sm: 767,
  md: 1023,
  lg: 1279,
} as const;

// ============================================================
// Local Storage Keys
// ============================================================

export const STORAGE_KEYS = {
  THEME: 'nexacore-theme',
  COOKIES: 'nexacore-cookies',
} as const;

// ============================================================
// Section IDs (for navigation)
// ============================================================

export const SECTION_IDS = {
  HERO: 'hero',
  STATS: 'stats',
  PRODUCTS: 'products',
  SERVICES: 'services',
  BRANDS: 'brands',
  ADOPTERS: 'early-adopters',
  TESTIMONIALS: 'testimonials',
  CTA: 'cta',
} as const;
