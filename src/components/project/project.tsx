import { cn } from "@/lib/utils";
import Card from "../ui/card";

interface ProjectProps {
  children?: React.ReactNode;
  className?: string;
}

function Project({ children, className }: ProjectProps) {
  return (
    <Card
      className={cn(
        "flex flex-col items-center text-center gap-1 p-4 bg-card text-card-foreground overflow-hidden",
        className
      )}
    >
      {children}
    </Card>
  );
}

function ProjectTitle({ children }: { children?: React.ReactNode }) {
  return <div className="text-2xl">{children}</div>;
}

function ProjectDescription({ children }: { children?: React.ReactNode }) {
  return (
    <div className="text-md text-muted-foreground text-center">{children}</div>
  );
}

function ProjectSeparator() {
  return <div className="border-b w-full my-4"></div>;
}

function ProjectContent({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex p-4 items-center justify-center flex-grow">
      {children}
    </div>
  );
}

function ProjectTechnology({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex text-2xl gap-4 flex-wrap justify-center">
      {children}
    </div>
  );
}

function ProjectFooter({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bottom-0 flex flex-col justify-end items-center">
      {children}
    </div>
  );
}

export {
  Project,
  ProjectTitle,
  ProjectDescription,
  ProjectSeparator,
  ProjectContent,
  ProjectTechnology,
  ProjectFooter,
};
