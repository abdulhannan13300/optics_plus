import React from "react";
import { ChangeEvent } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  labelId: string;
  children: React.ReactNode;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
}

const InputField = ({
  labelId,
  children,
  type,
  onChange,
  value,
  link,
  required = false,
}: Props) => {
  return (
    <div className="mx-8">
      <div className="flex justify-between align-center">
        <Label
          htmlFor={labelId}
          className="mb-1"
          // className="block text-sm font-medium leading-6 text-gray-900"
        >
          {children}
        </Label>
        {link && (
          <div className="text-sm">
            <Link
              className="font-semibold hover:text-muted-foreground"
              href={link.linkUrl}
            >
              {link.linkText}
            </Link>
          </div>
        )}
      </div>

      <div className="">
        <Input
          id={labelId}
          // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6"
          name={labelId}
          type={type}
          onChange={onChange}
          value={value}
          required={required}
        />
      </div>
    </div>
  );
};

export default InputField;
