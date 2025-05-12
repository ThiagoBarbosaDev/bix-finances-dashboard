"use client";

import { Flex, Text } from "@chakra-ui/react";
import { Spinner } from "@/components/spinner";
import TransactionList from "@/features/transaction/components/transaction-list";
import { useFetchTransactions } from "@/hooks/use-fetch-transactions";
import { ChartMediator } from "./_charts/chart-mediator";

export default function Dashboard() {
  const { isPending } = useFetchTransactions();

  return (
    <Flex minH="100%" flexDirection="column" alignItems="center">
      <Flex
        as="header"
        width="100%"
        px={8}
        height="10svh"
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
      <Flex
        width={"100%"}
        flexDirection={"row"}
        justifyContent="center"
        height="90svh"
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
