/**
 * @file Resources Blog Section
 * @description Engineering blog posts — featured + grid
 */

'use client';

import Link from 'next/link';
import { useAnimateOnScroll } from '@/hooks';
import { Button } from '@/components/ui';
import { blogPosts } from '@/data/blog';
import styles from './ResourcesBlogSection.module.css';

export function ResourcesBlogSection() {
  const { ref, className } = useAnimateOnScroll();

  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <section id="blog" className={`section-pad ${styles.section}`} data-section-name="BLOG">
      <div className="container">
        <div ref={ref} className={`section-header ${className}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Blog</span>
          </div>
          <div className={styles.headerRow}>
            <div>
              <h2 className="t-h2">
                Engineering &amp;<br />
                <span style={{ color: 'var(--brand-primary)' }}>Thought Leadership</span>
              </h2>
            </div>
            <Button href="/blog" variant="outline" size="sm">All Posts →</Button>
          </div>
        </div>

        {/* Featured posts — 2-column large cards */}
        <div className={styles.featuredGrid}>
          {featured.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className={styles.featuredCard}>
              <div className={styles.featuredMeta}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
              <h3 className={styles.featuredTitle}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.authorRow}>
                <div className={styles.avatar}>{post.authorInitials}</div>
                <div>
                  <p className={styles.authorName}>{post.author}</p>
                  <p className={styles.date}>{post.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Remaining posts — compact list */}
        <div className={styles.postList}>
          {rest.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className={styles.postRow}>
              <div className={styles.postLeft}>
                <span className={styles.category}>{post.category}</span>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
              </div>
              <div className={styles.postRight}>
                <div className={styles.avatar}>{post.authorInitials}</div>
                <div>
                  <p className={styles.authorName}>{post.author}</p>
                  <p className={styles.date}>{post.date}</p>
                  <p className={styles.readTime}>{post.readTime}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
