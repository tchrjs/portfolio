import PageContent, { StaticChild } from "@/components/layout/page-content";
import {
  ProjectList,
  Projects,
  ProjectsHeader,
} from "@/components/projects/projects";
import {
  ProjectCard,
  ProjectCardDescription,
  ProjectCardStateLabel,
  ProjectCardTitle,
} from "@/components/projects/project-card";
import {
  IoBrowsersOutline,
  IoCog,
  IoGameControllerOutline,
} from "react-icons/io5";

export default function Page() {
  return (
    <PageContent>
      <StaticChild>
        <section className="container-wrapper bg-[#0f0f0f] border-b mb-8">
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
          <ProjectCard href="/projects/my-portfolio">
            <ProjectCardStateLabel state={"in-progress"} />
            <ProjectCardTitle>My Portfolio</ProjectCardTitle>
            <ProjectCardDescription>
              A showcase of my work, background, and the services I offer.
            </ProjectCardDescription>
          </ProjectCard>
          <ProjectCard href="/projects/grocery-tracker">
            <ProjectCardStateLabel state={"completed"} />
            <ProjectCardTitle>Grocery Tracker</ProjectCardTitle>
            <ProjectCardDescription>
              A<span className="text-green-600"> Progressive Web App </span>
              to help track grocery prices and to help manage spendings.
            </ProjectCardDescription>
          </ProjectCard>
        </ProjectList>
      </Projects>
      <Projects>
        <ProjectsHeader>
          <IoGameControllerOutline />
          Game Development
        </ProjectsHeader>
        <ProjectList>
          <ProjectCard href="/projects/keno">
            <ProjectCardStateLabel state={"completed"} />
            <ProjectCardTitle>Keno</ProjectCardTitle>
            <ProjectCardDescription>
              A simple game of Keno, a lottery-like gambling game.
            </ProjectCardDescription>
          </ProjectCard>
        </ProjectList>
      </Projects>
    </PageContent>
  );
}
