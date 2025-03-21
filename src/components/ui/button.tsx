import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

// Type Definitions / Interfaces

type Variant = "default" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: Variant;
}

// Constants / Default Values

const Variants: Record<Variant, string> = {
  default: "",
  icon: "",
};

// Component Definition

function Button(props: ButtonProps) {
  const { className, asChild, variant = "default", ...rest } = props;
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn("", Variants[variant], className)}
      {...rest}
    />
  );
}

export { Button };
