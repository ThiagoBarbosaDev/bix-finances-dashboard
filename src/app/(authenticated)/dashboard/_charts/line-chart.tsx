import { Flex, HStack, Text } from "@chakra-ui/react";
import { ResponsiveLine } from "@nivo/line";
import { useMemo } from "react";
import { useTransaction } from "@/features/transaction/contexts/use-transaction";
import { getTrimesterKey } from "@/utils/dates";
import { toCurrencyFromCent } from "@/utils/currency";

export const LineChart = () => {
  const [store] = useTransaction();

  const lineChartData = useMemo(() => {
    const grouped = new Map<string, Map<string, number>>(); // Map<industry, Map<trimester, cashflow>>

    for (const {
      industry,
      transaction_type,
      amount,
      date,
    } of store.transactions) {
      if (!industry || !date) continue;

      const trimester = getTrimesterKey(date);
      const numAmount = Number(amount) || 0;

      if (!grouped.has(industry)) grouped.set(industry, new Map());
      const trimesterMap = grouped.get(industry)!;

      const prev = trimesterMap.get(trimester) || 0;
      const delta = transaction_type === "deposit" ? numAmount : -numAmount;

      trimesterMap.set(trimester, prev + delta);
    }

    // Convert to nivo format
    const allTrimesters = new Set<string>();
    grouped.forEach((map) =>
      map.forEach((_, trimester) => allTrimesters.add(trimester))
    );

    const sortedTrimesters = Array.from(allTrimesters).sort(); // Ensure consistent x-axis

    return Array.from(grouped.entries()).map(([industry, trimesterMap]) => ({
      id: industry,
      data: sortedTrimesters.map((trimester) => ({
        x: trimester,
        y: trimesterMap.get(trimester) ?? 0,
      })),
    }));
  }, [store.transactions]);

  if (lineChartData.length === 0) {
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
          marginTop="2rem"
        >
          Cashflow Over Time - Line Chart
        </Text>
      </HStack>
      <Flex width="100%" h="100%" maxW="1400px" flexDirection="column">
        <ResponsiveLine
          data={lineChartData}
          curve="monotoneX"
          margin={{ top: 50, right: 150, bottom: 100, left: 100 }}
          xScale={{ type: "point" }}
          yFormat={(value) => toCurrencyFromCent(value as number, "BRL")}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 50,
            tickRotation: 0,
            legend: "Cashflow (BRL)",
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
            format: (value) => toCurrencyFromCent(value, "BRL"),
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Trimester",
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
          }}
          colors={{ scheme: "category10" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              symbolSize: 12,
              symbolShape: "circle",
            },
          ]}
        />
      </Flex>
    </Flex>
  );
};
