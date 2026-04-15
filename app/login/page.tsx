/**
 * @file Login Page
 * @description Sign in / Register — split layout with brand panel
 */

import type { Metadata } from 'next';
import Link from 'next/link';
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
          <Link href="/" className={styles.helpLink}>Help</Link>
        </div>
        <div className={styles.formWrap}>
          <LoginPanel />
        </div>
      </div>
    </div>
  );
}
