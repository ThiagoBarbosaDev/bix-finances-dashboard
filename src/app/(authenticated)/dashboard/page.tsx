"use client";

import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { Spinner } from "@/components/spinner";
import { Summary } from "@/features/summary/components/summary";
import TransactionList from "@/features/transaction/components/transaction-list";
import { useFetchTransactions } from "@/hooks/use-fetch-transactions";
import { ChartMediator } from "./_charts/chart-mediator";

export default function Dashboard() {
  const { isPending } = useFetchTransactions();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex minH="100%" flexDirection="column" alignItems="center">
      <Flex
        as="header"
        width="100%"
        px={isMobile ? 4 : 8}
        height={isMobile ? "5svh" : "10svh"}
        borderBottom="1px"
        borderColor="gray.200"
        alignItems="center"
        sx={{
          background: "var(--gradient-vibrant)",
          backgroundSize: "400% 400%",
          animation: "gradientBG 15s ease infinite",
          "@keyframes gradientBG": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        }}
      >
        <Text
          as="h1"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          letterSpacing="tight"
          color="white"
          lineHeight="1.2"
          textTransform="capitalize"
        >
          Bix Finances
        </Text>
      </Flex>
      <Summary />
      <Flex
        width={"100%"}
        flexDirection={"row"}
        justifyContent="center"
        height="calc(90svh - 135px)"
      >
        {isPending ? (
          <Spinner />
        ) : (
          <>
            <ChartMediator />
            <TransactionList />
          </>
        )}
      </Flex>
    </Flex>
  );
}
