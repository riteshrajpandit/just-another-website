/**
 * @file Button component
 * @description Reusable button component with multiple variants
 */

import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'brand' | 'white' | 'white-outline';
type ButtonSize = 'default' | 'sm' | 'full';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantMap: Record<ButtonVariant, string> = {
  primary: styles.btnPrimary,
  outline: styles.btnOutline,
  ghost: styles.btnGhost,
  brand: styles.btnBrand,
  white: styles.btnWhite,
  'white-outline': styles.btnWhiteOutline,
};

const sizeMap: Record<ButtonSize, string> = {
  default: '',
  sm: styles.btnSm,
  full: styles.btnFull,
};

function getButtonClasses(variant: ButtonVariant, size: ButtonSize, className?: string): string {
  const classes = [
    styles.btn,
    variantMap[variant],
    sizeMap[size],
    className,
  ].filter(Boolean).join(' ');

  return classes;
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'default', children, className, ...rest } = props;
  const classes = getButtonClasses(variant, size, className);

  if ('href' in rest && rest.href) {
    const { href, ...linkProps } = rest as ButtonAsLink;
    // External links: plain <a> with security attributes to prevent reverse tabnapping
    const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');
    if (isExternal) {
      return (
        <a href={href} className={classes} rel="noopener noreferrer" target="_blank" {...linkProps}>
          {children}
        </a>
      );
    }
    // Internal links: Next.js <Link> for client-side navigation
    return (
      <Link href={href} className={classes} {...(linkProps as Omit<React.ComponentProps<typeof Link>, 'href' | 'className'>)}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, 'href'>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
