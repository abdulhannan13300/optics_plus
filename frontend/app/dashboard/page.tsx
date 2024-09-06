"use client";

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { List, Spinner } from "@/components/common";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
// import useCurrentShop from "@/hooks/useCurrentShop";

export default function Page() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  // const currentShop = useCurrentShop();

  // useEffect(() => {
  // const fetchData = async () => {
  //   if (currentShop) {
  //     const response = await fetch(
  //       `/api/v1/customers?shop_id=${currentShop}`
  //     ); // Adjust the endpoint as needed
  //     const data = await response.json();
  //     console.log(data);
  //   }
  // };

  //   fetchData();
  // }, [currentShop]);
  const config = [
    {
      label: "First Name",
      value: user?.first_name,
    },
    {
      label: "Last Name",
      value: user?.last_name,
    },
    {
      label: "Email",
      value: user?.email,
    },
  ];

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  return (
    <Card>
      <header className=" shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight ">Dashboard</h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
        <List config={config} />
      </main>
    </Card>
  );
}
// pages/dashboard.tsx

// const Dashboard: React.FC = () => {

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {/* Render dashboard content */}
//     </div>
//   );
// };
