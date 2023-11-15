import * as React from 'react';
import { cn } from '@lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'w-full rounded-lg border border-neutral-800 bg-transparent px-4 py-2 text-sm text-white placeholder:text-neutral-400',
  {
    variants: {
      variant: {
        default: '',
        secondary: 'focus:outline-none focus:border-blue-600',
        error: 'focus:outline-none border-red-600 focus:border-red-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, asChild = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
