import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateNewTenantField,
  registerTenant,
  clearNewTenant,
} from "@/redux/features/tenantSlice";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { useAppSelector } from "@/redux/hooks";

interface NewTenantState {
  newTenant: { name: string; schemaName: string };
  error: string | null;
  loading: boolean;
}

const RegisterTenant: React.FC = () => {
  const dispatch = useDispatch();
  const tenantState: NewTenantState = useAppSelector((state) => state.tenant);
  const authState = useAppSelector((state) => state.auth);

  const [login, { isLoading: loginLoading, error: loginError }] =
    useLoginMutation();
  const [name, setName] = useState("");
  const [schemaName, setSchemaName] = useState("");

  useEffect(() => {
    return () => dispatch(clearNewTenant());
  }, [dispatch]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if user is logged in
    if (!authState.isAuthenticated) {
      // Login if not and attempt register after successful login
      await login({
        email: "your_email@example.com",
        password: "your_password",
      });
      if (!loginError) {
        dispatch(registerTenant({ name, schemaName }));
      }
      return;
    }

    dispatch(registerTenant({ name, schemaName }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Shop Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="schemaName">Schema Name</label>
      <input
        type="text"
        id="schemaName"
        value={schemaName}
        onChange={(e) => setSchemaName(e.target.value)}
      />
    </form>
  );
};
