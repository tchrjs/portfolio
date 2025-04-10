"use client";

import {
  CplusplusOriginal,
  CsharpOriginal,
  Css3Original,
  GodotOriginal,
  Html5Original,
  JavascriptOriginal,
  NextjsOriginal,
  ReactOriginal,
  SupabaseOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
} from "devicons-react";
import Button from "../ui/button";
import Card from "../ui/card";
import { IoCodeSlashOutline } from "react-icons/io5";

export default function Tech() {
  return (
    <section className="container-wrapper w-full h-full">
      <div className="container flex flex-col gap-4 justify-center w-full h-full">
        <Card className="flex flex-wrap md:flex-nowrap gap-6 p-6">
          <div className="justify-between gap-1 min-w-2/5">
            <div className="text-2xl flex gap-2 items-center">
              <IoCodeSlashOutline />
              Tech
            </div>
            <div className="text-md text-muted-foreground">
              What I use for software development.
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="label">
              <TypescriptOriginal />
              TypeScript
            </Button>
            <Button variant="label">
              <JavascriptOriginal />
              JavaScript
            </Button>
            <Button variant="label">
              <GodotOriginal />
              GDScript
            </Button>
            <Button variant="label">
              <CsharpOriginal />
              C#
            </Button>
            <Button variant="label">
              <CplusplusOriginal />
              C++
            </Button>
            <Button variant="label">
              <NextjsOriginal />
              Next.js
            </Button>
            <Button variant="label">
              <ReactOriginal />
              React.js
            </Button>
            <Button variant="label">
              <Html5Original />
              HTML5
            </Button>
            <Button variant="label">
              <Css3Original />
              CSS3
            </Button>
            <Button variant="label">
              <TailwindcssOriginal />
              Tailwind CSS
            </Button>
            <Button variant="label">
              <SupabaseOriginal />
              Supabase
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
