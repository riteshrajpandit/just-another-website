/**
 * @file Button component
 * @description Reusable button component with multiple variants
 */

import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
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
    return (
      <a href={href} className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, 'href'>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
