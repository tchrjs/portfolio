import Projects from "@/markdown/projects.mdx";
import Footer from "@/components/footer";
import Card from "@/components/card";

export default function Page() {
  return (
    <div>
      <main className="px-7 py-10">
        <article className="prose dark:prose-invert m-auto">
          <Projects />
          <div className="flex flex-col gap-8 bg-car">
            <Card>
              <p className="font-bold">Grocery Tracker</p>
              <p>
                A Progressive Web App to help track grocery prices and to help
                manage spendings.
              </p>
            </Card>
            <Card>
              <p className="font-bold">Lost Warrior</p>
              <p>A turn-based game about defeating cave enemies.</p>
            </Card>
            <Card>
              <p className="font-bold">Keno</p>
              <p>A simple game of Keno, a lottery-like gambling game.</p>
            </Card>
          </div>
        </article>
        <Footer />
      </main>
    </div>
  );
}
