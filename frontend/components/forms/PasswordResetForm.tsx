"use client";

import { useResetPassword } from "@/hooks";
import { Form } from ".";
import { useState } from "react";

const PasswordResetForm = () => {
  const { executeResetPassword, isLoading, error } = useResetPassword();
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    executeResetPassword(email);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const config = [
    {
      labelText: "Email address",
      labelId: "email",
      type: "email",
      value: email,
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Request password reset"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
export default PasswordResetForm;
