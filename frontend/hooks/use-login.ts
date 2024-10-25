import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const executeLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await login(email, password);
      toast({
        title: "Logged in successfully.",
      });
      console.log("Logged in successfully.");
      router.push("/dashboard");
    } catch (err) {
      setError("Failed to login");
    } finally {
      setIsLoading(false);
    }
  };

  return { executeLogin, isLoading, error };
};
