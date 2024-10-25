import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { logout } = useAuth();

  const executeLogout = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await logout();
    } catch (err) {
      setError("Failed to logout");
    } finally {
      setIsLoading(false);
    }
  };

  return { executeLogout, isLoading, error };
};
