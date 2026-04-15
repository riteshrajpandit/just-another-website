/**
 * @file Privacy Policy Page
 * @description Full Privacy Policy for NEXACORE — covers data collection, use,
 *   sharing, retention, GDPR rights, security, and international transfers.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer, ScrollRail } from '@/components/layout';
import styles from './Privacy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — NEXACORE',
  description:
    'Learn how NEXACORE collects, uses, and protects your personal data. Covers GDPR rights, data retention, security certifications, and international transfer safeguards.',
  openGraph: {
    title: 'Privacy Policy — NEXACORE',
    description:
      'Understand how NEXACORE handles your personal information, your GDPR rights, and how to contact our Data Privacy team.',
    url: 'https://nexacore.io/privacy',
    siteName: 'NEXACORE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://nexacore.io/privacy',
  },
};

const tocItems = [
  { num: '01', label: 'Overview & Scope', anchor: '#overview' },
  { num: '02', label: 'Information We Collect', anchor: '#information' },
  { num: '03', label: 'How We Use Your Information', anchor: '#use' },
  { num: '04', label: 'Data Sharing', anchor: '#sharing' },
  { num: '05', label: 'Cookies', anchor: '#cookies' },
  { num: '06', label: 'Data Retention', anchor: '#retention' },
  { num: '07', label: 'Your Rights (GDPR)', anchor: '#rights' },
  { num: '08', label: 'Data Security', anchor: '#security' },
  { num: '09', label: 'International Transfers', anchor: '#transfers' },
  { num: '10', label: "Children's Privacy", anchor: '#children' },
  { num: '11', label: 'Changes to This Policy', anchor: '#changes' },
  { num: '12', label: 'Contact Us', anchor: '#contact' },
];

export default function PrivacyPage() {
  return (
    <>
      <ScrollRail />
      <Header />

      <main id="main-content">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={styles.hero} aria-labelledby="privacy-hero-title">
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.heroBlob} aria-hidden="true" />

          <div className={`container ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Privacy Policy</span>
            </nav>

            <div className={styles.heroBadge} aria-label="Document status">
              <span className={styles.heroBadgeDot} aria-hidden="true" />
              Privacy Policy
            </div>

            <h1 id="privacy-hero-title" className={styles.heroTitle}>
              Your Privacy,
              <span className={styles.heroTitleAccent}>Our Responsibility.</span>
            </h1>

            <p className="t-body" style={{ maxWidth: '600px' }}>
              NEXACORE is committed to handling your personal data with transparency,
              care, and full compliance with applicable privacy laws including the
              EU General Data Protection Regulation (GDPR).
            </p>

            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaLabel}>Last Updated</span>
                <span className={styles.heroMetaValue}>April 2025</span>
              </div>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaLabel}>Effective Date</span>
                <span className={styles.heroMetaValue}>April 1, 2025</span>
              </div>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaLabel}>Applies To</span>
                <span className={styles.heroMetaValue}>nexacore.io</span>
              </div>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaLabel}>Controller</span>
                <span className={styles.heroMetaValue}>NEXACORE, Inc.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────── */}
        <div className={`container section-pad ${styles.layout}`}>

          {/* ── Main Content ─────────────────────────────── */}
          <article className={styles.content} aria-label="Privacy Policy content">

            {/* 01 Overview & Scope */}
            <section className={styles.section} aria-labelledby="sec-overview">
              <span id="overview" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLine} aria-hidden="true" />
                <span className={styles.sectionNum}>01</span>
              </div>
              <h2 id="sec-overview" className={styles.sectionTitle}>Overview &amp; Scope</h2>
              <p className={styles.sectionText}>
                This Privacy Policy describes how NEXACORE, Inc. (&ldquo;NEXACORE&rdquo;, &ldquo;we&rdquo;,
                &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a corporation headquartered at 200 Congress Avenue
                Suite&nbsp;14F, Austin TX&nbsp;78701, collects, uses, discloses, and
                safeguards personal information when you visit our website at
                nexacore.io (the &ldquo;Site&rdquo;), interact with our marketing materials, or
                otherwise engage with our services.
              </p>
              <p className={styles.sectionText}>
                Founded in 2012, NEXACORE provides enterprise software infrastructure,
                cloud migration, DevSecOps, cybersecurity operations, data engineering,
                and digital transformation advisory services to organisations worldwide.
                This policy applies to all personal data collected through the Site and
                any associated online properties we operate.
              </p>
              <div className={styles.highlight}>
                <p className={styles.highlightLabel}>Scope Note</p>
                <p className={styles.highlightText}>
                  This policy does not cover data processed under separate data
                  processing agreements with enterprise clients. If you are a client
                  whose data NEXACORE processes on your behalf, please refer to your
                  Master Services Agreement and the accompanying Data Processing
                  Addendum (DPA).
                </p>
              </div>
              <p className={styles.sectionText}>
                By using the Site you acknowledge you have read and understood this
                Privacy Policy. If you do not agree, please refrain from using our Site.
              </p>
            </section>

            {/* 02 Information We Collect */}
            <section className={styles.section} aria-labelledby="sec-information">
              <span id="information" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLine} aria-hidden="true" />
                <span className={styles.sectionNum}>02</span>
              </div>
              <h2 id="sec-information" className={styles.sectionTitle}>Information We Collect</h2>
              <p className={styles.sectionText}>
                We collect information in three ways: directly from you, automatically
                when you use the Site, and (where you have consented) through analytics
                services.
              </p>

              <h3 className={styles.sectionSubtitle}>Information You Provide Directly</h3>
              <p className={styles.sectionText}>
                When you fill in a contact form, request a demo, or otherwise reach out
                to us, we may collect:
              </p>
              <ul className={styles.list} role="list">
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>Full name</strong> — to personalise our response and records.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>Business email address</strong> — our primary channel for responding to enquiries.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>Company name and role</strong> — to contextualise your needs and tailor our proposal.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>Message content</strong> — the specific information, question, or request you submit.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>Phone number</strong> — only when explicitly provided; used solely for scheduled calls you request.</span>
                </li>
              </ul>

              <h3 className={styles.sectionSubtitle}>Usage Analytics Data (with Consent)</h3>
              <p className={styles.sectionText}>
                If you accept analytics cookies, we collect aggregated, pseudonymous
                data about how visitors interact with the Site, including pages viewed,
                session duration, referral source, and navigation patterns. This data
                does not personally identify you.
              </p>

              <h3 className={styles.sectionSubtitle}>Technical Data Collected Automatically</h3>
              <p className={styles.sectionText}>
                Our hosting infrastructure and web server logs automatically record
                certain technical information when you visit the Site:
              </p>
              <ul className={styles.list} role="list">
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>IP address</strong> — used for security monitoring and geographic request routing; truncated to the last octet in analytics.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>Browser type and version</strong> — used to optimise Site rendering and diagnose compatibility issues.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>Operating system</strong> — used alongside browser data for technical support purposes.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>Referring URL and exit page</strong> — used to understand traffic sources and improve content.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>Timestamps of requests</strong> — used in access logs retained for security auditing.</span>
                </li>
              </ul>
            </section>

            {/* 03 How We Use Your Information */}
            <section className={styles.section} aria-labelledby="sec-use">
              <span id="use" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLine} aria-hidden="true" />
                <span className={styles.sectionNum}>03</span>
              </div>
              <h2 id="sec-use" className={styles.sectionTitle}>How We Use Your Information</h2>
              <p className={styles.sectionText}>
                We process personal information only where we have a lawful basis to do
                so. The table below maps each purpose to its legal basis under the GDPR.
              </p>

              <div className={styles.infoGrid} role="list">
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>Purpose</p>
                  <p className={styles.infoCardValue}>Respond to enquiries</p>
                  <p className={styles.infoCardSub}>Lawful basis: Legitimate interests (pre-contractual steps) or contract performance.</p>
                </div>
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>Purpose</p>
                  <p className={styles.infoCardValue}>Improve the Site &amp; services</p>
                  <p className={styles.infoCardSub}>Lawful basis: Legitimate interests — improving UX based on aggregated, anonymised analytics.</p>
                </div>
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>Purpose</p>
                  <p className={styles.infoCardValue}>Marketing communications</p>
                  <p className={styles.infoCardSub}>Lawful basis: Consent — you must opt in. You may withdraw at any time via unsubscribe links.</p>
                </div>
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>Purpose</p>
                  <p className={styles.infoCardValue}>Legal compliance</p>
                  <p className={styles.infoCardSub}>Lawful basis: Legal obligation — e.g. responding to court orders, regulatory requests.</p>
                </div>
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>Purpose</p>
                  <p className={styles.infoCardValue}>Security &amp; fraud prevention</p>
                  <p className={styles.infoCardSub}>Lawful basis: Legitimate interests — protecting the integrity of our systems and users.</p>
                </div>
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>Purpose</p>
                  <p className={styles.infoCardValue}>Demo scheduling</p>
                  <p className={styles.infoCardSub}>Lawful basis: Contract performance — processing contact details to arrange requested demos.</p>
                </div>
              </div>

              <p className={styles.sectionText}>
                We do not use your personal data for automated decision-making or
                profiling that produces legal or similarly significant effects.
              </p>
            </section>

            {/* 04 Data Sharing */}
            <section className={styles.section} aria-labelledby="sec-sharing">
              <span id="sharing" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLine} aria-hidden="true" />
                <span className={styles.sectionNum}>04</span>
              </div>
              <h2 id="sec-sharing" className={styles.sectionTitle}>Data Sharing</h2>

              <div className={styles.highlight}>
                <p className={styles.highlightLabel}>Our Commitment</p>
                <p className={styles.highlightText}>
                  NEXACORE does not sell, rent, or trade your personal data to third
                  parties for their marketing purposes. Ever.
                </p>
              </div>

              <p className={styles.sectionText}>
                We share personal data only in the limited circumstances described below,
                and always under contractual data protection obligations:
              </p>

              <h3 className={styles.sectionSubtitle}>Hosting &amp; Infrastructure Providers</h3>
              <p className={styles.sectionText}>
                The Site is hosted on <strong className={styles.listItemStrong}>Vercel, Inc.</strong> (San Francisco, CA).
                Vercel processes technical data such as IP addresses and request logs
                as part of providing CDN and hosting services. Vercel is certified
                under applicable frameworks and we have executed a Data Processing
                Agreement with Vercel covering all personal data.
              </p>

              <h3 className={styles.sectionSubtitle}>Analytics Providers (Consent-Gated)</h3>
              <p className={styles.sectionText}>
                Where you have consented to analytics cookies, aggregated, pseudonymous
                interaction data may be shared with our analytics provider. No
                personally identifiable information is shared. You can withdraw consent
                at any time through our cookie preference centre.
              </p>

              <h3 className={styles.sectionSubtitle}>Legal Requirements</h3>
              <p className={styles.sectionText}>
                We may disclose your personal data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court,
                government agency, or regulatory body). We will notify you of such
                requests where legally permitted.
              </p>

              <h3 className={styles.sectionSubtitle}>Business Transfers</h3>
              <p className={styles.sectionText}>
                In the event of a merger, acquisition, or sale of all or a portion of
                our assets, personal data may be among the assets transferred. We will
                notify you via a prominent notice on the Site and, where required, seek
                your consent before your data is subject to a materially different
                privacy policy.
              </p>
            </section>

            {/* 05 Cookies */}
            <section className={styles.section} aria-labelledby="sec-cookies">
              <span id="cookies" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLine} aria-hidden="true" />
                <span className={styles.sectionNum}>05</span>
              </div>
              <h2 id="sec-cookies" className={styles.sectionTitle}>Cookies</h2>
              <p className={styles.sectionText}>
                We use cookies and similar tracking technologies to operate the Site,
                remember your preferences, and (where you consent) to collect analytics
                data. Cookies fall into three categories on our Site:
              </p>
              <ul className={styles.list} role="list">
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>Strictly Necessary</strong> — essential for the Site to function; cannot be disabled.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>Preference</strong> — remember your settings such as theme selection; enabled by default but may be disabled.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span><strong className={styles.listItemStrong}>Analytics</strong> — help us understand how visitors use the Site; require your consent before activation.</span>
                </li>
              </ul>
              <div className={styles.highlight}>
                <p className={styles.highlightLabel}>Full Cookie Information</p>
                <p className={styles.highlightText}>
                  For a complete list of cookies used, their purpose, duration, and
                  how to manage them, please refer to our{' '}
                  <Link href="/cookies">Cookie Policy</Link>.
                  You can update your cookie preferences at any time using the
                  &ldquo;Manage Cookies&rdquo; link in the Site footer.
                </p>
              </div>
            </section>

            {/* 06 Data Retention */}
            <section className={styles.section} aria-labelledby="sec-retention">
              <span id="retention" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLine} aria-hidden="true" />
                <span className={styles.sectionNum}>06</span>
              </div>
              <h2 id="sec-retention" className={styles.sectionTitle}>Data Retention</h2>
              <p className={styles.sectionText}>
                We retain personal data only for as long as necessary to fulfil the
                purposes for which it was collected, including satisfying any legal,
                accounting, or reporting obligations.
              </p>

              <div className={styles.infoGrid} role="list">
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>Data Category</p>
                  <p className={styles.infoCardValue}>Contact form inquiries</p>
                  <p className={styles.infoCardSub}>Retained for <strong>2 years</strong> from the date of last interaction, then securely deleted.</p>
                </div>
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>Data Category</p>
                  <p className={styles.infoCardValue}>Analytics data</p>
                  <p className={styles.infoCardSub}>Aggregated session data retained for <strong>13 months</strong>, in line with CNIL guidelines.</p>
                </div>
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>Data Category</p>
                  <p className={styles.infoCardValue}>Marketing opt-ins</p>
                  <p className={styles.infoCardSub}>Retained until you withdraw consent or request erasure, whichever comes first.</p>
                </div>
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>Data Category</p>
                  <p className={styles.infoCardValue}>Legal &amp; financial records</p>
                  <p className={styles.infoCardSub}>Retained for <strong>7 years</strong> to comply with applicable tax and commercial law obligations.</p>
                </div>
              </div>

              <p className={styles.sectionText}>
                After the applicable retention period, data is either securely deleted
                or irreversibly anonymised. Server access logs are automatically purged
                on a rolling 90-day cycle unless flagged for an active security
                investigation.
              </p>
            </section>

            {/* 07 Your Rights (GDPR) */}
            <section className={styles.section} aria-labelledby="sec-rights">
              <span id="rights" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLine} aria-hidden="true" />
                <span className={styles.sectionNum}>07</span>
              </div>
              <h2 id="sec-rights" className={styles.sectionTitle}>Your Rights (GDPR)</h2>
              <p className={styles.sectionText}>
                If you are located in the European Economic Area (EEA), the United
                Kingdom, or another jurisdiction with equivalent data protection laws,
                you have the following rights regarding your personal data. To exercise
                any of these rights, contact us at{' '}
                <a href="mailto:privacy@nexacore.io">privacy@nexacore.io</a>.
              </p>

              <div className={styles.rightsGrid} role="list">
                <div className={styles.rightCard} role="listitem">
                  <p className={styles.rightCardTitle}>
                    <span className={styles.rightCardIcon}>Art.15</span>
                    Right of Access
                  </p>
                  <p className={styles.rightCardText}>
                    Request a copy of the personal data we hold about you and
                    information about how we use it.
                  </p>
                </div>
                <div className={styles.rightCard} role="listitem">
                  <p className={styles.rightCardTitle}>
                    <span className={styles.rightCardIcon}>Art.16</span>
                    Right to Rectification
                  </p>
                  <p className={styles.rightCardText}>
                    Request correction of inaccurate or incomplete personal data
                    we hold about you.
                  </p>
                </div>
                <div className={styles.rightCard} role="listitem">
                  <p className={styles.rightCardTitle}>
                    <span className={styles.rightCardIcon}>Art.17</span>
                    Right to Erasure
                  </p>
                  <p className={styles.rightCardText}>
                    Request deletion of your personal data where we no longer have
                    a lawful basis to retain it.
                  </p>
                </div>
                <div className={styles.rightCard} role="listitem">
                  <p className={styles.rightCardTitle}>
                    <span className={styles.rightCardIcon}>Art.20</span>
                    Right to Portability
                  </p>
                  <p className={styles.rightCardText}>
                    Receive your personal data in a structured, commonly-used,
                    machine-readable format.
                  </p>
                </div>
                <div className={styles.rightCard} role="listitem">
                  <p className={styles.rightCardTitle}>
                    <span className={styles.rightCardIcon}>Art.21</span>
                    Right to Object
                  </p>
                  <p className={styles.rightCardText}>
                    Object to processing based on legitimate interests or for
                    direct marketing purposes at any time.
                  </p>
                </div>
                <div className={styles.rightCard} role="listitem">
                  <p className={styles.rightCardTitle}>
                    <span className={styles.rightCardIcon}>Art.7</span>
                    Withdraw Consent
                  </p>
                  <p className={styles.rightCardText}>
                    Where processing is based on consent, withdraw it at any time
                    without affecting the lawfulness of prior processing.
                  </p>
                </div>
              </div>

              <p className={styles.sectionText}>
                We will respond to all verified requests within 30 days. In complex
                cases we may extend this to 60 days, in which case we will notify
                you of the extension and the reason. There is no charge for
                exercising your rights unless requests are manifestly unfounded or
                excessive.
              </p>
              <div className={styles.highlight}>
                <p className={styles.highlightLabel}>Supervisory Authority</p>
                <p className={styles.highlightText}>
                  You also have the right to lodge a complaint with your local data
                  protection supervisory authority (e.g. the ICO in the UK, or the
                  relevant EU DPA). We would, however, appreciate the chance to
                  address your concerns first — please contact{' '}
                  <a href="mailto:privacy@nexacore.io">privacy@nexacore.io</a>.
                </p>
              </div>
            </section>

            {/* 08 Data Security */}
            <section className={styles.section} aria-labelledby="sec-security">
              <span id="security" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLine} aria-hidden="true" />
                <span className={styles.sectionNum}>08</span>
              </div>
              <h2 id="sec-security" className={styles.sectionTitle}>Data Security</h2>
              <p className={styles.sectionText}>
                NEXACORE implements a layered, defence-in-depth security programme to
                protect personal data against unauthorised access, disclosure, alteration,
                and destruction. Our security controls are independently audited and
                certified to industry-leading standards.
              </p>

              <div className={styles.infoGrid} role="list">
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>Certification</p>
                  <p className={styles.infoCardValue}>SOC 2 Type II</p>
                  <p className={styles.infoCardSub}>Annual third-party audit of security, availability, and confidentiality trust service criteria.</p>
                </div>
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>Certification</p>
                  <p className={styles.infoCardValue}>ISO 27001:2022</p>
                  <p className={styles.infoCardSub}>Internationally recognised information security management system standard.</p>
                </div>
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>In-Transit Encryption</p>
                  <p className={styles.infoCardValue}>TLS 1.3</p>
                  <p className={styles.infoCardSub}>All data transmitted between your browser and our servers is encrypted using TLS 1.3.</p>
                </div>
                <div className={styles.infoCard} role="listitem">
                  <p className={styles.infoCardLabel}>At-Rest Encryption</p>
                  <p className={styles.infoCardValue}>AES-256</p>
                  <p className={styles.infoCardSub}>All stored personal data and backups are encrypted at rest using AES-256.</p>
                </div>
              </div>

              <p className={styles.sectionText}>
                Additional technical and organisational measures include: role-based
                access control (RBAC), multi-factor authentication on all production
                systems, regular penetration testing, a formal vulnerability management
                programme, and mandatory annual security awareness training for all
                personnel with data access.
              </p>
              <p className={styles.sectionText}>
                In the event of a personal data breach that is likely to result in a
                risk to your rights and freedoms, we will notify the relevant supervisory
                authority within 72 hours of becoming aware and, where required,
                notify you directly without undue delay.
              </p>
            </section>

            {/* 09 International Transfers */}
            <section className={styles.section} aria-labelledby="sec-transfers">
              <span id="transfers" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLine} aria-hidden="true" />
                <span className={styles.sectionNum}>09</span>
              </div>
              <h2 id="sec-transfers" className={styles.sectionTitle}>International Transfers</h2>
              <p className={styles.sectionText}>
                NEXACORE is headquartered in the United States. If you are located
                outside the US — particularly in the EEA or the UK — your personal
                data may be transferred to, stored, and processed in the US or other
                countries whose data protection laws may differ from those in your
                jurisdiction.
              </p>
              <p className={styles.sectionText}>
                We take the following steps to ensure an adequate level of protection
                for international transfers:
              </p>
              <ul className={styles.list} role="list">
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span>
                    <strong className={styles.listItemStrong}>Standard Contractual Clauses (SCCs)</strong> — for transfers of personal data from the EEA and UK to the US, we rely on the European Commission&apos;s Standard Contractual Clauses (2021/914/EU) and the UK Addendum thereto.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span>
                    <strong className={styles.listItemStrong}>Adequacy Decisions</strong> — where the European Commission or UK Secretary of State has issued an adequacy decision for the destination country, we rely on that decision as the transfer mechanism.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet} aria-hidden="true" />
                  <span>
                    <strong className={styles.listItemStrong}>Supplementary Measures</strong> — we conduct Transfer Impact Assessments (TIAs) as required and implement technical supplementary measures (such as end-to-end encryption) where the legal framework of the destination country may present elevated risk.
                  </span>
                </li>
              </ul>
              <p className={styles.sectionText}>
                You may request a copy of the applicable transfer mechanism by
                contacting us at{' '}
                <a href="mailto:privacy@nexacore.io">privacy@nexacore.io</a>.
              </p>
            </section>

            {/* 10 Children's Privacy */}
            <section className={styles.section} aria-labelledby="sec-children">
              <span id="children" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLine} aria-hidden="true" />
                <span className={styles.sectionNum}>10</span>
              </div>
              <h2 id="sec-children" className={styles.sectionTitle}>Children&apos;s Privacy</h2>
              <p className={styles.sectionText}>
                The Site and our services are not directed at, and are not intended
                for use by, individuals under the age of 16. We do not knowingly
                collect personal data from children under 16. If you are a parent or
                guardian and believe your child has provided us with personal data,
                please contact us immediately at{' '}
                <a href="mailto:privacy@nexacore.io">privacy@nexacore.io</a> and
                we will delete that information promptly.
              </p>
            </section>

            {/* 11 Changes to This Policy */}
            <section className={styles.section} aria-labelledby="sec-changes">
              <span id="changes" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLine} aria-hidden="true" />
                <span className={styles.sectionNum}>11</span>
              </div>
              <h2 id="sec-changes" className={styles.sectionTitle}>Changes to This Policy</h2>
              <p className={styles.sectionText}>
                We may update this Privacy Policy from time to time to reflect changes
                in our practices, technologies, legal requirements, or for other
                operational reasons. When we make material changes, we will notify you
                by posting a prominent notice on the Site homepage and updating the
                &ldquo;Last Updated&rdquo; date at the top of this page.
              </p>
              <p className={styles.sectionText}>
                For significant changes that materially affect how we process your
                personal data, we will seek your consent where required by applicable
                law, or provide you with the opportunity to opt out before the new
                policy takes effect.
              </p>
              <div className={styles.highlight}>
                <p className={styles.highlightLabel}>Your Responsibility</p>
                <p className={styles.highlightText}>
                  We encourage you to review this page periodically. Continued use of
                  the Site after any changes constitutes your acceptance of the updated
                  policy to the extent permitted by law.
                </p>
              </div>
            </section>

            {/* 12 Contact */}
            <section className={styles.section} aria-labelledby="sec-contact">
              <span id="contact" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={styles.sectionEyebrow}>
                <span className={styles.sectionEyebrowLine} aria-hidden="true" />
                <span className={styles.sectionNum}>12</span>
              </div>
              <h2 id="sec-contact" className={styles.sectionTitle}>Contact Us</h2>
              <p className={styles.sectionText}>
                If you have any questions, concerns, or requests regarding this Privacy
                Policy or the way we handle your personal data, please contact our
                Data Privacy team:
              </p>

              <div className={styles.contactBlock}>
                <div className={styles.contactBlockRow}>
                  <span className={styles.contactBlockLabel}>Data Privacy Team</span>
                  <span className={styles.contactBlockValue}>
                    <a href="mailto:privacy@nexacore.io">privacy@nexacore.io</a>
                  </span>
                </div>
                <div className={styles.contactBlockRow}>
                  <span className={styles.contactBlockLabel}>Postal Address</span>
                  <span className={styles.contactBlockValue}>
                    NEXACORE, Inc., Attn: Data Privacy<br />
                    200 Congress Avenue Suite&nbsp;14F<br />
                    Austin, TX&nbsp;78701, USA
                  </span>
                </div>
                <div className={styles.contactBlockRow}>
                  <span className={styles.contactBlockLabel}>Response Time</span>
                  <span className={styles.contactBlockValue}>
                    We aim to acknowledge all privacy requests within 3 business days
                    and resolve them within 30 days.
                  </span>
                </div>
                <div className={styles.contactBlockRow}>
                  <span className={styles.contactBlockLabel}>EU Representative</span>
                  <span className={styles.contactBlockValue}>
                    NEXACORE EU Legal Representative<br />
                    Contact via{' '}
                    <a href="mailto:privacy@nexacore.io">privacy@nexacore.io</a>{' '}
                    with subject line &ldquo;EU Representative Request&rdquo;
                  </span>
                </div>
              </div>

              <p className={styles.sectionText} style={{ marginTop: '1.5rem' }}>
                For general enquiries about our products and services, please visit
                our <Link href="/contact">Contact page</Link> or email{' '}
                <a href="mailto:hello@nexacore.io">hello@nexacore.io</a>.
              </p>
            </section>

          </article>

          {/* ── Table of Contents Sidebar ─────────────────── */}
          <aside className={styles.toc} aria-label="Table of contents">
            <p className={styles.tocTitle}>Contents</p>
            <ul className={styles.tocList} role="list">
              {tocItems.map((item) => (
                <li key={item.num} className={styles.tocItem}>
                  <a href={item.anchor} className={styles.tocLink}>
                    <span className={styles.tocLinkNum}>{item.num}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

        </div>
      </main>

      <Footer />
    </>
  );
}
