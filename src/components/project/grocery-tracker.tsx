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

export default function GroceryTracker() {
  return (
    <Project className="w-[400px] max-w-[400px] min-h-[800px] md:max-h-[800px]">
      <ProjectTitle>Grocery Tracker</ProjectTitle>
      <ProjectDescription>
        A <span className="text-[#04A777]">Progressive Web App</span> to help
        track grocery prices and to help manage spendings.
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
  );
}
