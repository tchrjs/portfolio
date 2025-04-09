import Hero from "@/components/hero/hero";
import PageContent from "@/components/layout/page-content";
import Tech from "@/components/tech/tech";

export default function Home() {
  return (
    <PageContent>
      <Hero />
      <Tech />
    </PageContent>
  );
}
