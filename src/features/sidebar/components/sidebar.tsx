"use client";

import {
  Box,
  Button,
  Divider,
  HStack,
  Tooltip,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { ChartBarBigIcon, LineChartIcon, LogOutIcon } from "lucide-react";
import { CHART_ACTIONS } from "@/app/(authenticated)/dashboard/_charts/contexts/constants";
import { useChartState } from "@/app/(authenticated)/dashboard/_charts/contexts/use-chart-state";
import FilterComponent from "@/app/(authenticated)/dashboard/_filtering/filter";
import { useLoginActions } from "@/features/login/hooks/use-login-actions";

export default function Sidebar() {
  const [state, dispatch] = useChartState();
  const { logout } = useLoginActions();

  const onClickBarChart = () => {
    dispatch({ type: CHART_ACTIONS.SET, payload: "bar" });
  };

  const onClickLineChart = () => {
    dispatch({ type: CHART_ACTIONS.SET, payload: "line" });
  };
  const isMobile = useBreakpointValue({ base: true, md: false });
  const Tag = isMobile ? HStack : VStack;

  const SidebarContent = (
    <Tag align="stretch" alignContent="stretch" spacing="0">
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
      <Divider
        orientation={isMobile ? "vertical" : "horizontal"}
        colorScheme="blue"
        borderWidth="2px"
      />
      <FilterComponent />
      <Divider
        orientation={isMobile ? "vertical" : "horizontal"}
        colorScheme="blue"
        borderWidth="2px"
      />
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
    </Tag>
  );

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      bgColor="white.700"
      w={isMobile ? "100vw" : "50px"}
      h={isMobile ? "40px" : "100vh"}
      overflowX="hidden"
      overflowY="auto"
      bg="white.700"
      borderColor="blue.700"
      borderRightWidth={isMobile ? "0" : "2px"}
      borderBottomWidth={isMobile ? "2px" : "0"}
    >
      {SidebarContent}
    </Box>
  );
}
