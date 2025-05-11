import { Flex, HStack, Text } from "@chakra-ui/react";
import { ResponsiveBar } from "@nivo/bar";
import { useMemo } from "react";
import { useTransaction } from "@/features/transaction/contexts/use-transaction";
import { toCurrencyFromCent, toThousands } from "@/utils/currency";

type StackedBarChartProps = {
  data: Array<{
    industry: string;
    deposit: number;
    withdraw: number;
  }>;
};

const StackedBarChart = ({ data }: StackedBarChartProps) => {
  return (
    <ResponsiveBar
      data={data}
      enableLabel={false}
      enableGridY={false}
      enableGridX={true}
      keys={["deposit", "withdraw"]}
      indexBy="industry"
      margin={{ top: 20, right: 150, bottom: 100, left: 150 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      layout="horizontal"
      indexScale={{ type: "band", round: true }}
      colors={({ id }) =>
        id === "deposit" ? "#38A169" : id === "withdraw" ? "#E53E3E" : "#ccc"
      }
      fill={[
        {
          match: {
            id: "withdraw",
          },
          id: "dots",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Industry",
        legendPosition: "middle",
        legendOffset: 50,
        truncateTickAt: 0,
        style: {
          legend: {
            text: {
              fontSize: 20,
              fontWeight: 600,
            },
          },
        },
        format: (value) => toThousands(parseInt(value)),
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 50,
        tickRotation: 0,
        legend: "Amount (BRL)",
        legendPosition: "middle",
        legendOffset: -20,
        truncateTickAt: 0,
        style: {
          legend: {
            text: {
              fontSize: 20,
              fontWeight: 600,
            },
          },
        },
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Transaction volume by industry"
      barAriaLabel={(e) => `${e.id}: $${e.formattedValue} in ${e.indexValue}`}
      valueFormat={(v) => toCurrencyFromCent(v, "BRL")}
    />
  );
};

export const TransactionStackedBarChart = () => {
  const [store] = useTransaction();

  const processedData = useMemo(() => {
    return store.transactions.reduce((acc, transaction) => {
      const { industry, transaction_type, amount } = transaction;

      if (!industry) return acc;

      const existingIndustry = acc.find((item) => item.industry === industry);
      const numAmount = Number(amount) || 0;

      if (existingIndustry) {
        if (transaction_type === "deposit") {
          existingIndustry.deposit += numAmount;
        } else if (transaction_type === "withdraw") {
          existingIndustry.withdraw += numAmount;
        }
      } else {
        acc.push({
          industry,
          deposit: transaction_type === "deposit" ? numAmount : 0,
          withdraw: transaction_type === "withdraw" ? numAmount : 0,
        });
      }

      return acc;
    }, [] as Array<{ industry: string; deposit: number; withdraw: number }>);
  }, [store.transactions]);

  if (processedData.length === 0) {
    return <div>No data to display</div>;
  }

  return (
    <Flex width="100%" h="100%" maxW="1400px" flexDirection="column">
      <HStack>
        <Text
          as="h2"
          fontFamily="var(--font-montserrat)"
          fontSize="2xl"
          width="100%"
          textAlign="center"
        >
          Trade Volume - Stacked Bars
        </Text>
      </HStack>
      <StackedBarChart data={processedData} />
    </Flex>
  );
};
