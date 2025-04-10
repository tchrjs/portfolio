"use client";

import Button from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-wrapper h-screen md:max-h-[600px] w-full">
      <div className="container w-full h-full flex items-center justify-center">
        <div className="flex flex-col pb-[56px]">
          <div className="p-4 text-center">
            <div className="text-md md:text-lg">Hi! I am</div>
            <div className="text-xl md:text-2xl text-foreground font-bold">
              Christian Toribio
            </div>
            <div className="text-xs md:text-sm text-foreground/50">
              a software developer with a strong focus on user experience and
              clean code.
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button
              className="bg-green-800 hover:bg-green-700 border-green-950 hover:border-green-600 text-foreground hover:text-foreground transition-colors pointer-events-auto"
              asChild
            >
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button className="pointer-events-auto" asChild>
              <Link href="/blog">Read Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
