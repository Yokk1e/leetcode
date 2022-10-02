
// [1,2,3]
// [1] choice [2,3]
// [1,2] choice [3]
// [1,2,3] choice []

// [2] choice [1,3]
// [2,1] choice [3]
// [2,1,3] choice []

//...
function permute(nums: number[],permutation = [], answer = []) : number[][] {
    if(nums.length === 0){
        answer.push([...permutation])
    }
    for (let i = 0 ; i < nums.length ; i++){
        permutation.push(nums[i]);
        const choices = nums.filter((num,index)=> index !== i);
        permute(choices,permutation,answer)
        permutation.pop()
    }
   
    return answer
};