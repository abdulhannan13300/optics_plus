import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

export const useVerify = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const verifyAuth = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // The actual verification is done in the AuthContext
        // This hook just exposes the authentication state
      } catch (err) {
        setError("Failed to verify authentication");
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, []);

  return { isAuthenticated, isLoading, error };
};
