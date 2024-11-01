"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RegisterTenantForm from "@/components/forms/RegisterTenantForm";

const Page = () => {
  return (
    <div className="flex min-h-full flex-1 justify-center px-6 py-6 lg:px-4">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Create Your Shop
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <RegisterTenantForm />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
