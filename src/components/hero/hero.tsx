"use client";

import About from "@/content/about.mdx";
import * as motion from "motion/react-client";
import HeroBackground from "./hero-background";

export default function Hero() {
  return (
    <section className="container-wrapper">
      <div className="container grid h-[min(100dvh,100vh)] md:max-h-[600px] contain-content">
        <HeroBackground shapeCount={15} />
        <div className="flex flex-col justify-center items-center text-center z-10 w-full pb-[48px] md:pb-0">
          <motion.p
            className="font-bold opacity-0"
            animate={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          >
            Hi! I am
          </motion.p>
          <motion.div
            className="text-sm text-foreground opacity-0"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="font-bold text-xl">Christian Toribio</p>
          </motion.div>
          <motion.div
            className="text-sm text-muted-foreground opacity-0"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <About />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
