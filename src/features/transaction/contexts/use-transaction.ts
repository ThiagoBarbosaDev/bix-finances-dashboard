import { useContext } from "react";
import { TransactionContext } from "@/features/transaction/contexts/transaction-context";

export const useTransaction = () => {
  const data = useContext(TransactionContext);

  if (!data) {
    throw new Error("useLogin must be used inside of a login provider");
  }

  return data;
};
