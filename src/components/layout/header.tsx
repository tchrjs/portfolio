"use client";

import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="w-full z-10 md:border-b-1">
      <>
        <MobileNav />
        <MainNav />
      </>
    </header>
  );
}
