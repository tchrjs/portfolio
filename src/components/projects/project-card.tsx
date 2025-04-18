import Link from "next/link";
import Card from "../ui/card";

function ProjectCard({
  children,
  href = "",
}: {
  children?: React.ReactNode;
  href?: string;
}) {
  return (
    <Link href={href}>
      <Card variant="button" className="min-h-50 flex flex-col select-none">
        {children}
      </Card>
    </Link>
  );
}

type ProjectState = "in-progress" | "completed" | "hold";

function ProjectCardStateLabel({
  state = "completed",
}: {
  state?: ProjectState;
}) {
  return <div className="text-muted-foreground">{state}</div>;
}

function ProjectCardTitle({ children }: { children?: React.ReactNode }) {
  return <div className="text-xl pb-2">{children}</div>;
}

function ProjectCardDescription({ children }: { children?: React.ReactNode }) {
  return <div className="text-md text-muted-foreground">{children}</div>;
}

export {
  ProjectCard,
  ProjectCardStateLabel,
  ProjectCardTitle,
  ProjectCardDescription,
};
