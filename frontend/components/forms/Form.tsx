"use client";

import { ChangeEvent, FormEvent } from "react";
import { InputField } from "@/components/forms";
import { Spinner } from "@/components/common";

import { Button } from "@/components/ui/button";

interface Config {
  labelId: string;
  labelText: string;
  type: string;
  value: string;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
}

interface Props {
  config: Config[];
  isLoading: boolean;
  btnText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ config, isLoading, btnText, onChange, onSubmit }: Props) => {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {config.map((input) => (
        <InputField
          key={input.labelId}
          labelId={input.labelId}
          type={input.type}
          onChange={onChange}
          value={input.value}
          link={input.link}
          required={input.required}
        >
          {input.labelText}
        </InputField>
      ))}
      <div className="mx-8">
        <Button
          type="submit"
          className="flex w-full justify-center px-3 py-1.5"
          disabled={isLoading}
        >
          {isLoading ? <Spinner sm /> : `${btnText}`}
        </Button>
      </div>
    </form>
  );
};

export default Form;
