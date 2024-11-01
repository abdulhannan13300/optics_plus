import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/components/ui/use-toast";

export const useResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { resetPassword } = useAuth();

  const executeResetPassword = async (email: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await resetPassword(email);
      toast({
        title: "Password Reset email sent",
        variant: "success",
      });
    } catch (err) {
      toast({
        title: "Failed.",
        description: "Failed to reset password.",
        variant: "destructive",
      });
      setError("Failed to reset password");
    } finally {
      setIsLoading(false);
    }
  };

  return { executeResetPassword, isLoading, error };
};
