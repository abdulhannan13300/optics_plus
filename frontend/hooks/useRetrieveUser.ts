import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

export const useRetrieveUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, checkAuthStatus } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // await checkAuthStatus();
        // The actual user retrieval is done in the AuthContext
        // This hook just triggers the check and exposes the user state
      } catch (err) {
        setError("Failed to retrieve user");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [checkAuthStatus]);

  return { user, isLoading, error };
};
