import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth } from "@/redux/features/authSlice";
import { useToast } from "@/components/ui/use-toast";

export default function useSocialAuth(authenticate: any, provider: string) {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const router = useRouter();
  // const searchParams = useSearchParams();

  const effectRan = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const state = params.get("state");
    const code = params.get("code");

    // const state = searchParams.get("state");
    // const code = searchParams.get("code");

    if (state && code && !effectRan.current) {
      authenticate({ provider, state, code })
        .unwrap()
        .then(() => {
          dispatch(setAuth());
          toast({
            title: "Logged in successfully.",
          });
          router.push("/dashboard");
        })
        .catch(() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
          router.push("/auth/login");
        });
    }

    return () => {
      effectRan.current = true;
    };
  }, [authenticate, provider]);
}
