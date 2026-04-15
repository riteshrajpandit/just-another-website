/**
 * @file Contact Panel component
 * @description Contact Us section with form, contact details, offices, and map
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { contactHero, contactDetails, offices, slaResponseTimes, subjectOptions } from '@/data/contact';

const Check = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Contact Icons
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.49 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const PartnershipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const getContactIcon = (iconType: string) => {
  switch (iconType) {
    case 'email':
      return <EmailIcon />;
    case 'phone':
      return <PhoneIcon />;
    case 'chat':
      return <ChatIcon />;
    case 'partnership':
      return <PartnershipIcon />;
    default:
      return <EmailIcon />;
  }
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactPanel() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
    }
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = 'Full name is required';
    if (!formData.email.trim()) {
      next.email = 'Email address is required';
    } else if (!EMAIL_RE.test(formData.email)) {
      next.email = 'Please enter a valid email address';
    }
    if (!formData.subject) next.subject = 'Please select a subject';
    if (!formData.message.trim()) {
      next.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      next.message = 'Message must be at least 10 characters';
    }
    return next;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Focus first error field for accessibility
      const firstKey = Object.keys(errs)[0];
      document.getElementById(`contact-${firstKey}`)?.focus();
      return;
    }
    setIsSubmitting(true);
    // Simulate async submission (replace with real API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="page-panel" id="panel-contact">
      {/* Hero Section */}
      <section
        className="demo-hero"
        data-section-name="CONTACT"
        style={{
          background: 'var(--bg-base)',
          borderBottom: '1px solid var(--border)',
          padding: 'clamp(3rem, 6vw, 5rem) 0 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="demo-hero-bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav className="gs-hero-crumb anim-up in" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="gs-hero-crumb-sep">/</span>
            <span className="gs-hero-crumb-cur">Contact Us</span>
          </nav>
          <div className="contact-hero-grid">
            <div>
              <h1 className="t-display anim-up in" style={{ transitionDelay: '0.1s' }}>
                <span style={{ color: 'var(--text-primary)', display: 'block' }}>
                  {contactHero.headline.line1}
                </span>
                <span style={{ color: 'var(--brand-primary)', display: 'block' }}>
                  {contactHero.headline.line2}
                </span>
              </h1>
              <p
                className="t-body anim-up in"
                style={{ maxWidth: '460px', marginTop: '1.25rem', transitionDelay: '0.2s' }}
              >
                {contactHero.description}
              </p>
            </div>

            {/* Quick Contact Form */}
            <div className="form-card anim-up in" style={{ position: 'static', transitionDelay: '0.2s' }}>
              {!submitted ? (
                <>
                  <div className="form-card-title">Send a Message</div>
                  <div className="form-card-sub">We respond to every enquiry within 4 business hours.</div>
                  <div role="alert" aria-live="polite" style={{ position: 'absolute', left: '-9999px' }}>
                    {Object.keys(errors).length > 0 ? `${Object.keys(errors).length} form errors found` : ''}
                  </div>
                  <div className="form-row">
                    <div className={`form-group${errors.name ? ' has-error' : ''}`}>
                      <label htmlFor="contact-name" className="form-label">Full Name</label>
                      <input
                        id="contact-name"
                        className={`form-input${errors.name ? ' error' : ''}`}
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        autoComplete="name"
                      />
                      {errors.name && <span id="error-name" className="form-error-msg" role="alert">{errors.name}</span>}
                    </div>
                    <div className={`form-group${errors.email ? ' has-error' : ''}`}>
                      <label htmlFor="contact-email" className="form-label">Email</label>
                      <input
                        id="contact-email"
                        className={`form-input${errors.email ? ' error' : ''}`}
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        autoComplete="email"
                      />
                      {errors.email && <span id="error-email" className="form-error-msg" role="alert">{errors.email}</span>}
                    </div>
                  </div>
                  <div className={`form-group${errors.subject ? ' has-error' : ''}`}>
                    <label htmlFor="contact-subject" className="form-label">Subject</label>
                    <select
                      id="contact-subject"
                      className={`form-select${errors.subject ? ' error' : ''}`}
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'error-subject' : undefined}
                    >
                      <option value="">Select topic</option>
                      {subjectOptions.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                    {errors.subject && <span id="error-subject" className="form-error-msg" role="alert">{errors.subject}</span>}
                  </div>
                  <div className={`form-group${errors.message ? ' has-error' : ''}`}>
                    <label htmlFor="contact-message" className="form-label">Message</label>
                    <textarea
                      id="contact-message"
                      className={`form-textarea${errors.message ? ' error' : ''}`}
                      style={{ minHeight: '120px' }}
                      placeholder="Describe your enquiry in as much detail as helps..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      maxLength={2000}
                    />
                    {errors.message && <span id="error-message" className="form-error-msg" role="alert">{errors.message}</span>}
                  </div>
                  <div className="form-submit-row">
                    <Button
                      variant="brand"
                      className="btn-full"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? 'Sending…' : 'Send Message'}
                    </Button>
                    <p className="form-privacy">
                      By submitting you agree to our{' '}
                      <a href="/privacy">Privacy Policy</a>.
                      We never share your data with third parties.
                    </p>
                  </div>
                </>
              ) : (
                <div className="form-success visible">
                  <div className="form-success-icon">
                    <Check size={24} />
                  </div>
                  <div className="form-success-title">Message Sent</div>
                  <div className="form-success-text">
                    Our team will respond within 4 business hours. You will receive a copy at your email
                    address.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details + Map Section */}
      <section id="contact-details" className="section-pad" data-section-name="OFFICES" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Cards + Offices */}
            <div>
              <div className="section-eyebrow anim-up in">
                <div className="section-eyebrow-line" />
                <span className="t-label">Get in Touch</span>
              </div>
              <h2 className="t-h2 anim-up in" style={{ marginBottom: '2rem', transitionDelay: '0.08s' }}>
                Direct
                <br />
                <span style={{ color: 'var(--brand-primary)' }}>Contact Lines</span>
              </h2>

              {/* Contact Details Grid */}
              <div className="contact-details-grid anim-up in" style={{ transitionDelay: '0.12s' }}>
                {contactDetails.map((detail) => (
                  <div key={detail.id} className="contact-detail-card">
                    <div className="contact-detail-icon">{getContactIcon(detail.icon)}</div>
                    <div className="contact-detail-label">{detail.label}</div>
                    <div className="contact-detail-value">{detail.value}</div>
                    <div className="contact-detail-sub">{detail.subtext}</div>
                  </div>
                ))}
              </div>

              {/* Office Locations */}
              <div className="offices-list anim-up in" style={{ transitionDelay: '0.18s' }}>
                {offices.map((office) => (
                  <div key={office.id} className="office-item">
                    <div className="office-flag">{office.flag}</div>
                    <div>
                      <div className="office-city">{office.city}</div>
                      <div className="office-address">{office.address}</div>
                      <div className="office-type">{office.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Map + SLA */}
            <div className="anim-up in" style={{ transitionDelay: '0.15s' }}>
              {/* Map Block */}
              <div className="map-block">
                <div className="map-overlay">
                  <div className="map-overlay-label">Global HQ</div>
                  <div className="map-overlay-name">Austin, Texas</div>
                </div>
                <iframe
                  className="map-embed"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.913844857527!2d-97.74287202396168!3d30.268280174880936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50ab3a1bf8f%3A0x5b14e03d2c7ae284!2s200%20Congress%20Ave%2C%20Austin%2C%20TX%2078701!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NEXACORE Austin HQ location map"
                  aria-label="Map showing NEXACORE headquarters at 200 Congress Avenue, Austin Texas"
                />
              </div>

              {/* SLA Response Times */}
              <div style={{ border: '1px solid var(--border)', background: 'var(--bg-surface)', marginTop: '1.5rem' }}>
                <div style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border)', background: 'var(--bg-elevated)', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Response Time Commitments
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {slaResponseTimes.map((item, idx) => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1rem 1.25rem',
                        borderBottom: idx < slaResponseTimes.length - 1 ? '1px solid var(--border)' : 'none',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-primary)' }}>{item.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>{item.description}</div>
                      </div>
                      <div className="t-mono" style={{ fontSize: '0.9rem', fontWeight: 700, color: item.color }}>
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
