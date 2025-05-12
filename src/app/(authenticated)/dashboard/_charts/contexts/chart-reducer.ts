import { CHART_ACTIONS } from "./constants";
import { IChartState, TChartAction } from "./types";

export const chartReducer = (
  state: IChartState,
  action: TChartAction
): IChartState => {
  switch (action.type) {
    case CHART_ACTIONS.SET: {
      return { ...state, graph: action.payload };
    }
    default:
      return state;
  }
};
