/**
 * @file Accessibility Statement Page
 * @description NEXACORE WCAG 2.1 conformance status, implemented features, and known limitations
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import styles from './Accessibility.module.css';

export const metadata: Metadata = {
  title: 'Accessibility Statement — NEXACORE',
  description:
    'NEXACORE is committed to digital accessibility. Read our WCAG 2.1 conformance status, implemented features, known limitations, and how to report issues.',
  robots: { index: true, follow: true },
};

/* ── Accessibility feature data ─────────────────────────────── */
interface Feature {
  icon: React.ReactNode;
  title: string;
  sub: string;
}

const FEATURES: Feature[] = [
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
    title: 'Skip Navigation Link',
    sub: 'A "Skip to main content" link is the first focusable element on every page, allowing keyboard and screen-reader users to bypass the navigation.',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
    title: 'Keyboard Navigation',
    sub: 'All interactive elements — links, buttons, form inputs, and modals — are reachable and operable using the Tab, Shift+Tab, Enter, and Space keys.',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Visible Focus Indicators',
    sub: 'All focusable elements display a high-contrast 2px outline using our brand accent colour (#00d4ff) when focused, meeting WCAG 2.1 SC 2.4.7.',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'ARIA Labels',
    sub: 'All interactive elements carry descriptive aria-label or aria-labelledby attributes to provide meaningful context for assistive technologies.',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Semantic HTML5 Landmarks',
    sub: 'Pages use semantic elements — <header>, <main>, <nav>, <footer>, <section>, and <article> — providing clear structure for screen reader users.',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Responsive Design',
    sub: 'The layout adapts seamlessly from 320px (iPhone SE) to 2560px+ (large displays) without horizontal scrolling or content truncation.',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 11l2 2 4-4" />
      </svg>
    ),
    title: 'Touch-Friendly Targets',
    sub: 'All interactive tap targets meet the minimum 44×44 CSS pixel requirement specified by WCAG 2.5.5, ensuring usability on touchscreen devices.',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'High Contrast Text',
    sub: 'Normal text achieves a minimum 4.5:1 contrast ratio; large text and UI components meet 3:1. Both light and dark themes have been verified.',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    title: 'Dark / Light Theme',
    sub: 'Users can toggle between dark and light modes via the header control. The preference is stored locally and applied on return visits.',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
    title: 'Motion Reduction (Planned)',
    sub: 'Support for the prefers-reduced-motion media query is in active development. When enabled, all CSS transitions and animations will be suppressed.',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Screen Reader Compatibility',
    sub: 'We test with NVDA on Windows (Chrome and Firefox) and VoiceOver on macOS and iOS (Safari) to verify correct reading order and landmark navigation.',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Colour-Independent Information',
    sub: 'Status indicators and error messages always include a text or icon cue in addition to colour, ensuring users with colour-vision deficiencies receive the same information.',
  },
];

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className="container">
            <p className="t-label">Legal</p>
            <h1 className="t-display">Accessibility Statement</h1>
            <p className="t-body">
              Last Updated: April 2025
            </p>
          </div>
        </section>

        {/* ── Content ─────────────────────────────────────────── */}
        <div className="container">
          <div className={styles.layout}>

            {/* 1 — Our Commitment */}
            <section className={styles.section} aria-labelledby="commitment">
              <h2 id="commitment" className={styles.sectionTitle}>
                Our Commitment
              </h2>
              <p className={styles.sectionText}>
                NEXACORE is committed to ensuring digital accessibility for people with disabilities.
                We continually improve the user experience for everyone and apply relevant
                accessibility standards across all our web properties. Our goal is full conformance
                with the{' '}
                <a
                  href="https://www.w3.org/TR/WCAG21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  Web Content Accessibility Guidelines (WCAG) 2.1
                </a>{' '}
                at Level AA.
              </p>
              <p className={styles.sectionText}>
                Accessibility is not a checkbox — it is an ongoing engineering and design
                discipline. We dedicate engineering cycles in every quarterly release to audit,
                remediate, and improve our accessibility posture. We welcome feedback from all users
                to help us identify barriers we may have missed.
              </p>
            </section>

            {/* 2 — Conformance Status */}
            <section className={styles.section} aria-labelledby="conformance">
              <h2 id="conformance" className={styles.sectionTitle}>
                Conformance Status
              </h2>
              <p className={styles.sectionText}>
                Current status:{' '}
                <span className={`${styles.statusBadge} ${styles.statusPartial}`}>
                  Partially Conformant
                </span>
              </p>
              <p className={styles.sectionText}>
                nexacore.io is <strong>partially conformant</strong> with WCAG 2.1 Level AA.
                Partially conformant means that some parts of the content do not fully conform to
                the accessibility standard. We are actively working to resolve all outstanding
                issues and are targeting{' '}
                <span className={`${styles.statusBadge} ${styles.statusFull}`}>
                  Full AA Conformance
                </span>{' '}
                by end of 2025.
              </p>
            </section>

            {/* 3 — Technical Specifications */}
            <section className={styles.section} aria-labelledby="tech-specs">
              <h2 id="tech-specs" className={styles.sectionTitle}>
                Technical Specifications
              </h2>
              <p className={styles.sectionText}>
                nexacore.io relies on the following technologies for conformance:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {['HTML5', 'CSS3', 'ARIA (Accessible Rich Internet Applications)', 'WAI-ARIA 1.2'].map((tech) => (
                  <li
                    key={tech}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      fontSize: 'clamp(0.88rem, 1.1vw, 1rem)',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.7',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        width: '5px',
                        height: '5px',
                        background: 'var(--brand-primary)',
                        borderRadius: '50%',
                        flexShrink: 0,
                        marginTop: '0.6rem',
                      }}
                    />
                    {tech}
                  </li>
                ))}
              </ul>
              <p className={styles.sectionText}>
                These technologies are relied upon for conformance. We also use progressive
                enhancement so core content remains accessible when JavaScript is disabled or
                unavailable.
              </p>
            </section>

            {/* 4 — Accessibility Features */}
            <section className={styles.section} aria-labelledby="features">
              <h2 id="features" className={styles.sectionTitle}>
                Accessibility Features
              </h2>
              <p className={styles.sectionText}>
                The following features have been implemented to improve accessibility:
              </p>
              <div className={styles.featureGrid} role="list">
                {FEATURES.map((f) => (
                  <div key={f.title} className={styles.featureCard} role="listitem">
                    <div className={styles.featureIcon} aria-hidden="true">
                      {f.icon}
                    </div>
                    <p className={styles.featureTitle}>{f.title}</p>
                    <p className={styles.featureSub}>{f.sub}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 — Known Limitations */}
            <section className={styles.section} aria-labelledby="limitations">
              <h2 id="limitations" className={styles.sectionTitle}>
                Known Limitations
              </h2>
              <p className={styles.sectionText}>
                Despite our efforts, some areas of nexacore.io have known accessibility issues
                that we are actively working to resolve:
              </p>
              <ul className={styles.limitationList}>
                <li>
                  <strong>Data table captions:</strong> Some legacy data tables lack full ARIA
                  caption and summary attributes. We are auditing all tables and adding appropriate
                  markup. Expected resolution: Q2 2025.
                </li>
                <li>
                  <strong>Video captions:</strong>{' '}
                  <span className={`${styles.statusBadge} ${styles.statusPlanned}`}>Planned Q3 2025</span>
                  {' '}Video content across the site currently lacks closed captions and audio
                  descriptions. We are integrating a captioning workflow for all new and existing
                  video assets.
                </li>
                <li>
                  <strong>PDF documents:</strong>{' '}
                  <span className={`${styles.statusBadge} ${styles.statusPlanned}`}>Planned Q4 2025</span>
                  {' '}PDF documents available for download are not yet tagged for accessibility
                  and may not be fully readable by screen readers. We are remediating all PDFs to
                  meet PDF/UA standards.
                </li>
              </ul>
            </section>

            {/* 6 — Assessment Approach */}
            <section className={styles.section} aria-labelledby="assessment">
              <h2 id="assessment" className={styles.sectionTitle}>
                Assessment Approach
              </h2>
              <p className={styles.sectionText}>
                NEXACORE assesses the accessibility of nexacore.io through the following approaches:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Self-evaluation — our engineering and design teams conduct accessibility reviews during every sprint using automated tooling (axe-core, Lighthouse) and manual keyboard testing.',
                  'Periodic third-party audits — we engage independent accessibility consultants annually to perform a comprehensive WCAG 2.1 AA audit and provide a remediation roadmap.',
                  'User testing — we conduct usability testing sessions with participants who rely on assistive technologies, including screen readers and switch access devices.',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      fontSize: 'clamp(0.88rem, 1.1vw, 1rem)',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.7',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        width: '5px',
                        height: '5px',
                        background: 'var(--brand-primary)',
                        borderRadius: '50%',
                        flexShrink: 0,
                        marginTop: '0.6rem',
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 7 — Formal Complaints */}
            <section className={styles.section} aria-labelledby="complaints">
              <h2 id="complaints" className={styles.sectionTitle}>
                Formal Complaints
              </h2>
              <p className={styles.sectionText}>
                If you are not satisfied with our response to your accessibility feedback, or if you
                believe we have not addressed your concern adequately, you may submit a formal
                accessibility complaint to:
              </p>
              <div className={styles.contactBox}>
                <strong>NEXACORE Accessibility Team</strong>
                <p>
                  Email:{' '}
                  <a href="mailto:accessibility@nexacore.io">
                    accessibility@nexacore.io
                  </a>
                </p>
                <p>
                  We aim to acknowledge all formal complaints within <strong>2 business days</strong>{' '}
                  and to provide a full written response or proposed resolution within 10 business
                  days.
                </p>
              </div>
            </section>

            {/* 8 — Enforcement Procedure */}
            <section className={styles.section} aria-labelledby="enforcement">
              <h2 id="enforcement" className={styles.sectionTitle}>
                Enforcement Procedure
              </h2>
              <p className={styles.sectionText}>
                If you are dissatisfied with our handling of your complaint, you may contact the
                relevant regulatory body or use the formal complaints procedure of the{' '}
                <a
                  href="https://www.w3.org/WAI/WCAG-EM/report/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  W3C Web Accessibility Initiative (WAI)
                </a>
                . The WAI provides guidance on making formal accessibility complaints under
                applicable regulations, including references to national enforcement bodies.
              </p>
            </section>

            {/* 9 — Feedback */}
            <section className={styles.section} aria-labelledby="feedback">
              <h2 id="feedback" className={styles.sectionTitle}>
                Feedback
              </h2>
              <p className={styles.sectionText}>
                We welcome your feedback on the accessibility of nexacore.io. Please let us know if
                you encounter accessibility barriers, find content difficult to use with assistive
                technology, or have suggestions for improvement.
              </p>
              <div className={styles.contactBox}>
                <strong>Accessibility Feedback</strong>
                <p>
                  Email:{' '}
                  <a href="mailto:accessibility@nexacore.io">
                    accessibility@nexacore.io
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:+15124007700">+1 (512) 400-7700</a>
                </p>
                <p>
                  Or reach us via our{' '}
                  <Link href="/contact">Contact page</Link>.
                  We try to respond to accessibility feedback within 2 business days.
                </p>
              </div>
            </section>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
