export const formatStringWithStrip = (input: string): string => {
  return input
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/^./, (str) => str.toUpperCase());
};
