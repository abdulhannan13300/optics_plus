"use client";

import React from "react";
import { useEffect } from "react";
import { useActivationMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
   params: {
      uid: string;
      token: string;
   };
}

const page = ({ params }: Props) => {
   const router = useRouter();
   const [activation] = useActivationMutation();

   useEffect(() => {
      const { uid, token } = params;

      activation({ uid, token })
         .unwrap()
         .then(() => {
            toast.success("Account Activated");
         })
         .catch(() => {
            toast.error("Failed to activate account");
         })
         .finally(() => {
            router.push("/auth/login");
         });
   }, []);

   return (
      <div className="flex min-h-full flex-1 justify-center px-6 py-12 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
               Activating your account....
            </h1>
         </div>
      </div>
   );
};

export default page;
