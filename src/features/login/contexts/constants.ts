import { TLoginState } from "@/features/login/contexts/types";

export const LOGIN_ACTIONS = {
  LOGIN: "LOGIN" as const,
  LOGOUT: "LOGOUT" as const,
  TOGGLE_PENDING: "TOGGLE_PENDING" as const,
};

export const LOGIN_INITIAL_STATE: TLoginState = {
  password: null,
  email: null,
  id: null,
  isPending: false,
};
