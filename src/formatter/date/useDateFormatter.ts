import { createDateFormatter } from "./utils/createDateFormatter";

export const useDateFormatter = () => ({
  hh_mm_dd_mm_yyyy: createDateFormatter("hh:mm dd/mm/yyyy"),
})
