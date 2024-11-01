import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

export const useResetPasswordConfirm = () => {
  const { toast } = useToast();
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
      const errorMessage = (err as Error).message; // Type assertion to Error
      toast({
        title: "Failed",
        description: errorMessage,
        variant: "destructive",
      });
      setError("Failed to confirm password reset");
    } finally {
      setIsLoading(false);
    }
  };

  return { executeResetPasswordConfirm, isLoading, error };
};
