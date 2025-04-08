"use client";

import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-10 md:border-b-1">
      <div className="container-wrapper">
        <MobileNav />
        <MainNav />
      </div>
    </header>
  );
}
