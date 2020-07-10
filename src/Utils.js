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

export const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getCookieValue = (cookieName) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${cookieName}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};
