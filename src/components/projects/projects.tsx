import Card from "../ui/card";

interface ProjectProps {
  children?: React.ReactNode;
  className?: string;
}

function Projects({ children }: ProjectProps) {
  return (
    <section className="container-wrapper">
      <div className="container mt-8">{children}</div>
    </section>
  );
}

function ProjectsHeader({ children }: { children?: React.ReactNode }) {
  return (
    <div className="text-2xl flex gap-2 items-center py-4">{children}</div>
  );
}

function ProjectList({ children }: { children?: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 min-w-50">
      {children}
    </div>
  );
}

function Project({ children }: { children?: React.ReactNode }) {
  return <Card className="min-h-50 flex flex-col">{children}</Card>;
}

type ProjectState = "in-progress" | "completed" | "hold";

function ProjectStateLabel({ state = "completed" }: { state?: ProjectState }) {
  return <div className="text-muted-foreground">{state}</div>;
}

function ProjectTitle({ children }: { children?: React.ReactNode }) {
  return <div className="text-xl pb-2">{children}</div>;
}

function ProjectDescription({ children }: { children?: React.ReactNode }) {
  return <div className="text-md text-muted-foreground">{children}</div>;
}

export {
  Projects,
  ProjectsHeader,
  ProjectList,
  Project,
  ProjectStateLabel,
  ProjectTitle,
  ProjectDescription,
};
