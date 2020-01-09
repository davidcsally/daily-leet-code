/**
 * Given an array of integers, return indices of the two numbers
 * such that they add up to a specific target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
// Brute force solution
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <nums.length; j++) {
      if (j === i) { /** noop */ }
      else if (nums[i] + nums[j] === target) return [i, j]
    }
  }
  return null;
}

// more efficient, but not perfect

// iterate through numbers
// add first number to hash table
// add second num to hash table
// when two nums are in table, check if meets criteria
const twoSum_2 = (nums, target) => {
  const hash = []

  hash.push(nums[0])
  hash.push(nums[1])

  if (hash[0] + hash[1] === target) return [0, 1]

  for (let i = 2; i < nums.length; i++) {
    for (let h = 0; h < hash.length; h++) {
      if (hash[h] + nums[i] === target) return [h, i]
    }
    hash.push(nums[i])
  }
}
