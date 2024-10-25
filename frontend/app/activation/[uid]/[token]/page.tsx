"use client";

import React, { useEffect } from "react";
import { useActivation } from "@/hooks/useActivation";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface Props {
  params: {
    uid: string;
    token: string;
  };
}

const Page = ({ params }: Props) => {
  const router = useRouter();
  const { executeActivation, isLoading, error } = useActivation();

  useEffect(() => {
    const { uid, token } = params;

    const activateAccount = async () => {
      try {
        await executeActivation(uid, token);
        // Toast is removed as it's not part of the new setup
        // You might want to add a success message here
      } catch (err) {
        // Error handling is done in the hook
      } finally {
        router.push("/auth/login");
      }
    };

    activateAccount();
  }, [params, executeActivation, router]);

  return (
    <Alert className="flex min-h-full flex-1 justify-center items-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Terminal className="h-4 w-4" />
        <AlertTitle className="text-2xl font-bold leading-9 tracking-tight">
          Heads up!
        </AlertTitle>
        <AlertDescription className="text-xl font-bold">
          {isLoading
            ? "Activating your account..."
            : error || "Account activated successfully!"}
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default Page;
