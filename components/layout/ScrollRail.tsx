/**
 * @file Scroll Rail component
 * @description Left sidebar with scroll progress and section navigation
 */

'use client';

import { useScrollProgress, useActiveSection } from '@/hooks';
import { sections } from '@/data/site';
import { ChevronUp } from '@/components/ui';

const sectionIds = sections.map((s) => s.id);

export function ScrollRail() {
  const { progress, showScrollTop, scrollToTop, scrollToSection } = useScrollProgress();
  const activeSection = useActiveSection(sectionIds);

  const activeSectionName = sections.find((s) => s.id === activeSection)?.name || 'HOME';

  return (
    <>
      <aside id="scroll-rail" aria-hidden="true">
        <div id="scroll-progress-track">
          <div id="scroll-progress-fill" style={{ height: `${progress}%` }} />
        </div>
        <nav className="section-dots" style={{ marginTop: '80px' }}>
          {sections.map((section) => (
            <div
              key={section.id}
              className={`section-dot ${activeSection === section.id ? 'active' : ''}`}
              data-section={section.id}
              title={section.title}
              onClick={() => scrollToSection(section.id)}
            />
          ))}
        </nav>
        <div
          id="section-label-vert"
          className={`section-label-vert ${activeSectionName ? 'visible' : ''}`}
        >
          {activeSectionName}
        </div>
      </aside>

      <button
        id="scroll-top"
        className={showScrollTop ? 'visible' : ''}
        aria-label="Scroll to top"
        onClick={scrollToTop}
      >
        <ChevronUp size={18} />
      </button>
    </>
  );
}
