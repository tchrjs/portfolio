import { cn } from "@/lib/utils";

// Type Definitions / Interfaces

type Variant = "default" | "outline" | "button";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: Variant;
  children?: React.ReactNode;
}

// Constants / Default Values

const Variants: Record<Variant, string> = {
  default: "bg-card text-card-foreground",
  outline: "bg-background text-foreground",
  button:
    "bg-card text-card-foreground hover:bg-card-foreground/5 hover:border-card-foreground/25 transition",
};

// Component Definition

function Card(props: CardProps) {
  const { className, variant = "default", children, ...rest } = props;

  return (
    <div
      data-slot="card"
      className={`${cn(
        "rounded-md p-4 border shadow-md shadow-black",
        Variants[variant],
        className
      )}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
