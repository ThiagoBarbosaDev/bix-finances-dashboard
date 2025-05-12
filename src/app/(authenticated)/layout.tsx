"use client";

import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Suspense } from "react";
import { useAuthGuard } from "@/app/(authenticated)/use-auth-guard";
import { Spinner } from "@/components/spinner";
import Sidebar from "@/features/sidebar/components/sidebar";
import { TransactionStateProvider } from "@/features/transaction/contexts/transaction-context";
import { ChartStateProvider } from "./dashboard/_charts/contexts/chart-context";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isPending, isAuthenticated } = useAuthGuard();
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (!isAuthenticated) {
    return null;
  }

  if (isPending) {
    return (
      <Flex
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner />
      </Flex>
    );
  }

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
