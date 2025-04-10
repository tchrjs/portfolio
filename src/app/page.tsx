import Hero from "@/components/home/hero";
import PageContent from "@/components/layout/page-content";
import About from "@/components/home/about";

export default function Home() {
  return (
    <PageContent>
      <Hero />
      <About />
    </PageContent>
  );
}
