/**
 * @file BlogArticle — client component
 * @description Full article body, likes, share, comments, TOC, sidebar
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import type { BlogPost, BlogSection } from '@/types';
import styles from '../blog.module.css';

// ── Render a single content block ───────────────────────────

function ContentBlock({ block }: { block: BlogSection }) {
  switch (block.type) {
    case 'paragraph':
      return <p className={styles.bodyParagraph}>{block.text}</p>;
    case 'heading':
      return block.level === 2
        ? <h2 className={styles.bodyH2}>{block.text}</h2>
        : <h3 className={styles.bodyH3}>{block.text}</h3>;
    case 'quote':
      return <blockquote className={styles.bodyQuote}>&ldquo;{block.text}&rdquo;</blockquote>;
    case 'callout':
      return <div className={styles.bodyCallout} role="note">{block.text}</div>;
    case 'list':
      return (
        <ul className={styles.bodyList}>
          {block.items?.map((item, i) => (
            <li key={i} className={styles.bodyListItem}>
              <span className={styles.bodyListBullet} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

// ── Mock comments ────────────────────────────────────────────

const mockComments = [
  { id: 'c1', author: 'James Whitmore', initials: 'JW', date: 'Apr 10, 2026', text: 'Excellent breakdown. We went through this exact transition at Meridian — the regulatory angle alone is worth the read. Bookmarking for our quarterly security review.', likes: 12 },
  { id: 'c2', author: 'Sophia Reyes', initials: 'SR', date: 'Apr 9, 2026', text: 'The point about credential-based attacks being the primary perimeter bypass is spot on. We saw this firsthand during a tabletop exercise last month. Most teams are still defending the wrong perimeter.', likes: 8 },
  { id: 'c3', author: 'Daniel Kim', initials: 'DK', date: 'Apr 9, 2026', text: 'Would love to see a follow-up on implementing zero-trust specifically for hybrid on-premise / cloud environments. The challenge there is the identity plane spanning both worlds.', likes: 5 },
];

// ── Category icon paths ──────────────────────────────────────

const catIcon: Record<string, string> = {
  Security:            'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  Engineering:         'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  'Cloud Infrastructure': 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z',
  'Data Engineering':  'M22 12h-4l-3 9L9 3l-3 9H2',
  Compliance:          'M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
};

// ── Main component ───────────────────────────────────────────

interface Props {
  post: BlogPost;
  related: BlogPost[];
  otherPosts: BlogPost[];
}

export function BlogArticle({ post, related, otherPosts }: Props) {
  const [liked, setLiked]     = useState(false);
  const [likes, setLikes]     = useState(post.likes);
  const [commentLikes, setCommentLikes] = useState<Record<string, number>>(
    Object.fromEntries(mockComments.map((c) => [c.id, c.likes]))
  );
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleLike = () => {
    setLiked((l) => !l);
    setLikes((n) => liked ? n - 1 : n + 1);
  };

  const handleCommentLike = (id: string) => {
    setCommentLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };
    if (shareUrls[platform]) window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const copyLink = () => {
    if (typeof navigator !== 'undefined') navigator.clipboard.writeText(window.location.href);
  };

  // Table of contents — extract h2 headings
  const toc = post.content.filter((b) => b.type === 'heading' && b.level === 2);

  return (
    <>
      {/* Article header full-width */}
      <div className="container" style={{ paddingTop: 'calc(var(--nav-height) + clamp(2rem, 4vw, 3.5rem))' }}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/resources">Resources</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog">Blog</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{post.category}</span>
        </nav>
      </div>

      {/* Body: article + sidebar */}
      <div className="container" style={{ paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
        <div className={styles.detailLayout}>

          {/* ── Article ── */}
          <article className={styles.article}>
            <header className={styles.articleHeader}>
              <span className={styles.articleCategory}>{post.category}</span>
              <h1 className={styles.articleTitle}>{post.title}</h1>
              <p className={styles.articleExcerpt}>{post.excerpt}</p>
              <div className={styles.articleHeaderMeta}>
                <div className={`${styles.avatar} ${styles.avatarLg}`}>{post.authorInitials}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    {post.author}
                  </div>
                  <div className={styles.metaText}>{post.authorRole}</div>
                </div>
                <span className={styles.metaDot} aria-hidden="true" />
                <span className={styles.metaText}>{post.date}</span>
                <span className={styles.metaDot} aria-hidden="true" />
                <span className={styles.metaText}>{post.readTime}</span>
                <span className={styles.metaDot} aria-hidden="true" />
                <span className={styles.metaText}>{post.views} views</span>
              </div>
              <div className={styles.articleTags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.articleTag}>{tag}</span>
                ))}
              </div>
            </header>

            {/* Hero image placeholder */}
            <div className={styles.articleHeroImage} aria-hidden="true">
              <div className={styles.articleHeroImagePattern} />
              <div className={styles.articleHeroImageIcon}>
                <svg viewBox="0 0 24 24">
                  <path d={catIcon[post.category] ?? catIcon.Engineering} />
                </svg>
              </div>
            </div>

            {/* Article body */}
            <div className={styles.articleBody}>
              {post.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}
            </div>

            {/* Actions: like, share */}
            <div className={styles.articleActions} aria-label="Article actions">
              <button
                className={`${styles.actionBtn} ${liked ? styles.actionBtnActive : ''}`}
                onClick={handleLike}
                aria-pressed={liked}
                aria-label={`${liked ? 'Unlike' : 'Like'} this article (${likes} likes)`}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                {likes}
              </button>

              <button className={styles.actionBtn} aria-label="Jump to comments">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                {mockComments.length} Comments
              </button>

              <div className={styles.shareGroup} role="group" aria-label="Share article">
                <button className={styles.shareBtn} onClick={() => handleShare('twitter')} aria-label="Share on Twitter">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a10.07 10.07 0 0 1-3.15 1.2A4.92 4.92 0 0 0 12 8.17v1.1A11.73 11.73 0 0 1 2.43 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </button>
                <button className={styles.shareBtn} onClick={() => handleShare('linkedin')} aria-label="Share on LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  </svg>
                </button>
                <button className={styles.shareBtn} onClick={copyLink} aria-label="Copy link">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Author card */}
            <div className={styles.authorCard}>
              <div className={`${styles.avatar} ${styles.avatarLg}`} aria-hidden="true">
                {post.authorInitials}
              </div>
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>{post.author}</p>
                <p className={styles.authorRole}>{post.authorRole}</p>
                <p className={styles.authorBio}>{post.authorBio}</p>
              </div>
            </div>

            {/* Comments */}
            <section className={styles.comments} aria-labelledby="comments-heading" id="comments">
              <h2 className={styles.commentsTitle} id="comments-heading">
                {mockComments.length} Comments
              </h2>

              {/* Comment form */}
              <div className={styles.commentForm} role="form" aria-label="Leave a comment">
                <p className={styles.commentFormTitle}>Leave a Comment</p>
                {submitted ? (
                  <p style={{ fontSize: '0.85rem', color: 'var(--brand-primary)' }}>
                    Thanks for your comment — it will appear after moderation.
                  </p>
                ) : (
                  <>
                    <div className={styles.commentRow}>
                      <input
                        className={styles.commentInput}
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-label="Your name"
                      />
                      <input
                        className={styles.commentInput}
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Your email"
                      />
                    </div>
                    <textarea
                      className={styles.commentTextarea}
                      placeholder="Share your thoughts..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      aria-label="Your comment"
                    />
                    <Button
                      variant="brand"
                      size="sm"
                      onClick={() => { if (name && message) setSubmitted(true); }}
                    >
                      Post Comment
                    </Button>
                  </>
                )}
              </div>

              {/* Comment list */}
              <div className={styles.commentList}>
                {mockComments.map((comment) => (
                  <div key={comment.id} className={styles.commentItem}>
                    <div className={styles.avatar} aria-hidden="true">{comment.initials}</div>
                    <div className={styles.commentBody}>
                      <div className={styles.commentHeader}>
                        <span className={styles.commentAuthor}>{comment.author}</span>
                        <span className={styles.commentDate}>{comment.date}</span>
                      </div>
                      <p className={styles.commentText}>{comment.text}</p>
                      <button
                        className={styles.commentLike}
                        onClick={() => handleCommentLike(comment.id)}
                        aria-label={`Like this comment (${commentLikes[comment.id]} likes)`}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                        </svg>
                        {commentLikes[comment.id]}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* ── Sidebar ── */}
          <aside className={styles.sidebar} aria-label="Article sidebar">

            {/* Table of contents */}
            {toc.length > 0 && (
              <div className={styles.sidebarCard}>
                <div className={styles.sidebarCardHeader}>Table of Contents</div>
                <nav aria-label="Table of contents">
                  <ul className={styles.tocList}>
                    {toc.map((block, i) => (
                      <li key={i}>
                        <a href="#" className={styles.tocLink}>{block.text}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}

            {/* More articles */}
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarCardHeader}>More Articles</div>
              {otherPosts.map((p, i) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className={styles.sidebarPostLink}>
                  <span className={styles.sidebarPostNum}>0{i + 1}</span>
                  <div>
                    <p className={styles.sidebarPostTitle}>{p.title}</p>
                    <p className={styles.sidebarPostMeta}>{p.date} · {p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarCardHeader}>Free Consultation</div>
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  30-minute strategy call with a NEXACORE solutions architect. No obligations.
                </p>
                <Button href="/contact#book-demo" variant="brand" size="sm">
                  Book a Call
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Related Posts ── */}
        {related.length > 0 && (
          <section aria-labelledby="related-heading" style={{ marginTop: 'clamp(3rem, 5vw, 5rem)' }}>
            <div className="section-eyebrow" style={{ marginBottom: '1.5rem' }}>
              <div className="section-eyebrow-line" />
              <span className="t-label">Related Articles</span>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className={styles.relatedCard}>
                  <span className={styles.relatedCategory}>{post.category}</span>
                  <p className={styles.relatedTitle}>{post.title}</p>
                  <p className={styles.relatedMeta}>{post.author} · {post.date} · {post.readTime}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
