import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

// Type Definitions / Interfaces

type Variant = "default" | "link" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: Variant;
}

// Constants / Default Values

const Variants: Record<Variant, string> = {
  default: "",
  link: "text-foreground/35 hover:text-foreground transition-all",
  icon: "flex justify-between items-center gap-4 rounded-md px-4 py-2 h-fit text-nowrap border border-input hover:bg-accent hover:text-accent-foreground",
};

// Component Definition

function Button(props: ButtonProps) {
  const { className, asChild, variant = "default", ...rest } = props;
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        "bg-button text-button-foreground",
        Variants[variant],
        className
      )}
      {...rest}
    />
  );
}

export default Button;
