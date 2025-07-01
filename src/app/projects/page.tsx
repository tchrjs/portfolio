import Projects from "@/markdown/projects.mdx";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div>
      <main className="px-7 py-10">
        <article className="prose dark:prose-invert m-auto">
          <Projects />
        </article>
        <Footer />
      </main>
    </div>
  );
}
