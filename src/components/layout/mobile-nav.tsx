"use client";

import { Hamburger01Icon } from "hugeicons-react";
import Button from "../ui/button";
import useScrollThreshold from "@/hooks/use-scroll-threshold";

export default function MobileNav() {
  const pastThreshold = useScrollThreshold();

  return (
    <div className="flex md:hidden w-full">
      <div
        className={`container min-h-[48px] flex items-center w-full ${
          pastThreshold
            ? "background-blur border-b-1 bg-opacity-100"
            : "bg-opacity-0"
        } transition-all ease-in`}
      >
        <div className="flex flex-grow justify-end py-4">
          <Button variant="icon">
            <Hamburger01Icon />
          </Button>
        </div>
      </div>
    </div>
  );
}
