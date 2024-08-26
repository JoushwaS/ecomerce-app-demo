// src/utils/formatCurrency.ts
export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2)}`;
};
