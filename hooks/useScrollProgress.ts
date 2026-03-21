/**
 * @file Scroll progress hook
 * @description Track scroll progress and provide scroll utilities
 */

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ANIMATION } from '@/lib/constants';

export function useScrollProgress() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastScrollTop = useRef(0);

  const setProgressRef = useCallback((element: HTMLDivElement | null) => {
    progressRef.current = element;
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      // Direct DOM manipulation for smooth progress bar updates
      if (progressRef.current) {
        progressRef.current.style.height = `${scrollProgress}%`;
      }

      // Only update React state when crossing the threshold
      const shouldShow = scrollTop > ANIMATION.SCROLL_THRESHOLD;
      const wasShowing = lastScrollTop.current > ANIMATION.SCROLL_THRESHOLD;
      if (shouldShow !== wasShowing) {
        setShowScrollTop(shouldShow);
      }
      lastScrollTop.current = scrollTop;

      rafRef.current = null;
    };

    const handleScroll = () => {
      // Use requestAnimationFrame to throttle updates to once per frame
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial update
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return {
    progressRef: setProgressRef,
    showScrollTop,
    scrollToTop,
    scrollToSection,
  };
}
