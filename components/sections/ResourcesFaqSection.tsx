/**
 * @file Resources FAQ Section
 * @description Filterable accordion FAQ
 */

'use client';

import { useState } from 'react';
import { useAnimateOnScroll } from '@/hooks';
import { faqs, faqCategories } from '@/data/resources';
import styles from './ResourcesFaqSection.module.css';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button
        className={styles.question}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={styles.icon} aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && <p className={styles.answer}>{answer}</p>}
    </div>
  );
}

export function ResourcesFaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { ref, className } = useAnimateOnScroll();

  const filtered = activeCategory === 'All'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faqs" className={`section-pad ${styles.section}`} data-section-name="FAQS">
      <div className="container">
        <div ref={ref} className={`section-header ${className}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Knowledge Base</span>
          </div>
          <h2 className="t-h2">
            Frequently Asked<br />
            <span style={{ color: 'var(--brand-primary)' }}>Questions</span>
          </h2>
          <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            Can&apos;t find what you are looking for? Reach us at support@nexacore.io or
            open a live chat.
          </p>
        </div>

        <div className={styles.filterBar} role="group" aria-label="Filter FAQs by category">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.list}>
          {filtered.map((faq) => (
            <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
