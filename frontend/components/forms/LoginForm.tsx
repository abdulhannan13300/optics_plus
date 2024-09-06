"use client";

import React from "react";
import { Form } from "@/components/forms";
import { useLogin } from "@/hooks";

const LoginForm = () => {
  const { email, password, isLoading, onChange, onSubmit } = useLogin();

  const config = [
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
      link: {
        linkText: "Forgot password?",
        linkUrl: "/password-reset",
      },
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Sign in"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
