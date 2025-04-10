import Hero from "@/components/home/hero";
import PageContent from "@/components/layout/page-content";
import Tech from "@/components/home/tech";
import About from "@/components/home/about";

export default function Home() {
  return (
    <PageContent>
      <Hero />
      <About />
      <Tech />
    </PageContent>
  );
}
