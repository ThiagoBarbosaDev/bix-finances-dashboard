import {
  Card,
  CardBody,
  Flex,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  ClockIcon,
  WalletIcon,
} from "lucide-react";
import { useMemo } from "react";
import { useTransaction } from "@/features/transaction/contexts/use-transaction";
import { toCurrencyFromCent } from "@/utils/currency";

export const Summary = () => {
  const [store] = useTransaction();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const summary = useMemo(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    const totalTransactions = store.transactions.length;

    store.transactions.forEach((transaction) => {
      const amount = Number(transaction.amount) || 0;

      if (transaction.transaction_type === "deposit") {
        totalIncome += amount;
      } else if (transaction.transaction_type === "withdraw") {
        totalExpenses += amount;
      }
    });

    const balance = totalIncome - totalExpenses;

    return {
      income: totalIncome,
      expenses: totalExpenses,
      totalTransactions,
      balance,
    };
  }, [store.transactions]);

  const cards = [
    {
      title: "Total Income",
      value: toCurrencyFromCent(summary.income, "BRL"),
      icon: <ArrowUpCircleIcon />,
      color: "green.500",
    },
    {
      title: "Total Expenses",
      value: toCurrencyFromCent(summary.expenses, "BRL"),
      icon: <ArrowDownCircleIcon />,
      color: "red.500",
    },
    {
      title: "Total Transactions",
      value: summary.totalTransactions.toString(),
      icon: <ClockIcon />,
      color: "orange.500",
    },
    {
      title: "Current Balance",
      value: toCurrencyFromCent(summary.balance, "BRL"),
      icon: <WalletIcon />,
      color: summary.balance >= 0 ? "blue.500" : "red.500",
    },
  ];

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={4}
      width="100%"
      px={isMobile ? 4 : 6}
      py={4}
      overflow="auto"
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          borderRadius="lg"
          boxShadow="md"
          overflow="hidden"
          transition="transform 0.2s, box-shadow 0.2s"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          <CardBody>
            <Flex justify="space-between" align="center">
              <Stat>
                <StatLabel fontWeight="medium" fontSize="sm" color="gray.500">
                  {card.title}
                </StatLabel>
                <StatNumber
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  mt={1}
                >
                  {card.value}
                </StatNumber>
              </Stat>
              <Flex
                width="48px"
                height="48px"
                borderRadius="full"
                bg={card.color}
                opacity="0.6"
                justify="center"
                align="center"
              >
                {card.icon}
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </Grid>
  );
};
