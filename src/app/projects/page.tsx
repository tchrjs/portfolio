import PageContent from "@/components/layout/page-content";
import GroceryTracker from "@/components/project/grocery-tracker";
import MyPortfolio from "@/components/project/my-portfolio";

export default function Page() {
  return (
    <PageContent className="mt-[56px]">
      <section className="container-wrapper">
        <div className="container">
          <p className="text-2xl py-8 text-center">2025</p>
        </div>
        <div className="container flex flex-wrap justify-center gap-4">
          <GroceryTracker />
          <MyPortfolio />
        </div>
      </section>
    </PageContent>
  );
}
