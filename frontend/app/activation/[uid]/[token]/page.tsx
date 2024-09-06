"use client";

import React from "react";
import { useEffect } from "react";
import { useActivationMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface Props {
  params: {
    uid: string;
    token: string;
  };
}

export default function page({ params }: Props) {
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
    <Alert className="flex min-h-full flex-1 justify-center items-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Terminal className="h-4 w-4" />
        <AlertTitle className=" text-2xl font-bold leading-9 tracking-tight">
          Heads up!
        </AlertTitle>
        <AlertDescription className="text-xl font-bold">
          Activating your account....
        </AlertDescription>
      </div>
    </Alert>
  );
}
