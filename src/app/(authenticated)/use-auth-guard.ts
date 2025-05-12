import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setCookieByKey } from "@/actions/cookies";
import { COOKIES_KEYS } from "@/constants";
import { useLoginActions } from "@/features/login/hooks/use-login-actions";

export const useAuthGuard = () => {
  const router = useRouter();
  const { getLoggedUser } = useLoginActions();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const authGuard = async () => {
      setIsPending(true);
      const user = await getLoggedUser();

      if (!user) {
        await setCookieByKey(
          COOKIES_KEYS.TOAST,
          `You must be logged in to access this page`
        );
        router.push("/login");
        setIsPending(false);
      }
    };
    authGuard();
  }, [getLoggedUser, router]);

  return { isPending };
};
