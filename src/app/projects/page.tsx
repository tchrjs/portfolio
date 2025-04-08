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

export default function Page() {
  return (
    <div className="mt-[56px]">
      <div className="container-wrapper">
        <div className="container">
          <div className="text-2xl py-8 text-center">2025</div>
        </div>
      </div>
      <section className="container-wrapper">
        <div className="container flex flex-col gap-8 md:w-3/4">
          <Project>
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
              <div className="text-muted text-center text-nowrap mt-4">
                <Link href="https://tchrjs-grocery-tracker.vercel.app/">
                  tchrjs-grocery-tracker.vercel.app
                </Link>
              </div>
            </ProjectFooter>
          </Project>
          <Project>
            <ProjectTitle>My Portfolio</ProjectTitle>
            <ProjectDescription>
              as My personal website to showcase showcase projects, who I am,
              and services I can provide.
            </ProjectDescription>
            <ProjectContent></ProjectContent>
            <ProjectFooter>
              <ProjectTechnology>
                <NextjsOriginal size={30} />
                <ReactOriginal size={30} />
                <TypescriptOriginal size={30} />
                <TailwindcssOriginal size={30} />
                <Html5Original size={30} />
                <Css3Original size={30} />
              </ProjectTechnology>
              <div className="text-muted text-center text-nowrap mt-4">
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
