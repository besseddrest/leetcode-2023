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