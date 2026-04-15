/**
 * @file Root Layout
 * @description Application root layout with fonts and metadata
 */

import type { Metadata, Viewport } from 'next';
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import { CookieConsentBanner } from '@/components/layout';
import './globals.css';

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'NEXACORE — Enterprise Technology Solutions',
  description:
    'NEXACORE delivers enterprise-grade software infrastructure, cloud architecture, and digital transformation services for forward-thinking organizations.',
  keywords: [
    'enterprise technology',
    'cloud architecture',
    'digital transformation',
    'workflow automation',
    'data synchronization',
    'cybersecurity',
    'DevSecOps',
  ],
  authors: [{ name: 'NEXACORE' }],
  openGraph: {
    title: 'NEXACORE — Enterprise Technology Solutions',
    description:
      'NEXACORE delivers enterprise-grade software infrastructure, cloud architecture, and digital transformation services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXACORE — Enterprise Technology Solutions',
    description:
      'Enterprise-grade software infrastructure, cloud architecture, and digital transformation services.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f4f0' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('nexacore-theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
