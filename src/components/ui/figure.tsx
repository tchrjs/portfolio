import { cn } from "@/lib/utils";
import { CircleIcon } from "hugeicons-react";

// Type Definitions / Interfaces

type Variant = "default" | "browser" | "phone";

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
            <CircleIcon className="size-2 stroke-3 md:stroke-4 text-border" />
            <CircleIcon className="size-2 stroke-3 md:stroke-4 text-border" />
            <CircleIcon className="size-2 stroke-3 md:stroke-4 text-border" />
          </div>
          <div className="border md:border-2 flex contain-content bg-black">
            {children}
          </div>
        </div>
      </figure>
    );
  }

  if (variant == "phone") {
    return (
      <figure className={cn("", className)} {...rest}>
        <div className="border md:border-2 p-2 md:p-4 rounded-3xl shadow">
          <div className="border md:border-2 flex items-center justify-center rounded-2xl contain-content">
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
