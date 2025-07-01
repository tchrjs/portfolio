import Link from "next/link";
import { FaGithub, FaItchIo, FaLinkedin } from "react-icons/fa";
import ThemeSwitch from "./theme-switch";

const navEffect: string =
  "text-foreground/65 hover:text-foreground transition-colors";

export default function NavBar() {
  return (
    <header className="z-40">
      <div className="absolute p-8">
        <Link href="/">tchrjs</Link>
      </div>
      <nav className="p-8 w-full">
        <div className="flex gap-4 justify-end items-center">
          <Link className={navEffect} href="/">
            Home
          </Link>
          <Link className={navEffect} href="/projects">
            Projects
          </Link>
          <Link className={navEffect} href="https://github.com/tchrjs">
            <FaGithub />
          </Link>
          <Link className={navEffect} href="https://tchrjs.itch.io/">
            <FaItchIo />
          </Link>
          <Link
            className={navEffect}
            href="https://www.linkedin.com/in/christian-toribio/"
          >
            <FaLinkedin />
          </Link>
          <ThemeSwitch className={navEffect} />
        </div>
      </nav>
    </header>
  );
}
