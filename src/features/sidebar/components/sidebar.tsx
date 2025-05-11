"use client";

import { CHART_ACTIONS } from "@/app/(authenticated)/dashboard/_charts/contexts/constants";
import { useChartState } from "@/app/(authenticated)/dashboard/_charts/contexts/use-chart-state";
import FilterComponent from "@/app/(authenticated)/dashboard/_filtering/filter";

import { useLoginActions } from "@/features/login/hooks/use-login-actions";
import { Box, Button, Divider, Tooltip, VStack } from "@chakra-ui/react";
import { ChartBarBigIcon, LineChartIcon, LogOutIcon } from "lucide-react";

export default function Sidebar() {
  const [state, dispatch] = useChartState();
  const { logout } = useLoginActions();

  const onClickBarChart = () => {
    dispatch({ type: CHART_ACTIONS.SET, payload: "bar" });
  };

  const onClickLineChart = () => {
    dispatch({ type: CHART_ACTIONS.SET, payload: "line" });
  };

  const SidebarContent = (
    <VStack align="stretch">
      <Tooltip label="Logout" placement="right">
        <Button
          colorScheme="blue"
          rightIcon={<LogOutIcon />}
          padding="1"
          iconSpacing={0}
          variant="ghost"
          rounded="none"
          onClick={logout}
        />
      </Tooltip>
      <Divider orientation="horizontal" colorScheme="blue" borderWidth="2px" />
      <FilterComponent />
      <Divider orientation="horizontal" colorScheme="blue" borderWidth="2px" />
      <Tooltip label="Stack Bars" placement="right">
        <Button
          rounded="none"
          colorScheme="blue"
          rightIcon={<ChartBarBigIcon />}
          padding="1"
          iconSpacing={0}
          variant="ghost"
          onClick={onClickBarChart}
          isActive={state.graph === "bar"}
        />
      </Tooltip>
      <Tooltip label="Line Chart" placement="right">
        <Button
          rounded="none"
          colorScheme="blue"
          rightIcon={<LineChartIcon />}
          padding="1"
          iconSpacing={0}
          variant="ghost"
          onClick={onClickLineChart}
          isActive={state.graph === "line"}
        />
      </Tooltip>
    </VStack>
  );

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      bg="white.700"
      borderColor="blue.700"
      borderRightWidth="2px"
      w="50px"
    >
      {SidebarContent}
    </Box>
  );
}
