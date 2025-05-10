import { useContext } from "react";
import { LoginContext } from "./login-context";

export const useLogin = () => {
  const data = useContext(LoginContext);

  if (!data) {
    throw new Error("useLogin must be used inside of a login provider");
  }

  return data;
};
