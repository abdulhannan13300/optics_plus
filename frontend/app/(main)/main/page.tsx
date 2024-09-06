import CreateCustomer from "@/components/common/main/CreateCustomer";
import CustomerHistory from "@/components/common/main/CustomerHistory";
import CustomerHistoryDetails from "@/components/common/main/CustomerHistoryDetails";
import PrescriptionDetails from "@/components/common/main/PrescriptionDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optics Plus | Home",
  description: " Optics Plus home page",
};

export default function Page() {
  return (
    <main>
      <div className="flex flex-row gap-4">
        <div className="w-[50%]">
          <div>
            <CreateCustomer />
          </div>
          <div>
            <PrescriptionDetails />
          </div>
        </div>
        <div className="w-[50%]">
          <div>
            <CustomerHistory />
          </div>
          <div>
            <CustomerHistoryDetails />
          </div>
        </div>
      </div>
    </main>
  );
}
