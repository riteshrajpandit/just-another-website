/**
 * @file Blog Detail Page
 * @description /blog/[slug] — full article with TOC, actions, comments, related posts
 */

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Header, Footer, ScrollRail } from '@/components/layout';
import { getPostBySlug, getRelatedPosts, getAllSlugs, blogPosts } from '@/data/blog';
import { BlogArticle } from './BlogArticle';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found — NEXACORE' };
  return {
    title: `${post.title} — NEXACORE Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.relatedIds).slice(0, 3);
  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 5);

  return (
    <>
      <ScrollRail />
      <Header />
      <main id="main-content">
        <BlogArticle post={post} related={related} otherPosts={otherPosts} />
      </main>
      <Footer />
    </>
  );
}
