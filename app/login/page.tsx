/**
 * @file Login Page
 * @description Sign in / Register — split layout with brand panel
 */

import type { Metadata } from 'next';
import { LoginBrandPanel } from '@/components/sections/LoginBrandPanel';
import { LoginPanel } from '@/components/sections/LoginPanel';
import styles from './login.module.css';

export const metadata: Metadata = {
  title: 'Sign In — NEXACORE',
  description: 'Sign in to the NEXACORE platform dashboard.',
};

export default function LoginPage() {
  return (
    <div className={styles.root}>
      <LoginBrandPanel />
      <div className={styles.right}>
        <div className={styles.rightControls}>
          <a href="/" className={styles.helpLink}>Help</a>
        </div>
        <div className={styles.formWrap}>
          <LoginPanel />
        </div>
      </div>
    </div>
  );
}
