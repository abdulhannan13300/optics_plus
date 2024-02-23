import { useState, ChangeEvent, FormEvent } from "react";
import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function useResetPassword() {
  const router = useRouter();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const [email, setEmail] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    resetPassword(email)
      .unwrap()
      .then(() => {
        toast.success("Request sent, check your email for reset link");
        router.push("/auth/login");
      })
      .catch(() => {
        toast.error("Failed to send request");
      });
  };

  return {
    email,
    isLoading,
    onChange,
    onSubmit,
  };
}
