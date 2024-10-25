import Link from "next/link";
import { RegisterForm } from "@/components/forms";
import { SocialButtons } from "@/components/common";
import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Optics Plus | Register",
  description: "Optics Plus register page",
};

const Page = () => {
  return (
    <div className="flex min-h-full flex-1 justify-center px-6 py-6 lg:px-4">
      <Card className="w-[550px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <CardHeader>
            <CardTitle className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Sign up for your account
            </CardTitle>
          </CardHeader>
        </div>
        <CardContent>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <RegisterForm />
            <SocialButtons />

            <p className="mt-5 mb-10 text-center text-sm ">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-semibold leading-6 hover:text-muted-foreground"
              >
                Login here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
