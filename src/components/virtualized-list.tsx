"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import { useVirtualizer } from "@tanstack/react-virtual";
import React, { useRef } from "react";

export type VirtualizedListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  itemHeight?: number;
  containerHeight?: number | string;
  overscan?: number;
  containerProps?: React.ComponentProps<typeof Box>;
  listContainerProps?: React.ComponentProps<typeof Box>;
  getItemKey?: (item: T, index: number) => string | number;
  children?: React.ReactNode;
};

export function VirtualizedList<T extends { date?: number; state?: string }>({
  items,
  renderItem,
  itemHeight = 140,
  containerHeight = "600px",
  overscan = 10,
  containerProps,
  listContainerProps,
  getItemKey = (item) => `${item.date}-${item.state}`,
}: VirtualizedListProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemHeight,
    overscan,
  });

  return (
    <Box
      ref={parentRef}
      height={containerHeight}
      overflowY="auto"
      borderWidth="1px"
      borderRadius="md"
      p={2}
      bg={useColorModeValue("gray.50", "gray.700")}
      sx={{
        "&::-webkit-scrollbar": {
          width: "8px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgb(70, 70, 70)`,
          borderRadius: "8px",
        },
        scrollbarWidth: "thick",
      }}
      {...containerProps}
    >
      <Box
        height={`${rowVirtualizer.getTotalSize()}px`}
        position="relative"
        {...listContainerProps}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const item = items[virtualRow.index];
          return (
            <Box
              key={getItemKey(item, virtualRow.index)}
              position="absolute"
              top={0}
              left={0}
              width="100%"
              transform={`translateY(${virtualRow.start}px)`}
              padding={2}
            >
              {renderItem(item)}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
