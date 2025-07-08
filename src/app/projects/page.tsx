import ProjectList from "@/components/project-list";
import Projects from "@/markdown/projects.mdx";

export default function Page() {
  return (
    <main className="container my-10">
      <article className="container-wrapper prose dark:prose-invert mb-10">
        <Projects />
      </article>
      <ProjectList />
    </main>
  );
}
