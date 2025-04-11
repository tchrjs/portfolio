"use client";

import { Cancel01Icon, Hamburger01Icon } from "hugeicons-react";
import Button from "../ui/button";
import useScrollThreshold from "@/hooks/use-scroll-threshold";
import { Dialog, VisuallyHidden } from "radix-ui";

export default function MobileNav() {
  const pastThreshold = useScrollThreshold(10);

  return (
    <div
      className={`container-wrapper ${
        pastThreshold
          ? "background-blur border-b-1 bg-opacity-100"
          : "bg-opacity-0"
      } transition-all ease-in`}
    >
      <div className="container flex md:hidden w-full">
        <div className="min-h-[48px] flex items-center w-full">
          <div className="flex flex-grow justify-end py-4">
            <NavMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavMenu() {
  return (
    <Dialog.Root defaultOpen={false}>
      <Dialog.Trigger asChild>
        <Button variant="icon">
          <Hamburger01Icon />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className="fixed w-full h-full bg-card z-10">
          <VisuallyHidden.Root>
            <Dialog.Title />
            <Dialog.Description />
          </VisuallyHidden.Root>
          <div className="container-wrapper">
            <div className="container">
              <div className="flex flex-grow justify-end py-4">
                <Dialog.Close asChild>
                  <Button variant="icon">
                    <Cancel01Icon />
                  </Button>
                </Dialog.Close>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
