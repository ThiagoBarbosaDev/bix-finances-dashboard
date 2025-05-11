import { format, parseISO } from "date-fns";
import { DateRange } from "react-day-picker";

/**
 * Formats a date in epoch time to a string format dd/MM/yyyy HH:mm
 * @param date - epoch time in milliseconds
 * @returns Date in string format dd/MM/yyyy HH:mm
 */
export const formatTime = (date: number) => {
  return new Date(date).toLocaleString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/**
 * Converts URL date range to DateRange object
 * @param period: format YYYY-MM-DD_YYYY-MM-DD (start_end)
 */
export const getDateRangeFromPeriod = (
  period: string
): DateRange | undefined => {
  const [start, end] = period.split("_");

  if (start && end) {
    const dates = { from: parseISO(start), to: parseISO(end) };
    return dates;
  }
};

/**
 * Converts Date to YYYY-MM-DD
 * @param date: Date object
 */
export const formatDateToYYYYMMDD = (date: Date) => {
  return format(date, "yyyy-MM-dd");
};
