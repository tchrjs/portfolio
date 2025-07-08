import Card from "@/components/card";
import Button from "@/components/button";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ProjectList() {
  return (
    <div className="container">
      <div className="container-wrapper flex flex-col gap-8">
        <Card>
          <p className="text-lg my-2">Grocery Tracker</p>
          <p>
            A Progressive Web App to help track grocery prices and to help
            manage spendings.
          </p>
          <div className="flex w-full items-center gap-4 mt-8 mb-4">
            <Button>
              <Link
                className="no-underline flex items-center justify-center gap-2"
                target="_blank"
                href={"https://github.com/tchrjs/grocery-tracker/"}
              >
                <FaGithub />
                GitHub
              </Link>
            </Button>
            <Button>
              <Link
                className="no-underline flex items-center justify-center gap-2"
                target="_blank"
                href={"https://tchrjs-grocery-tracker.vercel.app/"}
              >
                Visit website
                <FaExternalLinkAlt />
              </Link>
            </Button>
          </div>
        </Card>
        <Card>
          <p className="text-lg my-2">Lost Warrior</p>
          <p>A turn-based game about defeating cave enemies.</p>
          <div className="flex w-full items-center gap-4 mt-8 mb-4">
            <Button>
              <Link
                className="no-underline flex items-center justify-center gap-2"
                target="_blank"
                href={"https://github.com/tchrjs/lost-warrior/"}
              >
                <FaGithub />
                GitHub
              </Link>
            </Button>
            <Button className="bg-[#fa5c5c] border-[#fa5c5c]">
              <Link
                className="no-underline text-white flex items-center justify-center gap-2"
                target="_blank"
                href={"https://tchrjs.itch.io/lost-warrior/"}
              >
                Play on itch.io
                <FaExternalLinkAlt />
              </Link>
            </Button>
          </div>
        </Card>
        <Card>
          <p className="text-lg my-2">Keno</p>
          <p>A simple game of Keno, a lottery-like gambling game.</p>
          <div className="flex w-full items-center gap-4 mt-8 mb-4">
            <Button>
              <Link
                className="no-underline flex items-center justify-center gap-2"
                target="_blank"
                href={"https://github.com/tchrjs/keno/"}
              >
                <FaGithub />
                GitHub
              </Link>
            </Button>
            <Button className="bg-[#fa5c5c] border-[#fa5c5c]">
              <Link
                className="no-underline text-white flex items-center justify-center gap-2"
                target="_blank"
                href={"https://tchrjs.itch.io/keno/"}
              >
                Play on itch.io
                <FaExternalLinkAlt />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
