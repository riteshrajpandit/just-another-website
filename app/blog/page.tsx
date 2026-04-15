/**
 * @file Blog Listing Page
 * @description /blog — all posts with hero, featured, filterable grid
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer, ScrollRail } from '@/components/layout';
import { blogPosts, blogCategories } from '@/data/blog';
import styles from './blog.module.css';

const categoryIcons: Record<string, string> = {
  Security:            'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  Engineering:         'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  'Cloud Infrastructure': 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z',
  'Data Engineering':  'M22 12h-4l-3 9L9 3l-3 9H2',
  Compliance:          'M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = blogPosts.filter((p) => p.featured);
  const filtered = activeCategory === 'All'
    ? blogPosts.filter((p) => !p.featured)
    : blogPosts.filter((p) => p.category === activeCategory && !p.featured);
  const allFiltered = activeCategory === 'All' ? null : blogPosts.filter((p) => p.category === activeCategory);

  const postsToShow = allFiltered ?? filtered;

  return (
    <>
      <ScrollRail />
      <Header />
      <main id="main-content">
        {/* ── Hero ── */}
        <div className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className="container">
            <div className={styles.heroContent}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/resources">Resources</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Blog</span>
              </nav>
              <h1 className={`t-display ${styles.heroHeadline}`}>
                <span className={styles.heroLine1}>Engineering &amp;</span>
                <span className={styles.heroLine2}>Thought Leadership</span>
              </h1>
              <p className={styles.heroSub}>
                Deep dives on enterprise infrastructure, security, and cloud architecture from the
                NEXACORE engineering team. No fluff, no sponsored content.
              </p>
              <div className={styles.heroBadges}>
                {blogCategories.filter(c => c !== 'All').map((cat) => (
                  <span key={cat} className={styles.heroCategoryBadge}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={categoryIcons[cat] ?? categoryIcons.Engineering} />
                    </svg>
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Category Filter ── */}
        <div className="container">
          <div className={styles.filterBar} role="group" aria-label="Filter by category">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Featured posts (only when showing All) ── */}
          {activeCategory === 'All' && featured.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className={styles.featuredPost}
              aria-label={`Featured: ${post.title}`}
            >
              <div className={styles.featuredVisual}>
                <div className={styles.featuredVisualPattern} aria-hidden="true" />
                <div className={styles.featuredVisualIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d={categoryIcons[post.category] ?? categoryIcons.Engineering} />
                  </svg>
                </div>
                <span className={styles.featuredBadge}>Featured</span>
              </div>
              <div className={styles.featuredBody}>
                <span className={styles.featuredCategory}>{post.category}</span>
                <h2 className={styles.featuredTitle}>{post.title}</h2>
                <p className={styles.featuredExcerpt}>{post.excerpt}</p>
                <div className={styles.featuredMeta}>
                  <div className={styles.avatar}>{post.authorInitials}</div>
                  <span className={styles.metaText}>{post.author}</span>
                  <span className={styles.metaDot} aria-hidden="true" />
                  <span className={styles.metaText}>{post.date}</span>
                  <span className={styles.metaDot} aria-hidden="true" />
                  <span className={styles.metaText}>{post.readTime}</span>
                  <span className={styles.readMoreArrow}>Read Article →</span>
                </div>
              </div>
            </Link>
          ))}

          {/* ── Post grid ── */}
          <div className={styles.postGrid}>
            {postsToShow.length > 0 ? postsToShow.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className={styles.postCard}>
                <span className={styles.postCardCategory}>{post.category}</span>
                <h2 className={styles.postCardTitle}>{post.title}</h2>
                <p className={styles.postCardExcerpt}>{post.excerpt}</p>
                <div className={styles.postCardTags}>
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.postCardTag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.postCardFooter}>
                  <div className={styles.avatar}>{post.authorInitials}</div>
                  <div>
                    <div className={styles.metaText} style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      {post.author}
                    </div>
                    <div className={styles.metaText}>{post.date} · {post.readTime}</div>
                  </div>
                  <span className={styles.readMoreArrow}>Read →</span>
                </div>
              </Link>
            )) : (
              <div className={styles.emptyState}>
                <p className={styles.emptyStateText}>No posts in this category yet.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
