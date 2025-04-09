import PageContent from "@/components/layout/page-content";
import GroceryTracker from "@/components/project/grocery-tracker";
import MyPortfolio from "@/components/project/my-portfolio";
import * as motion from "motion/react-client";

export default function Page() {
  return (
    <PageContent className="mt-[56px]">
      <div className="container-wrapper">
        <div className="container">
          <motion.p
            className="opacity-0 text-2xl py-8 text-center"
            animate={{ opacity: [0, 1], y: [50, 0] }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              duration: 1,
            }}
          >
            2025
          </motion.p>
        </div>
      </div>
      <section className="container-wrapper">
        <div className="container flex flex-wrap justify-center gap-4">
          <GroceryTracker />
          <MyPortfolio />
        </div>
      </section>
    </PageContent>
  );
}
