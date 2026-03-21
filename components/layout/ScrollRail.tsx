/**
 * @file Scroll Rail component
 * @description Left sidebar with scroll progress and section navigation
 */

'use client';

import { useScrollProgress, useDynamicSections } from '@/hooks';
import { ChevronUp } from '@/components/ui';
import styles from './ScrollRail.module.css';

export function ScrollRail() {
  const { progressRef, showScrollTop, scrollToTop, scrollToSection } = useScrollProgress();
  const { sections, activeSection } = useDynamicSections();

  const activeSectionName = sections.find((s) => s.id === activeSection)?.name || '';

  return (
    <>
      <aside className={styles.scrollRail} aria-hidden="true">
        <div className={styles.scrollProgressTrack}>
          <div ref={progressRef} className={styles.scrollProgressFill} />
        </div>
        <nav className={styles.sectionDots} style={{ marginTop: '80px' }}>
          {sections.map((section) => (
            <div
              key={section.id}
              className={`${styles.sectionDot} ${activeSection === section.id ? styles.sectionDotActive : ''}`}
              data-section={section.id}
              title={section.name}
              onClick={() => scrollToSection(section.id)}
            />
          ))}
        </nav>
        <div
          className={`${styles.sectionLabelVert} ${activeSectionName ? styles.sectionLabelVertVisible : ''}`}
        >
          {activeSectionName}
        </div>
      </aside>

      <button
        className={`${styles.scrollTop} ${showScrollTop ? styles.scrollTopVisible : ''}`}
        aria-label="Scroll to top"
        onClick={scrollToTop}
      >
        <ChevronUp size={18} />
      </button>
    </>
  );
}
