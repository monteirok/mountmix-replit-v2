import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, type HTMLMotionProps } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  `relative overflow-hidden rounded-full border transition-all duration-500 ease-out
  backdrop-blur-sm shadow-lg font-medium tracking-wide
  before:absolute before:inset-0 before:rounded-full 
  before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent
  before:opacity-0 before:transition-opacity before:duration-300
  after:absolute after:inset-0 after:rounded-full
  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  inline-flex items-center justify-center gap-2 whitespace-nowrap
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
  [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        default: `
          dark:border-white/5 dark:bg-gradient-to-br dark:from-white/3 dark:to-white/1
          dark:text-white dark:hover:shadow-xl dark:hover:shadow-black/20 dark:hover:before:opacity-100
          dark:hover:bg-gradient-to-br dark:hover:from-white/5 dark:hover:to-white/2
          dark:hover:border-white/10
          border-black/5 bg-gradient-to-br from-black/3 to-black/1
          text-black hover:shadow-xl hover:shadow-black/20 hover:before:opacity-100
          hover:bg-gradient-to-br hover:from-black/5 hover:to-black/2
          hover:border-black/10
        `,
        primary: `
          dark:border-mountain-gold/10 dark:bg-gradient-to-br dark:from-mountain-gold/5 dark:to-mountain-gold/2
          dark:text-mountain-gold dark:hover:shadow-xl dark:hover:shadow-mountain-gold/20 dark:hover:before:opacity-100
          dark:hover:bg-gradient-to-br dark:hover:from-mountain-gold/8 dark:hover:to-mountain-gold/4
          dark:hover:border-mountain-gold/20
          dark:after:bg-gradient-to-tr dark:after:from-mountain-gold/2 dark:after:via-white/2 dark:after:to-mountain-gold/3
          border-mountain-gold/10 bg-gradient-to-br from-mountain-gold/5 to-mountain-gold/2
          text-mountain-gold hover:shadow-xl hover:shadow-mountain-gold/20 hover:before:opacity-100
          hover:bg-gradient-to-br hover:from-mountain-gold/8 hover:to-mountain-gold/4
          hover:border-mountain-gold/20
          after:bg-gradient-to-tr after:from-mountain-gold/2 after:via-black/2 after:to-mountain-gold/3
        `,
        glow: `
          dark:border-cyan-400/10 dark:bg-gradient-to-br dark:from-cyan-400/3 dark:to-purple-400/1
          dark:text-white dark:hover:shadow-xl dark:hover:shadow-cyan-500/30 dark:hover:before:opacity-100
          dark:hover:border-cyan-400/20 dark:hover:bg-gradient-to-br dark:hover:from-cyan-400/5 dark:hover:to-purple-400/2
          dark:after:bg-gradient-to-tr dark:after:from-cyan-400/2 dark:after:via-white/2 dark:after:to-purple-400/2
          border-cyan-400/10 bg-gradient-to-br from-cyan-400/3 to-purple-400/1
          text-cyan-900 hover:shadow-xl hover:shadow-cyan-500/30 hover:before:opacity-100
          hover:border-cyan-400/20 hover:bg-gradient-to-br hover:from-cyan-400/5 hover:to-purple-400/2
          after:bg-gradient-to-tr after:from-cyan-400/2 after:via-black/2 after:to-purple-400/2
        `,
        outline: `
          dark:border-white/10 dark:bg-transparent dark:text-white
          dark:hover:shadow-xl dark:hover:shadow-black/20 dark:hover:before:opacity-100
          dark:hover:bg-gradient-to-br dark:hover:from-white/3 dark:hover:to-white/1
          dark:hover:border-white/20
          border-black/10 bg-transparent text-black
          hover:shadow-xl hover:shadow-black/20 hover:before:opacity-100
          hover:bg-gradient-to-br hover:from-black/3 hover:to-black/1
          hover:border-black/20
        `,
        ghost: `
          dark:border-transparent dark:bg-transparent dark:text-white
          dark:hover:bg-white/3 dark:hover:before:opacity-100
          border-transparent bg-transparent text-black
          hover:bg-black/3 hover:before:opacity-100
        `,
        link: `
          dark:text-white dark:hover:text-white/80 dark:underline-offset-4 dark:hover:underline
          text-black hover:text-black/80 underline-offset-4 hover:underline
          border-transparent bg-transparent shadow-none hover:shadow-none
        `,
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonBaseProps = {
  children: React.ReactNode
  className?: string
  variant?: VariantProps<typeof buttonVariants>["variant"]
  size?: VariantProps<typeof buttonVariants>["size"]
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

type MotionButtonProps = Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps>
type SlotButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>

export type ButtonProps = ButtonBaseProps & {
  asChild?: boolean
} & (MotionButtonProps | SlotButtonProps)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const buttonContent = (
      <>
        {/* Animated liquid effect */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-current/10 to-transparent rounded-full blur-lg animate-pulse" />
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-current/8 to-transparent rounded-full blur-md animate-pulse delay-700" />
        </div>
        
        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-current/10 to-transparent transform -skew-x-12 -translate-x-full animate-shine" />
        </div>
      </>
    )

    if (asChild) {
      const slotProps = props as SlotButtonProps
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref as React.Ref<HTMLElement>}
          {...slotProps}
        >
          {buttonContent}
        </Slot>
      )
    }

    const motionProps = props as MotionButtonProps
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={!props.disabled ? { scale: 1.05 } : undefined}
        whileTap={!props.disabled ? { scale: 0.98 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...motionProps}
      >
        {buttonContent}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
