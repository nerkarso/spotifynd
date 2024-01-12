import { cn } from '@/lib/utils';
import * as React from 'react';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex h-20 w-full rounded-md border border-base-300 bg-transparent py-2 px-3 text-sm placeholder:text-base-400 focus:outline-none focus:ring-2 focus:ring-base-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-base-700 dark:text-base-50 dark:focus:ring-base-400 dark:focus:ring-offset-base-900',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
