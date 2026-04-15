/**
 * @file Terms of Service Page
 * @description Legal terms governing use of NEXACORE's website and services
 */

import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import styles from './Terms.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service — NEXACORE',
  description:
    'Review the terms and conditions governing your use of NEXACORE products, services, and digital properties.',
  robots: { index: true, follow: true },
};

const SECTIONS = [
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'services', label: 'Description of Services' },
  { id: 'account', label: 'Account and Access' },
  { id: 'aup', label: 'Acceptable Use Policy' },
  { id: 'ip', label: 'Intellectual Property' },
  { id: 'sla', label: 'Service Level Agreements' },
  { id: 'third-party', label: 'Third-Party Services' },
  { id: 'warranties', label: 'Disclaimer of Warranties' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'indemnification', label: 'Indemnification' },
  { id: 'governing-law', label: 'Governing Law & Jurisdiction' },
  { id: 'changes', label: 'Changes to Terms' },
  { id: 'contact', label: 'Contact' },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} />
                Legal
              </div>
              <h1 className={`t-display ${styles.heroTitle}`}>
                Terms of Service
              </h1>
              <p className="t-body">
                Please read these terms carefully before accessing or using NEXACORE
                products, services, or digital properties. Your use constitutes acceptance
                of these terms.
              </p>
              <div className={styles.heroMeta}>
                <div className={styles.heroMetaItem}>
                  <strong>Last Updated</strong>
                  April 2025
                </div>
                <div className={styles.heroMetaItem}>
                  <strong>Effective Date</strong>
                  April 1, 2025
                </div>
                <div className={styles.heroMetaItem}>
                  <strong>Jurisdiction</strong>
                  Travis County, Texas
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────── */}
        <section className="section-pad">
          <div className="container">
            <div className={styles.layout}>

              {/* Main Content */}
              <div className={styles.content}>

                {/* 1. Acceptance of Terms */}
                <div id="acceptance" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>01</span>
                    Acceptance of Terms
                  </h2>
                  <p className={styles.sectionText}>
                    By accessing or using NEXACORE&apos;s website located at{' '}
                    <strong>nexacore.io</strong> (the &ldquo;Site&rdquo;), any associated
                    subdomains, or any software products or professional services offered
                    by NEXACORE, Inc. (&ldquo;NEXACORE,&rdquo; &ldquo;we,&rdquo;
                    &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you (&ldquo;User,&rdquo;
                    &ldquo;you,&rdquo; or &ldquo;your&rdquo;) acknowledge that you have
                    read, understood, and agree to be bound by these Terms of Service
                    (&ldquo;Terms&rdquo;) and our Privacy Policy, incorporated herein by
                    reference.
                  </p>
                  <p className={styles.sectionText}>
                    If you are accessing the Site or Services on behalf of a corporation,
                    partnership, or other legal entity, you represent that you have the
                    authority to bind that entity to these Terms. If you do not have such
                    authority, or if you do not agree with any provision of these Terms,
                    you must not access or use the Site or Services.
                  </p>
                  <div className={styles.highlight}>
                    Continued use of the Site or any NEXACORE Service following notice of
                    any modification to these Terms constitutes your binding acceptance of
                    the revised Terms.
                  </div>
                </div>

                {/* 2. Description of Services */}
                <div id="services" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>02</span>
                    Description of Services
                  </h2>
                  <p className={styles.sectionText}>
                    NEXACORE provides enterprise technology solutions comprising two
                    primary categories:
                  </p>
                  <p className={styles.sectionText}>
                    <strong>Enterprise Software Products</strong> — licensed software
                    platforms available via subscription or perpetual license:
                  </p>
                  <ul className={styles.list}>
                    {[
                      'NexaFlow — intelligent workflow orchestration and process automation platform',
                      'CoreSync — real-time enterprise data synchronization and integration engine',
                      'SecureVault — zero-trust secrets management and privileged access control suite',
                      'PulseMetrics — unified observability, APM, and infrastructure monitoring solution',
                      'CloudOrchestra — multi-cloud resource provisioning and cost governance platform',
                      'DeskCanvas — collaborative digital workspace and knowledge management environment',
                    ].map((item) => (
                      <li key={item} className={styles.listItem}>
                        <span className={styles.listBullet} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.sectionText}>
                    <strong>Professional Services</strong> — consulting, implementation,
                    and managed services delivered by NEXACORE engineers and advisors:
                  </p>
                  <ul className={styles.list}>
                    {[
                      'Cloud Migration — assessment, planning, and execution of workload migration to public, private, or hybrid cloud environments',
                      'DevSecOps — integration of security practices into software development and deployment pipelines',
                      'Cybersecurity — threat modeling, penetration testing, vulnerability management, and incident response',
                      'Data Engineering — data pipeline architecture, warehousing, lakehouse design, and analytics enablement',
                      'Managed Infrastructure — 24/7 monitoring, patching, and operational management of enterprise infrastructure',
                      'Digital Advisory — strategic technology roadmapping, architecture review, and transformation consulting',
                    ].map((item) => (
                      <li key={item} className={styles.listItem}>
                        <span className={styles.listBullet} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.sectionText}>
                    NEXACORE reserves the right to modify, suspend, or discontinue any
                    feature or component of the Services at any time with reasonable
                    notice to affected customers. Features available on the Site are
                    subject to applicable subscription or service agreements.
                  </p>
                </div>

                {/* 3. Account and Access */}
                <div id="account" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>03</span>
                    Account and Access
                  </h2>
                  <p className={styles.sectionText}>
                    Certain features of the Site and Services — including the NEXACORE
                    customer dashboard, product licensing portal, and support console —
                    require registration for an account. When registering, you agree to
                    provide accurate, current, and complete information and to keep that
                    information updated throughout the term of your account.
                  </p>
                  <p className={styles.sectionText}>
                    You are solely responsible for maintaining the confidentiality and
                    security of your login credentials, including your username, password,
                    multi-factor authentication tokens, and any API keys issued to your
                    account. You must notify NEXACORE immediately at{' '}
                    <strong>security@nexacore.io</strong> upon becoming aware of any
                    unauthorized access to or use of your account.
                  </p>
                  <p className={styles.sectionText}>
                    NEXACORE will not be liable for any loss or damage arising from
                    unauthorized account access resulting from your failure to safeguard
                    your credentials. You accept full responsibility for all activities
                    that occur under your account, whether authorized by you or not.
                  </p>
                  <p className={styles.sectionText}>
                    NEXACORE reserves the right to suspend or terminate accounts that
                    exhibit signs of compromise, policy violation, or fraudulent activity,
                    with or without prior notice depending on the severity of the risk.
                  </p>
                </div>

                {/* 4. Acceptable Use Policy */}
                <div id="aup" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>04</span>
                    Acceptable Use Policy
                  </h2>
                  <p className={styles.sectionText}>
                    You agree to use the Site and Services only for lawful purposes and in
                    accordance with these Terms. The following activities are expressly
                    prohibited:
                  </p>
                  <ul className={styles.list}>
                    {[
                      'Engaging in any activity that violates applicable local, state, national, or international law or regulation',
                      'Reverse engineering, decompiling, disassembling, or attempting to derive the source code of any NEXACORE software or proprietary technology',
                      'Automated scraping, crawling, or harvesting of content, data, or user information from the Site or any Service',
                      'Attempting to circumvent, bypass, or disable any security feature, authentication mechanism, rate limiter, or access control',
                      'Gaining or attempting to gain unauthorized access to NEXACORE systems, networks, other customer environments, or third-party systems via NEXACORE infrastructure',
                      'Transmitting malware, viruses, ransomware, spyware, or any other malicious code through the Site or Services',
                      'Using NEXACORE Services to send unsolicited commercial communications (spam) or to conduct phishing, social engineering, or credential harvesting',
                      'Misrepresenting your identity, affiliation, or authorization when accessing the Site or Services',
                    ].map((item) => (
                      <li key={item} className={styles.listItem}>
                        <span className={styles.listBullet} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.sectionText}>
                    Violation of this Acceptable Use Policy may result in immediate
                    suspension or termination of your account and access, as well as
                    civil or criminal referral to appropriate authorities.
                  </p>
                </div>

                {/* 5. Intellectual Property */}
                <div id="ip" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>05</span>
                    Intellectual Property
                  </h2>
                  <p className={styles.sectionText}>
                    All content, materials, software, code, interfaces, visual designs,
                    trademarks, service marks, trade names, logos, and other intellectual
                    property displayed on or accessible through the Site and Services
                    (&ldquo;NEXACORE IP&rdquo;) are the exclusive property of NEXACORE,
                    Inc. or its licensors and are protected by applicable copyright,
                    trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                  <p className={styles.sectionText}>
                    Subject to your compliance with these Terms, NEXACORE grants you a
                    limited, non-exclusive, non-transferable, revocable license to access
                    and use the Site solely for your own internal business purposes.
                    Nothing in these Terms conveys any ownership interest or broad license
                    in or to any NEXACORE IP.
                  </p>
                  <p className={styles.sectionText}>
                    You may not reproduce, modify, publicly display, distribute, sell,
                    sublicense, or create derivative works from any NEXACORE IP without
                    prior written consent from NEXACORE. Permitted use of NEXACORE
                    software products is governed exclusively by the applicable software
                    license agreement or subscription agreement executed between you and
                    NEXACORE.
                  </p>
                  <div className={styles.highlight}>
                    The NEXACORE name, wordmark, and product names including NexaFlow,
                    CoreSync, SecureVault, PulseMetrics, CloudOrchestra, and DeskCanvas
                    are registered or common law trademarks of NEXACORE, Inc. Unauthorized
                    use is strictly prohibited.
                  </div>
                </div>

                {/* 6. Service Level Agreements */}
                <div id="sla" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>06</span>
                    Service Level Agreements
                  </h2>
                  <p className={styles.sectionText}>
                    Service Level Agreements (&ldquo;SLAs&rdquo;) — including uptime
                    commitments, response time targets, support tiers, and remedies for
                    service failures — are applicable only to paying customers and are
                    governed exclusively by the individual Order Form, Master Services
                    Agreement, or SLA addendum executed between NEXACORE and the
                    applicable customer entity.
                  </p>
                  <p className={styles.sectionText}>
                    These Terms do not constitute or supplement any SLA commitment.
                    Nothing on the Site or in these Terms should be construed as a
                    guarantee of any particular level of service availability, performance
                    benchmark, or support response time for any user who has not executed
                    a formal service agreement with NEXACORE.
                  </p>
                  <p className={styles.sectionText}>
                    For information about NEXACORE&apos;s available SLA tiers and
                    enterprise support programs, contact your account executive or email{' '}
                    <strong>sales@nexacore.io</strong>.
                  </p>
                </div>

                {/* 7. Third-Party Services */}
                <div id="third-party" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>07</span>
                    Third-Party Services
                  </h2>
                  <p className={styles.sectionText}>
                    The Site and Services may contain links to, integrations with, or
                    references to third-party websites, applications, platforms, or
                    services (&ldquo;Third-Party Services&rdquo;) that are not owned or
                    operated by NEXACORE. Such links and integrations are provided solely
                    as a convenience and do not constitute an endorsement, sponsorship, or
                    recommendation by NEXACORE.
                  </p>
                  <p className={styles.sectionText}>
                    NEXACORE has no control over the content, privacy practices, security
                    posture, or availability of Third-Party Services and accepts no
                    responsibility for any harm, loss, or damage arising from your use of
                    or reliance on such services. Your interactions with Third-Party
                    Services are subject solely to those parties&apos; own terms and
                    policies.
                  </p>
                  <p className={styles.sectionText}>
                    If you choose to enable a third-party integration within a NEXACORE
                    product, you grant NEXACORE permission to transmit the data necessary
                    to facilitate that integration, consistent with our Privacy Policy.
                  </p>
                </div>

                {/* 8. Disclaimer of Warranties */}
                <div id="warranties" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>08</span>
                    Disclaimer of Warranties
                  </h2>
                  <div className={styles.warningBox}>
                    <p className={styles.warningBoxLabel}>Important Notice</p>
                    <p className={styles.warningBoxText}>
                      THE SITE AND ALL CONTENT, MATERIALS, AND INFORMATION PROVIDED
                      THROUGH IT ARE OFFERED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS
                      AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER
                      EXPRESS OR IMPLIED.
                    </p>
                  </div>
                  <p className={styles.sectionText}>
                    To the fullest extent permitted by applicable law, NEXACORE expressly
                    disclaims all warranties with respect to the Site, including but not
                    limited to implied warranties of merchantability, fitness for a
                    particular purpose, title, and non-infringement. NEXACORE does not
                    warrant that the Site will be uninterrupted, error-free, secure, or
                    free from viruses or other harmful components.
                  </p>
                  <p className={styles.sectionText}>
                    Warranties applicable to NEXACORE&apos;s enterprise software products
                    and professional services, if any, are set forth exclusively in the
                    applicable product license agreement, subscription agreement, or
                    statement of work executed between NEXACORE and the relevant customer
                    entity. No warranty described in any such agreement extends to
                    visitors of the Site who have not entered into a formal agreement with
                    NEXACORE.
                  </p>
                </div>

                {/* 9. Limitation of Liability */}
                <div id="liability" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>09</span>
                    Limitation of Liability
                  </h2>
                  <div className={styles.warningBox}>
                    <p className={styles.warningBoxLabel}>Liability Cap</p>
                    <p className={styles.warningBoxText}>
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
                      NEXACORE, ITS OFFICERS, DIRECTORS, EMPLOYEES, AFFILIATES, AGENTS,
                      OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                      CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING OUT OF OR
                      RELATED TO YOUR USE OF THE SITE OR SERVICES, EVEN IF NEXACORE HAS
                      BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    </p>
                  </div>
                  <p className={styles.sectionText}>
                    This exclusion includes, without limitation: loss of revenue or
                    profits, loss of business opportunity, loss of data, loss of goodwill,
                    cost of substitute goods or services, or any other economic or
                    business loss, regardless of whether such damages arise in contract,
                    tort (including negligence), strict liability, or otherwise.
                  </p>
                  <p className={styles.sectionText}>
                    In jurisdictions that do not permit the exclusion or limitation of
                    incidental or consequential damages, NEXACORE&apos;s liability in
                    those jurisdictions shall be limited to the maximum extent permitted
                    by applicable law.
                  </p>
                  <div className={styles.highlight}>
                    NEXACORE&apos;s aggregate liability to you for all claims arising out
                    of or related to your use of the Site shall not exceed the greater of
                    (a) one hundred US dollars (USD $100) or (b) the total fees actually
                    paid by you to NEXACORE in the twelve (12) months immediately
                    preceding the event giving rise to the claim.
                  </div>
                </div>

                {/* 10. Indemnification */}
                <div id="indemnification" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>10</span>
                    Indemnification
                  </h2>
                  <p className={styles.sectionText}>
                    You agree to defend, indemnify, and hold harmless NEXACORE, its
                    parent company, subsidiaries, affiliates, officers, directors,
                    employees, agents, contractors, and licensors (collectively, the
                    &ldquo;NEXACORE Parties&rdquo;) from and against any and all claims,
                    damages, losses, liabilities, costs, and expenses (including
                    reasonable legal fees) arising out of or related to:
                  </p>
                  <ul className={styles.list}>
                    {[
                      'Your access to or use of the Site or Services, including any content you submit, post, or transmit',
                      'Your violation of these Terms or any applicable law, regulation, or third-party right',
                      'Your breach of any representations or warranties made under these Terms',
                      'Any claim that your use of the Site or Services caused damage to a third party',
                    ].map((item) => (
                      <li key={item} className={styles.listItem}>
                        <span className={styles.listBullet} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.sectionText}>
                    NEXACORE reserves the right, at your expense, to assume exclusive
                    defense and control of any matter subject to indemnification by you.
                    You agree to cooperate with NEXACORE&apos;s defense of such claims
                    and not to settle any such claim without NEXACORE&apos;s prior written
                    consent.
                  </p>
                </div>

                {/* 11. Governing Law & Jurisdiction */}
                <div id="governing-law" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>11</span>
                    Governing Law &amp; Jurisdiction
                  </h2>
                  <p className={styles.sectionText}>
                    These Terms and any dispute or claim arising out of or in connection
                    with them (including non-contractual disputes or claims) shall be
                    governed by and construed in accordance with the laws of the State of
                    Texas, United States, without regard to its conflict of law principles.
                  </p>
                  <p className={styles.sectionText}>
                    You and NEXACORE each irrevocably submit to the exclusive personal
                    jurisdiction and venue of the state and federal courts located in
                    Travis County, Austin, Texas for the resolution of any dispute arising
                    out of or relating to these Terms or your use of the Site or Services.
                    You waive any objection to proceedings in such courts on the grounds
                    of inconvenient forum.
                  </p>
                  <p className={styles.sectionText}>
                    If you are a consumer residing in a jurisdiction where mandatory local
                    consumer protection laws apply, nothing in this section limits your
                    rights under those laws.
                  </p>
                </div>

                {/* 12. Changes to Terms */}
                <div id="changes" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>12</span>
                    Changes to Terms
                  </h2>
                  <p className={styles.sectionText}>
                    NEXACORE reserves the right to revise these Terms at any time.
                    For material changes — including changes that materially affect your
                    rights, our liability, or how you may use the Services — NEXACORE
                    will provide at least thirty (30) days&apos; advance notice prior to
                    the effective date of the revised Terms. Notice may be provided by:
                  </p>
                  <ul className={styles.list}>
                    {[
                      'Posting the updated Terms on this page with a revised "Last Updated" date',
                      'Sending an email notification to the address associated with your account',
                      'Displaying a prominent notice within the NEXACORE customer dashboard or product interface',
                    ].map((item) => (
                      <li key={item} className={styles.listItem}>
                        <span className={styles.listBullet} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.sectionText}>
                    Your continued access to or use of the Site or Services after the
                    effective date of the revised Terms constitutes your binding acceptance
                    of those changes. If you do not agree to the revised Terms, you must
                    discontinue your use of the Site and Services before the effective
                    date and, if applicable, notify NEXACORE to cancel your subscription.
                  </p>
                  <div className={styles.highlight}>
                    Minor, non-material changes (such as typographical corrections or
                    clarifications that do not alter your rights) may take effect
                    immediately without notice.
                  </div>
                </div>

                {/* 13. Contact */}
                <div id="contact" className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>13</span>
                    Contact
                  </h2>
                  <p className={styles.sectionText}>
                    For questions, concerns, or notices regarding these Terms of Service,
                    please contact NEXACORE&apos;s Legal Department:
                  </p>
                  <div className={styles.contactCard}>
                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>Email</span>
                      <a
                        href="mailto:legal@nexacore.io"
                        className={`${styles.contactValue} ${styles.contactLink}`}
                      >
                        legal@nexacore.io
                      </a>
                    </div>
                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>Address</span>
                      <span className={styles.contactValue}>
                        NEXACORE, Inc. — Legal Department
                        <br />
                        200 Congress Avenue, Suite 14F
                        <br />
                        Austin, TX 78701
                        <br />
                        United States
                      </span>
                    </div>
                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>Response</span>
                      <span className={styles.contactValue}>
                        Legal inquiries are typically acknowledged within 5 business days.
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Table of Contents (sticky sidebar) */}
              <aside className={styles.toc} aria-label="Table of contents">
                <p className={styles.tocTitle}>Contents</p>
                <ol className={styles.tocList}>
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className={styles.tocLink}>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </aside>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
