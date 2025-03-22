"use client";

import useScrollThreshold from "@/hooks/use-scroll-threshold";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  const pastThreshold = useScrollThreshold();

  return (
    <header className="fixed top-0 w-full z-10">
      <div className="container-wrapper">
        <div
          className={`container min-h-[48px] flex items-center w-full ${
            pastThreshold
              ? "bg-background/95 border-b-1 backdrop-blur-sm bg-opacity-100"
              : "bg-opacity-0"
          } transition-all ease-in`}
        >
          <MainNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
