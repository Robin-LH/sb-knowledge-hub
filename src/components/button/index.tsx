'use client';

import { cn } from '@/utils/class-merge';
import type { IButtonProps } from './interface';

export default function Button({
  children,
  className,
  size = 'md',
  variant = 'primary',
  disabled = false,
  ...rest
}: IButtonProps) {
  return (
    <button
      className={cn(
        {
          'py-3 px-5 text-lg': size === 'lg',
          'py-2 px-4': size === 'md',
          'py-1.5 px-3 text-sm': size === 'sm',
        },
        {
          'bg-brand text-white hover:bg-brand-soft': variant === 'primary',
          'bg-brand-light text-white hover:bg-brand-accent': variant === 'secondary',
          'bg-transparent border border-fd-border text-fd-foreground hover:bg-fd-accent':
            variant === 'transparent',
        },
        disabled ? 'disabled:cursor-not-allowed opacity-50' : 'hover:shadow-md cursor-pointer',
        'flex items-center gap-2 rounded-lg transition-all',
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.displayName = 'Button';
