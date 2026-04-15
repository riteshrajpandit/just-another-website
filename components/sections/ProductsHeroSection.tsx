/**
 * @file Products Hero Section
 * @description Hero for the /products page
 */

import Link from 'next/link';
import { Button } from '@/components/ui';
import { products } from '@/data/site';
import styles from './ProductsHeroSection.module.css';

const tags = [...new Set(products.map((p) => p.tag))];

export function ProductsHeroSection() {
  return (
    <section className={styles.hero} data-section-name="PRODUCTS">
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.heroBlob} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Products</span>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <h1 className={`t-display ${styles.headline}`}>
              <span className={styles.line1}>One Platform.</span>
              <span className={styles.line2}>Six Products.</span>
            </h1>
            <p className={styles.sub}>
              Every NEXACORE product is designed as a composable building block. Deploy
              individually or connect them into a unified digital operations layer that scales
              with your enterprise.
            </p>
            <div className={styles.ctas}>
              <Button href="/contact#book-demo" variant="primary">Book a Demo</Button>
              <Button href="/contact" variant="outline">Get Started Free</Button>
            </div>
          </div>

          {/* Product tag cloud / stat panel */}
          <div className={styles.statPanel}>
            <div className={styles.statPanelHeader}>
              <span className="t-label">Product Suite</span>
              <span className={styles.statCount}>{products.length} products</span>
            </div>
            <div className={styles.tagCloud}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.statGrid}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>340+</span>
                <span className={styles.statLbl}>Enterprise Clients</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>18M+</span>
                <span className={styles.statLbl}>API Calls / Day</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>99.97%</span>
                <span className={styles.statLbl}>Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
