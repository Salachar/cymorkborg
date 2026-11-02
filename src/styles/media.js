// CSS variables can't be used inside media queries, so breakpoints live
// here as strings to interpolate into styled blocks:
//
//   ${mq.md} { grid-template-columns: repeat(2, 1fr); }
//
// The app targets medium-to-large tablets, so md is the main layout.

export const mq = {
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1024px)',

  // Hover feedback for laptops and mice only. Touch devices never match,
  // which avoids "sticky" hover states after a tap on tablets.
  hover: '@media (hover: hover) and (pointer: fine)',
};
