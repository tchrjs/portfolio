// Type Definitions / Interfaces

import { cn } from "@/lib/utils";

type Variant = "default";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
}

// Constants / Default Values

const Variants: Record<Variant, string> = {
  default:
    "border border-border rounded bg-card-background text-card-foreground px-4 py-1 shadow-3xl transition-colors",
};

export default function Button(props: ButtonProps) {
  const { className, variant = "default", children, ...rest } = props;

  return (
    <button className={`${cn(Variants[variant], className)}`} {...rest}>
      {children}
    </button>
  );
}
