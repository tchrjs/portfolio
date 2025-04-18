import PageContent, { StaticChild } from "@/components/layout/page-content";
import {
  Project,
  ProjectDescription,
  ProjectList,
  Projects,
  ProjectsHeader,
  ProjectStateLabel,
  ProjectTitle,
} from "@/components/projects/projects";
import {
  IoBrowsersOutline,
  IoCog,
  IoGameControllerOutline,
} from "react-icons/io5";

export default function Page() {
  return (
    <PageContent className="mt-[56px]">
      <StaticChild>
        <section className="container-wrapper bg-[#0c0c0c] border-y mb-8">
          <div className="container px-4 py-8">
            <div>
              <div className="text-3xl flex gap-2 items-center">
                <IoCog />
                Projects
              </div>
              <p className="text-md text-muted-foreground">
                Take a look at some of the things I've created over the years!
                Each project reflects what I've been learning and exploring.
              </p>
            </div>
          </div>
        </section>
      </StaticChild>
      <Projects>
        <ProjectsHeader>
          <IoBrowsersOutline />
          Web Development
        </ProjectsHeader>
        <ProjectList>
          <Project>
            <ProjectStateLabel state={"in-progress"} />
            <ProjectTitle>My Portfolio</ProjectTitle>
            <ProjectDescription>
              A showcase of my work, background, and the services I offer.
            </ProjectDescription>
          </Project>
          <Project>
            <ProjectStateLabel state={"completed"} />
            <ProjectTitle>Grocery Tracker</ProjectTitle>
            <ProjectDescription>
              A<span className="text-green-600"> Progressive Web App </span>
              to help track grocery prices and to help manage spendings.
            </ProjectDescription>
          </Project>
        </ProjectList>
      </Projects>
      <Projects>
        <ProjectsHeader>
          <IoGameControllerOutline />
          Game Development
        </ProjectsHeader>
        <ProjectList>
          <Project>
            <ProjectStateLabel state={"in-progress"} />
            <ProjectTitle>Keno Game</ProjectTitle>
            <ProjectDescription>
              A simple game of Keno, a lottery-like gambling game.
            </ProjectDescription>
          </Project>
        </ProjectList>
      </Projects>
    </PageContent>
  );
}
