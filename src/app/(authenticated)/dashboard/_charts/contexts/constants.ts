import { IChartState } from "@/app/(authenticated)/dashboard/_charts/contexts/types";

export const CHART_ACTIONS = {
  SET: "SET_CHART" as const,
};

export const CHART_INITIAL_STATE: IChartState = {
  graph: "bar",
};
