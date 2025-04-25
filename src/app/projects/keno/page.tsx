import PageContent from "@/components/layout/page-content";
import Button from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import Link from "next/link";

export default function Page() {
  return (
    <PageContent className="mt-[56px]">
      <section className="container-wrapper">
        <div className="container">
          <div className="text-center text-2xl py-8">
            Game Development: Keno
          </div>
        </div>
      </section>
      <section className="container-wrapper">
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
              <Button variant="default" asChild>
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
      <br />
      <section className="container-wrapper">
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
            <figure className="flex items-center justify-center md:px-16">
              <img src="/keno/game.png"></img>
            </figure>
          </div>
        </div>
      </section>
    </PageContent>
  );
}
