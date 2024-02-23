"use client";

import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import { Spinner } from "../common";

interface Props {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  if (!isAuthenticated) {
    // toast.error("Must be logged in");
    redirect("/auth/login");
  }

  return <>{children}</>;
}
