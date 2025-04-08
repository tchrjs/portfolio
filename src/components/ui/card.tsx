import { cn } from "@/lib/utils";

// Type Definitions / Interfaces

type Variant = "default";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: Variant;
  children?: React.ReactNode;
}

// Constants / Default Values

const Variants: Record<Variant, string> = {
  default: "bg-card text-card-foreground border-none",
};

// Component Definition

function Card(props: CardProps) {
  const { className, variant = "default", children, ...rest } = props;

  return (
    <div
      className={`${cn("rounded-md p-4", Variants[variant], className)}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
