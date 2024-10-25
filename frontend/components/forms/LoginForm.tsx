"use client";

import React from "react";
import { Form } from "@/components/forms";
import { useLogin } from "@/hooks";

const LoginForm = () => {
  const { executeLogin, isLoading, error } = useLogin();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    executeLogin(email, password);
  };

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
