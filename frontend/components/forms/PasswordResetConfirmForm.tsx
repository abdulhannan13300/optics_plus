"use client";

import { useResetPasswordConfirm } from "@/hooks";
import { Form } from ".";
import { useState } from "react";

interface Props {
  uid: string;
  token: string;
}

const PasswordResetConfirmForm = ({ uid, token }: Props) => {
  const { executeResetPasswordConfirm, isLoading, error } =
    useResetPasswordConfirm();
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    executeResetPasswordConfirm({ ...formData, uid, token });
  };

  const config = [
    {
      labelText: "New Password",
      labelId: "new_password",
      type: "password",
      value: formData.new_password,
      required: true,
    },
    {
      labelText: "Confirm New Password",
      labelId: "re_new_password",
      type: "password",
      value: formData.re_new_password,
      required: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Reset Password"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
export default PasswordResetConfirmForm;
