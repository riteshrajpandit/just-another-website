/**
 * @file Products Catalogue Section
 * @description Full grid + detail rows for all products on /products page
 */

'use client';

import { useState } from 'react';
import { Workflow, Box, Shield, Activity, Cloud, Monitor } from '@/components/ui';
import { Button } from '@/components/ui';
import { useAnimateOnScroll } from '@/hooks';
import { products } from '@/data/site';
import type { Product } from '@/types';
import styles from './ProductsCatalogueSection.module.css';

const iconMap = {
  workflow: Workflow,
  box: Box,
  shield: Shield,
  activity: Activity,
  cloud: Cloud,
  monitor: Monitor,
} as const;

function ProductDetailRow({ product, flipped }: { product: Product; flipped: boolean }) {
  const IconComponent = iconMap[product.icon as keyof typeof iconMap] || Box;
  return (
    <div
      id={product.id}
      className={`${styles.detailRow} ${flipped ? styles.detailRowFlipped : ''}`}
    >
      {/* Left: content */}
      <div className={styles.detailContent}>
        <div className={styles.detailEyebrow}>
          <div className="section-eyebrow-line" />
          <span className="t-label">{product.tag}</span>
        </div>
        <h2 className={`t-h2 ${styles.detailName}`}>{product.name}</h2>
        {product.headline && (
          <p className={styles.detailHeadline}>{product.headline}</p>
        )}
        <p className={styles.detailDesc}>{product.description}</p>

        {product.features && (
          <ul className={styles.featureList}>
            {product.features.map((f) => (
              <li key={f} className={styles.featureItem}>
                <span className={styles.featureCheck} aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        )}

        {product.stat && (
          <div className={styles.statCallout}>
            <span className={styles.statCalloutVal}>{product.stat.value}</span>
            <span className={styles.statCalloutLbl}>{product.stat.label}</span>
          </div>
        )}

        <div className={styles.detailCtas}>
          <Button href="/contact#book-demo" variant="primary" size="sm">Book a Demo</Button>
          <Button href="/contact" variant="outline" size="sm">Get Started</Button>
        </div>
      </div>

      {/* Right: visual panel */}
      <div className={styles.detailVisual} style={{ background: product.gradient }} aria-hidden="true">
        <div className={styles.detailVisualIcon}>
          <IconComponent size={48} />
        </div>
        <div className={styles.detailVisualTag}>{product.tag}</div>
        <div className={styles.detailVisualGeo1} />
        <div className={styles.detailVisualGeo2} />
      </div>
    </div>
  );
}

export function ProductsCatalogueSection() {
  const [activeTag, setActiveTag] = useState('All');
  const { ref: headerRef, className: headerClass } = useAnimateOnScroll();

  const tags = ['All', ...new Set(products.map((p) => p.tag))];
  const filtered = activeTag === 'All' ? products : products.filter((p) => p.tag === activeTag);

  return (
    <>
      {/* ── Full Grid Overview ── */}
      <section className={`${styles.overview} section-pad`} data-section-name="ALL PRODUCTS">
        <div className="container">
          <div ref={headerRef} className={`section-header ${headerClass}`}>
            <div className="section-eyebrow">
              <div className="section-eyebrow-line" />
              <span className="t-label">Complete Suite</span>
            </div>
            <h2 className="t-h2">
              All {products.length} Products.<br />
              <span style={{ color: 'var(--brand-primary)' }}>One Decision.</span>
            </h2>
          </div>

          {/* Filter */}
          <div className={styles.filterBar} role="group" aria-label="Filter by category">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`${styles.filterBtn} ${activeTag === tag ? styles.filterActive : ''}`}
                onClick={() => setActiveTag(tag)}
                aria-pressed={activeTag === tag}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className={styles.catalogueGrid}>
            {filtered.map((product, idx) => {
              const IconComponent = iconMap[product.icon as keyof typeof iconMap] || Box;
              return (
                <a
                  key={product.id}
                  href={`#${product.id}`}
                  className={`${styles.catalogueCard} ${product.featured ? styles.catalogueCardFeatured : ''}`}
                  style={{ transitionDelay: `${idx * 0.04}s` }}
                >
                  <div className={styles.catalogueIcon}>
                    <IconComponent size={20} />
                  </div>
                  <div className={styles.catalogueMeta}>
                    <span className={styles.catalogueTag}>{product.tag}</span>
                    {product.featured && <span className={styles.featuredBadge}>Featured</span>}
                  </div>
                  <p className={styles.catalogueName}>{product.name}</p>
                  <p className={styles.catalogueDesc}>{product.description}</p>
                  {product.stat && (
                    <div className={styles.catalogueStat}>
                      <span className={styles.catalogueStatVal}>{product.stat.value}</span>
                      <span className={styles.catalogueStatLbl}>{product.stat.label}</span>
                    </div>
                  )}
                  <span className={styles.catalogueArrow}>View Details →</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Individual Product Detail Rows ── */}
      <section className={styles.details} data-section-name="DETAILS">
        {products.map((product, idx) => (
          <ProductDetailRow key={product.id} product={product} flipped={idx % 2 !== 0} />
        ))}
      </section>
    </>
  );
}
