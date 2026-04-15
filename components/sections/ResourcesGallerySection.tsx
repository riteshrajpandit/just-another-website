/**
 * @file Resources Gallery Section
 * @description Product screenshot / demo gallery grid
 */

'use client';

import { useState } from 'react';
import { useAnimateOnScroll } from '@/hooks';
import { galleryItems } from '@/data/resources';
import type { GalleryItem } from '@/types';
import styles from './ResourcesGallerySection.module.css';

const categoryColors: Record<GalleryItem['category'], string> = {
  UI: styles.catUI,
  Dashboard: styles.catDashboard,
  Integration: styles.catIntegration,
  Architecture: styles.catArchitecture,
};

const categories = ['All', 'UI', 'Dashboard', 'Integration', 'Architecture'] as const;

export function ResourcesGallerySection() {
  const [active, setActive] = useState<string>('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const { ref, className } = useAnimateOnScroll();

  const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <section id="gallery" className={`section-pad ${styles.section}`} data-section-name="GALLERY">
      <div className="container">
        <div ref={ref} className={`section-header ${className}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Gallery</span>
          </div>
          <h2 className="t-h2">
            See It in<br />
            <span style={{ color: 'var(--brand-primary)' }}>Action</span>
          </h2>
          <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            Screenshots and architecture diagrams from real production deployments.
          </p>
        </div>

        <div className={styles.filterBar} role="group" aria-label="Filter gallery">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((item, idx) => (
            <button
              key={item.id}
              className={styles.tile}
              style={{ transitionDelay: `${idx * 0.04}s` }}
              onClick={() => setLightbox(item)}
              aria-label={`View ${item.title}`}
            >
              {/* Simulated screenshot frame */}
              <div className={styles.frame} aria-hidden="true">
                <div className={styles.frameDots}>
                  <span /><span /><span />
                </div>
                <div className={styles.frameScreen}>
                  <div className={styles.frameSidebar} />
                  <div className={styles.frameMain}>
                    {[1, 2, 3].map((r) => <div key={r} className={styles.frameLine} />)}
                    <div className={styles.frameBlock} />
                  </div>
                </div>
              </div>
              <div className={styles.tileOverlay}>
                <div className={styles.tileInfo}>
                  <span className={`${styles.tileCat} ${categoryColors[item.category]}`}>{item.category}</span>
                  <p className={styles.tileTitle}>{item.title}</p>
                  <p className={styles.tileCaptionText}>{item.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)} aria-label="Close">×</button>
            <div className={styles.lightboxFrame} aria-hidden="true">
              <div className={styles.frameDots}><span /><span /><span /></div>
              <div className={styles.frameScreen}>
                <div className={styles.frameSidebar} />
                <div className={styles.frameMain}>
                  {[1, 2, 3, 4].map((r) => <div key={r} className={styles.frameLine} />)}
                  <div className={styles.frameBlock} />
                </div>
              </div>
            </div>
            <div className={styles.lightboxMeta}>
              <p className={styles.lightboxTitle}>{lightbox.title}</p>
              <p className={styles.lightboxCaption}>{lightbox.caption}</p>
              <span className={styles.lightboxProduct}>{lightbox.product}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
