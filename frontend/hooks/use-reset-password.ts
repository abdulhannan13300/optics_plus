import { useState, ChangeEvent, FormEvent } from "react";
import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function useResetPassword() {
  const { toast } = useToast();
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
        toast({
          title: "Request sent, check your email for reset link.",
        });
        router.push("/auth/login");
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to send request.",
        });
      });
  };

  return {
    email,
    isLoading,
    onChange,
    onSubmit,
  };
}
