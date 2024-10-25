import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export const useActivation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { activate } = useAuth();

  const executeActivation = async (uid: string, token: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await activate(uid, token);
    } catch (err) {
      setError("Failed to activate account");
    } finally {
      setIsLoading(false);
    }
  };

  return { executeActivation, isLoading, error };
};
