import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

export const amountFilterParse = {
  amount: parseAsInteger.withDefault(0),
  operator: parseAsString.withDefault(""),
};

export const dateRangeFilterParse = {
  startDate: parseAsInteger.withDefault(0),
  endDate: parseAsInteger.withDefault(0),
};

export const filterParse = {
  type: parseAsString.withDefault(""),
  account: parseAsString.withDefault(""),
  industry: parseAsString.withDefault(""),
  state: parseAsString.withDefault(""),
};

export const filterOptions = {
  shallow: false,
  clearOnDefault: true,
};

export const amountFilterOptions = {
  shallow: false,
  clearOnDefault: true,
};

export const dateRangeFilterOptions = {
  shallow: false,
  clearOnDefault: true,
};

export const searchParamsCache = createSearchParamsCache({
  ...filterParse,
  ...amountFilterParse,
  ...dateRangeFilterParse,
});

export type ParsedSearchParams = Awaited<
  ReturnType<typeof searchParamsCache.parse>
>;
