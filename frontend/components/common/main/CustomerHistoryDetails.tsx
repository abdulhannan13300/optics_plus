import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DistanceMeasurement from "./DistanceMeasurement";

const CustomerHistoryDetails = () => {
  return (
    <div>
      <div className="flex px-2 mb-4">
        <Label htmlFor="customer-id" className="mr-2 min-w-fit">
          Customer ID
        </Label>
        <Input id="customer-id" className="mr-4" />

        <Label htmlFor="prescription-id" className="mr-2 min-w-fit">
          Prescription ID
        </Label>
        <Input id="prescription-id" />
      </div>

      <div className="">
        <Tabs
          defaultValue="contact-glasses"
          className="flex justify-center items-center flex-col"
        >
          <TabsList className="w-[100%]">
            <TabsTrigger value="contact-glasses">Contact Glasses</TabsTrigger>
            <TabsTrigger value="contact-lenses">Contact Lenses</TabsTrigger>
          </TabsList>
          <TabsContent value="contact-glasses" className="w-[100%]">
            <DistanceMeasurement contact_measurement={"Glasses"} />
          </TabsContent>
          <TabsContent value="contact-lenses">
            <DistanceMeasurement contact_measurement={"Lenses"} />
          </TabsContent>
        </Tabs>
      </div>

      <div className="w-[100%] px-4">
        <div className="flex gap-2 mb-2">
          <div className="flex gap-2 ">
            <Label className="min-w-fit">Frame Type</Label>
            <Input id="frame-type" className="" />
            <Input id="frame-desc" className="" />
          </div>
          <div className="flex  gap-2">
            <Label className="min-w-fit">Frame Price</Label>
            <Input id="frame-price" className="" />
          </div>
        </div>

        <div className=" flex gap-2 mb-2">
          <div className="flex gap-2 w-[80%]">
            <Label className="min-w-fit">Glass Detail</Label>
            <Input className="" id="glass-detail" />
          </div>
          <div className=" flex gap-2 ">
            <Label className="min-w-fit">Glass Price</Label>
            <Input className="" id="glass-price" />
          </div>
        </div>

        <div className="flex gap-2 ">
          <div className="flex gap-2 w-[80%]">
            <Label className="min-w-fit">Contact Lens</Label>
            <Input id="lens-detail" />
          </div>
          <div className="flex gap-2 mb-2">
            <Label className="min-w-fit">Lens Price</Label>
            <Input id="lens-price" />
          </div>
        </div>

        <div className="flex gap-2  justify-center items-center">
          <div className="flex gap-2 ">
            <Label className="min-w-fit">Adjusment</Label>
            <Input id="Adjusment" />
          </div>
          <div className="flex gap-2 mb-2">
            <Label className="min-w-fit">Total Amount</Label>
            <Input id="total-amount" />
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <div className="flex gap-2 ">
            <Label className="min-w-fit">Advance</Label>
            <Input id="advance" />
          </div>
          <div className="flex gap-2 mb-2">
            <Label className="min-w-fit">Balance</Label>
            <Input id="balance" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerHistoryDetails;
