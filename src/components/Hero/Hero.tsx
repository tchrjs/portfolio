"use client";

import About from "@/content/about.mdx";

export default function Hero() {
  return (
    <div className="flex flex-col p-4 text-sm">
      <p className="font-bold">
        Christian Toribio
        <br />
        Software Developer
      </p>
      <div className="mt-4">
        <About />
      </div>
    </div>
  );
}
