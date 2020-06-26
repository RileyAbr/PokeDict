// Calculates which page should be navigated to in reverse
export const backPageCalculation = (currentPage, maxPages, searchValue) => {
  if (currentPage <= 1) {
    return 1;
  } else if (currentPage <= maxPages) {
    return currentPage - 1;
  } else {
    return maxPages;
  }
};

// Calculates which page should be navigated to going forward
export const forwardPageCalculation = (currentPage, maxPages, searchValue) => {
  if (currentPage >= maxPages) {
    return maxPages;
  } else if (currentPage >= 1) {
    return currentPage + 1;
  } else {
    return 1;
  }
};
