"use client";

import { Hamburger01Icon } from "hugeicons-react";
import { Button } from "../ui/button";

export default function MobileNav() {
  return (
    <div className="flex md:hidden w-full">
      <div className="flex flex-grow justify-end">
        <Button variant="icon">
          <Hamburger01Icon />
        </Button>
      </div>
    </div>
  );
}
