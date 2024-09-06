import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useResetPasswordConfirmMutation } from "@/redux/features/authApiSlice";
import { useToast } from "@/components/ui/use-toast";

export default function useResetPasswordConfirm(uid: string, token: string) {
  const { toast } = useToast();

  const router = useRouter();

  const [resetPasswordConfirm, { isLoading }] =
    useResetPasswordConfirmMutation();
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    resetPasswordConfirm({ uid, token, new_password, re_new_password })
      .unwrap()
      .then(() => {
        toast({
          title: "Password Reset Successful.",
        });
        router.push("/auth/login");
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to reset password.",
        });
      });
  };

  return {
    new_password,
    re_new_password,
    isLoading,
    onChange,
    onSubmit,
  };
}
