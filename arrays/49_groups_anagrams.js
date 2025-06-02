/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let mapAnagrams = new Map();

    for(let i=0; i<strs.length; i++){
        let char = strs[i].split('');
        char.sort();
        if(mapAnagrams.has(char)){
            mapAnagrams.set(char, char);
        }else{
            mapAnagrams.set(char,char);
        }
    }

    return true;

};


const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

/*
Approach
take out string
char array
sort it
convert to string
use this string as a key
then push all the related element to key
*/