"use client";

import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { TRANSACTION_ACTIONS } from "@/features/transaction/contexts/constants";
import { useTransaction } from "@/features/transaction/contexts/use-transaction";
import { getTransactions } from "@/services/get-transaction";

export const useFetchTransactions = () => {
  const [state, dispatch] = useTransaction();
  const toast = useToast();

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: TRANSACTION_ACTIONS.SET_PENDING, payload: true });
      try {
        const transactions = await getTransactions();
        dispatch({ type: TRANSACTION_ACTIONS.SET, payload: transactions });
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: "Algo deu errado",
            description: "Não foi possível carregar as transações.",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      } finally {
        dispatch({ type: TRANSACTION_ACTIONS.SET_PENDING, payload: false });
      }
    };

    getData();
  }, [toast, dispatch]);

  return state;
};
