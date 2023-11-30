/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let index = 0; index < nums.length; index += 1) {
    const num = nums[index];
    const numToFind = target - num;
    const index2 = map.get(numToFind);
    if (index2 !== undefined) {
      return [index2, index];
    }
    map.set(num, index);
  }
  return null;
};
// @lc code=end
