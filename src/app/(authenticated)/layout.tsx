import { Suspense } from "react";
import { TransactionStateProvider } from "@/features/transaction/contexts/transaction-context";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <TransactionStateProvider>{children}</TransactionStateProvider>
    </main>
  );
}
