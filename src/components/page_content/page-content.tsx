import { ReactNode } from "react";
import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";

interface PageContentProps {
  children?: ReactNode;
  className?: string;
}

export default function PageContent(props: PageContentProps) {
  const { children } = props;

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
