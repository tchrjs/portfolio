import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { cn } from "@/lib/utils";

interface PageContentProps {
  children?: ReactNode;
  className?: string;
}

export default function PageContent(props: PageContentProps) {
  const { children, className } = props;

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className={cn("", className)}>{children}</main>
      <Footer />
    </div>
  );
}
