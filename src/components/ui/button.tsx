import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-base-400 focus:ring-offset-2 dark:hover:bg-base-800 dark:hover:text-base-100 disabled:opacity-50 dark:focus:ring-base-400 disabled:pointer-events-none dark:focus:ring-offset-base-900 data-[state=open]:bg-base-100 dark:data-[state=open]:bg-base-800',
  {
    variants: {
      variant: {
        default: 'bg-base-900 text-white hover:bg-base-700 dark:bg-base-50 dark:text-base-900',
        destructive: 'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'bg-transparent border border-base-200 hover:bg-base-100 dark:border-base-700 dark:text-base-100',
        subtle: 'bg-base-100 text-base-900 hover:bg-base-200 dark:bg-base-700 dark:text-base-100',
        ghost:
          'bg-transparent hover:bg-base-100 dark:hover:bg-base-800 dark:text-base-100 dark:hover:text-base-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent underline-offset-4 hover:underline text-base-900 dark:text-base-100 hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
