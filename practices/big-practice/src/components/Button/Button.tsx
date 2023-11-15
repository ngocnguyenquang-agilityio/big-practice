import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@lib/utils"

const buttonVariants = cva(
  "inline-flex items-center text-white justify-center text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 ring-offset-slate-950 focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-blue-600 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",
        outline:
          "border border-neutral-700 transition-colors",
        secondary:
          "bg-neutral-900 border-neutral-800 ring-1 ring-transparent transition duration-300 ease-in-out enabled:hover:scale-110 enabled:hover:ring-blue-600 relative z-10 disabled:cursor-not-allowed overflow-hidden disabled:before:absolute disabled:before:inset-x-0 disabled:before:-z-10 disabled:before:h-px disabled:before:-rotate-45 disabled:before:bg-neutral-300 disabled:before:transition-transform disabled:text-neutral-400 ring-neutral-700 disabled:before:bg-neutral-700",
        link: "underline-offset-4 hover:underline dark:text-neutral-100",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-full",
        sm: "h-9 px-3 rounded-full",
        lg: "h-11 px-8 rounded-full",
        xl: 'w-full h-11 rounded-full',
        icon: "h-11 w-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
