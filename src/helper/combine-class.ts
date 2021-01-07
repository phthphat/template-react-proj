/**
 * Combine name of className list to white space
 * @param classes className list
 */
export const combineCN = (
  ...classes: (string | undefined)[]
): string | undefined => {
  let result = classes
    .filter((val) => { return val !== undefined && val !== null && val !== "" })
    .join(" ")
  return result === "" ? undefined : result
};