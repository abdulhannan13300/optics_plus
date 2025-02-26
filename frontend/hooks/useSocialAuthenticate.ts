import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import useCurrentShop from "./useCurrentTenant";

export const useSocialAuthenticate = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { socialAuthenticate } = useAuth();
  const { shop, loading: shopLoading } = useCurrentShop();
  // Add a state to track successful login
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  // Handle navigation after login and shop status is known
  useEffect(() => {
    if (loginSuccessful && !shopLoading) {
      if (shop) {
        router.push("/dashboard");
        console.log("Redirecting to dashboard.");
      } else {
        router.push("/onboarding");
        console.log("Redirecting to onboarding.");
      }
      // Reset login successful state
      setLoginSuccessful(false);
    }
  }, [loginSuccessful, shopLoading, shop, router]);

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
        variant: "success",
      });
      // console.log("Logged in successfully.");
      setLoginSuccessful(true);
    } catch (err) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
      setError("Failed to authenticate");
    } finally {
      setIsLoading(false);
    }
  };

  return { executeSocialAuthenticate, isLoading, error };
};
