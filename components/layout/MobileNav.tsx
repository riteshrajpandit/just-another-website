/**
 * @file Mobile Navigation
 */

'use client';

import { useState, useCallback } from 'react';
import { Button, ChevronDown } from '@/components/ui';

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
      id="mobile-nav"
      className={isOpen ? 'open' : ''}
      role="navigation"
      aria-label="Mobile navigation"
    >
      <ul role="list">
        {items.map((item) => (
          <li key={item.id} className="mobile-nav-item">
            {item.submenu ? (
              <>
                <div
                  className={`mobile-nav-link ${openMenus.has(item.id) ? 'open' : ''}`}
                  onClick={() => toggleSubmenu(item.id)}
                >
                  {item.label}
                  <ChevronDown size={16} />
                </div>
                <div
                  id={`mob-${item.id}`}
                  className={`mobile-submenu ${openMenus.has(item.id) ? 'open' : ''}`}
                >
                  {item.submenu.map((subItem) => (
                    <div key={subItem} className="mobile-sub-item">
                      {subItem}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <a href={item.href} className="mobile-nav-link" onClick={onClose}>
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
