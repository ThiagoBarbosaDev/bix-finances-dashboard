import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { RemoveFilterTag } from "./remove-filter-tag";
import { TFilterState } from "./filter";

interface FilterTagsProps {
  filters: Record<string, string | undefined>;
  onRemoveFilter: (key: keyof TFilterState) => void;
}

export const FilterTags: React.FC<FilterTagsProps> = ({
  filters,
  onRemoveFilter,
}) => {
  return (
    <Box mt={4} minH="24px">
      <Flex gap={2} wrap="wrap">
        {Object.entries(filters).reduce<React.ReactElement[]>(
          (acc, [key, value]) => {
            if (value) {
              acc.push(
                <RemoveFilterTag
                  key={key}
                  value={String(value)}
                  valueKey={key as keyof TFilterState}
                  onRemoveFilter={onRemoveFilter}
                />
              );
            }
            return acc;
          },
          []
        )}
      </Flex>
    </Box>
  );
};
