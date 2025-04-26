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
              <Link href={"/projects/keno"}>Grocery Tracker</Link>
            </div>
          </div>
        </section>
        <section className="container-wrapper pt-8">
          <div className="container flex flex-col">
            <div className="text-2xl">Grocery Tracker</div>
            <div className="flex gap-2 text-foreground/75 text-center flex-wrap">
              <div className="flex gap-1 items-center flex-nowrap">
                <BiCalendar className="size-4" />
                <div>April 3rd, 2025</div>
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
            <div className="text-foreground/75 flex flex-col gap-4">
              <div>
                This is a personal Progressive Web App that I share with a
                couple people that I know about. It is focused mainly around a
                table of local product data that is inserted into a shared
                Supabase database. The main purpose is to find the stores with
                the best products of a certain type. This helps not only with
                comparing prices, but also saving money and tracking sales.
              </div>
              <div>
                Right now, anyone can view this website and the products listed.
                I am using Clerk for authentication to determine who can edit
                this database. Only people that I have accepted a request from
                can add, remove, and update this database.
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <Button variant="default" asChild>
                <Link
                  className="flex"
                  target="_blank"
                  href={"https://github.com/tchrjs/grocery-tracker"}
                >
                  GitHub Repository
                </Link>
              </Button>
              <Button variant="default" asChild>
                <Link
                  className="flex"
                  target="_blank"
                  href={"https://tchrjs-grocery-tracker.vercel.app/"}
                >
                  Visit Website
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container-wrapper pt-16">
        <div className="container flex items-center justify-center">
          <Figure className="max-w-3/4 md:max-w-1/2" variant="phone">
            <img src="/grocery-tracker/view-only.gif"></img>
          </Figure>
        </div>
      </section>
    </PageContent>
  );
}
