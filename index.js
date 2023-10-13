function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here

  The program performs a linear time operation on each number in a list of integers by iterating through the list using a for loop. 
  It performs a constant-time operation by comparing the current number (num) through the length of the array.
*/

/* 
  Add your pseudocode here

  Iterate through each number in the array.
For the current number, determine a complementary number that, 
when added to it, sums up to the target (complement = target - number).

Continue iterating through the rest of the array.

  If any number in the array matches the complement, return "true."
  If no match is found in the entire array, return "false."
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
