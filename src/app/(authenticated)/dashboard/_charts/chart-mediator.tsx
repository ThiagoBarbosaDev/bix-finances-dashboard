import { useChartState } from "./contexts/use-chart-state";
import { LineChart } from "./line-chart";
import { TransactionStackedBarChart } from "./stacked-bar-chart";

export const ChartMediator = () => {
  const [state] = useChartState();

  if (state.graph === "bar") {
    return <TransactionStackedBarChart />;
  }

  return <LineChart />;
};
