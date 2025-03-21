"use client";

import About from "@/content/about.mdx";
import * as motion from "motion/react-client";
import HeroBackground from "./hero-background";

export default function Hero() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="container grid h-screen lg:max-h-[1000px] contain-content">
          <HeroBackground shapeCount={15} />
          <div className="flex flex-col justify-center items-center text-center z-10 w-full pb-[var(--navbar-height)]">
            <motion.p
              className="font-bold opacity-0"
              animate={{ opacity: [0, 1], y: [10, -10, 5, 0] }}
              transition={{ duration: 0.75 }}
            >
              Hi! I am
            </motion.p>
            <p className="font-bold text-xl">Christian Toribio</p>
            <motion.div
              className="text-sm text-muted-foreground opacity-0"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <About />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
