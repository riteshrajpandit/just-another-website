/**
 * @file Header component
 * @description Main navigation header with mega menus and mobile support
 */

'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Logo, Button, ChevronDown, Sun, Moon } from '@/components/ui';
import { useTheme } from '@/hooks';
import { navLinks, mobileNavItems } from '@/data/navigation';
import { ProductsMegaMenu } from './ProductsMegaMenu';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import { ResourcesMegaMenu } from './ResourcesMegaMenu';
import { AboutMegaMenu } from './AboutMegaMenu';
import { MobileNav } from './MobileNav';
import styles from './Header.module.css';

export function Header() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? 'hidden' : '';
      return newState;
    });
  }, []);

  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false);
    document.body.style.overflow = '';
  }, []);

  const getMegaMenu = (linkId: string) => {
    switch (linkId) {
      case 'products':
        return <ProductsMegaMenu />;
      case 'services':
        return <ServicesMegaMenu />;
      case 'resources':
        return <ResourcesMegaMenu />;
      case 'about':
        return <AboutMegaMenu />;
      default:
        return null;
    }
  };

  return (
    <header>
      <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
        <div className={styles.navInner}>
          <Link href="/" className={styles.navLogo} aria-label="NEXACORE Home">
            <Logo />
          </Link>

          <ul className={styles.navLinks} role="list">
            {navLinks.map((link) => (
              <li key={link.id} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={styles.navLink}
                  aria-haspopup={link.hasSubmenu ? 'true' : undefined}
                  aria-expanded={link.hasSubmenu ? 'false' : undefined}
                >
                  {link.label}
                  {link.hasSubmenu && <ChevronDown size={12} />}
                </Link>
                {link.hasSubmenu && getMegaMenu(link.id)}
              </li>
            ))}
          </ul>

          <div className={styles.navActions}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />)}
            </button>
            <Button href="/contact#book-demo" variant="outline" size="sm">
              Book a Demo
            </Button>
            <Button href="/contact" variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          <button
            className={`${styles.hamburger} ${mobileNavOpen ? styles.hamburgerOpen : ''}`}
            onClick={toggleMobileNav}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileNavOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <MobileNav
        isOpen={mobileNavOpen}
        items={mobileNavItems}
        onClose={closeMobileNav}
      />
    </header>
  );
}
