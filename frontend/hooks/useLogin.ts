import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import useCurrentShop from "./useCurrentTenant";

export const useLogin = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
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

  const executeLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await login(email, password);
      toast({
        title: "Logged in successfully.",
        variant: "success",
      });

      // Set login successful to trigger the navigation effect
      setLoginSuccessful(true);
    } catch (err) {
      setError("Failed to login");
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { executeLogin, isLoading, error };
};
