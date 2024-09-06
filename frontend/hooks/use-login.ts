import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { setAuth } from "@/redux/features/authSlice";
import { useToast } from "@/components/ui/use-toast";

// import { toast } from "react-toastify";

export default function useLogin() {
  const { toast } = useToast();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login({
      email,
      password,
    })
      .unwrap()
      .then(() => {
        dispatch(setAuth());
        toast({
          title: "Logged in successfully.",
        });
        // router.push("/onboarding");
        router.push("/dashboard");
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      });
  };

  return {
    email,
    password,
    isLoading,
    onChange,
    onSubmit,
  };
}
