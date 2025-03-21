import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

// Type Definitions / Interfaces

type Variant = "default" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: Variant;
}

// Constants / Default Values

const Variants: Record<Variant, string> = {
  default: "",
  icon: "s",
};

// Component Definition

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, variant = "default", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn("", Variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
