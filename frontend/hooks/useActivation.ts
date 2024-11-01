import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

export const useActivation = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { activate } = useAuth();

  const executeActivation = async (uid: string, token: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await activate(uid, token);
    } catch (err) {
      toast({
        title: "Failed.",
        description: "Failed to activate account.",
        variant: "destructive",
      });
      setError("Failed to activate account");
    } finally {
      setIsLoading(false);
    }
  };

  return { executeActivation, isLoading, error };
};
