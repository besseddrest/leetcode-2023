/**
 * There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
 * Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
 * Note that multiple kids can have the greatest number of candies.
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // keep track of output
  var finalCandies = [];

  // existing max
  var existingMax = Math.max(...candies);

  // iterate over kid candies
  for (var i = 0; i < candies.length; i++) {
    var kidMax = candies[i] + extraCandies;

    if (kidMax >= existingMax) {
      finalCandies.push(true);
    } else {
      finalCandies.push(false);
    }
  }

  return finalCandies;
};