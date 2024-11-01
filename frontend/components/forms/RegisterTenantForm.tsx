import useRegisterTenant from "@/hooks/useRegisterTenant";
import React from "react";
import { Form } from "@/components/forms";

const RegisterTenant = () => {
  const { name, contact_number, isLoading, onChange, onSubmit } =
    useRegisterTenant();

  const config = [
    {
      labelId: "name",
      labelText: "Shop name",
      type: "text",
      value: name,
      required: true,
    },
    {
      labelId: "contact_number",
      labelText: "Contact number",
      type: "text",
      value: contact_number,
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Create Shop"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterTenant;
