import { ChangeEvent, FormEvent, useState } from "react";
import createApi from "@/utils/api"; // Import the createApi function
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const useCreateCustomer = () => {
  const { toast } = useToast();
  const router = useRouter();
  const api = createApi(
    async () => null, // We don't need to return a token as we're using cookies
    async () => false // Simple refresh function, you might want to implement proper refresh logic
  );

  const initialFormData = {
    customer_name: "",
    contact_number: "",
    dob: "",
    gender: "",
    address: "",
    examined_by: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData(initialFormData); // Reset to initial values
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await api.post("/customers/", formData); // Send the form data to the backend
      toast({
        title: "Customer created successfully.",
        variant: "success",
      });
      // router.push("/customers"); // Redirect to the customers page or another appropriate page
    } catch (error) {
      const errorMessage = (error as Error).message; // Type assertion to Error
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
    customer_name: formData.customer_name,
    contact_number: formData.contact_number,
    dob: formData.dob,
    gender: formData.gender,
    address: formData.address,
    examined_by: formData.examined_by,
    isLoading,
    onChange,
    onSubmit,
    resetForm, // Return the reset function
  };
};

export default useCreateCustomer;
