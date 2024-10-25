import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/components/ui/use-toast";

export const useResetPasswordConfirm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { resetPasswordConfirm } = useAuth();

  const executeResetPasswordConfirm = async (userData: any) => {
    setIsLoading(true);
    setError(null);
    try {
      await resetPasswordConfirm(userData);
      toast({
        title: "Password Reset Successful.",
      });
    } catch (err) {
      setError("Failed to confirm password reset");
    } finally {
      setIsLoading(false);
    }
  };

  return { executeResetPasswordConfirm, isLoading, error };
};
