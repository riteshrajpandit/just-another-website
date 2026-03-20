/**
 * @file Book Demo Panel component
 * @description Book a Demo section with calendar picker and form
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, ChevronLeft, ChevronRight, Clock } from '@/components/ui';
import { architect, expectItems, bookDemoHero, companySizeOptions, demoProductOptions } from '@/data/contact';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

// Days with available slots (for demo purposes)
const HAS_SLOTS = [3, 5, 6, 10, 11, 12, 13, 17, 18, 19, 20, 24, 25, 26];

const TIME_SLOTS = [
  { time: '09:00 AM', available: false },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '12:00 PM', available: true },
  { time: '01:00 PM', available: true },
  { time: '02:00 PM', available: false },
  { time: '03:00 PM', available: true },
  { time: '04:00 PM', available: true },
  { time: '05:00 PM', available: false },
  { time: '06:00 PM', available: true },
];

const Check = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const UserIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
  </svg>
);

const GridIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="3" width="18" height="18" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

export function BookDemoPanel() {
  const [calYear, setCalYear] = useState(2026);
  const [calMonth, setCalMonth] = useState(2); // March
  const [selectedDate, setSelectedDate] = useState<{ d: number; m: number; y: number } | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    companySize: '',
    product: 'all',
    context: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePrevMonth = () => {
    if (calMonth === 0) {
      setCalMonth(11);
      setCalYear(calYear - 1);
    } else {
      setCalMonth(calMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (calMonth === 11) {
      setCalMonth(0);
      setCalYear(calYear + 1);
    } else {
      setCalMonth(calMonth + 1);
    }
  };

  const selectDate = (day: number) => {
    setSelectedDate({ d: day, m: calMonth, y: calYear });
    setSelectedTime(null);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const renderCalendar = () => {
    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;

    const days = [];

    // Empty cells for offset
    for (let i = 0; i < startOffset; i++) {
      days.push(<div key={`empty-${i}`} className="cal-day empty" aria-hidden="true" />);
    }

    // Days of the month
    for (let d = 1; d <= daysInMonth; d++) {
      const isPast =
        calYear < today.getFullYear() ||
        (calYear === today.getFullYear() && calMonth < today.getMonth()) ||
        (calYear === today.getFullYear() && calMonth === today.getMonth() && d < today.getDate());

      const dayOfWeek = new Date(calYear, calMonth, d).getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isToday =
        calYear === today.getFullYear() && calMonth === today.getMonth() && d === today.getDate();
      const isSelected =
        selectedDate && selectedDate.d === d && selectedDate.m === calMonth && selectedDate.y === calYear;
      const hasSlots = HAS_SLOTS.includes(d);

      const classNames = [
        'cal-day',
        isPast || isWeekend ? 'past' : '',
        isToday ? 'today' : '',
        isSelected ? 'selected' : '',
        hasSlots && !isPast && !isWeekend ? 'has-slots' : '',
      ]
        .filter(Boolean)
        .join(' ');

      days.push(
        <div
          key={d}
          className={classNames}
          role="gridcell"
          onClick={() => !isPast && !isWeekend && selectDate(d)}
        >
          {d}
        </div>
      );
    }

    return days;
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return 'Select a date above';
    return `${MONTHS[selectedDate.m]} ${selectedDate.d}, ${selectedDate.y}`;
  };

  return (
    <div className="page-panel" id="panel-book-demo">
      {/* Hero Section */}
      <section className="demo-hero" data-section-name="BOOK DEMO">
        <div className="demo-hero-bg" aria-hidden="true" />
        <div className="demo-hero-blob" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 0 }}>
          <nav className="gs-hero-crumb anim-up in" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="gs-hero-crumb-sep">/</span>
            <span className="gs-hero-crumb-cur">Book a Demo</span>
          </nav>
          <div className="demo-hero-grid">
            <div>
              <h1 className="t-display anim-up in" style={{ transitionDelay: '0.1s' }}>
                <span style={{ color: 'var(--text-primary)', display: 'block' }}>
                  {bookDemoHero.headline.line1}
                </span>
                <span style={{ color: 'var(--brand-warm)', display: 'block' }}>
                  {bookDemoHero.headline.line2}
                </span>
              </h1>
              <p
                className="t-body anim-up in"
                style={{ maxWidth: '460px', marginTop: '1.25rem', transitionDelay: '0.2s' }}
              >
                {bookDemoHero.description}
              </p>
              <div className="demo-badges anim-up in" style={{ transitionDelay: '0.3s' }}>
                <span className="gs-trust-badge">
                  <Clock size={12} />
                  45 minutes
                </span>
                <span className="gs-trust-badge">
                  <UserIcon size={12} />
                  Senior architect
                </span>
                <span className="gs-trust-badge">
                  <GridIcon size={12} />
                  Live product
                </span>
              </div>
            </div>

            {/* Architect Card */}
            <div className="architect-card anim-up in" style={{ transitionDelay: '0.2s' }}>
              <div className="arch-header">
                <div className="arch-avatar">{architect.initials}</div>
                <div>
                  <div className="arch-name">{architect.name}</div>
                  <div className="arch-role">{architect.role}</div>
                </div>
              </div>
              <div className="arch-bio">{architect.bio}</div>
              <div className="arch-specialties">
                {architect.specialties.map((specialty) => (
                  <span key={specialty} className="arch-specialty">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="expect-list anim-up in" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)', transitionDelay: '0.3s' }}>
            {expectItems.map((item) => (
              <div key={item.number} className="expect-item">
                <div className="expect-num">{item.number}</div>
                <div>
                  <div className="expect-item-title">{item.title}</div>
                  <div className="expect-item-text">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="slot-section section-pad" data-section-name="SCHEDULE">
        <div className="container">
          <div className="section-eyebrow anim-up in">
            <div className="section-eyebrow-line" />
            <span className="t-label">Choose Your Slot</span>
          </div>
          <h2 className="t-h2 anim-up in" style={{ marginBottom: '2rem', transitionDelay: '0.08s' }}>
            Pick a Date
            <br />
            <span style={{ color: 'var(--brand-primary)' }}>and Time</span>
          </h2>

          <div className="slot-layout">
            {/* Left: Calendar + Time + Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Calendar */}
              <div className="calendar-widget anim-up in">
                <div className="cal-header">
                  <button className="cal-nav-btn" onClick={handlePrevMonth} aria-label="Previous month">
                    <ChevronLeft size={14} />
                  </button>
                  <div className="cal-month-label">
                    {MONTHS[calMonth]} {calYear}
                  </div>
                  <button className="cal-nav-btn" onClick={handleNextMonth} aria-label="Next month">
                    <ChevronRight size={14} />
                  </button>
                </div>
                <div className="cal-weekdays">
                  {WEEKDAYS.map((day) => (
                    <div key={day} className="cal-weekday">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="cal-grid" role="grid" aria-label="Calendar">
                  {renderCalendar()}
                </div>
              </div>

              {/* Time Slots */}
              <div className="time-slots-section anim-up in" style={{ transitionDelay: '0.1s' }}>
                <div className="time-slots-header">
                  <div className="time-slots-date">{formatSelectedDate()}</div>
                  <div className="time-slots-tz">UTC+05:45 (NPT)</div>
                </div>
                <div className="time-slots-grid" role="listbox" aria-label="Available times">
                  {TIME_SLOTS.map((slot) => (
                    <div
                      key={slot.time}
                      className={`time-slot ${!slot.available ? 'unavailable' : ''} ${selectedTime === slot.time ? 'selected' : ''}`}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                    >
                      {slot.time}
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Form */}
              <div className="form-card anim-up in" style={{ position: 'static', top: 'auto', transitionDelay: '0.15s' }}>
                {!submitted ? (
                  <>
                    <div className="form-card-title">Session Details</div>
                    <div className="form-card-sub">
                      Tell us about your setup so the architect can prepare a relevant walkthrough.
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Your first name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Your last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Work Email</label>
                      <input
                        className="form-input"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Company</label>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Company name"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Company Size</label>
                        <select
                          className="form-select"
                          value={formData.companySize}
                          onChange={(e) => handleInputChange('companySize', e.target.value)}
                        >
                          <option value="">Select</option>
                          {companySizeOptions.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Products to Focus On</label>
                      <div className="form-radio-group">
                        {demoProductOptions.map((product) => (
                          <div key={product.id} className="form-radio-pill">
                            <input
                              type="radio"
                              name="demo-product"
                              id={`dp-${product.id}`}
                              value={product.id}
                              checked={formData.product === product.id}
                              onChange={(e) => handleInputChange('product', e.target.value)}
                            />
                            <label className="form-radio-pill-label" htmlFor={`dp-${product.id}`}>
                              {product.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">What should we focus on?</label>
                      <textarea
                        className="form-textarea"
                        placeholder="Describe your current stack, key challenges, or specific use cases you want demonstrated..."
                        value={formData.context}
                        onChange={(e) => handleInputChange('context', e.target.value)}
                      />
                    </div>
                    <div className="form-submit-row">
                      <Button variant="primary" className="btn-full" onClick={handleSubmit}>
                        Confirm Booking
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="form-success visible">
                    <div className="form-success-icon">
                      <Check size={24} />
                    </div>
                    <div className="form-success-title">Demo Confirmed</div>
                    <div className="form-success-text">
                      A calendar invite and joining link have been sent to your email. Kavya will review your
                      details before the session.
                    </div>
                    <Button href="/" variant="outline" size="sm">
                      Back to Home
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Booking Summary */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="form-card anim-up in" style={{ position: 'sticky', top: 'calc(var(--nav-height) + 64px)' }}>
                <div className="t-label" style={{ marginBottom: '1rem' }}>
                  Booking Summary
                </div>
                <div className="booking-summary-items">
                  <div className="booking-summary-item">
                    <span className="t-label">Date</span>
                    <span className="booking-summary-value">{selectedDate ? formatSelectedDate() : 'Not selected'}</span>
                  </div>
                  <div className="booking-summary-item">
                    <span className="t-label">Time</span>
                    <span className="booking-summary-value">{selectedTime || 'Not selected'}</span>
                  </div>
                  <div className="booking-summary-item">
                    <span className="t-label">Duration</span>
                    <span className="booking-summary-value">45 minutes</span>
                  </div>
                  <div className="booking-summary-item">
                    <span className="t-label">Format</span>
                    <span className="booking-summary-value">Video call</span>
                  </div>
                  <div className="booking-summary-item">
                    <span className="t-label">Cost</span>
                    <span className="booking-summary-value free">Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
