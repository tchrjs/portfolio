"use client";

import { Cancel01Icon, Hamburger01Icon } from "hugeicons-react";
import Button from "../ui/button";
import { Dialog, VisuallyHidden } from "radix-ui";
import Link from "next/link";
import Separator from "../ui/separator";
import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  return (
    <div className="background-blur border-b-1">
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
          <div className="flex flex-col w-full h-full">
            <div className="flex justify-end py-4 px-6 border-b-1">
              <Dialog.Close asChild>
                <Button variant="icon">
                  <Cancel01Icon />
                </Button>
              </Dialog.Close>
            </div>
            <div className="flex flex-col justify-center w-full px-8">
              <NavLink href="/" label="Home" delay={0} />
              <NavLink href="/projects" label="Projects" delay={0.1} />
              <NavLink href="/blog" label="Blog" delay={0.2} />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  delay?: number;
}

function NavLink({ href, label, delay = 0 }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        delay,
        ease: "easeIn",
      }}
    >
      {isActive ? (
        <Dialog.Close asChild>
          <Button
            className="text-muted-foreground hover:text-muted-foreground text-start hover:bg-background/50 px-2 py-3 w-full"
            variant="link"
          >
            {label}
          </Button>
        </Dialog.Close>
      ) : (
        <Button
          className="text-muted-foreground hover:text-muted-foreground text-start hover:bg-background/50 px-2 py-3 w-full"
          variant="link"
          asChild
        >
          <Link href={href}>{label}</Link>
        </Button>
      )}
      <Separator />
    </motion.div>
  );
}
