import { cn } from "@/lib/utils";
import { CircleIcon } from "hugeicons-react";

// Type Definitions / Interfaces

type Variant = "default" | "browser";

interface FigureProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
}

// Component Definition

function Figure(props: FigureProps) {
  const { className, children, variant = "default", ...rest } = props;

  if (variant == "browser") {
    return (
      <figure className={cn("", className)} {...rest}>
        <div className="border md:border-2 p-2 md:p-4 rounded-md shadow">
          <div className="flex gap-1 px-2 pb-2 md:pb-4">
            <CircleIcon className="size-2 outline-border" />
            <CircleIcon className="size-2 outline-border" />
            <CircleIcon className="size-2 outline-border" />
          </div>
          <div className="border md:border-2 rounded-md flex contain-content">
            {children}
          </div>
        </div>
      </figure>
    );
  }

  return (
    <figure className={cn("", className)} {...rest}>
      {children}
    </figure>
  );
}

export default Figure;
