function twoSum(nums: number[], target: number): number[] {
    const hashMap : Record<string,number> = {};
    const result = [];
    
    for (let i = 0 ; i < nums.length ; i++ ){
        const targetNumber = target - nums[i]
        if(hashMap[targetNumber] !== undefined && hashMap[targetNumber] !== i){
            result.push(hashMap[targetNumber])
            result.push(i)
            break;
        }
        
         if(!hashMap[nums[i]]){
            hashMap[nums[i]] = i
        }
    }
    return result
};