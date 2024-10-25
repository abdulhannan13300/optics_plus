import { useEffect, useState } from "react";
import createApi from "@/utils/api"; // Import the function that creates the API instance
import { useAuth } from "@/contexts/AuthContext"; // Import useAuth to get the access token

interface Shop {
  id: number;
  name: string;
  // Add other shop properties as needed
}

const useCurrentShop = () => {
  const [shop, setShop] = useState<Shop | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, user } = useAuth(); // Get both isAuthenticated and user

  // Create the API instance
  const api = createApi(
    async () => null, // We don't need to return a token as we're using cookies
    async () => false // Simple refresh function, you might want to implement proper refresh logic
  );

  useEffect(() => {
    const fetchCurrentShop = async () => {
      if (!isAuthenticated || !user) {
        setShop(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        // Assuming there's an endpoint that returns the current user's shop
        const response = await api.get("/shops/");
        setShop(response.data);
      } catch (err) {
        console.error("Error fetching current shop:", err);
        setError("Failed to fetch current shop details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentShop();
  }, [isAuthenticated, user]); // Depend on both isAuthenticated and user

  return { shop, loading, error };
};

export default useCurrentShop;
