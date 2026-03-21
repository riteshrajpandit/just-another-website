/**
 * @file Products Section component
 * @description Product showcase with interactive cards
 */

'use client';

import { useAnimateOnScroll } from '@/hooks';
import { Workflow, Box, Shield, Activity, Cloud, Monitor } from '@/components/ui';
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
          <h2 className="t-h2">
            Tools Built for<br />
            <span style={{ color: 'var(--brand-primary)' }}>Enterprise Scale</span>
          </h2>
          <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            Each NEXACORE product is designed as a composable building block — deploy individually
            or connect them into a unified digital operations layer.
          </p>
        </div>
        <div ref={gridRef} className={`${styles.productsGrid} ${gridClass}`}>
          {products.map((product, idx) => {
            const IconComponent = iconMap[product.icon as keyof typeof iconMap] || Box;
            return (
              <div
                key={product.id}
                className={styles.productCard}
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className={styles.productIcon}>
                  <IconComponent size={22} />
                </div>
                <div className={styles.productTag}>{product.tag}</div>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productDesc}>{product.description}</div>
                <div className={styles.productLink}>
                  Learn More <span>&#8594;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
