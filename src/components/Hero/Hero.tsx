"use client";

import About from "@/content/about.mdx";
import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <section className="container mx-auto grid min-h-[min(100dvh,100vh)] pb-[var(--navbar-height)] items-center px-4">
      <div className="flex flex-col justify-center items-center text-center">
        <motion.div
          animate={{ opacity: [0, 1], y: [10, -10, 5, 0] }}
          transition={{ duration: 0.75 }}
        >
          <p className="font-bold">Hi! I am</p>
        </motion.div>
        <p className="font-bold text-xl">Christian Toribio</p>
        <motion.div
          className="text-sm text-muted-foreground"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <About />
        </motion.div>
      </div>
    </section>
  );
}
