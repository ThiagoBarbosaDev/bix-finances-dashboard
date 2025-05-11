import { CHART_ACTIONS } from "./constants";

export interface IChartState {
  graph: "bar" | "line";
}

export type TChartAction = {
  type: typeof CHART_ACTIONS.SET;
  payload: IChartState["graph"];
};

export type TChartContext = [
  state: IChartState,
  dispatch: React.Dispatch<TChartAction>
];
