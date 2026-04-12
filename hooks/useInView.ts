/**
 * @file Intersection observer hook
 * @description Custom hook for scroll-triggered animations
 */

'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.12, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}

export function useAnimateOnScroll(options: UseInViewOptions = {}) {
  const { ref, isInView } = useInView(options);

  const className = isInView ? 'anim-up in' : 'anim-up';

  return { ref, className, isInView };
}

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.35 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}

export interface DynamicSection {
  id: string;
  name: string;
}

export function useDynamicSections() {
  const [sections, setSections] = useState<DynamicSection[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Find all sections with data-section-name attribute
    const sectionElements = document.querySelectorAll<HTMLElement>('[data-section-name]');
    const foundSections: DynamicSection[] = [];

    sectionElements.forEach((el) => {
      const id = el.id;
      const name = el.getAttribute('data-section-name') || '';
      if (id && name) {
        foundSections.push({ id, name });
      }
    });

    // Use a ref to track if this effect is still mounted
    let isMounted = true;

    // Set sections from DOM - runs once on mount
    // eslint-disable-next-line react-hooks/set-state-in-effect -- DOM detection pattern: finding sections from rendered elements
    setSections(foundSections);

    // Set initial active section
    if (foundSections.length > 0) {
      setActiveSection(foundSections[0].id);
    }

    // Set up intersection observers
    const observers: IntersectionObserver[] = [];

    foundSections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && isMounted) {
            setActiveSection(id);
          }
        },
        { threshold: 0.35 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      isMounted = false;
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return { sections, activeSection };
}

export function useCountUp(target: number, isInView: boolean) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1800;
    const step = duration / target;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      setCount(current);
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      }
    }, step);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return count;
}
