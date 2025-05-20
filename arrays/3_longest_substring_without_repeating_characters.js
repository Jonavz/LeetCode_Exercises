/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let letters = new Set();
  let left = 0;
  let max = 0;

  for(let right=0; right<s.length; right++){
    while(letters.has(s[right])){
        letters.delete(s[left]);
        left++;
    }
    letters.add(s[right]);
    max = Math.max(max, right - left +1);
  }


  return max;
};



//const answer = lengthOfLongestSubstring("pwwkew");
//console.log(answer);
