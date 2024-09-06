import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewCustomer from "./NewCustomer";
import NewPrescription from "./NewPrescription";
import { Button } from "@/components/ui/button";

export default function CreateCustomer() {
  return (
    <Card className="">
      <Tabs defaultValue="new-customer" className="">
        <TabsList className="w-[100%]">
          <TabsTrigger value="new-customer">Add New Customer</TabsTrigger>
          <TabsTrigger value="new-prescription">
            Add New Prescription
          </TabsTrigger>
        </TabsList>
        <TabsContent value="new-customer">
          <NewCustomer />
        </TabsContent>
        <TabsContent value="new-prescription">
          <NewPrescription />
        </TabsContent>
      </Tabs>
      <div className="flex justify-center items-center gap-2 mb-2">
        <Button>Create</Button>
        <Button>Reset</Button>
        <Button>Update</Button>
        <Button>Delete</Button>
      </div>
    </Card>
  );
}
