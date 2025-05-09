import PageContent, { StaticChild } from "@/components/layout/page-content";
import Button from "@/components/ui/button";
import Figure from "@/components/ui/figure";
import Separator from "@/components/ui/separator";
import { Clock01Icon } from "hugeicons-react";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";

export default function Page() {
  return (
    <PageContent>
      <StaticChild>
        <section className="container-wrapper bg-[#0f0f0f] border-b">
          <div className="container">
            <div className="text-md py-4 gap-2 flex">
              <Link href={"/projects"}>Projects</Link>
              <div>{" > "}</div>
              <Link href={"/projects/lost-warrior"}>Lost Warrior</Link>
            </div>
          </div>
        </section>
        <section className="container-wrapper py-8">
          <div className="container flex flex-col">
            <div className="text-2xl">Lost Warrior</div>
            <div className="flex gap-2 text-foreground/75 text-center flex-wrap">
              <div className="flex gap-1 items-center flex-nowrap">
                <BiCalendar className="size-4" />
                <div>May 8th, 2025</div>
              </div>
              <div>•</div>
              <div>completed</div>
              <div>•</div>
              <div className="flex gap-1 items-center flex-nowrap">
                <Clock01Icon className="size-4" />
                <div>1min read</div>
              </div>
            </div>
          </div>
        </section>
      </StaticChild>
      <section className="container-wrapper pb-16">
        <div className="container">
          <div className="text-xl">About</div>
          <div className="flex flex-col gap-4">
            <Separator />
            <div className="text-foreground/75 flex flex-col gap-4 typography">
              <div>
                I submitted this game to the{" "}
                <a href="https://itch.io/jam/123scope-jam">
                  1-2-3-Scope Game Jam
                </a>
                . This is the first game jam I have ever made a submission for
                and I got to say that I have learned a lot. This game was made
                using the Godot Game Engine with gdscript, the programming
                language.
              </div>
              <div>
                The game itself is pretty simple. You move a certain distance
                pressing the move button, use an attack to defeat enemies, and
                use defend to block damage and end your turn.
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <Button variant="default" asChild>
                <Link
                  className="flex"
                  target="_blank"
                  href={"https://github.com/tchrjs/lost-warrior"}
                >
                  GitHub Repository
                </Link>
              </Button>
              <Button
                className="bg-[#fa5c5c] border-[#fa5c5c] hover:bg-[#fa5c5c] font-bold"
                variant="default"
                asChild
              >
                <Link
                  className="flex"
                  target="_blank"
                  href={"https://tchrjs.itch.io/lost-warrior"}
                >
                  Play on itch.io
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container-wrapper pb-16">
        <div className="container">
          <div className="text-xl">Features</div>
          <div className="flex flex-col gap-4">
            <Separator />
            <div className="text-foreground/75 flex flex-col gap-4">
              <div>The game jam required 3 things to be met:</div>
              <ul className="pl-8">
                <li>1 Environment (A Cave)</li>
                <li>2 Mechanics (Attack and Defend)</li>
                <li>3 Challenges (A Skeleton, Ghost, and a Zombie)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container-wrapper pb-16">
        <div className="container">
          <Figure className="md:px-8" variant="browser">
            <img src="/lost-warrior/lost-warrior.png"></img>
          </Figure>
        </div>
      </section>
      <section className="container-wrapper pb-16">
        <div className="container">
          <div className="text-xl">Final Thoughts</div>
          <div className="flex flex-col gap-4">
            <Separator />
            <div className="text-foreground/75 flex flex-col gap-4">
              <div>
                Having a simple scope made it really easy to work towards
                getting a game done. I have difficulties with being a
                perfectionist and wanting everything to be as efficient as
                possible, so this type of game jam helped me overcome those
                struggles. I have not only dedicated the time necessary to
                getting a product out there, but I also learned a lot more about
                what works and does not work for future games!
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContent>
  );
}
