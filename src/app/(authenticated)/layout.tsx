"use client";

import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Sidebar from "@/features/sidebar/components/sidebar";
import { TransactionStateProvider } from "@/features/transaction/contexts/transaction-context";
import { ChartStateProvider } from "./dashboard/_charts/contexts/chart-context";
import { Suspense } from "react";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Suspense fallback={<Box>Loading...</Box>}>
      <TransactionStateProvider>
        <ChartStateProvider>
          <Flex width="100%" height="100vh">
            <Sidebar />

            <Box
              as="main"
              ml={isMobile ? "0px" : "50px"}
              mt={isMobile ? "40px" : "0px"}
              height="100%"
              overflowY="auto"
              flex="1"
            >
              {children}
            </Box>
          </Flex>
        </ChartStateProvider>
      </TransactionStateProvider>
    </Suspense>
  );
}
