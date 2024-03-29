import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { useToast } from "@/components/ui/use-toast";

export default function useRegister() {
  const { toast } = useToast();
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    // username: "",
    email: "",
    password: "",
    re_password: "",
  });

  // const { first_name, last_name, email, username, password, re_password } =
  //   formData;
  const { first_name, last_name, email, password, re_password } = formData;
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    register({
      first_name,
      last_name,
      email,
      // username,
      password,
      re_password,
    })
      .unwrap()
      .then(() => {
        toast({
          title: "Please check email to verify account.",
        });
        router.push("/auth/login");
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to register account.",
        });
      });
  };

  return {
    first_name,
    last_name,
    email,
    // username,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
  };
}
