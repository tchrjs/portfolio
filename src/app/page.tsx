import Welcome from "@/markdown/welcome.mdx";

export default function Home() {
  return (
    <main className="container my-10">
      <article className="container-wrapper prose dark:prose-invert mb-10">
        <Welcome />
      </article>
    </main>
  );
}
