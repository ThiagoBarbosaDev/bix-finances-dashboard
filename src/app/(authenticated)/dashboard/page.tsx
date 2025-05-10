"use client";

import { Spinner } from "@/components/spinner";
import { useFetchTransactions } from "@/hooks/use-fetch-transactions";

export default function Dashboard() {
  const { isPending } = useFetchTransactions();

  return (
    <>
      <h1>dashboard</h1>
      {isPending ? <Spinner /> : <div>Done Loading</div>}
    </>
  );
}
