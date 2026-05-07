import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "font-mono h-12 w-full border border-[#1D2B42] bg-[#07111F]/86 px-4 text-sm text-[#E6F0FF] outline-none transition placeholder:text-[#63738C] focus:border-[#8EA2FF] focus:shadow-[0_0_0_3px_rgba(88,101,242,0.2)]",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
