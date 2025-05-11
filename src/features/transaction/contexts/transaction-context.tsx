"use client";
import { isValid as isDateValid, isWithinInterval, parseISO } from "date-fns";
import { useQueryStates } from "nuqs";
import { createContext, useMemo, useReducer } from "react";
import {
  filterOptions,
  filterParse,
} from "@/app/(authenticated)/dashboard/_filtering/filter-params";
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
  const [URLFilters] = useQueryStates(filterParse, filterOptions);

  const filteredData = useMemo(() => {
    return {
      ...state,
      transactions: state.transactions.filter((transaction) => {
        let isValid = true;
        if (URLFilters.account) {
          isValid = transaction.account
            .toLocaleLowerCase()
            .includes(URLFilters.account.toLocaleLowerCase());
          if (!isValid) {
            return isValid;
          }
        }

        if (URLFilters.industry) {
          isValid = URLFilters.industry === transaction.industry;
          if (!isValid) {
            return isValid;
          }
        }

        if (URLFilters.state) {
          isValid = URLFilters.state === transaction.state;
          if (!isValid) {
            return isValid;
          }
        }

        if (URLFilters.type) {
          isValid = URLFilters.type === transaction.transaction_type;
          if (!isValid) {
            return isValid;
          }
        }

        if (URLFilters.period) {
          const [startDateStr, endDateStr] = URLFilters.period.split("_");

          if (startDateStr && endDateStr) {
            const startDate = parseISO(startDateStr);
            const endDate = parseISO(endDateStr);
            const transactionDate = new Date(transaction.date);

            if (
              isDateValid(startDate) &&
              isDateValid(endDate) &&
              isDateValid(transactionDate)
            ) {
              isValid = isWithinInterval(transactionDate, {
                start: startDate,
                end: endDate,
              });
              if (!isValid) {
                return false;
              }
            }
          }
        }

        return isValid;
      }),
    };
  }, [state, URLFilters]);

  const memoTransactionData = useMemo(
    () => [filteredData, dispatch],
    [filteredData, dispatch]
  ) satisfies TTransactionContext;

  return (
    <TransactionContext.Provider value={memoTransactionData}>
      {children}
    </TransactionContext.Provider>
  );
};
