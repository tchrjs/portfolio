"use client";

import About from "@/content/about.mdx";
import * as motion from "motion/react-client";
import HeroBackground from "./hero-background";
import Button from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-wrapper">
      <div className="container grid h-[min(100dvh,100vh)] md:max-h-[600px] contain-content">
        <HeroBackground shapeCount={15} />
        <div className="flex flex-col justify-center items-center text-center z-10 w-full pb-[48px] md:pb-0 pointer-events-none">
          <motion.p
            className="font-bold opacity-0"
            animate={{ opacity: [0, 1], y: [50, 0] }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              duration: 1,
            }}
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
            className="text-sm text-muted-foreground opacity-0 flex"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1.25 }}
          >
            <About />
          </motion.div>
          <motion.div
            className="text-sm text-muted-foreground opacity-0 flex pt-2 gap-4"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button
              className="bg-[#04A777] text-foreground hover:bg-foreground hover:text-[#04A777] transition-colors pointer-events-auto"
              asChild
            >
              <Link href="/work">View Work</Link>
            </Button>
            <Button className="pointer-events-auto" asChild>
              <Link href="/blog">Read Blog</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
