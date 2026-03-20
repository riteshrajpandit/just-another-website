/**
 * @file Button component
 * @description Reusable button component with multiple variants
 */

import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'brand' | 'white' | 'white-outline';
type ButtonSize = 'default' | 'sm';

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

function getButtonClasses(variant: ButtonVariant, size: ButtonSize, className?: string): string {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'sm' ? 'btn-sm' : '';

  return [baseClass, variantClass, sizeClass, className].filter(Boolean).join(' ');
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
