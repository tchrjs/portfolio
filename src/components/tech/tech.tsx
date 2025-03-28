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
import { useState } from "react";
import Cube from "./cube";

export default function Tech() {
  const [icon, setIcon] = useState<React.ReactNode>(null);
  const [type, setType] = useState("");

  const handleClick = (_icon: React.ReactNode, _type: string) => {
    setIcon(type == _type ? null : _icon);
    setType(type == _type ? "" : _type);
  };

  return (
    <section className="container-wrapper flex">
      <div className="container flex flex-col px-4 py-32 gap-4 justify-center items-center w-full">
        <div className="absolute opacity-10 pointer-events-none">
          <Cube icon={icon} />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl">Tech</div>
          <div className="text-md text-muted-foreground">
            What I use for software development
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <div className="overflow-x-auto no-scrollbar whitespace-nowrap flex flex-wrap justify-center gap-4 items-center max-w-2/3">
            <Button
              variant="label"
              onClick={() =>
                handleClick(<TypescriptOriginal size={200} />, "typescript")
              }
            >
              <TypescriptOriginal />
              TypeScript
            </Button>
            <Button
              variant="label"
              onClick={() =>
                handleClick(<JavascriptOriginal size={200} />, "javascript")
              }
            >
              <JavascriptOriginal />
              JavaScript
            </Button>
            <Button
              variant="label"
              onClick={() =>
                handleClick(<GodotOriginal size={200} />, "gdscript")
              }
            >
              <GodotOriginal />
              GDScript
            </Button>
            <Button
              variant="label"
              onClick={() =>
                handleClick(<CsharpOriginal size={200} />, "csharp")
              }
            >
              <CsharpOriginal />
              C#
            </Button>
            <Button
              variant="label"
              onClick={() =>
                handleClick(<CplusplusOriginal size={200} />, "c++")
              }
            >
              <CplusplusOriginal />
              C++
            </Button>
            <Button
              variant="label"
              onClick={() =>
                handleClick(<NextjsOriginal size={200} />, "nextjs")
              }
            >
              <NextjsOriginal />
              Next.js
            </Button>
            <Button
              variant="label"
              onClick={() =>
                handleClick(<ReactOriginal size={200} />, "reactjs")
              }
            >
              <ReactOriginal />
              React.js
            </Button>
            <Button
              variant="label"
              onClick={() => handleClick(<Html5Original size={200} />, "html5")}
            >
              <Html5Original />
              HTML5
            </Button>
            <Button
              variant="label"
              onClick={() => handleClick(<Css3Original size={200} />, "css3")}
            >
              <Css3Original />
              CSS3
            </Button>
            <Button
              variant="label"
              onClick={() =>
                handleClick(<TailwindcssOriginal size={200} />, "tailwindcss")
              }
            >
              <TailwindcssOriginal />
              Tailwind CSS
            </Button>
            <Button
              variant="label"
              onClick={() =>
                handleClick(<SupabaseOriginal size={200} />, "supabase")
              }
            >
              <SupabaseOriginal />
              Supabase
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
