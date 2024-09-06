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

export default function NewCustomer() {
  return (
    <div className="px-24 py-6">
      <div className="flex mb-2">
        <Label htmlFor="name" className="mr-2">
          Name
        </Label>
        <Input type="text" id="name" />
      </div>
      <div className="flex mb-2">
        <Label htmlFor="contact" className="mr-2 max-w-fit">
          Contact No.
        </Label>
        <Input type="tel" id="contact" />
      </div>{" "}
      <div className="flex mb-2">
        <Label htmlFor="dob" className="mr-2">
          DOB
        </Label>
        <Input type="date" id="dob" />
      </div>{" "}
      <div className="flex mb-2">
        <Label htmlFor="gender" className="mr-2">
          Gender
        </Label>
        <Select>
          <SelectTrigger className="w-[180px]">
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
      <div className="flex mb-2">
        <Label htmlFor="examinedBy" className="mr-2">
          Examined By(Rx)
        </Label>
        <Input type="text" id="examinedBy" />
      </div>
      <div className="flex mb-2">
        <Label htmlFor="address" className="mr-2">
          Address
        </Label>
        <Textarea placeholder="Type your address here." id="address" />
      </div>
    </div>
  );
}
