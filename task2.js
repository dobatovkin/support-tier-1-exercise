/* 
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Input: nums = [0,1]
Output: [[0,1],[1,0]]
*/

function permutateNumsArray(numsArr) {
  const result = [];
  function swap(pos) {
    if (numsArr.length - 1 === pos) {
      // copy current swapped array to the result. as the first iteration swaps elements with the same index, 
      result.push([...numsArr]);
      return;
    }

    for (let i = pos; i < numsArr.length; i++) {
      [numsArr[pos], numsArr[i]] = [numsArr[i], numsArr[pos]]; //swap i and pos elements
      swap(pos + 1); //closure. after function return, the indexes are shifted 
      [numsArr[pos], numsArr[i]] = [numsArr[i], numsArr[pos]]; // swap back elements
    }
  }
  swap(0);
  return result;
}


// tests
const nums1 = [1, 2, 3];
const nums2 = [0, 1];
const nums3 = [2,4,8,16];

console.log(permutateNumsArray(nums1));
console.log(permutateNumsArray(nums2));
console.log(permutateNumsArray(nums3));
