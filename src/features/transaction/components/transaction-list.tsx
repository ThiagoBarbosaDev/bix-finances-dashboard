"use client";

import { Box, HStack, Text } from "@chakra-ui/react";
import { VirtualizedList } from "@/components/virtualized-list";
import { ITransaction } from "@/types";
import { useTransaction } from "../contexts/use-transaction";
import { TransactionItem } from "./transaction-item";

export default function TransactionList() {
  const [transactionStore] = useTransaction();

  const renderItem = (transaction: ITransaction) => {
    return <TransactionItem transaction={transaction} />;
  };

  return (
    <Box p={4} w="330px">
      <Text fontSize="2xl" mb={4} mx="auto" marginY="auto">
        Transactions
      </Text>

      <VirtualizedList
        items={transactionStore.transactions}
        itemHeight={130}
        containerHeight="calc(100% - 3rem)"
        renderItem={renderItem}
        containerProps={{ maxW: "300px" }}
      />
    </Box>
  );
}
