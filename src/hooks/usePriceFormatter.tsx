export const usePriceFormatter = (): readonly [(num: number) => string] => {
 
  const formatNumber = (num: number): string => {
    const calculatedPriceFormatted = new Intl.NumberFormat().format(num);

    return calculatedPriceFormatted;
  }

  return [formatNumber] as const;
};
