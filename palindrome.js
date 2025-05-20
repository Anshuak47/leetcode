var isPalindrome = function (x) {
  let reverse = 0;
  let original = x;
  if (x < 0) return false;
  //   -323 ! = 323- that is why it should return false
  while (x > 0) {
    let temp = x % 10;
    reverse = reverse * 10 + temp;
    x = parseInt(x / 10);
  }

  return original === reverse;
};

let nums = 323;

// nums = [2, 7, 8, 3, 4, 15];
const addsum = isPalindrome(nums);
console.log(addsum);
