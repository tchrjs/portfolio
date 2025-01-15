import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { PageContentProps } from "./types";

export default function PageContent(props: PageContentProps) {
  const { children } = props;

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow mt-12">{children}</main>
      <Footer />
    </div>
  );
}
