import axios from "axios";

const createApi = (
  getToken: () => Promise<string | null>,
  refreshToken: () => Promise<boolean>
) => {
  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_HOST}/api/v1`,
    withCredentials: true,
  });

  api.interceptors.request.use(
    async (config) => {
      // We don't need to set the Authorization header manually
      // as the cookie will be sent automatically
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const success = await refreshToken();
        if (success) {
          return api(originalRequest);
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
};

export default createApi;
