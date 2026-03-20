/**
 * @file Scroll progress hook
 * @description Track scroll progress and provide scroll utilities
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { ANIMATION } from '@/lib/constants';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(scrollProgress);
      setShowScrollTop(scrollTop > ANIMATION.SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
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
    progress,
    showScrollTop,
    scrollToTop,
    scrollToSection,
  };
}
