/**
 * @file Cookie Policy Page
 * @description NEXACORE cookie usage, types, and user controls
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import styles from './Cookies.module.css';

export const metadata: Metadata = {
  title: 'Cookie Policy — NEXACORE',
  description:
    'Learn how NEXACORE uses cookies, what types we set, how long they last, and how you can manage your preferences.',
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className="container">
            <p className="t-label">Legal</p>
            <h1 className="t-display">Cookie Policy</h1>
            <p className="t-body">
              Last Updated: April 2025
            </p>
          </div>
        </section>

        {/* ── Content ─────────────────────────────────────────── */}
        <div className="container">
          <div className={styles.layout}>

            {/* 1 — What Are Cookies */}
            <section className={styles.section} aria-labelledby="what-are-cookies">
              <h2 id="what-are-cookies" className={styles.sectionTitle}>
                What Are Cookies
              </h2>
              <p className={styles.sectionText}>
                Cookies are small text files placed on your device by websites you visit. They are
                widely used to make websites work, or work more efficiently, as well as to provide
                information to the site owners. A cookie contains a small amount of data — typically
                including an anonymous unique identifier — which is sent to and stored by your
                browser. Cookies do not damage your device or files and cannot execute code.
              </p>
              <p className={styles.sectionText}>
                Web beacons (also known as pixel tags) are tiny transparent image files that may be
                used alongside cookies to understand how users interact with our site. This policy
                covers both cookies and similar tracking technologies.
              </p>
            </section>

            {/* 2 — How We Use Cookies */}
            <section className={styles.section} aria-labelledby="how-we-use">
              <h2 id="how-we-use" className={styles.sectionTitle}>
                How We Use Cookies
              </h2>
              <p className={styles.sectionText}>
                NEXACORE uses cookies for several purposes:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Authentication:</strong>&nbsp;To keep you signed in to the dashboard and
                  remember your session state across page loads.
                </li>
                <li className={styles.listItem}>
                  <strong>Preferences:</strong>&nbsp;To store your chosen display theme (dark or
                  light mode) so it persists between visits without requiring sign-in.
                </li>
                <li className={styles.listItem}>
                  <strong>Analytics:</strong>&nbsp;With your consent, anonymised usage data helps
                  us understand how visitors navigate our site so we can improve content and
                  performance.
                </li>
                <li className={styles.listItem}>
                  <strong>Marketing:</strong>&nbsp;Only with your explicit consent, we may use
                  cookies to deliver personalised content and measure the effectiveness of
                  campaigns.
                </li>
              </ul>
            </section>

            {/* 3 — Types of Cookies */}
            <section className={styles.section} aria-labelledby="types-of-cookies">
              <h2 id="types-of-cookies" className={styles.sectionTitle}>
                Types of Cookies We Use
              </h2>

              <div className={styles.tagRow}>
                <span className={`${styles.tag} ${styles.tagNecessary}`}>Strictly Necessary</span>
              </div>
              <p className={styles.sectionText}>
                These cookies are essential for the website to function correctly. They enable core
                features such as theme persistence and consent management. The site cannot function
                properly without these cookies, and they cannot be disabled.
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <code>nexacore-theme</code> — Stores your dark/light theme preference.
                  Persists across sessions; never expires.
                </li>
                <li className={styles.listItem}>
                  <code>nexacore-cookies</code> — Records your cookie consent status.
                  Expires after 1 year.
                </li>
              </ul>

              <div className={styles.tagRow} style={{ marginTop: '1rem' }}>
                <span className={`${styles.tag} ${styles.tagAnalytics}`}>Analytics</span>
              </div>
              <p className={styles.sectionText}>
                These cookies are set only with your consent and collect anonymised information
                about how visitors use our site — pages visited, time spent, and error events. No
                personally identifiable information is collected.
              </p>

              <div className={styles.tagRow} style={{ marginTop: '1rem' }}>
                <span className={`${styles.tag} ${styles.tagMarketing}`}>Marketing</span>
              </div>
              <p className={styles.sectionText}>
                Marketing cookies are activated only when you give explicit consent. They allow us
                to tailor content and advertisements to your interests and measure campaign
                performance. You may withdraw consent at any time via the cookie preference centre.
              </p>
            </section>

            {/* 4 — Cookie Table */}
            <section className={styles.section} aria-labelledby="cookie-table">
              <h2 id="cookie-table" className={styles.sectionTitle}>
                Cookie Reference Table
              </h2>
              <div className={styles.tableWrapper}>
                <table className={styles.cookieTable}>
                  <thead className={styles.cookieTableHead}>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">Purpose</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Provider</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>nexacore-theme</td>
                      <td>
                        <span className={`${styles.tag} ${styles.tagNecessary}`}>Necessary</span>
                      </td>
                      <td>Stores dark/light theme preference</td>
                      <td>Persistent</td>
                      <td>nexacore.io</td>
                    </tr>
                    <tr>
                      <td>nexacore-cookies</td>
                      <td>
                        <span className={`${styles.tag} ${styles.tagNecessary}`}>Necessary</span>
                      </td>
                      <td>Stores cookie consent status</td>
                      <td>1 year</td>
                      <td>nexacore.io</td>
                    </tr>
                    <tr>
                      <td>_ga</td>
                      <td>
                        <span className={`${styles.tag} ${styles.tagAnalytics}`}>Analytics</span>
                      </td>
                      <td>Google Analytics user ID (only with consent)</td>
                      <td>2 years</td>
                      <td>Google</td>
                    </tr>
                    <tr>
                      <td>_gid</td>
                      <td>
                        <span className={`${styles.tag} ${styles.tagAnalytics}`}>Analytics</span>
                      </td>
                      <td>Google Analytics session ID (only with consent)</td>
                      <td>24 hours</td>
                      <td>Google</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5 — Third-Party Cookies */}
            <section className={styles.section} aria-labelledby="third-party">
              <h2 id="third-party" className={styles.sectionTitle}>
                Third-Party Cookies
              </h2>
              <p className={styles.sectionText}>
                Some pages on nexacore.io embed content or functionality from third-party services.
                These providers may set their own cookies, which are governed by their respective
                privacy policies rather than this policy.
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Google Maps:</strong>&nbsp;Embedded on our Contact page to display our
                  office locations. Google may set cookies to personalise the map experience and
                  collect usage data.{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    Google Privacy Policy
                  </a>
                  .
                </li>
                <li className={styles.listItem}>
                  <strong>Google Fonts:</strong>&nbsp;Typography assets are loaded from Google
                  Fonts CDN. Google may log the request for performance and security purposes, but
                  does not set persistent tracking cookies for this service.
                </li>
              </ul>
            </section>

            {/* 6 — Cookie Duration */}
            <section className={styles.section} aria-labelledby="cookie-duration">
              <h2 id="cookie-duration" className={styles.sectionTitle}>
                Cookie Duration
              </h2>
              <p className={styles.sectionText}>
                Cookies can be either <strong>session cookies</strong> or{' '}
                <strong>persistent cookies</strong>:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Session cookies</strong> are temporary and are deleted automatically when
                  you close your browser. They are used to carry information between pages during a
                  single browsing session.
                </li>
                <li className={styles.listItem}>
                  <strong>Persistent cookies</strong> remain on your device for a fixed period
                  (or until you manually delete them) and are reactivated each time you return to
                  the site. We use these to remember your theme preference and consent choices.
                </li>
              </ul>
              <p className={styles.sectionText}>
                The specific duration of each cookie we set is listed in the Cookie Reference
                Table above.
              </p>
            </section>

            {/* 7 — Managing Preferences */}
            <section className={styles.section} aria-labelledby="managing-prefs">
              <h2 id="managing-prefs" className={styles.sectionTitle}>
                Managing Your Preferences
              </h2>
              <p className={styles.sectionText}>
                You have several options for controlling cookies:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Consent banner:</strong>&nbsp;When you first visit NEXACORE, a banner
                  lets you accept or decline non-essential cookies. You can reopen this preference
                  centre at any time via the &ldquo;Cookie Settings&rdquo; link in our site footer.
                </li>
                <li className={styles.listItem}>
                  <strong>Browser settings:</strong>&nbsp;Most browsers allow you to view, block,
                  or delete cookies through their settings. Note that blocking all cookies may
                  affect site functionality, including theme persistence.
                </li>
                <li className={styles.listItem}>
                  <strong>Browser-specific guides:</strong>&nbsp;Instructions for managing cookies
                  are provided by{' '}
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-primary)' }}>Chrome</a>,{' '}
                  <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-primary)' }}>Firefox</a>,{' '}
                  <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-primary)' }}>Safari</a>, and{' '}
                  <a href="https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-primary)' }}>Edge</a>.
                </li>
              </ul>
              <div className={styles.highlight}>
                To clear cookies manually, navigate to your browser&apos;s privacy or history
                settings and select &ldquo;Clear browsing data&rdquo; or &ldquo;Delete
                cookies.&rdquo; This will reset your theme preference and consent status, and you
                will be shown the consent banner again on your next visit.
              </div>
            </section>

            {/* 8 — Do Not Track */}
            <section className={styles.section} aria-labelledby="do-not-track">
              <h2 id="do-not-track" className={styles.sectionTitle}>
                Do Not Track
              </h2>
              <p className={styles.sectionText}>
                Some browsers include a &ldquo;Do Not Track&rdquo; (DNT) signal that you can
                activate to request that websites do not track your activity. NEXACORE respects
                DNT signals: when DNT is active in your browser, we disable all analytics cookies
                and do not forward your usage data to third-party analytics providers. Strictly
                necessary cookies (theme and consent) continue to operate regardless of DNT status.
              </p>
            </section>

            {/* 9 — Changes */}
            <section className={styles.section} aria-labelledby="changes">
              <h2 id="changes" className={styles.sectionTitle}>
                Changes to This Policy
              </h2>
              <p className={styles.sectionText}>
                We may update this Cookie Policy from time to time to reflect changes in technology,
                regulation, or our own practices. When we make material changes, we will update the
                &ldquo;Last Updated&rdquo; date at the top of this page and, where appropriate,
                notify users via the consent banner or email. Continued use of our website after
                changes are posted constitutes acceptance of the revised policy.
              </p>
            </section>

            {/* 10 — Contact */}
            <section className={styles.section} aria-labelledby="contact">
              <h2 id="contact" className={styles.sectionTitle}>
                Contact
              </h2>
              <p className={styles.sectionText}>
                If you have questions about our use of cookies or this policy, please contact our
                Privacy team:
              </p>
              <div className={styles.highlight}>
                <strong>NEXACORE Privacy Team</strong>
                <br />
                Email:{' '}
                <a
                  href="mailto:privacy@nexacore.io"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  privacy@nexacore.io
                </a>
                <br />
                You can also reach us via our{' '}
                <Link href="/contact" style={{ color: 'var(--brand-primary)' }}>
                  Contact page
                </Link>
                .
              </div>
            </section>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
