'use client';

import { cn } from '@/lib/utils';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-base-200 dark:bg-base-800">
      <SliderPrimitive.Range className="absolute h-full bg-base-900  dark:bg-base-400" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-base-900 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-base-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-base-100 dark:bg-base-400 dark:focus:ring-base-400 dark:focus:ring-offset-base-900" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
