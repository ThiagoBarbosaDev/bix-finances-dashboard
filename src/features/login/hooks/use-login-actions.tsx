import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import {
  deleteCookieByKey,
  getCookieByKey,
  setCookieByKey,
} from "@/actions/cookies";
import { COOKIES_KEYS, USERS } from "@/constants";
import { LOGIN_ACTIONS } from "@/features/login/contexts/constants";
import { dashboardPath } from "@/path";
import { useLogin } from "../contexts/use-login";

type TPersistUser = {
  email: string;
  password: string;
};

export const useLoginActions = () => {
  const [loginState, loginStateDispatch] = useLogin();
  const router = useRouter();
  const toast = useToast();

  const getLoggedUser = async (id: string) => {
    return await getCookieByKey(id);
  };

  const getUserByAuth = (email: string, password: string) => {
    const user = USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      toast({
        title: "Email ou senha inválidos",
        description: "Verifique suas credenciais e tente novamente.",
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
      await setCookieByKey(COOKIES_KEYS.TOAST, "Login realizado com sucesso");
      router.push(dashboardPath());
    }
  };

  const logout = async () => {
    if (loginState.id) {
      loginStateDispatch({ type: LOGIN_ACTIONS.LOGOUT });
      const userId = await getLoggedUser(loginState.id);
      if (userId) {
        deleteCookieByKey(userId);
      }
    }
  };

  return { login, logout };
};
