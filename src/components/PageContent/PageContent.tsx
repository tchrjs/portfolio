import NavBar from "../NavBar/NavBar";
import { PageContentProps } from "./types";

export default function PageContent(props: PageContentProps) {
  const { children } = props;

  return (
    <div className="relative flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <footer className="flex justify-center items-center bottom-0 py-4">
        <p className="text-sm text-center">
          Designed and developed by{" "}
          <span className="font-bold">Christian Toribio</span>
        </p>
      </footer>
    </div>
  );
}
