import { cn } from "@/lib/utils";

// Type Definitions / Interfaces

type Variant = "default" | "borderless";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

// Constants / Default Values

const Variants: Record<Variant, string> = {
  default:
    "border border rounded-md bg-card-background text-card-foreground p-4 shadow-md",
  borderless: "",
};

// Component Definition

export default function Card(props: CardProps) {
  const { className, variant = "default", children, ...rest } = props;

  return (
    <div
      data-slot="card"
      className={`${cn(Variants[variant], className)}`}
      {...rest}
    >
      {children}
    </div>
  );
}
