import { createCurrencyFormatter } from "./uitls/createCurrencyFormatter";

export const useNumberFormatter = () => ({
  currency: createCurrencyFormatter(),
});
