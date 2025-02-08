"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DistanceMeasurement from "./DistanceMeasurement";
import { Button } from "@/components/ui/button";

const NewPrescription = () => {
  return (
    <div>
      {/* <div className="flex px-2 mb-4">
        <Label htmlFor="customer-id" className="mr-2 min-w-fit">
          Customer ID
        </Label>
        <Input id="customer-id" className="mr-4" />

        <Label htmlFor="prescription-id" className="mr-2 min-w-fit">
          Prescription ID
        </Label>
        <Input id="prescription-id" />
      </div> */}

      <div className="">
        <Tabs
          defaultValue="contact-glasses"
          className="flex justify-center items-center flex-col"
        >
          <TabsList className="w-[100%] px-4">
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
        <div className="flex gap-2 mb-1">
          <div className="flex gap-2 ">
            <Label className="min-w-fit app-prescription-label">
              Frame Type
            </Label>
            <Input id="frame-type" className="h-6" />
            <Input id="frame-desc" className="h-6" />
          </div>
          <div className="flex  gap-2">
            <Label className="min-w-fit app-prescription-label">
              Frame Price
            </Label>
            <Input id="frame-price" className="h-6" />
          </div>
        </div>

        <div className=" flex gap-2 mb-1">
          <div className="flex gap-1 w-[80%]">
            <label className="min-w-fit app-prescription-label">
              Glass Detail
            </label>
            <Input className="h-6" id="glass-detail" />
          </div>
          <div className=" flex gap-1 ">
            <Label className="min-w-fit app-prescription-label">
              Glass Price
            </Label>
            <Input className="h-6" id="glass-price" />
          </div>
        </div>

        <div className="flex gap-2 mb-1">
          <div className="flex gap-1 w-[80%]">
            <Label className="min-w-fit app-prescription-label">
              Contact Lens
            </Label>
            <Input id="lens-detail" className="h-6 " />
          </div>
          <div className="flex gap-1 ">
            <Label className="min-w-fit app-prescription-label">
              Lens Price
            </Label>
            <Input id="lens-price" className="h-6 " />
          </div>
        </div>

        <div className="flex gap-2 mb-1 justify-center items-center">
          <div className="flex gap-1 ">
            <Label className="min-w-fit app-prescription-label">
              Adjusment
            </Label>
            <Input id="Adjusment" className="h-6 " />
          </div>
          <div className="flex gap-1">
            <Label className="min-w-fit app-prescription-label">
              Total Amount
            </Label>
            <Input id="total-amount" className="h-6 " />
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center mb-2">
          <div className="flex gap-1">
            <Label className="min-w-fit app-prescription-label">Advance</Label>
            <Input id="advance" className="h-6 " />
          </div>
          <div className="flex gap-1">
            <Label className="min-w-fit app-prescription-label">Balance</Label>
            <Input id="balance" className="h-6 " />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mb-2">
          {/* <Button type="submit" disabled={isLoading}>
            {isLoading ? <Spinner /> : "Create"}
          </Button> */}

          <Button className="h-8 py-1 px-2 text-xs">Add</Button>
          <Button className="h-8 py-1 px-2 text-xs">Reset</Button>
          <Button className="h-8 py-1 px-2 text-xs">Update</Button>
          <Button className="h-8 py-1 px-2 text-xs">Delete</Button>
        </div>
      </div>
    </div>
  );
};
export default NewPrescription;
