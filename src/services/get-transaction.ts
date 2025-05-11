import { ITransaction } from "@/types";

export const getTransactions = async (): Promise<ITransaction[]> => {
  const response = await fetch("/api/transactions");

  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }
  const data = await response.json();

  return JSON.parse(data);
};
