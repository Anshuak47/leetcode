var twoSum = function (nums, target) {
  let indices = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i != j) {
        let addSum = nums[i] + nums[j];

        if (addSum == target) {
          indices.push(i);
          indices.push(j);
        }
      }
    }
  }
  return indices;
};

let nums = [3, 2, 3];
// nums = [2, 7, 8, 3, 4, 15];
let target = 6;
const addsum = twoSum(nums, target);
console.log(addsum);
