/**
 * @file Theme hook
 * @description Custom hook for managing theme state with localStorage persistence
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { STORAGE_KEYS } from '@/lib/constants';
import type { Theme } from '@/types';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return (localStorage.getItem(STORAGE_KEYS.THEME) as Theme) || 'dark';
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Standard hydration pattern: mounted state tracks client-side render
    setMounted(true);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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