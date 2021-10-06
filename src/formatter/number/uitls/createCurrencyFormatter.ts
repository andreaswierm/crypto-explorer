type CurrencyFormatOptions = {
  maximumFractionDigits?: number;
}

export const createCurrencyFormatter = () => (number: number, {
  maximumFractionDigits,
}: CurrencyFormatOptions = {}) => {
  return new Intl.NumberFormat(
    'en',
    {
      maximumFractionDigits,
      style: 'currency',
      currency: 'USD',
    }
  ).format(number);
}
