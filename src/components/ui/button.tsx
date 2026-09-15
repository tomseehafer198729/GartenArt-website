import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-[16px] font-medium tracking-wide transition-[color,background-color,border-color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        gold:
          "border border-gold bg-transparent text-gold hover:bg-gold hover:text-forest",
        forest:
          "bg-forest text-cream hover:bg-forest-deep",
        outline:
          "border border-gold bg-transparent text-cream hover:bg-gold hover:text-forest",
        ink: "border border-line bg-transparent text-ink hover:border-gold",
        ghost: "bg-transparent text-cream hover:text-gold",
      },
      size: {
        sm: "h-10 min-h-10 px-3.5 rounded-sm",
        md: "h-11 min-h-11 px-5 rounded-sm",
        lg: "h-12 min-h-12 px-6 rounded-sm",
      },
    },
    defaultVariants: { variant: "forest", size: "md" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
