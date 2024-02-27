// import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
// import { useAppSelector } from "@/redux/hooks";
// import React from "react";

// export default function page() {
//   const { data: user, isLoading } = useRetrieveUserQuery();
//   return <div>page</div>;

//   // const user = useAppSelector((state) => state.auth.user);
//   const hasTenants = useAppSelector((state) => state.tenants.tenants.length > 0);

//   // ... rest of your component

//   if (user.is_active && !hasTenants) {
//     return <Redirect to="/tenant/create" />; // Redirect to tenant creation
//   }

//   // ... other logic if user has existing tenants
// };

export default function page() {
  return (
    <div>
      <h1>Onboarding</h1>
    </div>
  );
}
