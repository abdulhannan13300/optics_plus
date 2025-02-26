"use client";

import { Spinner } from "@/components/common";
import { useSocialAuthenticate } from "@/hooks/useSocialAuthenticate";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { executeSocialAuthenticate, isLoading, error } =
    useSocialAuthenticate();

  useEffect(() => {
    const authenticateGoogle = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const state = urlParams.get("state");
      const code = urlParams.get("code");

      if (state && code) {
        await executeSocialAuthenticate("google-oauth2", state, code);
      } else {
        router.push("/auth/login");
      }
    };

    authenticateGoogle();
  }, []);

  if (isLoading) {
    return (
      <div className="my-8">
        <Spinner lg />
      </div>
    );
  }

  if (error) {
    return <div>Authentication failed. Please try again.</div>;
  }

  return null;
};

export default Page;
