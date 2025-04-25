interface ProjectProps {
  children?: React.ReactNode;
  className?: string;
}

function Projects({ children }: ProjectProps) {
  return (
    <section className="container-wrapper">
      <div className="container mt-8 px-8">{children}</div>
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

export { Projects, ProjectsHeader, ProjectList };
