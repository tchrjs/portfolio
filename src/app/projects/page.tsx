import Card from "@/components/ui/card";

export default function Page() {
  return (
    <div className="mt-[56px]">
      <div className="container-wrapper">
        <div className="container">
          <div className="text-2xl py-8 text-center">2025</div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <Card className="w-1/2">
              <div className="flex">
                <div className="p-2">
                  <div className="text-2xl">Grocery Tracker</div>
                  <div className="text-sm text-muted-foreground">
                    A Progressive Web App to help track grocery prices and to
                    help manage spendings.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
