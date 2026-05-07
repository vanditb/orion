import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-mono inline-flex h-12 items-center justify-center gap-2 border px-7 text-xs font-semibold uppercase tracking-[0.08em] transition disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "border-[#5865F2] bg-[#4F46E5] text-white shadow-[0_0_30px_rgba(88,101,242,0.38)] hover:bg-[#6674FF]",
        secondary:
          "border-[#1D2B42] bg-[#07111F]/70 text-[#8EA2FF] hover:border-[#5865F2] hover:text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  ),
);

Button.displayName = "Button";
