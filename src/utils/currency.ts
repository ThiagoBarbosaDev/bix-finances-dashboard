import { MyBig } from "@/lib/big";

/**
 * Converts amount in cents to currency format
 * @param amount - amount in cents
 * @param currency - currency code (e.g. "USD", "BRL")
 */
export const fromCent = (amount: number) =>
  new MyBig(amount).div(100).round(2).toNumber();

/**
 * Converts amount in cents to currency format
 * @param amount - amount in cents
 * @param currency - currency code (e.g. "USD", "BRL")
 */
export const toCurrencyFromCent = (amount: number, currency?: string) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency ?? "USD",
  }).format(fromCent(amount));

/**
 * Converts amount in cents to thousands or millions
 * @param amount - amount in cents
 */
export const toThousands = (amount: number) => {
  if (amount >= 100000000) {
    return `${fromCent(amount / 1000000)}M`;
  } else if (amount >= 100000) {
    return `${fromCent(amount / 1000)}K`;
  }
  return fromCent(amount);
};
