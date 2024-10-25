import { PasswordResetConfirmForm } from "@/components/forms";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optics Plus | Password Reset Confirm",
  description: "Optics Plus password reset confirm page",
};

interface Props {
  params: {
    uid: string;
    token: string;
  };
}

const Page = ({ params: { uid, token } }: Props) => {
  return (
    <div className="">
      <div className="flex min-h-full flex-1 justify-center px-6 py-12 lg:px-8">
        <Card className="w-[550px]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <CardHeader>
              <CardTitle className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
                Reset your password
              </CardTitle>
            </CardHeader>
          </div>
          <CardContent>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <PasswordResetConfirmForm uid={uid} token={token} />
            </div>
          </CardContent>
          <div className="mb-10 pb-6"></div>
        </Card>
      </div>
    </div>
  );
};

export default Page;
