import Welcome from "@/markdown/welcome.mdx";

export default function Home() {
  return (
    <div>
      <main className="px-7 py-10">
        <article className="prose m-auto">
          <Welcome />
        </article>
        <footer className="prose m-auto mt-10 mb-6">
          <span className="text-sm">© 2025 Christian Toribio</span>
        </footer>
      </main>
    </div>
  );
}
