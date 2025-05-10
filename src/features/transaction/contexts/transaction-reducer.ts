import { TRANSACTION_ACTIONS } from "@/features/transaction/contexts/constants";
import {
  TTransactionAction,
  TTransactionState,
} from "@/features/transaction/contexts/types";

export const transactionReducer = (
  state: TTransactionState,
  action: TTransactionAction
): TTransactionState => {
  switch (action.type) {
    case TRANSACTION_ACTIONS.SET:
      return { ...state, transactions: action.payload };
    case TRANSACTION_ACTIONS.SET_PENDING: {
      return { ...state, isPending: action.payload };
    }
    default:
      return state;
  }
};
