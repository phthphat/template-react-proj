/**
 * Combine name of className list to white space
 * @param classes className list
 */
export const combineCN = (
  ...classes: (string | undefined)[]
): string => {
  return classes.reduce((preVal, item, _) => {
    return item === undefined ? preVal : preVal + " " + item!;
  }, "") as string;
};