import { createContext, useMemo, useReducer } from "react";
import { LOGIN_INITIAL_STATE } from "@/features/login/contexts/constants";
import { loginReducer } from "@/features/login/contexts/login-reducer";
import { TLoginContext } from "@/features/login/contexts/types";

export const LoginContext = createContext<TLoginContext>([
  LOGIN_INITIAL_STATE,
  () => null,
]);

type TLoginProviderProps = {
  children: React.ReactNode;
};

export const LoginStateProvider = ({ children }: TLoginProviderProps) => {
  const [state, dispatch] = useReducer(loginReducer, LOGIN_INITIAL_STATE);

  const memoLoginData = useMemo(
    () => [state, dispatch],
    [state, dispatch]
  ) satisfies TLoginContext;

  return (
    <LoginContext.Provider value={memoLoginData}>
      {children}
    </LoginContext.Provider>
  );
};
