/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let arrayS = s.split('');
    let arrayT = t.split('');
    arrayS.sort();
    arrayT.sort();
    let i=0;

    if(s.length !== t.length){
        return false;
    }
    
    for(let j of arrayT){
        if(j!== arrayS[i]){
            return false;
        }
        i++;
    }
    return true;
};


const res = isAnagram("anagram", "nagaram");
console.log(res);