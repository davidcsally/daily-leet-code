/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const limit = 2147483647
  let reversed = 0;
  if (x > -1) reversed = String(x).split("").reverse().join("")
  else reversed = `-${String(x).slice(1).split("").reverse().join("")}`
  if (reversed >= limit || reversed <= (0 - limit)) return 0
  return reversed
}
