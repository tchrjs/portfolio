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
              <Link href={"/projects/keno"}>Keno</Link>
            </div>
          </div>
        </section>
        <section className="container-wrapper pt-8">
          <div className="container flex flex-col">
            <div className="text-2xl">Keno</div>
            <div className="flex gap-2 text-foreground/75 text-center flex-wrap">
              <div className="flex gap-1 items-center flex-nowrap">
                <BiCalendar className="size-4" />
                <div>April 24, 2025</div>
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
      <section className="container-wrapper pt-16">
        <div className="container">
          <div className="text-xl">About</div>
          <div className="flex flex-col gap-4">
            <Separator />
            <div className="text-foreground/75">
              This is my first built game in Godot. At the time of making this
              game, I have built a variety of different Keno games for my job
              using just JavaScript, HTML, and CSS. While I have grown
              accustomed to this method of making games, I wanted to explore and
              learn other tools used to make games, hence, why this game is
              built in Godot.
            </div>
            <div className="flex gap-4 items-center justify-center">
              <Button variant="default" asChild>
                <Link
                  className="flex"
                  target="_blank"
                  href={"https://github.com/tchrjs/keno"}
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
                  href={"https://tchrjs.itch.io/keno"}
                >
                  Play on itch.io
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container-wrapper pt-16">
        <div className="container">
          <div className="text-xl">Features</div>
          <div className="flex flex-col gap-4">
            <Separator />
            <div className="text-foreground/75 flex flex-col gap-4">
              <div>
                Keno is a lottery-like gambling game. It consists of 80 numbers
                (or spots) on a board. The player must select a minimum number
                of spots (2) and no more than a maximum number (10).
              </div>
              <div>
                If you have enough enough credits as bet, the player is able to
                draw. During play, the game picks 20 numbers out of the 80 found
                on the board. If your spots are chosen, you get your reward
                based on the payouts table on the left.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-wrapper pt-16">
        <div className="container">
          <Figure className="md:px-8" variant="browser">
            <img src="/keno/game.png"></img>
          </Figure>
        </div>
      </section>
    </PageContent>
  );
}
