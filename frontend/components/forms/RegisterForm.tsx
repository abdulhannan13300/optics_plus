"use client";

import React from "react";
import { useRegister } from "@/hooks/useRegister";
import { Form } from "@/components/forms";

const RegisterForm = () => {
  const {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
  } = useRegister();

  const config = [
    {
      labelId: "first_name",
      labelText: "First Name",
      type: "text",
      value: first_name,
      required: true,
    },
    {
      labelId: "last_name",
      labelText: "Last Name",
      type: "text",
      value: last_name,
      required: true,
    },
    {
      labelId: "email",
      labelText: "Email address",
      type: "email",
      value: email,
      required: true,
    },
    {
      labelId: "password",
      labelText: "Password",
      type: "password",
      value: password,
      required: true,
    },
    {
      labelId: "re_password",
      labelText: "Confirm Password",
      type: "password",
      value: re_password,
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Sign up"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
