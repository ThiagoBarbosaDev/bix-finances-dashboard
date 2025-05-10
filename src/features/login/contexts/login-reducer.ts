import {
  LOGIN_ACTIONS,
  LOGIN_INITIAL_STATE,
} from "@/features/login/contexts/constants";
import { TLoginState, TLoginAction } from "@/features/login/contexts/types";

export const loginReducer = (
  state: TLoginState,
  action: TLoginAction
): TLoginState => {
  switch (action.type) {
    case LOGIN_ACTIONS.LOGIN:
      return { ...state, ...action.payload };
    case LOGIN_ACTIONS.LOGOUT:
      return LOGIN_INITIAL_STATE;
    case LOGIN_ACTIONS.TOGGLE_PENDING: {
      return { ...state, isPending: !state.isPending };
    }
    default:
      return state;
  }
};
