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
import useCreateCustomer from "@/hooks/main/useCreateCustomer"; // Corrected the import
import { ChangeEvent } from "react";
import Spinner from "../Spinner";

const NewCustomer = () => {
  const {
    customer_name,
    contact_number,
    dob,
    gender,
    address,
    examined_by,
    isLoading,
    onChange,
    onSubmit,
    resetForm, // Add resetForm to the hook
  } = useCreateCustomer(); // Use the hook

  return (
    <div className="max-w-2xl mx-auto py-2 px-6">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <Label htmlFor="customer_name" className="text-sm text-left">
            Name
          </Label>
          <Input
            type="text"
            id="customer_name"
            name="customer_name"
            value={customer_name}
            onChange={onChange}
          />
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <Label htmlFor="contact" className="text-sm text-left">
            Contact No.
          </Label>
          <Input
            type="tel"
            id="contact"
            name="contact_number"
            value={contact_number}
            onChange={onChange}
          />
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <Label htmlFor="dob" className="text-sm text-left">
            DOB
          </Label>
          <Input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={onChange}
          />
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <Label htmlFor="gender" className="text-sm text-left">
            Gender
          </Label>
          <Select
            name="gender"
            value={gender}
            onValueChange={(value) => {
              onChange({
                target: { name: "gender", value },
              } as ChangeEvent<HTMLInputElement>);
            }}
          >
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
            name="address"
            value={address}
            onChange={onChange}
          />
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4">
          <Label htmlFor="examinedBy" className="text-sm text-left">
            Examined By(RX)
          </Label>
          <Input
            type="text"
            id="examinedBy"
            name="examined_by"
            value={examined_by}
            onChange={onChange}
          />
        </div>
        <div className="flex justify-center items-center gap-2 mb-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="h-8 py-1 px-2 text-xs"
          >
            {isLoading ? <Spinner /> : "Add"}
          </Button>

          <Button
            type="button"
            onClick={resetForm}
            className="h-8 py-1 px-2 text-xs"
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewCustomer;
