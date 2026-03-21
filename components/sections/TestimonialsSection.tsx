/**
 * @file Testimonials Section component
 * @description Testimonial slider with auto-play
 */

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useAnimateOnScroll } from '@/hooks';
import { ChevronLeft, ChevronRight } from '@/components/ui';
import { testimonials } from '@/data/site';
import { ANIMATION } from '@/lib/constants';
import styles from './TestimonialsSection.module.css';

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const { ref: headerRef, className: headerClass } = useAnimateOnScroll();
  const { ref: containerRef, className: containerClass } = useAnimateOnScroll();

  const totalSlides = testimonials.length;

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentSlide((index + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const startAutoSlide = useCallback(() => {
    autoSlideRef.current = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, ANIMATION.TESTIMONIAL_INTERVAL);
  }, [currentSlide, goToSlide]);

  const resetAutoSlide = useCallback(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    startAutoSlide();
  }, [startAutoSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [startAutoSlide]);

  const handlePrev = useCallback(() => {
    goToSlide(currentSlide - 1);
    resetAutoSlide();
  }, [currentSlide, goToSlide, resetAutoSlide]);

  const handleNext = useCallback(() => {
    goToSlide(currentSlide + 1);
    resetAutoSlide();
  }, [currentSlide, goToSlide, resetAutoSlide]);

  const handleDotClick = useCallback(
    (index: number) => {
      goToSlide(index);
      resetAutoSlide();
    },
    [goToSlide, resetAutoSlide]
  );

  // Touch swipe handlers
  const touchStartX = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 50) {
        if (dx < 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    },
    [handleNext, handlePrev]
  );

  return (
    <section id="testimonials" className={`${styles.testimonials} section-pad`} data-section-name="TESTIMONIALS">
      <div className="container">
        <div ref={headerRef} className={`section-header ${headerClass}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Client Voices</span>
          </div>
          <h2 className="t-h2">
            What Our Clients<br />
            <span style={{ color: 'var(--brand-primary)' }}>Actually Say</span>
          </h2>
        </div>
      </div>
      <div ref={containerRef} className={`${styles.testimonialContainer} ${containerClass}`}>
        <div
          className={styles.testimonialSlider}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialSlide}>
              <div className="container">
                <span className={styles.testimonialQuoteMark} aria-hidden="true">
                  &quot;
                </span>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar} aria-hidden="true">
                    {testimonial.authorInitials}
                  </div>
                  <div>
                    <div className={styles.testimonialAuthorName}>{testimonial.authorName}</div>
                    <div className={styles.testimonialAuthorRole}>{testimonial.authorRole}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.testimonialControls}>
          <div className={styles.testimonialDots}>
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`${styles.tDot} ${idx === currentSlide ? styles.tDotActive : ''}`}
                onClick={() => handleDotClick(idx)}
              />
            ))}
          </div>
          <div className={styles.testimonialNav}>
            <button
              className={styles.testimonialBtn}
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className={styles.testimonialBtn}
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
