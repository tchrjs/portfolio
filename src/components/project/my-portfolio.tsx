"use client";

import {
  Project,
  ProjectContent,
  ProjectDescription,
  ProjectFooter,
  ProjectTechnology,
  ProjectTitle,
} from "@/components/project/project";
import {
  Css3Original,
  Html5Original,
  NextjsOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
} from "devicons-react";
import Link from "next/link";
import * as motion from "motion/react-client";
import { useState } from "react";

const imageCount = 6;

export default function MyPortfolio() {
  const [index, setIndex] = useState(1);

  const handleClick = () => {
    setIndex(index + 1 <= imageCount ? index + 1 : 1);
  };

  return (
    <Project className="w-[400px] max-w-[400px] min-h-[400px] md:max-h-[400px]">
      <ProjectTitle>My Portfolio</ProjectTitle>
      <ProjectDescription>
        My portfolio website to showcase my projects, who I am, and what
        services I can provide.
      </ProjectDescription>
      <ProjectContent>
        <motion.div
          className="rounded-full w-[175px] h-[175px] overflow-hidden"
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
        >
          <img
            className="object-cover w-full h-full select-none"
            src={`/me/${index}.jpg`}
          ></img>
        </motion.div>
      </ProjectContent>
      <ProjectFooter>
        <ProjectTechnology>
          <NextjsOriginal size={30} />
          <ReactOriginal size={30} />
          <TypescriptOriginal size={30} />
          <TailwindcssOriginal size={30} />
          <Html5Original size={30} />
          <Css3Original size={30} />
        </ProjectTechnology>
        <div className="text-card-foreground/35 text-center text-nowrap mt-4">
          <Link href="https://tchrjs-portfolio.vercel.app/">
            tchrjs-portfolio.vercel.app
          </Link>
        </div>
      </ProjectFooter>
    </Project>
  );
}
