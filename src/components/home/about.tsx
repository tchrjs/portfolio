"use client";

import AboutBody from "@/content/about.mdx";
import Separator from "../ui/separator";

export default function About() {
  return (
    <section className="container-wrapper" id="about-section">
      <div className="container flex justify-center mb-64">
        <div className="max-w-xl px-6 flex flex-col gap-8 typography">
          <Separator />
          <AboutBody />
        </div>
      </div>
    </section>
  );
}
