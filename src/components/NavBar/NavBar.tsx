import { Hamburger01Icon } from "hugeicons-react";

export default function NavBar() {
  return (
    <nav className="bg-background fixed top-0 w-full z-10">
      <div className="px-4 h-12 flex items-center justify-center">
        <div className="w-1/2 flex justify-start"></div>
        <div className="w-1/2 flex justify-end">
          <Hamburger01Icon />
        </div>
      </div>
    </nav>
  );
}
