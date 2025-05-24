/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let right = 1;

    for(let left = 0; left<nums.length; left++){
        if(nums[left] == 0){
            if(nums[right] == undefined){
                break;
            }

            if(nums[right] != 0){
                console.log('N LEFT: ', nums[left]);
                console.log("N RIGHT: ", nums[right]);
                let temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                right++;
            }else{
                right++;
                left--;
                continue;
            }
            
            console.log('NUMEROS: ', nums[left], ' ', nums[right-1] );
        }else{
            right++;
        }
    }
    
    return 
};





let nums = [1,0,0,3,12];
moveZeroes(nums);
