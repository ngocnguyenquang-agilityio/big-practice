/**
 * Settime out to call function
 * @param func
 * @param timeout
 * @returns
 */
export const debounce = <Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): ((...args: Params) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

/**
 * Times value by 9 and convert to number
 * @param {T extends string} value
 * @returns {number}
 */
export const convertToSkip = <T extends string>(value: T) => {
  return (parseInt(value) - 1) * 9;
};

/**
 * Check whether the param has value or not
 * @param value
 * @returns
 */
export const isEmpty = (value: unknown) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};
