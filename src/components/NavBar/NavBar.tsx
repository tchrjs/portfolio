import { Hamburger01Icon } from "hugeicons-react";

export default function NavBar() {
  return (
    <nav className="overflow-hidden fixed top-0 w-full px-4 h-12 z-10 flex items-center justify-center border-b-[1px]">
      <div className="w-1/3 flex justify-start"></div>
      <div className="w-1/3 flex justify-center">Menu</div>
      <div className="w-1/3 flex justify-end">
        <Hamburger01Icon />
      </div>
      <div></div>
    </nav>
  );
}
