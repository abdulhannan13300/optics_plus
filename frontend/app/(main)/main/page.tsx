import CreateCustomer from "@/components/common/main/CreateCustomer";
import CustomerHistory from "@/components/common/main/CustomerHistory";
import CustomerHistoryDetails from "@/components/common/main/CustomerHistoryDetails";
import PrescriptionDetails from "@/components/common/main/PrescriptionDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optics Plus | Home",
  description: "Optics Plus home page",
};

const Page = () => {
  return (
    <main className="h-screen flex gap-4">
      <div className="flex flex-col w-[50%]">
        <div className="flex-grow min-h-[50%]">
          <CreateCustomer />
        </div>
        <div className="flex-grow min-h-[40%]">
          <PrescriptionDetails />
        </div>
      </div>
      <div className="flex flex-col w-[50%]">
        <div className="flex-grow min-h-[40%]">
          <CustomerHistory />
        </div>
        <div className="flex-grow min-h-[50%]">
          <CustomerHistoryDetails />
        </div>
      </div>
    </main>
  );
};

export default Page;
