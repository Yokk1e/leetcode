//[1,1,2]
// [1] choices [1,2]
// [1,1] choices [2]
// [1,1,2] choices []
// [] pick the answer

// [1] choices [1,2]
// [1,1] choices [2]
// [1,1,2] choices []
// [] pick the answer

// [1] choices [1,2]
// [1,1] choices [2]
// [1,1,2] choices []
// [] pick the answer

function permuteUnique(nums: number[],permutetion = [], answer = [], hashMap = {}): number[][] {
    if(nums.length === 0 && hashMap[permutetion.join()] === undefined){
       hashMap[permutetion.join()] = true
        answer.push([...permutetion]);
    }
    for (let i = 0 ; i < nums.length ; i++){
        permutetion.push(nums[i]);
        const choices = nums.filter((num,index)=>index !== i);
        permuteUnique(choices,permutetion,answer,hashMap)
        permutetion.pop()
    }
    
    return answer
};