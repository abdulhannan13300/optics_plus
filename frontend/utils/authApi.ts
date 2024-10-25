import createApi from "./api";

const useAuthApi = (
  setTokens: (access: string | null, refresh: string | null) => void,
  logout: () => void
) => {
  const api = createApi(
    async () => {
      // We don't need to return a token here, as it will be sent automatically in cookies
      return null;
    },
    async () => {
      try {
        await api.post("/jwt/refresh/");
        return true; // Indicate successful refresh
      } catch (error) {
        logout();
        return false;
      }
    }
  );

  return {
    retrieveUser: () => api.get("/users/me/"),
    socialAuthenticate: (provider: string, state: string, code: string) =>
      api.post(
        `/o/${provider}/?state=${encodeURIComponent(
          state
        )}&code=${encodeURIComponent(code)}`
      ),
    register: (userData: any) => api.post("/users/", userData),
    login: (email: string, password: string) =>
      api.post("/jwt/create/", { email, password }),
    verify: () => api.post("/jwt/verify/"),
    logout: () => api.post("/logout/"),
    activate: (uid: string, token: string) =>
      api.post("/users/activation/", { uid, token }),
    resetPassword: (email: string) =>
      api.post("/users/reset_password/", { email }),
    resetPasswordConfirm: (userData: any) =>
      api.post("/users/reset_password_confirm/", userData),
  };
};

export default useAuthApi;
