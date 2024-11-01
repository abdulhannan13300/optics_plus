"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import useAuthApi from "@/utils/authApi";

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: any) => Promise<void>;
  socialAuthenticate: (
    provider: string,
    state: string,
    code: string
  ) => Promise<void>;
  activate: (uid: string, token: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  resetPasswordConfirm: (userData: any) => Promise<void>;
  setTokens: (access: string | null, refresh: string | null) => void;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const setTokens = (access: string | null, refresh: string | null) => {
    setIsAuthenticated(!!access);
  };

  const authApi = useAuthApi(setTokens, () => {
    setIsAuthenticated(false);
    setUser(null);
  });

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const userData = await authApi.retrieveUser();
      setUser(userData.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Auth status check failed:", error);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await authApi.login(email, password);
      setIsAuthenticated(true);
      await checkAuthStatus(); // Fetch user data after successful login
    } catch (error) {
      // console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const register = async (userData: any) => {
    try {
      return await authApi.register(userData);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  const socialAuthenticate = async (
    provider: string,
    state: string,
    code: string
  ) => {
    try {
      await authApi.socialAuthenticate(provider, state, code);
      setIsAuthenticated(true);
      await checkAuthStatus();
    } catch (error) {
      console.error("Social authentication failed:", error);
      throw error;
    }
  };

  const activate = async (uid: string, token: string) => {
    try {
      return await authApi.activate(uid, token);
    } catch (error) {
      console.error("Account activation failed:", error);
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      return await authApi.resetPassword(email);
    } catch (error) {
      console.error("Password reset request failed:", error);
      throw error;
    }
  };

  const resetPasswordConfirm = async (userData: any) => {
    try {
      return await authApi.resetPasswordConfirm(userData);
    } catch (error) {
      console.error("Password reset confirmation failed:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login: async (email: string, password: string) => {
          const response = await login(email, password);
          return;
        },
        logout,
        register: async (userData: any) => {
          const response = await register(userData);
          return;
        },
        socialAuthenticate: async (
          provider: string,
          state: string,
          code: string
        ) => {
          await socialAuthenticate(provider, state, code);
          return;
        },
        activate: async (uid: string, token: string) => {
          await activate(uid, token);
          return;
        },
        resetPassword: async (email: string) => {
          await resetPassword(email);
          return;
        },
        resetPasswordConfirm: async (userData: any) => {
          await resetPasswordConfirm(userData);
          return;
        },
        setTokens,
        checkAuthStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
