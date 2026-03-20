/**
 * @file Theme hook
 * @description Custom hook for managing theme state with localStorage persistence
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { STORAGE_KEYS } from '@/lib/constants';
import type { Theme } from '@/types';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEYS.THEME) as Theme | null;
    if (stored) {
      setThemeState(stored);
      document.documentElement.setAttribute('data-theme', stored);
    }
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }, [theme, setTheme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    mounted,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };
}
