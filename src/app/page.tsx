import Welcome from "@/markdown/welcome.mdx";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <main className="px-7 py-10">
        <article className="prose dark:prose-invert m-auto">
          <Welcome />
        </article>
        <Footer />
      </main>
    </div>
  );
}
