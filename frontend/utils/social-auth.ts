import { toast } from "react-toastify";

const socialAuth = async (provider: string, redirect: string) => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_HOST
    }/api/v1/o/${provider}/?redirect_uri=${
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_REDIRECT_URL
        : "http://localhost:3000"
    }/auth/${redirect}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    if (res.status === 200 && typeof window !== "undefined") {
      window.location.replace(data.authorization_url);
    } else {
      toast.error("Something went wrong during social auth");
    }
  } catch (error) {
    toast.error("Something went wrong during social auth");
  }
};

export default socialAuth;
