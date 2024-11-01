import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import createApi from "@/utils/api"; // Import the createApi function
import { useToast } from "@/components/ui/use-toast";

const useRegisterTenant = () => {
  const { toast } = useToast();
  const router = useRouter();

  // Create the API instance
  const api = createApi(
    async () => null, // We don't need to return a token as we're using cookies
    async () => false // Simple refresh function, you might want to implement proper refresh logic
  );

  const [formData, setFormData] = useState({
    name: "",
    contact_number: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { name, contact_number } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Directly call the API to register the tenant
      await api.post("/shops/", formData);
      toast({
        title: "Shop registered successfully.",
        variant: "success",
      });
      router.push("/dashboard"); // Redirect to dashboard after registration
    } catch (err) {
      const errorMessage = (err as Error).message; // Type assertion to Error
      toast({
        title: "Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    name,
    contact_number,
    isLoading,
    onChange,
    onSubmit,
  };
};

export default useRegisterTenant;
