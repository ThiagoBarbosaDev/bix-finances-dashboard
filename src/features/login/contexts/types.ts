import { LOGIN_ACTIONS } from "@/features/login/contexts/constants";

interface IUserData {
  id: string | null;
  password: string | null;
  email: string | null;
}

export interface TLoginState extends IUserData {
  isPending: boolean;
}

export type TLoginAction =
  | {
      type: typeof LOGIN_ACTIONS.LOGIN;
      payload: IUserData;
    }
  | { type: typeof LOGIN_ACTIONS.LOGOUT }
  | {
      type: typeof LOGIN_ACTIONS.TOGGLE_PENDING;
    };

export type TLoginContext = [
  state: TLoginState,
  dispatch: React.Dispatch<TLoginAction>
];
