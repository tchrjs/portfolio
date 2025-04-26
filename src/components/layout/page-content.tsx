import { Children, isValidElement, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

interface PageContentProps {
  children?: ReactNode;
  className?: string;
}

export function StaticChild({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default function PageContent(props: PageContentProps) {
  const { children, className } = props;
  let animationIndex = 0;

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className={cn("flex-grow", className)}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return null;

          const isStatic = child.type === StaticChild;

          if (isStatic) {
            return <div key={index}>{child}</div>;
          }

          const animatedChild = (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: animationIndex * 0.1,
                transition: "easeIn",
              }}
            >
              {child}
            </motion.div>
          );

          animationIndex++; // only increment if it's animated
          return animatedChild;
        })}
      </main>
      <Footer />
    </div>
  );
}
