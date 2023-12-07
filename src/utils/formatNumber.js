export const formatNumber = (number) => Intl.NumberFormat("en-US", { style: "decimal" }).format(number);
