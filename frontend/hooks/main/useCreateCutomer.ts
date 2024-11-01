// import createApi from "@/utils/api";
// import { title } from "process";
// import { ChangeEvent, FormEvent, useState } from "react";
// import { useToast } from "@/components/ui/use-toast";

// const useCreateCustomer = () => {
//   const { toast } = useToast();
//   const [isLoading, setIsLoading] = useState(false);
//   const api = createApi(
//     async () => null,
//     async () => false
//   );

//   const [formData, setFormData] = useState({
//     name: "",
//     contact_number: "",
//     dob: "",
//     gender: "",
//     address: "",
//     examined_by: "",
//   });

//   const { name, contact_number, dob, gender, address, examined_by } = formData;

//   const onChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const onSubmit = async (event: FormEvent<HTMLInputElement>) => {
//     event.preventDefault();
//     setIsLoading(true);

//     try {
//       await api.post("/customers", formData);
//     } catch (error) {
//       const errorMessage = (error as Error).message;
//       toast({
//         title: "Failed",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };
// };
