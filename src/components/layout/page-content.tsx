import { Children, isValidElement, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

interface PageContentProps {
  children?: ReactNode;
  className?: string;
}

export default function PageContent(props: PageContentProps) {
  const { children, className } = props;

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className={cn("", className)}>
        {Children.map(children, (child, index) =>
          isValidElement(child) ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.1,
                transition: "easeIn",
              }}
            >
              {child}
            </motion.div>
          ) : null
        )}
      </main>
      <Footer />
    </div>
  );
}
