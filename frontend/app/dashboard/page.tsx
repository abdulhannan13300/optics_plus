"use client";

import { List, Spinner } from "@/components/common";
import { Card, CardHeader } from "@/components/ui/card";
import useCurrentShop from "@/hooks/useCurrentTenant";
import { useRetrieveUser } from "@/hooks/useRetrieveUser";

const Page = () => {
  const { user, isLoading, error } = useRetrieveUser();
  const { shop, loading: shopLoading, error: shopError } = useCurrentShop();

  if (isLoading || shopLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  return (
    <Card>
      <header className="shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
        <CardHeader>
          {shop ? (
            <div>
              <h2>Shop Name: {shop.name}</h2>
            </div>
          ) : (
            <div>No shop found.</div>
          )}
        </CardHeader>

        <List
          config={[
            { label: "First Name", value: user?.first_name },
            { label: "Last Name", value: user?.last_name },
            { label: "Email", value: user?.email },
          ]}
        />
      </main>
    </Card>
  );
};

export default Page;
