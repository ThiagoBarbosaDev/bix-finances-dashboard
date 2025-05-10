import { TTransactionState } from "@/features/transaction/contexts/types";

export const TRANSACTION_ACTIONS = {
  SET: "SET_TRANSACTIONS" as const,
  GET: "GET_TRANSACTIONS" as const,
  SET_PENDING: "SET_PENDING_TRANSACTIONS" as const,
};

export const TRANSACTION_INITIAL_STATE: TTransactionState = {
  transactions: [],
  isPending: true,
};
