import { LoginForm } from "@/components/forms";
import { SocialButtons } from "@/components/common";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optics Plus | Login",
  description: " Optics Plus login page",
};

export default function page() {
  //custom hook

  return (
    <div className="flex min-h-full flex-1 justify-center lg:px-8">
      <Card className="w-[400px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Optics Plus"
        /> */}
          <CardHeader className="text-center">
            <CardTitle className="text-center text-2xl font-bold leading-9 tracking-tight">
              Sign into your account
            </CardTitle>
          </CardHeader>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />
          <SocialButtons />
          <p className="mt-1 mb-6 text-center text-sm ">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="font-semibold leading-6 hover:text-muted-foreground"
            >
              Register here
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
