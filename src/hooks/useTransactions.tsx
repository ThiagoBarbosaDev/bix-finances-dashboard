import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getTransactions } from "@/services/get-transaction";
import { ITransaction } from "@/types";

type TState = {
  transactions: ITransaction[];
  isPending: boolean;
  error: string | null;
};

const useTransactions = () => {
  const [state, setState] = useState<TState>({
    transactions: [],
    isPending: false,
    error: null,
  });
  const toast = useToast();

  useEffect(() => {
    const getData = async () => {
      setState((prev) => ({ ...prev, isPending: true }));
      try {
        const transactions = await getTransactions();
        setState({ transactions, isPending: false, error: null });
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: "Algo deu errado",
            description: "Não foi possível carregar as transações.",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          setState({
            transactions: [],
            isPending: false,
            error: error.message,
          });
        }
      }
    };

    getData();
  }, [toast]);

  return state;
};

export { useTransactions };
