import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import useAuthApi from "@/utils/authApi";
import { useAuth } from "@/contexts/AuthContext";

export const useRegister = () => {
  const router = useRouter();
  const { setTokens } = useAuth();
  const authApi = useAuthApi(null, null, setTokens, () => {});

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
      alert("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      await authApi.register(formData);
      router.push("/auth/login");
    } catch (error) {
      console.error("Registration failed:", error);
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
