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
  SupabaseOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
} from "devicons-react";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function Page() {
  return (
    <div className="mt-[56px]">
      <div className="container-wrapper">
        <div className="container">
          <motion.p
            className="opacity-0 text-2xl py-8 text-center"
            animate={{ opacity: [0, 1], y: [50, 0] }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              duration: 1,
            }}
          >
            2025
          </motion.p>
        </div>
      </div>
      <section className="container-wrapper">
        <div className="container flex flex-wrap justify-center gap-4">
          <Project className="w-[400px] max-w-[400px] h-[800px] max-h-[800px]">
            <ProjectTitle>Grocery Tracker</ProjectTitle>
            <ProjectDescription>
              A <span className="text-[#04A777]">Progressive Web App</span> to
              help track grocery prices and to help manage spendings.
            </ProjectDescription>
            <ProjectContent>
              <div className="flex items-center justify-center w-[240px] h-[488px] contain-content">
                <img
                  className="absolute object-contain size-[465px] rounded-4xl"
                  src="/grocery-tracker/view-only.gif"
                ></img>
                <img
                  className="absolute object-contain"
                  src="/iphone16-template.png"
                />
              </div>
            </ProjectContent>
            <ProjectFooter>
              <ProjectTechnology>
                <NextjsOriginal size={30} />
                <ReactOriginal size={30} />
                <TypescriptOriginal size={30} />
                <TailwindcssOriginal size={30} />
                <Html5Original size={30} />
                <Css3Original size={30} />
                <SupabaseOriginal size={30} />
              </ProjectTechnology>
              <div className="text-card-foreground/35 text-center text-nowrap mt-4">
                <Link href="https://tchrjs-grocery-tracker.vercel.app/">
                  tchrjs-grocery-tracker.vercel.app
                </Link>
              </div>
            </ProjectFooter>
          </Project>
          <Project className="w-[400px] max-w-[400px] h-[400px] max-h-[400px]">
            <ProjectTitle>My Portfolio</ProjectTitle>
            <ProjectDescription>
              My portfolio website to showcase my projects, who I am, and what
              services I can provide.
            </ProjectDescription>
            <ProjectContent>
              <div className="rounded-full max-w-1/2 contain-content">
                <img className="relative object-contain" src="/me/6.jpg"></img>
              </div>
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
        </div>
      </section>
    </div>
  );
}
