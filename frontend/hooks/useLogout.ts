import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export const useLogout = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { logout } = useAuth();
  const router = useRouter();

  const executeLogout = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await logout();
      router.push("/auth/login");
    } catch (err) {
      toast({
        title: "Logout failed",
        variant: "destructive",
      });
      setError("Failed to logout");
    } finally {
      setIsLoading(false);
    }
  };

  return { executeLogout, isLoading, error };
};
