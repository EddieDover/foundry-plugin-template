/**
 * Adds 1 to a number
 * @param {number} a - The number to add 1 to
 * @returns {number} The number plus 1
 */
export function addOneOrTwo(a: number) {
  // @ts-ignore
  if (game.user.isGM) {
    return a + 2;
  }
  return a + 1;
}
