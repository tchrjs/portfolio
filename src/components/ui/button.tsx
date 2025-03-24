import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

// Type Definitions / Interfaces

type Variant = "default" | "link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: Variant;
}

// Constants / Default Values

const Variants: Record<Variant, string> = {
  default: "",
  link: "text-foreground/35 hover:text-foreground transition-all",
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

export default Button;
