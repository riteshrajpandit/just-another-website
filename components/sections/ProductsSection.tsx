/**
 * @file Products Section component
 * @description Featured products preview on home page (3 items + View All)
 */

'use client';

import Link from 'next/link';
import { useAnimateOnScroll } from '@/hooks';
import { Workflow, Box, Shield, Activity, Cloud, Monitor } from '@/components/ui';
import { Button } from '@/components/ui';
import { products } from '@/data/site';
import styles from './ProductsSection.module.css';

const iconMap = {
  workflow: Workflow,
  box: Box,
  shield: Shield,
  activity: Activity,
  cloud: Cloud,
  monitor: Monitor,
} as const;

// Show only featured products on the home page
const featuredProducts = products.filter((p) => p.featured);

export function ProductsSection() {
  const { ref: headerRef, className: headerClass } = useAnimateOnScroll();
  const { ref: gridRef, className: gridClass } = useAnimateOnScroll();

  return (
    <section id="products" className={`${styles.products} section-pad`} data-section-name="PRODUCTS">
      <div className="container">
        <div ref={headerRef} className={`section-header ${headerClass}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Product Suite</span>
          </div>
          <div className={styles.headerRow}>
            <div>
              <h2 className="t-h2">
                Tools Built for<br />
                <span style={{ color: 'var(--brand-primary)' }}>Enterprise Scale</span>
              </h2>
              <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
                Each NEXACORE product is a composable building block — deploy individually
                or connect them into a unified digital operations layer.
              </p>
            </div>
            <div className={styles.headerCta}>
              <Button href="/products" variant="outline" size="sm">
                View All {products.length} Products →
              </Button>
            </div>
          </div>
        </div>

        <div ref={gridRef} className={`${styles.productsGrid} ${gridClass}`}>
          {featuredProducts.map((product, idx) => {
            const IconComponent = iconMap[product.icon as keyof typeof iconMap] || Box;
            return (
              <Link
                key={product.id}
                href={product.href ?? '/products'}
                className={styles.productCard}
                style={{ transitionDelay: `${idx * 0.07}s` }}
              >
                <div className={styles.productIcon}>
                  <IconComponent size={22} />
                </div>
                <span className={styles.productTag}>{product.tag}</span>
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.productDesc}>{product.description}</p>
                {product.stat && (
                  <div className={styles.productStat}>
                    <span className={styles.productStatVal}>{product.stat.value}</span>
                    <span className={styles.productStatLbl}>{product.stat.label}</span>
                  </div>
                )}
                <span className={styles.productLink}>
                  Learn More <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </div>

        {/* "See all" footer band */}
        <div className={styles.viewAllBand}>
          <div className={styles.viewAllLeft}>
            <span className="t-label">+{products.length - featuredProducts.length} more products</span>
            <p className={styles.viewAllText}>
              PulseMetrics, CloudOrchestra, DeskCanvas and more — all in the full suite.
            </p>
          </div>
          <Button href="/products" variant="brand">
            Explore Full Product Suite
          </Button>
        </div>
      </div>
    </section>
  );
}
