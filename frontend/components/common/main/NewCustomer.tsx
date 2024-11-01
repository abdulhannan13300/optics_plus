"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const NewCustomer = () => {
  return (
    <div className="max-w-2xl mx-auto py-2 px-6">
      <div className="space-y-4">
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <Label htmlFor="name" className="text-sm text-left">
            Name
          </Label>
          <Input type="text" id="name" />
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <Label htmlFor="contact" className="text-sm text-left">
            Contact No.
          </Label>
          <Input type="tel" id="contact" />
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <Label htmlFor="dob" className="text-sm text-left">
            DOB
          </Label>
          <Input type="date" id="dob" />
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <Label htmlFor="gender" className="text-sm text-left">
            Gender
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Genders</SelectLabel>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-start gap-4">
          <Label htmlFor="address" className="text-sm text-left pt-2">
            Address
          </Label>
          <Textarea
            className="min-h-[50px]"
            placeholder="Type your address here."
            id="address"
          />
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <Label htmlFor="examinedBy" className="text-sm text-left">
            Examined By(RX)
          </Label>
          <Input type="text" id="examinedBy" />
        </div>
      </div>
    </div>
  );
};
export default NewCustomer;
