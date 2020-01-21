/**
 * ex 121 -> true
 * ex -121 -> false 
 * ex 10 -> false
 * 
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  const reversedNum = String(x).split('').reverse().join('')
  if (reversedNum == x) return true
  return false
};
