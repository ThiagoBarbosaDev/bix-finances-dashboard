import {
  Badge,
  Box,
  HStack,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { ITransaction } from "@/types";
import { toCurrencyFromCent } from "@/utils/currency";
import { formatTime } from "@/utils/dates";

type TransactionItemProps = {
  transaction: ITransaction;
};

export const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
}) => {
  const { date, amount, transaction_type, account, industry, state } =
    transaction;

  const isDeposit = transaction_type === "deposit";
  const amountColor = isDeposit ? "green.500" : "red.500";
  const bg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={3}
      bg={bg}
      borderColor={border}
      shadow="sm"
      w="100%"
      h="120px"
    >
      <VStack align="start" spacing={1}>
        <HStack justify="space-between" w="full">
          <Tooltip label={account} hasArrow isDisabled={account.length < 20}>
            <Text fontWeight="semibold" fontSize="sm" noOfLines={1} maxW="70%">
              {account}
            </Text>
          </Tooltip>
          <Badge
            colorScheme={isDeposit ? "green" : "red"}
            minW="80px"
            textAlign="center"
          >
            {transaction_type}
          </Badge>
        </HStack>

        <Text fontSize="xs" color="gray.500">
          {formatTime(date)}
        </Text>

        <Text fontSize="sm" color={amountColor} fontWeight="bold">
          {isDeposit ? "+" : "-"} {toCurrencyFromCent(parseInt(amount), "brl")}
        </Text>

        <HStack spacing={2} wrap="wrap">
          <Badge variant="subtle" colorScheme="blue" fontSize="0.7em">
            {industry}
          </Badge>
          <Badge variant="subtle" colorScheme="purple" fontSize="0.7em">
            {state}
          </Badge>
        </HStack>
      </VStack>
    </Box>
  );
};
