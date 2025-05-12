import { createContext, useMemo, useReducer } from "react";
import { chartReducer } from "@/app/(authenticated)/dashboard/_charts/contexts/chart-reducer";
import { CHART_INITIAL_STATE } from "@/app/(authenticated)/dashboard/_charts/contexts/constants";
import { TChartContext } from "@/app/(authenticated)/dashboard/_charts/contexts/types";

export const ChartContext = createContext<TChartContext>([
  CHART_INITIAL_STATE,
  () => null,
]);

type TChartProviderProps = {
  children: React.ReactNode;
};

export const ChartStateProvider = ({ children }: TChartProviderProps) => {
  const [state, dispatch] = useReducer(chartReducer, CHART_INITIAL_STATE);

  const memoChartData = useMemo(
    () => [state, dispatch],
    [state, dispatch]
  ) satisfies TChartContext;

  return (
    <ChartContext.Provider value={memoChartData}>
      {children}
    </ChartContext.Provider>
  );
};
