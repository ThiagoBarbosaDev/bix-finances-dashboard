"use client";

import { Spinner } from "@/components/spinner";
import TransactionList from "@/features/transaction/components/transaction-list";
import { useFetchTransactions } from "@/hooks/use-fetch-transactions";
import FilterComponent from "./_filtering/filter";

export default function Dashboard() {
  const { isPending, transactions } = useFetchTransactions();

  return (
    <>
      <h1>dashboard</h1>
      {transactions.length}
      <FilterComponent />
      {isPending ? <Spinner /> : <TransactionList />}
    </>
  );
}
