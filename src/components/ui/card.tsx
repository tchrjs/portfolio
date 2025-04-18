import { cn } from "@/lib/utils";

// Type Definitions / Interfaces

type Variant = "default" | "outline";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: Variant;
  children?: React.ReactNode;
}

// Constants / Default Values

const Variants: Record<Variant, string> = {
  default: "border shadow-md bg-card text-card-foreground",
  outline: "border shadow-md bg-background text-foreground",
};

// Component Definition

function Card(props: CardProps) {
  const { className, variant = "default", children, ...rest } = props;

  return (
    <div
      data-slot="card"
      className={`${cn("rounded-md p-4", Variants[variant], className)}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
