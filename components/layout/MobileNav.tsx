/**
 * @file Mobile Navigation
 */

'use client';

import { useState, useCallback } from 'react';
import { Button, ChevronDown } from '@/components/ui';
import styles from './Header.module.css';

interface MobileNavItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly submenu: readonly string[] | null;
}

interface MobileNavProps {
  isOpen: boolean;
  items: readonly MobileNavItem[];
  onClose: () => void;
}

export function MobileNav({ isOpen, items, onClose }: MobileNavProps) {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());

  const toggleSubmenu = useCallback((id: string) => {
    setOpenMenus((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  return (
    <div
      className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}
      role="navigation"
      aria-label="Mobile navigation"
    >
      <ul role="list">
        {items.map((item) => (
          <li key={item.id} className={styles.mobileNavItem}>
            {item.submenu ? (
              <>
                <div
                  className={`${styles.mobileNavLink} ${openMenus.has(item.id) ? styles.mobileNavLinkOpen : ''}`}
                  onClick={() => toggleSubmenu(item.id)}
                >
                  {item.label}
                  <ChevronDown size={16} />
                </div>
                <div
                  id={`mob-${item.id}`}
                  className={`${styles.mobileSubmenu} ${openMenus.has(item.id) ? styles.mobileSubmenuOpen : ''}`}
                >
                  {item.submenu.map((subItem) => (
                    <div key={subItem} className={styles.mobileSubItem}>
                      {subItem}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <a href={item.href} className={styles.mobileNavLink} onClick={onClose}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Button
          href="/contact"
          variant="primary"
          onClick={onClose}
          style={{ justifyContent: 'center', textAlign: 'center' }}
        >
          Get Started
        </Button>
        <Button
          href="/contact#book-demo"
          variant="outline"
          onClick={onClose}
          style={{ justifyContent: 'center', textAlign: 'center' }}
        >
          Book a Demo
        </Button>
      </div>
    </div>
  );
}
