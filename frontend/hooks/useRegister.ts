import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import useAuthApi from "@/utils/authApi";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

export const useRegister = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { setTokens } = useAuth();
  const authApi = useAuthApi(setTokens, () => router.push);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (password !== re_password) {
      toast({
        title: "Failed",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      await authApi.register(formData);
      toast({
        title: "Registered successfully.",
        description: "Please check your email to activate account.",
        variant: "success",
      });
      router.push("/auth/login");
    } catch (err) {
      const errorMessage = (err as Error).message; // Type assertion to Error
      toast({
        title: "Failed",
        description: errorMessage,
        variant: "destructive",
      });
      // console.error("Registration failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
  };
};
