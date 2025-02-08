import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import createApi from "@/utils/api";
import { useRouter } from "next/navigation";

interface Customer {
  id: string;
  customer_name: string;
  contact: string;
  // Add other shop properties as needed
}

export const useGetAllCustomers = () => {
  const { toast } = useToast();
  const router = useRouter();

  const api = createApi(
    async () => null, // We don't need to return a token as we're using cookies
    async () => false // Simple refresh function, you might want to implement proper refresh logic
  );

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, checkAuthStatus } = useAuth();
  const [customer, setCustomer] = useState<Customer[]>([]);

  useEffect(() => {
    const getAllCustomer = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await api.get("/customers/"); // Send the form data to the backend
        setCustomer(response.data);
        console.log("Customer data: ", response.data);
      } catch (err) {
        setError("Failed to retrieve customers");
      } finally {
        setIsLoading(false);
      }
    };

    getAllCustomer();
  }, [checkAuthStatus]);

  return { customer, user, isLoading, error };
};

export default useGetAllCustomers;
