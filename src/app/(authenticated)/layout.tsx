"use client";

import { Box, Flex } from "@chakra-ui/react";
import { TransactionStateProvider } from "@/features/transaction/contexts/transaction-context";
import Sidebar from "@/features/sidebar/components/sidebar";
import { useState } from "react";
import { ChartStateProvider } from "./dashboard/_charts/contexts/chart-context";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChartStateProvider>
      <Flex width="100%" height="100vh">
        <Sidebar />

        <Box as="main" ml={"50px"} height="100%" overflowY="auto" flex="1">
          <TransactionStateProvider>{children}</TransactionStateProvider>
        </Box>
      </Flex>
    </ChartStateProvider>
  );
}
