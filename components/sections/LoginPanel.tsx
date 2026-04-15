/**
 * @file Login Panel
 * @description Sign in / Register form with MFA flow and SSO
 */

'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import styles from './LoginPanel.module.css';

type AuthTab = 'signin' | 'register';
type SignInStep = 'form' | 'mfa' | 'success';

function PasswordInput({
  id,
  label,
  value,
  onChange,
  autoComplete,
  showForgot,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  showForgot?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.formGroup}>
      <div className={styles.labelRow}>
        <label htmlFor={id}>{label}</label>
        {showForgot && (
          <button type="button" className={styles.forgotLink} tabIndex={0}>
            Forgot password?
          </button>
        )}
      </div>
      <div className={styles.inputWrap}>
        <svg className={styles.inputIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 11H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M8 11V7a4 4 0 1 1 8 0v4" />
        </svg>
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          required
        />
        <button
          type="button"
          className={styles.eyeBtn}
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {visible
              ? <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24 M1 1l22 22" />
              : <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            }
          </svg>
        </button>
      </div>
    </div>
  );
}

function SignInForm({ onMFA, onSuccess }: { onMFA: () => void; onSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth flow → MFA
    setTimeout(() => { setLoading(false); onMFA(); }, 1000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGroup}>
        <label htmlFor="signin-email">Work Email</label>
        <div className={styles.inputWrap}>
          <svg className={styles.inputIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
          </svg>
          <input
            id="signin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <PasswordInput
        id="signin-password"
        label="Password"
        value={password}
        onChange={setPassword}
        autoComplete="current-password"
        showForgot
      />
      <label className={styles.checkLabel}>
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <span>Remember this device</span>
      </label>
      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? (
          <svg className={styles.spinner} viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="31.4" />
          </svg>
        ) : 'Sign In to Dashboard'}
      </button>
    </form>
  );
}

function MFAForm({ onSuccess }: { onSuccess: () => void }) {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const [digits, setDigits] = useState(['', '', '', '', '', '']);

  const handleDigit = (i: number, val: string) => {
    const d = [...digits];
    d[i] = val.slice(-1);
    setDigits(d);
    if (val && i < 5) inputs.current[i + 1]?.focus();
    if (d.every(Boolean)) setTimeout(onSuccess, 400);
  };

  return (
    <div className={styles.mfaWrap}>
      <div className={styles.mfaIcon} aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5" />
        </svg>
      </div>
      <h3 className={styles.mfaTitle}>Two-Factor Verification</h3>
      <p className={styles.mfaDesc}>Enter the 6-digit code from your authenticator app.</p>
      <div className={styles.otpRow}>
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => { inputs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={d}
            onChange={(e) => handleDigit(i, e.target.value)}
            className={styles.otpInput}
            aria-label={`OTP digit ${i + 1}`}
          />
        ))}
      </div>
      <button className={styles.submitBtn} onClick={onSuccess}>Verify</button>
      <button type="button" className={styles.resendLink}>Resend code</button>
    </div>
  );
}

function SuccessState() {
  return (
    <div className={styles.successState}>
      <div className={styles.successIcon} aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3" />
        </svg>
      </div>
      <h3 className={styles.successTitle}>Access Granted</h3>
      <p className={styles.successDesc}>Redirecting you to the dashboard…</p>
      <a href="/dashboard" className={styles.submitBtn} style={{ textAlign: 'center', display: 'block' }}>
        Go to Dashboard
      </a>
    </div>
  );
}

function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const strength = Math.min(
    (password.length >= 8 ? 1 : 0) +
    (/[A-Z]/.test(password) ? 1 : 0) +
    (/\d/.test(password) ? 1 : 0) +
    (/[^A-Za-z0-9]/.test(password) ? 1 : 0),
    4
  );

  if (submitted) {
    return (
      <div className={styles.successState}>
        <div className={styles.successIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3" /></svg>
        </div>
        <h3 className={styles.successTitle}>Request Submitted</h3>
        <p className={styles.successDesc}>An admin will review and activate your workspace within one business day.</p>
        <Link href="/" className={styles.backLink}>← Back to NEXACORE</Link>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} noValidate>
      <div className={styles.nameRow}>
        <div className={styles.formGroup}>
          <label htmlFor="reg-first">First Name</label>
          <input id="reg-first" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="reg-last">Last Name</label>
          <input id="reg-last" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="reg-email">Work Email</label>
        <div className={styles.inputWrap}>
          <svg className={styles.inputIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
          </svg>
          <input id="reg-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="reg-org">Organisation Name</label>
        <input id="reg-org" type="text" value={org} onChange={(e) => setOrg(e.target.value)} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="reg-pass">Create Password</label>
        <div className={styles.inputWrap}>
          <svg className={styles.inputIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 11H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z M8 11V7a4 4 0 1 1 8 0v4" />
          </svg>
          <input id="reg-pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className={styles.strengthBar} aria-label={`Password strength: ${strength} of 4`}>
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className={`${styles.strengthSegment} ${strength >= n ? styles[`strength${strength}`] : ''}`}
            />
          ))}
        </div>
      </div>
      <button type="submit" className={styles.submitBtn}>Create Account</button>
      <p className={styles.termsNote}>
        By creating an account you agree to our{' '}
        <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
      </p>
    </form>
  );
}

export function LoginPanel() {
  const [tab, setTab] = useState<AuthTab>('signin');
  const [step, setStep] = useState<SignInStep>('form');

  return (
    <div className={styles.formCard}>
      {/* Auth Tabs */}
      <div className={styles.tabs} role="tablist">
        {(['signin', 'register'] as AuthTab[]).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`}
            onClick={() => { setTab(t); setStep('form'); }}
          >
            <span className={styles.tabDot} aria-hidden="true" />
            {t === 'signin' ? 'Sign In' : 'Register'}
          </button>
        ))}
      </div>

      {tab === 'signin' ? (
        <div role="tabpanel">
          <h2 className={styles.formHeading}>
            {step === 'success' ? 'Access Granted' : 'Welcome Back.'}
          </h2>
          {step === 'form' && <SignInForm onMFA={() => setStep('mfa')} onSuccess={() => setStep('success')} />}
          {step === 'mfa' && <MFAForm onSuccess={() => setStep('success')} />}
          {step === 'success' && <SuccessState />}

          {step === 'form' && (
            <>
              <div className={styles.divider}><span>or continue with</span></div>
              <div className={styles.ssoGrid}>
                <button className={styles.ssoBtn}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                  Microsoft
                </button>
                <button className={styles.ssoBtn}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></svg>
                  Google
                </button>
              </div>
              <p className={styles.switchNote}>
                No account yet?{' '}
                <button type="button" className={styles.switchLink} onClick={() => setTab('register')}>
                  Create one
                </button>
              </p>
            </>
          )}
        </div>
      ) : (
        <div role="tabpanel">
          <h2 className={styles.formHeading}>Create Your Workspace.</h2>
          <RegisterForm />
          <p className={styles.switchNote}>
            Already have an account?{' '}
            <button type="button" className={styles.switchLink} onClick={() => setTab('signin')}>
              Sign in
            </button>
          </p>
        </div>
      )}

      {/* Session strip */}
      <div className={styles.sessionStrip}>
        <span>256-bit TLS</span>
        <span>End-to-end encrypted</span>
        <span>Session expires in 8 hrs</span>
      </div>
    </div>
  );
}
