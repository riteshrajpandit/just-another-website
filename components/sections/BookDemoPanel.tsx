/**
 * @file Book Demo Panel component
 * @description Book a Demo section with calendar picker and form
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, ChevronLeft, ChevronRight, Clock } from '@/components/ui';
import { architect, expectItems, bookDemoHero, companySizeOptions, demoProductOptions } from '@/data/contact';
import styles from './BookDemoPanel.module.css';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
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
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
  </svg>
);

const GridIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="3" width="18" height="18" /><path d="M3 9h18M9 21V9" />
  </svg>
);

export function BookDemoPanel() {
  const [calYear, setCalYear] = useState(2026);
  const [calMonth, setCalMonth] = useState(3); // April
  const [selectedDate, setSelectedDate] = useState<{ d: number; m: number; y: number } | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '', companySize: '', product: 'all', context: '' });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();

  const handleInput = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handlePrevMonth = () => {
    setCalMonth((m) => { if (m === 0) { setCalYear((y) => y - 1); return 11; } return m - 1; });
  };
  const handleNextMonth = () => {
    setCalMonth((m) => { if (m === 11) { setCalYear((y) => y + 1); return 0; } return m + 1; });
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return 'Select a date above';
    return `${MONTHS[selectedDate.m]} ${selectedDate.d}, ${selectedDate.y}`;
  };

  const renderCalendar = () => {
    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    const cells = [];

    for (let i = 0; i < startOffset; i++) {
      cells.push(<div key={`e-${i}`} className={`${styles.calDay} ${styles.calDayEmpty}`} aria-hidden="true" />);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const isPast =
        calYear < today.getFullYear() ||
        (calYear === today.getFullYear() && calMonth < today.getMonth()) ||
        (calYear === today.getFullYear() && calMonth === today.getMonth() && d < today.getDate());
      const dayOfWeek = new Date(calYear, calMonth, d).getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isToday = calYear === today.getFullYear() && calMonth === today.getMonth() && d === today.getDate();
      const isSelected = selectedDate?.d === d && selectedDate?.m === calMonth && selectedDate?.y === calYear;
      const hasSlots = HAS_SLOTS.includes(d);
      const disabled = isPast || isWeekend;

      const cls = [
        styles.calDay,
        disabled ? (isPast ? styles.calDayPast : styles.calDayEmpty) : '',
        isToday ? styles.calDayToday : '',
        isSelected ? styles.calDaySelected : '',
        hasSlots && !disabled ? styles.calDayHasSlots : '',
      ].filter(Boolean).join(' ');

      cells.push(
        <div
          key={d}
          className={cls}
          role="gridcell"
          aria-label={`${MONTHS[calMonth]} ${d}`}
          aria-selected={isSelected ? true : undefined}
          aria-disabled={disabled ? true : undefined}
          onClick={() => !disabled && setSelectedDate({ d, m: calMonth, y: calYear })}
        >
          {d}
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="page-panel" id="panel-book-demo">
      {/* ── Hero ── */}
      <section className={styles.demoHero} data-section-name="BOOK DEMO">
        <div className={styles.demoHeroBg} aria-hidden="true" />
        <div className={styles.demoHeroBlob} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav className="gs-hero-crumb anim-up in" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="gs-hero-crumb-sep">/</span>
            <span className="gs-hero-crumb-cur">Book a Demo</span>
          </nav>

          <div className={styles.demoHeroGrid}>
            <div>
              <h1 className="t-display anim-up in" style={{ transitionDelay: '0.1s' }}>
                <span style={{ color: 'var(--text-primary)', display: 'block' }}>{bookDemoHero.headline.line1}</span>
                <span style={{ color: 'var(--brand-warm)', display: 'block' }}>{bookDemoHero.headline.line2}</span>
              </h1>
              <p className="t-body anim-up in" style={{ maxWidth: '460px', marginTop: '1.25rem', transitionDelay: '0.2s' }}>
                {bookDemoHero.description}
              </p>
              <div className={`${styles.demoBadges} anim-up in`} style={{ transitionDelay: '0.3s' }}>
                <span className="gs-trust-badge"><Clock size={12} />45 minutes</span>
                <span className="gs-trust-badge"><UserIcon size={12} />Senior architect</span>
                <span className="gs-trust-badge"><GridIcon size={12} />Live product</span>
              </div>
            </div>

            {/* Architect Card */}
            <div className={`${styles.architectCard} anim-up in`} style={{ transitionDelay: '0.2s' }}>
              <div className={styles.archHeader}>
                <div className={styles.archAvatar}>{architect.initials}</div>
                <div>
                  <div className={styles.archName}>{architect.name}</div>
                  <div className={styles.archRole}>{architect.role}</div>
                </div>
              </div>
              <p className={styles.archBio}>{architect.bio}</p>
              <div className={styles.archSpecialties}>
                {architect.specialties.map((s) => (
                  <span key={s} className={styles.archSpecialty}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <ul className={`${styles.expectList} anim-up in`} style={{ transitionDelay: '0.3s' }}>
            {expectItems.map((item) => (
              <li key={item.number} className={styles.expectItem}>
                <span className={styles.expectNum}>{item.number}</span>
                <div>
                  <p className={styles.expectItemTitle}>{item.title}</p>
                  <p className={styles.expectItemText}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Slot Section ── */}
      <section className={`${styles.slotSection} section-pad`} data-section-name="SCHEDULE">
        <div className="container">
          <div className="section-eyebrow anim-up in">
            <div className="section-eyebrow-line" />
            <span className="t-label">Choose Your Slot</span>
          </div>
          <h2 className="t-h2 anim-up in" style={{ marginBottom: '2rem', transitionDelay: '0.08s' }}>
            Pick a Date<br />
            <span style={{ color: 'var(--brand-primary)' }}>and Time</span>
          </h2>

          <div className={styles.slotLayout}>
            {/* Left: Calendar + Time + Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Calendar */}
              <div className={`${styles.calendarWidget} anim-up in`}>
                <div className={styles.calHeader}>
                  <button className={styles.calNavBtn} onClick={handlePrevMonth} aria-label="Previous month">
                    <ChevronLeft size={14} />
                  </button>
                  <span className={styles.calMonthLabel}>{MONTHS[calMonth]} {calYear}</span>
                  <button className={styles.calNavBtn} onClick={handleNextMonth} aria-label="Next month">
                    <ChevronRight size={14} />
                  </button>
                </div>
                <div className={styles.calWeekdays}>
                  {WEEKDAYS.map((d) => (
                    <div key={d} className={styles.calWeekday}>{d}</div>
                  ))}
                </div>
                <div className={styles.calGrid} role="grid" aria-label="Select a date">
                  {renderCalendar()}
                </div>
              </div>

              {/* Time Slots */}
              <div className={`${styles.timeSlotsSection} anim-up in`} style={{ transitionDelay: '0.1s' }}>
                <div className={styles.timeSlotsHeader}>
                  <span className={styles.timeSlotsDate}>{formatSelectedDate()}</span>
                  <span className={styles.timeSlotsTz}>UTC+05:45 (NPT)</span>
                </div>
                <div className={styles.timeSlotsGrid} role="listbox" aria-label="Available times">
                  {TIME_SLOTS.map((slot) => (
                    <div
                      key={slot.time}
                      className={[
                        styles.timeSlot,
                        !slot.available ? styles.timeSlotUnavailable : '',
                        selectedTime === slot.time ? styles.timeSlotSelected : '',
                      ].filter(Boolean).join(' ')}
                      role="option"
                      aria-selected={selectedTime === slot.time}
                      aria-disabled={!slot.available}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                    >
                      {slot.time}
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Form */}
              <div className={`${styles.formCard} anim-up in`} style={{ transitionDelay: '0.15s' }}>
                {!submitted ? (
                  <>
                    <p className={styles.formCardTitle}>Session Details</p>
                    <p className={styles.formCardSub}>
                      Tell us about your setup so the architect can prepare a relevant walkthrough.
                    </p>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="bd-fname">First Name</label>
                        <input id="bd-fname" className={styles.formInput} type="text" placeholder="Your first name" value={formData.firstName} onChange={(e) => handleInput('firstName', e.target.value)} />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="bd-lname">Last Name</label>
                        <input id="bd-lname" className={styles.formInput} type="text" placeholder="Your last name" value={formData.lastName} onChange={(e) => handleInput('lastName', e.target.value)} />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="bd-email">Work Email</label>
                      <input id="bd-email" className={styles.formInput} type="email" placeholder="you@company.com" value={formData.email} onChange={(e) => handleInput('email', e.target.value)} />
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="bd-company">Company</label>
                        <input id="bd-company" className={styles.formInput} type="text" placeholder="Company name" value={formData.company} onChange={(e) => handleInput('company', e.target.value)} />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="bd-size">Company Size</label>
                        <select id="bd-size" className={styles.formSelect} value={formData.companySize} onChange={(e) => handleInput('companySize', e.target.value)}>
                          <option value="">Select</option>
                          {companySizeOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Products to Focus On</label>
                      <div className={styles.formRadioGroup}>
                        {demoProductOptions.map((p) => (
                          <div key={p.id} className={styles.formRadioPill}>
                            <input type="radio" name="demo-product" id={`dp-${p.id}`} value={p.id} checked={formData.product === p.id} onChange={(e) => handleInput('product', e.target.value)} />
                            <label className={styles.formRadioPillLabel} htmlFor={`dp-${p.id}`}>{p.label}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="bd-context">What should we focus on?</label>
                      <textarea id="bd-context" className={styles.formTextarea} placeholder="Describe your current stack, key challenges, or specific use cases..." value={formData.context} onChange={(e) => handleInput('context', e.target.value)} />
                    </div>
                    <div className={styles.formSubmitRow}>
                      <Button variant="primary" size="full" onClick={() => setSubmitted(true)}>
                        Confirm Booking
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className={styles.formSuccess}>
                    <div className={styles.formSuccessIcon}><Check size={24} /></div>
                    <p className={styles.formSuccessTitle}>Demo Confirmed</p>
                    <p className={styles.formSuccessText}>
                      A calendar invite and joining link have been sent to your email. Kavya will review your details before the session.
                    </p>
                    <Button href="/" variant="outline" size="sm">Back to Home</Button>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Booking Summary */}
            <div>
              <div className={styles.bookingSummary}>
                <span className="t-label">Booking Summary</span>
                <div className={styles.bookingSummaryItems}>
                  {[
                    { label: 'Date', value: selectedDate ? formatSelectedDate() : 'Not selected' },
                    { label: 'Time', value: selectedTime || 'Not selected' },
                    { label: 'Duration', value: '45 minutes' },
                    { label: 'Format', value: 'Video call' },
                    { label: 'Cost', value: 'Free', highlight: true },
                  ].map((item) => (
                    <div key={item.label} className={styles.bookingSummaryItem}>
                      <span className="t-label">{item.label}</span>
                      <span className={`${styles.bookingSummaryValue} ${item.highlight ? styles.bookingSummaryFree : ''}`}>
                        {item.value}
                      </span>
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
