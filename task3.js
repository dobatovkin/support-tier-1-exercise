/* 
You are given a string s. You can convert to a  palindrome by adding characters in front of it.
Return the shortest palindrome you can find by performing this transformation.

Example 1:

Input: s = "aacecaaa"
Output: "aaacecaaa"

Example 2:

Input: s = "abcd"
Output: "dcbabcd"

*/

function palindrome(s) {
  // there is no reverse method for strings, so i convert this to array on the fly
  const reversedS = s.split('').reverse().join('');
  // store characters to add in front of the initial string
  let addedChars = '';
  // with each iteration takes less and less chars from beginning and end of initial and reversed strings correspondingly
  for (let i = s.length - 1; i >= 0; i--) {
    // compare the initial and reversed parts
    if (s.slice(0, i + 1) === reversedS.slice(s.length - (i + 1), s.length)) {
      // save reversed diff and break out of the loop
      addedChars = reversedS.slice(0, s.length - (i + 1));
      break;
    }
  }
  // concat diff and initial string
  return addedChars + s;
}

// tests
const s1 = 'aacecaaa';
const s2 = 'abcd';

console.log('Input: ', s1, '\nOutput: ', palindrome(s1));
console.log('Input: ', s2, '\nOutput: ', palindrome(s2));
