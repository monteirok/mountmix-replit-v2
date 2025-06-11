import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Base styles
      "relative overflow-hidden rounded-lg border transition-all duration-500 ease-out",
      "backdrop-blur-sm shadow-lg",
      // Glass effect
      "dark:border-white/5 dark:bg-gradient-to-br dark:from-white/3 dark:to-white/1",
      "border-black/5 bg-gradient-to-br from-black/3 to-black/1",
      // Hover effects
      "hover:shadow-xl hover:shadow-black/20",
      "dark:hover:shadow-xl dark:hover:shadow-black/20",
      "hover:border-black/10 dark:hover:border-white/10",
      // Liquid effect container
      "before:absolute before:inset-0 before:rounded-lg",
      "before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent",
      "before:opacity-0 before:transition-opacity before:duration-300",
      "hover:before:opacity-100",
      // Shine effect
      "after:absolute after:inset-0 after:rounded-lg",
      "after:bg-gradient-to-tr after:from-transparent after:via-white/10 after:to-transparent",
      "after:opacity-0 after:transition-opacity after:duration-700",
      "hover:after:opacity-100",
      // Content positioning
      "text-card-foreground",
      className
    )}
    {...props}
  >
    {/* Animated liquid effect */}
    <div className="absolute inset-0 opacity-15 pointer-events-none">
      <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-current/10 to-transparent rounded-full blur-lg animate-pulse" />
      <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-current/8 to-transparent rounded-full blur-md animate-pulse delay-700" />
    </div>
    
    {/* Content wrapper to ensure it stays above effects */}
    <div className="relative z-10">
      {props.children}
    </div>
    
    {/* Subtle shine effect */}
    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-shine" />
    </div>
  </div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
