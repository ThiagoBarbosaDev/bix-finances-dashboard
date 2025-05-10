import { TRANSACTION_ACTIONS } from "@/features/transaction/contexts/constants";
import { ITransaction } from "@/types";

export interface TTransactionState {
  transactions: ITransaction[];
  isPending: boolean;
}

export type TTransactionAction =
  | { type: typeof TRANSACTION_ACTIONS.SET; payload: ITransaction[] }
  | { type: typeof TRANSACTION_ACTIONS.SET_PENDING; payload: boolean };

export type TTransactionContext = [
  state: TTransactionState,
  dispatch: React.Dispatch<TTransactionAction>
];
