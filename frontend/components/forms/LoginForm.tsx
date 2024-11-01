"use client";

import React from "react";
import { Form } from "@/components/forms";
import { useLogin } from "@/hooks";
import useCurrentShop from "@/hooks/useCurrentTenant";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const { executeLogin, isLoading } = useLogin();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { shop, loading: shopLoading, error: shopError } = useCurrentShop();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await executeLogin(email, password);
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
