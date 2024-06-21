export const codeRanges = [
  {
    title: 'Evaluation and Management (E/M)',
    tagTitle: 'E/M',
    ranges: [
      { start: 99201, end: 99205 },
      { start: 99211, end: 99215 },
    ],
  },
  {
    title: 'Surgery',
    tagTitle: 'Surg',
    ranges: [
      { start: 11042, end: 11047 },
      { start: 11400, end: 11406 },
      { start: 11420, end: 11426 },
    ],
  },
  {
    title: 'Radiology',
    tagTitle: 'Rad',
    ranges: [71045, 73030],
  },
  {
    title: 'Laboratory',
    tagTitle: 'Lab',
    ranges: [80050, 83036],
  },
  {
    title: 'Medicine',
    tagTitle: 'Med',
    ranges: [90791, 93000],
  },
  {
    title: 'Miscellaneous', // not existed in the csv file, if needed later the implementation can be added
    tagTitle: 'Mis',
    ranges: ['A4550', 'J1100'],
  },
  {
    title: 'Anesthesia', // not existed in the csv file, if needed later the implementation can be added
    tagTitle: 'Anes',
    ranges: ['00100'],
  },
  {
    title: 'Physical Medicine and Rehabilitation',
    tagTitle: 'PM/R',
    ranges: [97110],
  },
  {
    title: 'Immunizations',
    tagTitle: 'Immun',
    ranges: [90658],
  },
  {
    title: 'Ophthalmology',
    tagTitle: 'Ophth',
    ranges: [92014],
  },
];
