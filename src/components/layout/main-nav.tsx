"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const currentPath = usePathname();

  return (
    <div className="hidden md:flex w-full">
      <div className="flex w-full py-4 border-b-1 background-blur">
        <div className="flex flex-grow justify-center items-center gap-4">
          <PageLink currentPath={currentPath} href="/">
            Home
          </PageLink>
          <PageLink currentPath={currentPath} href="/work">
            Work
          </PageLink>
          <PageLink currentPath={currentPath} href="/projects">
            Projects
          </PageLink>
          <PageLink currentPath={currentPath} href="/blog">
            Blog
          </PageLink>
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
    <Link href={href}>
      <div
        className={`flex flex-col justify-center items-center gap-1 ${
          currentPath === href
            ? "text-foreground hover:text-foreground/65"
            : "text-foreground/65 hover:text-foreground"
        }`}
      >
        <div>{children}</div>
      </div>
    </Link>
  );
};
