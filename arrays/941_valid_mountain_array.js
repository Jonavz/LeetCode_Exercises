/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    let n = arr[0];
    let bajada = 0;
    let subida = 0;

    for(let i=1; i<arr.length; i++){
        if(n<arr[i] && bajada === 0){
            subida = 1;
            n=arr[i];
        }else{
            bajada = 1;
            if(n>arr[i]){
                n = arr[i];
                bajda = 1;
            }
            else{
                return false;
            }
        }
    }

    if(bajada === 1 && subida === 1){
        return true;
    }else{
        return false;
    }
};


const arr = [2,1];
console.log(validMountainArray(arr));