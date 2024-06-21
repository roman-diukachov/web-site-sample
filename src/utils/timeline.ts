import type { TimelineCardProps, TimelineRecord } from '@/types';

// Method for fields like 'G2023', 'U0003', 'U0005' in the csv file

const parseRangeValue = (value: string): number | string => {
  const isNumeric = /^\d+$/.test(value);
  return isNumeric ? parseInt(value, 10) : value;
};

/**
 * This method takes a value and an array of code ranges, and returns the corresponding tagTitle.
 * The value is first parsed using the parseRangeValue function to ensure it's in the correct format.
 * It then iterates over the codeRanges array, and for each codeRange, it checks if the parsed value falls within any of the ranges.
 * If the range is an object with a start and end, it checks if the parsed value is a number and falls within the start and end.
 * If the range is a string, it checks if the parsed value is the same as the range.
 * If the range is a number, it checks if the parsed value is the same as the range.
 * If a match is found, it returns the tagTitle of the codeRange.
 * If no match is found after checking all codeRanges, it returns undefined.
 *
 * @param value - The value to find the tagTitle for.
 * @param codeRanges - The array of code ranges to search in.
 * @returns The tagTitle if a match is found.
 */
const getTagTitle = (
  value: string,
  codeRanges: { title: string; tagTitle: string; ranges: { start: number; end: number }[] | string[] | number[] }[]
): string | undefined => {
  const parsedValue = parseRangeValue(value);
  for (const codeRange of codeRanges) {
    for (const range of codeRange.ranges) {
      if (typeof range === 'object' && typeof parsedValue === 'number') {
        if (parsedValue >= range.start && parsedValue <= range.end) {
          return codeRange.tagTitle;
        }
      } else if (typeof range === 'string' && typeof parsedValue === 'string') {
        if (parsedValue === range) {
          return codeRange.tagTitle;
        }
      } else if (typeof range === 'number' && typeof parsedValue === 'number') {
        if (parsedValue === range) {
          return codeRange.tagTitle;
        }
      }
    }
  }
};

export const getTagTitles = (
  values: string[],
  codeRanges: { title: string; tagTitle: string; ranges: { start: number; end: number }[] | string[] | number[] }[]
): (string | undefined)[] => values.map((value) => getTagTitle(value, codeRanges));

export const prepareCardViewData = (data: TimelineRecord[]): TimelineCardProps[] => {
  // Map the dos_from field from string to Date
  const mappedData = data.map((item) => ({
    ...item,
    // @ts-ignore-error TODO FIX: cover the error of split method by date-time library
    dos_from: new Date(item.dos_from.split('/').reverse().join('-')),
  }));

  // Sort the rows by the dos_from date
  const sortedData = mappedData.sort((a, b) => a.dos_from.getTime() - b.dos_from.getTime());

  // Aggregate the rows by date and calculate the sum of the 'Allowed' column
  const aggregatedData = sortedData.reduce(
    (acc, item) => {
      const date = item.dos_from.toISOString().split('T')[0];

      if (!acc[date]) {
        acc[date] = {
          totalAllowed: 0,
          codes: [],
          diagnostics: [],
        };
      }

      acc[date].totalAllowed += Number(item.allowed);
      acc[date].codes = [...acc[date].codes, item.code];
      if (item.dx1 && !acc[date].diagnostics.includes(item.dx1)) {
        acc[date].diagnostics.push(item.dx1);
      }
      if (item.dx2 && !acc[date].diagnostics.includes(item.dx2)) {
        acc[date].diagnostics.push(item.dx2);
      }

      return acc;
    },
    {} as Record<string, { totalAllowed: number; codes: string[]; diagnostics: string[] }>
  );

  console.log('!!', aggregatedData);

  // Convert the aggregated data to an array of objects
  return Object.entries(aggregatedData).map(([date, { totalAllowed, codes, diagnostics }]) => ({
    date,
    totalAllowed,
    codes,
    diagnostics,
  }));
};
