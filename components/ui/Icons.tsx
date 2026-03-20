/**
 * @file SVG Icon Components
 * @description Centralized icon library for consistent usage across the application
 */

import { type SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const defaultProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function ChevronDown({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ChevronUp({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

export function ChevronLeft({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function ChevronRight({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function Sun({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

export function Moon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function ArrowRight({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function Workflow({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="0" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

export function Clock({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function Shield({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function Activity({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

export function Box({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  );
}

export function Monitor({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <rect x="2" y="3" width="20" height="14" rx="0" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

export function Cloud({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <rect x="2" y="7" width="20" height="14" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

export function LinkedIn({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Twitter({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

export function GitHub({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function YouTube({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

export function File({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

export function Info({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export function MessageSquare({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

// Icon lookup by name
export const iconMap = {
  workflow: Workflow,
  clock: Clock,
  shield: Shield,
  activity: Activity,
  box: Box,
  monitor: Monitor,
  cloud: Cloud,
  linkedin: LinkedIn,
  twitter: Twitter,
  github: GitHub,
  youtube: YouTube,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  sun: Sun,
  moon: Moon,
  arrowRight: ArrowRight,
  file: File,
  info: Info,
  messageSquare: MessageSquare,
} as const;

export type IconName = keyof typeof iconMap;

export function Icon({
  name,
  size = 24,
  ...props
}: { name: IconName } & IconProps) {
  const IconComponent = iconMap[name];
  return <IconComponent size={size} {...props} />;
}
