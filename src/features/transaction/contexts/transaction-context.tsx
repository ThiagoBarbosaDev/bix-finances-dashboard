"use client";
import { createContext, useMemo, useReducer } from "react";
import { TRANSACTION_INITIAL_STATE } from "@/features/transaction/contexts/constants";
import { transactionReducer } from "@/features/transaction/contexts/transaction-reducer";
import { TTransactionContext } from "@/features/transaction/contexts/types";

type TTransactionContextProps = {
  children: React.ReactNode;
};

export const TransactionContext = createContext<TTransactionContext>([
  TRANSACTION_INITIAL_STATE,
  () => null,
]);

export const TransactionStateProvider = ({
  children,
}: TTransactionContextProps) => {
  const [state, dispatch] = useReducer(
    transactionReducer,
    TRANSACTION_INITIAL_STATE
  );

  const memoTransactionData = useMemo(
    () => [state, dispatch],
    [state]
  ) satisfies TTransactionContext;

  return (
    <TransactionContext.Provider value={memoTransactionData}>
      {children}
    </TransactionContext.Provider>
  );
};
