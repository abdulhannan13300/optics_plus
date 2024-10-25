import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export const useSocialAuthenticate = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { socialAuthenticate } = useAuth();

  const executeSocialAuthenticate = async (
    provider: string,
    state: string,
    code: string
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      await socialAuthenticate(provider, state, code);
      toast({
        title: "Logged in successfully.",
      });
      console.log("Logged in successfully.");
      router.push("/dashboard");
    } catch (err) {
      setError("Failed to authenticate");
    } finally {
      setIsLoading(false);
    }
  };

  return { executeSocialAuthenticate, isLoading, error };
};
