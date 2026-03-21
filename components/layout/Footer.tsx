/**
 * @file Footer component
 * @description Site footer with navigation, newsletter, and legal links
 */

'use client';

import Link from 'next/link';
import { Logo, LinkedIn, Twitter, GitHub, YouTube } from '@/components/ui';
import { footerColumns, socialLinks, legalLinks, companyInfo } from '@/data/site';
import styles from './Footer.module.css';

const socialIconMap = {
  linkedin: LinkedIn,
  twitter: Twitter,
  github: GitHub,
  youtube: YouTube,
} as const;

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container--full">
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <Logo variant="footer" />
            <p className={styles.footerTagline}>{companyInfo.tagline}</p>
            <div>
              <div className="t-label" style={{ marginBottom: '0.75rem' }}>
                Stay Informed
              </div>
              <form className={styles.footerNewsletter} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@company.com"
                  aria-label="Email for newsletter"
                />
                <button type="submit" aria-label="Subscribe">
                  Subscribe
                </button>
              </form>
            </div>
            <div className={styles.footerSocial}>
              {socialLinks.map((link) => {
                const IconComponent = socialIconMap[link.icon as keyof typeof socialIconMap];
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={styles.socialIcon}
                    aria-label={link.label}
                  >
                    {IconComponent && <IconComponent size={16} />}
                  </a>
                );
              })}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <div className={styles.footerColTitle}>{column.title}</div>
              <ul className={styles.footerLinks} role="list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={styles.footerLink}
                      style={link.highlight ? { color: 'var(--brand-primary)' } : undefined}
                    >
                      {link.label}
                      {link.badge && (
                        <span
                          style={{
                            color: '#22c55e',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6rem',
                            padding: '0 4px',
                            border: '1px solid #22c55e33',
                            marginLeft: '4px',
                          }}
                        >
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            <span className="t-mono" style={{ fontSize: '0.75rem' }}>
              &copy; {companyInfo.copyright}
            </span>
          </div>
          <nav className={styles.footerLegal} aria-label="Legal links">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
