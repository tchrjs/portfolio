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
import ".//tech.css";
import { useState } from "react";

export default function Tech() {
  const [style, setStyle] = useState("");

  const handleClick = (styleType: string) => {
    console.log(styleType);
    setStyle(style == styleType ? "" : styleType);
  };

  return (
    <section className="container-wrapper flex">
      <div
        className={`container flex flex-col px-4 py-8 gap-4 bg-background text-foreground items-center ${style} w-full transition-all`}
      >
        <div className="flex flex-col items-center">
          <div className="text-2xl">Tech</div>
          <div className="text-md text-muted-foreground">
            What I use for software development
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <div className="overflow-x-auto no-scrollbar whitespace-nowrap flex flex-wrap justify-center gap-4 items-center max-w-2/3">
            <Button variant="label" onClick={() => handleClick("typescript")}>
              <TypescriptOriginal />
              TypeScript
            </Button>
            <Button variant="label" onClick={() => handleClick("javascript")}>
              <JavascriptOriginal />
              JavaScript
            </Button>
            <Button variant="label" onClick={() => handleClick("gdscript")}>
              <GodotOriginal />
              GDScript
            </Button>
            <Button variant="label" onClick={() => handleClick("csharp")}>
              <CsharpOriginal />
              C#
            </Button>
            <Button variant="label" onClick={() => handleClick("cplusplus")}>
              <CplusplusOriginal />
              C++
            </Button>
            <Button variant="label" onClick={() => handleClick("nextjs")}>
              <NextjsOriginal />
              Next.js
            </Button>
            <Button variant="label" onClick={() => handleClick("reactjs")}>
              <ReactOriginal />
              React.js
            </Button>
            <Button variant="label" onClick={() => handleClick("html")}>
              <Html5Original />
              HTML5
            </Button>
            <Button variant="label" onClick={() => handleClick("css")}>
              <Css3Original />
              CSS3
            </Button>
            <Button variant="label" onClick={() => handleClick("tailwind")}>
              <TailwindcssOriginal />
              Tailwind CSS
            </Button>
            <Button variant="label" onClick={() => handleClick("supabase")}>
              <SupabaseOriginal />
              Supabase
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
