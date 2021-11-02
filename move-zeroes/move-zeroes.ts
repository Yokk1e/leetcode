/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
   let index = 0;
   let second = 0;
   let counter = 0;
    while(second < nums.length) {
        if(nums[second] !== 0) {
            [ nums[index], nums[second] ] = [ nums[second], nums[index] ];
            index++;

        } else counter++;
        
        second++
    }

};