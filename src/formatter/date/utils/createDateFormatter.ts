import { format } from "date-fns"

export const createDateFormatter = (pattern: string) => {
  return (date: Date) => format(date, pattern);
}
