import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useQueryStates } from "nuqs";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";
import {
  filterOptions,
  filterParse,
} from "@/app/(authenticated)/dashboard/_filtering/filter-params";
import { INDUSTRY_LIST, US_STATES } from "@/constants";
import { formatDateToYYYYMMDD, getDateRangeFromPeriod } from "@/utils/dates";
import { DatePicker } from "./date-picker";
import { CogIcon } from "lucide-react";
import { FilterTags } from "./filter-tags";

export type TFilterState = {
  type: string;
  industry: string;
  account: string;
  state: string;
  period: string;
};

const FILTER_INIT = {
  type: "",
  industry: "",
  account: "",
  state: "",
  period: "",
};

const FilterComponent = () => {
  const [URLFilters, setURLFilters] = useQueryStates(
    filterParse,
    filterOptions
  );

  const [filters, setFilters] = useState<TFilterState>(() => ({
    ...FILTER_INIT,
    type: URLFilters.type,
    industry: URLFilters.industry,
    account: URLFilters.account,
    state: URLFilters.state,
    period: URLFilters.period,
  }));
  const { onOpen, onClose, isOpen } = useDisclosure();

  const updateFilter = (key: keyof TFilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value || "",
    }));
  };

  const resetFilters = () => {
    setFilters(FILTER_INIT);
  };

  const onRemoveFilter = (key: keyof TFilterState) => {
    setFilters((prev) => ({
      ...prev,
      [key]: "",
    }));
    setURLFilters((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  const applyFilters = () => {
    setURLFilters({ ...URLFilters, ...filters });
  };

  const onSelectDate = (range: DateRange | undefined) => {
    setFilters((prev) => ({
      ...prev,
      period: range
        ? `${range.from ? formatDateToYYYYMMDD(range.from) : ""}_${
            range.to ? formatDateToYYYYMMDD(range.to) : ""
          }`
        : "",
    }));

    return range;
  };

  return (
    <>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        isLazy
        strategy="fixed"
      >
        <PopoverTrigger>
          <Button
            colorScheme="blue"
            rightIcon={<CogIcon />}
            padding="1"
            iconSpacing={0}
            variant="ghost"
            rounded="none"
          />
        </PopoverTrigger>
        <PopoverContent p={4} minW="350px">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Filter Transactions</PopoverHeader>
          <PopoverBody>
            <VStack spacing={4} align="stretch">
              <FormControl>
                <FormLabel>Transaction Type</FormLabel>
                <Select
                  placeholder="Select type"
                  value={filters.type || ""}
                  onChange={(e) => updateFilter("type", e.target.value)}
                >
                  <option value="deposit">Deposit</option>
                  <option value="withdraw">Withdraw</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Industry</FormLabel>
                <Select
                  placeholder="Select industry"
                  value={filters.industry || ""}
                  onChange={(e) => updateFilter("industry", e.target.value)}
                >
                  {INDUSTRY_LIST.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>State</FormLabel>
                <Select
                  placeholder="Select state"
                  value={filters.state || ""}
                  onChange={(e) => updateFilter("state", e.target.value)}
                >
                  {US_STATES.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Account</FormLabel>
                <Input
                  placeholder="Account name"
                  value={filters.account || ""}
                  onChange={(e) => updateFilter("account", e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Date Range</FormLabel>
                <DatePicker
                  onSelect={onSelectDate}
                  selected={getDateRangeFromPeriod(filters.period)}
                />
              </FormControl>

              <Button colorScheme="blue" size="sm" onClick={applyFilters}>
                Apply Filters
              </Button>

              <Button colorScheme="red" size="sm" onClick={resetFilters}>
                Reset All
              </Button>
              <FilterTags
                filters={URLFilters}
                onRemoveFilter={onRemoveFilter}
              />
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default FilterComponent;
