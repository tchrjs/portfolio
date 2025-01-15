"use client";

import PageContent from "@/components/PageContent/PageContent";
import Hero from "@/content/hero.mdx";

export default function Home() {
  return (
    <PageContent>
      <div className="p-2">
        <Hero />
      </div>
    </PageContent>
  );
}
