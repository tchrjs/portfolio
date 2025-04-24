"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/button";
import { GithubIcon, Linkedin01Icon } from "hugeicons-react";
import { FaItchIo } from "react-icons/fa6";

export default function MainNav() {
  const pathname = usePathname();
  const currentPath = "/" + pathname.split("/")[1];

  return (
    <div className="container-wrapper background-blur">
      <div className="container hidden md:flex w-full">
        <div className="flex w-full py-4 h-[56px]">
          <div className="flex w-1/2 justify-start items-center gap-4">
            <PageLink currentPath={currentPath} href="/">
              <span>Home</span>
            </PageLink>
            <PageLink currentPath={currentPath} href="/projects">
              <span>Projects</span>
            </PageLink>
            <PageLink currentPath={currentPath} href="/blog">
              <span>Blog</span>
            </PageLink>
          </div>
          <div className="flex w-1/2 justify-end gap-4 items-center">
            <Link
              className="flex"
              target="_blank"
              href={"https://github.com/tchrjs"}
            >
              <Button variant="link" asChild>
                <GithubIcon />
              </Button>
            </Link>
            <Link
              className="flex"
              target="_blank"
              href={"https://tchrjs.itch.io/"}
            >
              <Button variant="link" asChild>
                <FaItchIo size={24} />
              </Button>
            </Link>
            <Link
              className="flex"
              target="_blank"
              href={"https://www.linkedin.com/in/christian-toribio/"}
            >
              <Button variant="link" asChild>
                <Linkedin01Icon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PageLinkProps {
  currentPath: string;
  href?: string;
  children?: React.ReactNode;
}

const PageLink = (props: PageLinkProps) => {
  const { href = "/", children, currentPath } = props;

  return (
    <Link className="flex" href={href}>
      <Button
        className={`${currentPath === href ? "text-foreground" : ""}`}
        variant="link"
        asChild
      >
        {children}
      </Button>
    </Link>
  );
};
