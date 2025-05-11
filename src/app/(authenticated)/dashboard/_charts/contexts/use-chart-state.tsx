import { useContext } from "react";
import { ChartContext } from "./chart-context";

export const useChartState = () => {
  const data = useContext(ChartContext);

  if (!data) {
    throw new Error("useLogin must be used inside of a login provider");
  }

  return data;
};
