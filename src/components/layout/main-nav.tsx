"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/button";
import { GithubIcon, Linkedin01Icon } from "hugeicons-react";

export default function MainNav() {
  const currentPath = usePathname();

  return (
    <div className="hidden md:flex w-full">
      <div className="flex w-full p-4 h-[56px] background-blur">
        <div className="flex w-1/3"></div>
        <div className="flex w-1/3 justify-center items-center gap-4">
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
        <div className="flex w-1/3 justify-end gap-4">
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
            href={"https://www.linkedin.com/in/christian-toribio/"}
          >
            <Button variant="link" asChild>
              <Linkedin01Icon />
            </Button>
          </Link>
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
