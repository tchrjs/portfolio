import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface PageContentProps {
  children?: ReactNode;
  className?: string;
}

export default function PageContent(props: PageContentProps) {
  const { children } = props;

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
