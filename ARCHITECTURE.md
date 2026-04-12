# System Architecture Document

**Project:** NEXACORE IT Portfolio Website
**Version:** 1.0
**Last Updated:** 2026-03-29

---

## 1. Executive Summary

This is an enterprise technology solutions portfolio website built with **Next.js 16.2.0** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**. The application follows a modern component-based architecture with a clear separation of concerns between data, presentation, and business logic.

> ⚠️ **Important:** Next.js 16.x introduces breaking changes from earlier versions. Refer to `node_modules/next/dist/docs/` for version-specific documentation.

---

## 2. Technology Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js | 16.2.0 |
| UI Library | React | 19.2.4 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Font Loading | next/font/google | Built-in |
| Linting | ESLint | 9.x |

---

## 3. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT BROWSER                           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    React Components                       │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │   │
│  │  │   Pages     │  │  Sections   │  │     UI      │       │   │
│  │  │  (app/*)    │──│ (sections/) │──│  (ui/)      │       │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘       │   │
│  │         │                │               │               │   │
│  │         └────────────────┼───────────────┘               │   │
│  │                          │                               │   │
│  │              ┌───────────┴───────────┐                   │   │
│  │              │    Custom Hooks       │                   │   │
│  │              │  (hooks/)              │                   │   │
│  │              └───────────────────────┘                   │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Server Components / Static
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        NEXT.JS SERVER                            │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   App Router                             │   │
│  │  ┌─────────────────────────────────────────────────┐    │   │
│  │  │  Routes: / | /about | /contact                   │    │   │
│  │  └─────────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   Data Layer                             │   │
│  │  ┌──────────┐  ┌──────────────┐  ┌──────────────┐        │   │
│  │  │ site.ts  │  │ navigation.ts │  │ contact.ts  │        │   │
│  │  └──────────┘  └──────────────┘  └──────────────┘        │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Directory Structure

```
it_portfolio/
├── app/                          # Next.js App Router (routes)
│   ├── globals.css               # Global styles + Tailwind config
│   ├── layout.tsx                # Root layout (fonts, metadata, theme)
│   ├── page.tsx                  # Home page (/)
│   ├── about/page.tsx            # About page (/about)
│   └── contact/page.tsx          # Contact page (/contact)
│
├── components/                   # React components
│   ├── index.ts                  # Barrel export
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx            # Main navigation header
│   │   ├── Footer.tsx            # Site footer
│   │   ├── LoadingScreen.tsx     # Initial loading animation
│   │   ├── ScrollRail.tsx        # Scroll progress indicator
│   │   ├── MobileNav.tsx         # Mobile navigation
│   │   └── *MegaMenu.tsx         # Mega menu variants
│   ├── sections/                 # Page section components
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ProductsSection.tsx
│   │   └── ... (31 total)
│   └── ui/                       # Reusable UI primitives
│       ├── Button.tsx            # Polymorphic button component
│       ├── Icons.tsx              # SVG icon components
│       └── Logo.tsx               # Brand logo component
│
├── data/                         # Static content/data
│   ├── site.ts                   # Products, services, stats
│   ├── navigation.ts             # Nav menu configuration
│   └── contact.ts                # Contact form data
│
├── hooks/                        # Custom React hooks
│   ├── useTheme.ts               # Dark/light theme management
│   ├── useCookieConsent.ts       # GDPR cookie consent
│   ├── useScrollProgress.ts      # Scroll position tracking
│   ├── useInView.ts              # Intersection Observer
│   └── useCountUp.ts             # Animated number counter
│
├── lib/                          # Utilities
│   └── constants.ts              # App-wide constants
│
├── styles/                       # CSS modules
│   ├── tokens.css                # Design tokens (CSS vars)
│   ├── animations.css            # Keyframe animations
│   ├── typography.css            # Typography utilities
│   └── utilities.css             # Utility classes
│
├── types/                        # TypeScript definitions
│   └── index.ts                  # Centralized type exports
│
├── public/                       # Static assets
│
└── node_modules/next/dist/docs/  # Next.js 16 documentation
```

---

## 5. Routing Architecture

### Route Map

| Route | File | Component Type | Description |
|-------|------|----------------|-------------|
| `/` | `app/page.tsx` | Client Component | Home page with hero, stats, products |
| `/about` | `app/about/page.tsx` | Server Component | Company overview, team, values |
| `/contact` | `app/contact/page.tsx` | Client Component | Contact form and information |

### App Router Patterns

- **Server Components** (default): Rendered on server, no `'use client'` directive
- **Client Components**: Interactive components with `'use client'` directive
- **Layout Pattern**: Root layout in `app/layout.tsx` wraps all pages

---

## 6. Component Architecture

### Component Hierarchy

```
Layout (Root)
├── Theme Provider (inline script)
├── LoadingScreen
├── Header
│   ├── Logo
│   ├── Navigation
│   │   └── MegaMenu variants
│   └── Theme Toggle
├── Main Content (pages)
│   └── Section Components
│       └── UI Components
├── Footer
└── ScrollRail
```

### Component Patterns

1. **Barrel Exports**: Each directory has `index.ts` for clean imports
2. **Polymorphic Components**: `Button` renders as `<a>` or `<button>` based on props
3. **CSS Modules**: Scoped styles with `*.module.css` files
4. **Compound Components**: Complex sections composed from smaller parts

### Key Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `Header` | `layout/Header.tsx` | Main navigation with mega menus |
| `LoadingScreen` | `layout/LoadingScreen.tsx` | Initial page load animation |
| `ScrollRail` | `layout/ScrollRail.tsx` | Scroll progress indicator |
| `Button` | `ui/Button.tsx` | Polymorphic button/link component |

---

## 7. Styling Architecture

### Approach: Tailwind CSS v4 + CSS Modules

```
┌─────────────────────────────────────────────────────────────┐
│                    STYLING LAYERS                            │
├─────────────────────────────────────────────────────────────┤
│  1. Design Tokens (styles/tokens.css)                       │
│     └── CSS custom properties for colors, themes            │
│                                                             │
│  2. Global Styles (app/globals.css)                          │
│     └── Tailwind imports, CSS reset, typography scale       │
│                                                             │
│  3. Component Styles (*.module.css)                         │
│     └── Scoped CSS for individual components                 │
│                                                             │
│  4. Utility Styles (styles/utilities.css)                   │
│     └── Reusable utility classes                            │
└─────────────────────────────────────────────────────────────┘
```

### Theme System

- **Dark mode by default** with light mode toggle
- Uses `data-theme` attribute on `<html>` element
- Persists preference in `localStorage`
- Prevents flash of incorrect theme via inline script in `<head>`

### Typography Scale

| Class | Purpose |
|-------|---------|
| `.t-display` | Hero/landing headings |
| `.t-h2` | Section headings |
| `.t-h3` | Subsection headings |
| `.t-h4` | Card headings |
| `.t-body` | Body text |
| `.t-label` | Labels and captions |

---

## 8. State Management

### Client-Side State

| State | Management | Persistence |
|-------|------------|-------------|
| Theme | `useTheme` hook | localStorage |
| Cookie Consent | `useCookieConsent` hook | localStorage |
| Scroll Progress | `useScrollProgress` hook | None (ephemeral) |
| In-View Elements | `useInView` hook | None (ephemeral) |

### Custom Hooks

| Hook | Purpose |
|------|---------|
| `useTheme` | Manages dark/light theme with localStorage persistence |
| `useCookieConsent` | GDPR-compliant cookie consent management |
| `useScrollProgress` | Tracks scroll position for ScrollRail component |
| `useInView` | Intersection Observer for scroll-based animations |
| `useAnimateOnScroll` | Toggles `anim-up` class for reveal animations |
| `useActiveSection` | Tracks active section based on scroll position |
| `useCountUp` | Animated number counter for statistics |

---

## 9. Data Layer

### Static Data Files

| File | Purpose |
|------|---------|
| `data/site.ts` | Products, services, statistics, company info |
| `data/navigation.ts` | Navigation menu structure and links |
| `data/contact.ts` | Contact form configuration and contact info |

### Data Flow

```
Static Data Files (data/)
        │
        ▼
Page Components (app/*)
        │
        ▼
Section Components (components/sections/)
        │
        ▼
UI Components (components/ui/)
```

---

## 10. Performance Optimizations

### Next.js Optimizations

- **Font Loading**: Uses `next/font/google` for optimized font loading (Syne, DM Sans, JetBrains Mono)
- **Image Optimization**: Next.js Image component for optimized images
- **Code Splitting**: Automatic with App Router

### React Optimizations

- **Client Boundary**: `'use client'` only where interactivity required
- **Lazy Loading**: Components loaded as needed
- **Memoization**: Expensive computations cached in hooks

### CSS Optimizations

- **Tailwind Purging**: Unused styles removed in production
- **CSS Modules**: Scoped styles prevent specificity conflicts

---

## 11. Accessibility Features

- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA Labels**: Descriptive labels for interactive elements
- **Focus Management**: `focus-visible` styles for keyboard navigation
- **Color Contrast**: WCAG-compliant contrast ratios
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

---

## 12. Build & Deployment

### Build Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

### Configuration Files

| File | Purpose |
|------|---------|
| `next.config.ts` | Next.js configuration |
| `tsconfig.json` | TypeScript configuration |
| `eslint.config.mjs` | ESLint flat config |
| `postcss.config.mjs` | PostCSS with Tailwind plugin |

---

## 13. Key Design Decisions

### Why App Router?

- Server Components for better performance
- Streaming and Suspense support
- Better SEO with server-side rendering

### Why Tailwind CSS v4?

- Smaller bundle size
- Better performance with new engine
- CSS-first configuration with `@theme`

### Why CSS Modules?

- Scoped styles prevent conflicts
- Works well with Tailwind for complex components
- Better maintainability for component-specific styles

### Why Static Data Files?

- Simple content management without CMS
- Type-safe data with TypeScript
- Easy to update and maintain

---

## 14. Future Considerations

### Potential Enhancements

- **API Routes**: Add `/api` routes for form submissions
- **Database Integration**: Connect to CMS or database
- **Authentication**: Add user authentication if needed
- **Testing**: Add Jest/Vitest for unit tests
- **E2E Testing**: Add Playwright for integration tests

### Scalability Notes

- Current architecture supports adding new pages easily
- Component structure allows for reusable patterns
- Data layer can be extended to API calls without major refactoring

---

## 15. References

- Next.js 16 Documentation: `node_modules/next/dist/docs/`
- Tailwind CSS v4: https://tailwindcss.com/docs
- React 19 Docs: https://react.dev
- TypeScript Handbook: https://www.typescriptlang.org/docs/