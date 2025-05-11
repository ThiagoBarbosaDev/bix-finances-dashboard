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
