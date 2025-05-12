import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  deleteCookieByKey,
  getCookieByKey,
  setCookieByKey,
} from "@/actions/cookies";
import { COOKIES_KEYS, USERS } from "@/constants";
import { LOGIN_ACTIONS } from "@/features/login/contexts/constants";
import { useLogin } from "@/features/login/contexts/use-login";
import { dashboardPath, loginPath } from "@/path";

type TPersistUser = {
  email: string;
  password: string;
};

export const useLoginActions = () => {
  const [loginState, loginStateDispatch] = useLogin();
  const router = useRouter();
  const toast = useToast();

  const getLoggedUser = useCallback(async () => {
    return await getCookieByKey(COOKIES_KEYS.USER);
  }, []);

  const getUserByAuth = (email: string, password: string) => {
    const user = USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      toast({
        title: "Invalid email or password",
        description: "Verify your credentials and try again",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
    return user;
  };

  const login = async ({ email, password }: TPersistUser) => {
    const user = getUserByAuth(email, password);

    if (user) {
      loginStateDispatch({ type: LOGIN_ACTIONS.LOGIN, payload: user });
      await setCookieByKey(COOKIES_KEYS.USER, user.id);
      await setCookieByKey(
        COOKIES_KEYS.TOAST,
        `You have logged in successfully`
      );
      router.push(dashboardPath());
    }
  };

  const logout = async () => {
    if (loginState.id) {
      const userId = await getLoggedUser();
      loginStateDispatch({ type: LOGIN_ACTIONS.LOGOUT });

      if (userId) {
        deleteCookieByKey(userId);
        await setCookieByKey(
          COOKIES_KEYS.TOAST,
          "You have logged out successfully"
        );
        router.push(loginPath());
      }
    }
  };

  return { login, logout, getLoggedUser };
};
