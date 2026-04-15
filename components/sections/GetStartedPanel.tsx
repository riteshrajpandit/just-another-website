/**
 * @file Get Started Panel component
 * @description Get Started section with hero, plans, and multi-step form
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Shield } from '@/components/ui';
import {
  plans,
  onboardingSteps,
  trustBadges,
  getStartedHero,
  roleOptions,
  teamSizeOptions,
  timelineOptions,
  productOptions,
} from '@/data/contact';

const Check = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function GetStartedPanel() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    products: [] as string[],
    plan: 'pro',
    timeline: '',
    context: '',
    consent: false,
    updates: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleProductToggle = (productId: string) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(productId)
        ? prev.products.filter((p) => p !== productId)
        : [...prev.products, productId],
    }));
  };

  const validateStep1 = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formData.firstName.trim()) newErrors.firstName = true;
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = true;
    if (!formData.company.trim()) newErrors.company = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (step: number) => {
    if (step > currentStep && currentStep === 1) {
      if (!validateStep1()) return;
    }
    setCurrentStep(step);
  };

  const handleSubmit = () => {
    if (!formData.consent) {
      setErrors((prev) => ({ ...prev, consent: true }));
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="page-panel active" id="panel-get-started">
      {/* Hero Section */}
      <section className="gs-hero" data-section-name="GET STARTED">
        <div className="gs-hero-bg" aria-hidden="true" />
        <div className="gs-hero-blob" aria-hidden="true" />
        <div className="container gs-hero-inner">
          <div className="gs-hero-grid">
            <div>
              <nav className="gs-hero-crumb anim-up in" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span className="gs-hero-crumb-sep">/</span>
                <span className="gs-hero-crumb-cur">Get Started</span>
              </nav>
              <h1 className="t-display anim-up in" style={{ transitionDelay: '0.15s' }}>
                <span style={{ color: 'var(--text-primary)', display: 'block' }}>
                  {getStartedHero.headline.line1}
                </span>
                <span style={{ color: 'var(--brand-primary)', display: 'block' }}>
                  {getStartedHero.headline.line2}
                </span>
              </h1>
              <p
                className="t-body anim-up in"
                style={{ maxWidth: '500px', marginTop: '1.25rem', transitionDelay: '0.25s' }}
              >
                {getStartedHero.description}
              </p>
            </div>
            <div className="anim-up in" style={{ transitionDelay: '0.2s' }}>
              <div className="gs-status-card">
                <div className="gs-status-header">
                  <div className="gs-status-dot" />
                  <span className="t-label">All systems operational</span>
                </div>
                <div className="gs-status-items">
                  {getStartedHero.statusItems.map((item, index) => (
                    <div key={index} className="gs-status-item">
                      <span className="gs-status-item-label">{item.label}</span>
                      <span
                        className={`gs-status-item-value t-mono ${item.accent ? 'accent' : ''} ${item.muted ? 'muted' : ''}`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Plans Strip */}
          <div className="gs-plan-strip anim-up in" style={{ transitionDelay: '0.3s' }}>
            {plans.map((plan) => (
              <div key={plan.id} className={`gs-plan-item ${plan.recommended ? 'recommended' : ''}`}>
                {plan.badge && <div className="gs-plan-badge">{plan.badge}</div>}
                <div className="gs-plan-name">{plan.name}</div>
                <div className="gs-plan-price">
                  {plan.period ? (
                    <>
                      <sup>$</sup>
                      {plan.price}
                      <span>{plan.period}</span>
                    </>
                  ) : (
                    <span style={{ fontSize: '1.2rem', paddingTop: '0.3rem' }}>{plan.price}</span>
                  )}
                </div>
                <div className="gs-plan-desc">{plan.description}</div>
                <div className="gs-plan-features">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="gs-plan-feature">
                      <Check />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="gs-form-section section-pad" id="form-anchor" data-section-name="FORM">
        <div className="container">
          <div className="gs-form-layout">
            {/* Left: Steps and Trust */}
            <div>
              <div className="section-eyebrow anim-up in">
                <div className="section-eyebrow-line" />
                <span className="t-label">How It Works</span>
              </div>
              <h2 className="t-h2 anim-up in" style={{ marginBottom: '1.5rem', transitionDelay: '0.08s' }}>
                Three Steps to
                <br />
                <span style={{ color: 'var(--brand-primary)' }}>Production-Ready</span>
              </h2>
              <div className="gs-steps anim-up in" style={{ transitionDelay: '0.14s' }}>
                {onboardingSteps.map((step) => (
                  <div key={step.number} className="gs-step">
                    <div className="gs-step-num">{step.number}</div>
                    <div className="gs-step-content">
                      <div className="gs-step-title">{step.title}</div>
                      <div className="gs-step-desc">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="gs-trust-row anim-up in" style={{ transitionDelay: '0.2s' }}>
                {trustBadges.map((badge) => (
                  <span key={badge.id} className="gs-trust-badge">
                    <Shield size={12} />
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Multi-step Form */}
            <div className="form-card anim-up in" style={{ transitionDelay: '0.1s' }}>
              {!submitted ? (
                <>
                  {/* Stepper */}
                  <div className="form-stepper" role="tablist">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`form-stepper-step ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'done' : ''}`}
                        onClick={() => handleNext(step)}
                        role="tab"
                        aria-selected={currentStep === step}
                      >
                        <div className="form-stepper-step-num">{step}</div>
                        <span>{step === 1 ? 'Company' : step === 2 ? 'Needs' : 'Confirm'}</span>
                      </div>
                    ))}
                  </div>

                  {/* Step 1 */}
                  {currentStep === 1 && (
                    <div className="form-step-panel active">
                      <div className="form-card-title">Your Organisation</div>
                      <div className="form-card-sub">Tell us who you are so we can assign the right specialist.</div>
                      <div className="form-row">
                        <div className={`form-group ${errors.firstName ? 'has-error' : ''}`}>
                          <label className="form-label">First Name</label>
                          <input
                            className={`form-input ${errors.firstName ? 'error' : ''}`}
                            type="text"
                            placeholder="Adrian"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                          />
                          <span className="form-error-msg">Required</span>
                        </div>
                        <div className={`form-group ${errors.lastName ? 'has-error' : ''}`}>
                          <label className="form-label">Last Name</label>
                          <input
                            className={`form-input ${errors.lastName ? 'error' : ''}`}
                            type="text"
                            placeholder="Royce"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                          />
                          <span className="form-error-msg">Required</span>
                        </div>
                      </div>
                      <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                        <label className="form-label">Work Email</label>
                        <input
                          className={`form-input ${errors.email ? 'error' : ''}`}
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                        <span className="form-error-msg">Enter a valid email</span>
                      </div>
                      <div className={`form-group ${errors.company ? 'has-error' : ''}`}>
                        <label className="form-label">Company Name</label>
                        <input
                          className={`form-input ${errors.company ? 'error' : ''}`}
                          type="text"
                          placeholder="Meridian Financial Group"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        />
                        <span className="form-error-msg">Required</span>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Your Role</label>
                          <select
                            className="form-select"
                            value={formData.role}
                            onChange={(e) => handleInputChange('role', e.target.value)}
                          >
                            <option value="">Select role</option>
                            {roleOptions.map((role) => (
                              <option key={role} value={role}>
                                {role}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Team Size</label>
                          <select
                            className="form-select"
                            value={formData.teamSize}
                            onChange={(e) => handleInputChange('teamSize', e.target.value)}
                          >
                            <option value="">Select size</option>
                            {teamSizeOptions.map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-submit-row">
                        <Button variant="brand" className="btn-full" onClick={() => handleNext(2)}>
                          Continue to Needs
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {currentStep === 2 && (
                    <div className="form-step-panel active">
                      <div className="form-card-title">Your Requirements</div>
                      <div className="form-card-sub">
                        Help us understand what you need so your onboarding is precise.
                      </div>
                      <div className="form-group">
                        <label className="form-label">Interested Products</label>
                        <div className="form-check-group">
                          {productOptions.map((product) => (
                            <label key={product.id} className="form-check">
                              <input
                                type="checkbox"
                                checked={formData.products.includes(product.id)}
                                onChange={() => handleProductToggle(product.id)}
                              />
                              <span className="form-check-box" />
                              <span className="form-check-label">{product.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Preferred Plan</label>
                        <div className="form-radio-group">
                          {['starter', 'pro', 'enterprise'].map((plan) => (
                            <div key={plan} className="form-radio-pill">
                              <input
                                type="radio"
                                name="plan"
                                id={`plan-${plan}`}
                                value={plan}
                                checked={formData.plan === plan}
                                onChange={(e) => handleInputChange('plan', e.target.value)}
                              />
                              <label className="form-radio-pill-label" htmlFor={`plan-${plan}`}>
                                {plan === 'pro' ? 'Professional' : plan.charAt(0).toUpperCase() + plan.slice(1)}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Desired Go-Live Timeline</label>
                        <select
                          className="form-select"
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((timeline) => (
                            <option key={timeline} value={timeline}>
                              {timeline}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Additional Context</label>
                        <textarea
                          className="form-textarea"
                          placeholder="Describe your current infrastructure, key pain points, or specific requirements..."
                          value={formData.context}
                          onChange={(e) => handleInputChange('context', e.target.value)}
                        />
                      </div>
                      <div className="form-submit-row">
                        <Button variant="brand" className="btn-full" onClick={() => handleNext(3)}>
                          Review and Submit
                        </Button>
                        <Button variant="outline" className="btn-full" onClick={() => handleNext(1)}>
                          Back
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {currentStep === 3 && (
                    <div className="form-step-panel active">
                      <div className="form-card-title">Review and Confirm</div>
                      <div className="form-card-sub">
                        Check your details before submitting. Our team responds within one business day.
                      </div>
                      <div className="gs-review-block">
                        <div className="gs-review-row">
                          <span className="t-label">Name</span>
                          <span className="gs-review-value">
                            {formData.firstName} {formData.lastName}
                          </span>
                        </div>
                        <div className="gs-review-row">
                          <span className="t-label">Email</span>
                          <span className="gs-review-value">{formData.email}</span>
                        </div>
                        <div className="gs-review-row">
                          <span className="t-label">Company</span>
                          <span className="gs-review-value">{formData.company}</span>
                        </div>
                        <div className="gs-review-row">
                          <span className="t-label">Plan</span>
                          <span className="gs-review-value accent">
                            {formData.plan === 'pro'
                              ? 'Professional'
                              : formData.plan.charAt(0).toUpperCase() + formData.plan.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className={`form-group ${errors.consent ? 'has-error' : ''}`}>
                        <label className="form-check">
                          <input
                            type="checkbox"
                            checked={formData.consent}
                            onChange={(e) => handleInputChange('consent', e.target.checked)}
                          />
                          <span className="form-check-box" />
                          <span className="form-check-label">
                            I agree to NEXACORE&apos;s{' '}
                            <a href="/privacy" style={{ color: 'var(--brand-accent)', textDecoration: 'underline' }}>
                              Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a href="/terms" style={{ color: 'var(--brand-accent)', textDecoration: 'underline' }}>
                              Terms of Service
                            </a>
                            .
                          </span>
                        </label>
                      </div>
                      <div className="form-group">
                        <label className="form-check">
                          <input
                            type="checkbox"
                            checked={formData.updates}
                            onChange={(e) => handleInputChange('updates', e.target.checked)}
                          />
                          <span className="form-check-box" />
                          <span className="form-check-label">
                            Send me product updates and engineering news. Unsubscribe any time.
                          </span>
                        </label>
                      </div>
                      <div className="form-submit-row">
                        <Button variant="primary" className="btn-full" onClick={handleSubmit}>
                          Submit Application
                        </Button>
                        <Button variant="outline" className="btn-full" onClick={() => handleNext(2)}>
                          Back
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="form-success visible">
                  <div className="form-success-icon">
                    <Check size={24} />
                  </div>
                  <div className="form-success-title">Application Received</div>
                  <div className="form-success-text">
                    Your onboarding engineer will reach out within one business day. Check your inbox for a
                    confirmation email.
                  </div>
                  <Button href="/" variant="outline" size="sm">
                    Back to Home
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
