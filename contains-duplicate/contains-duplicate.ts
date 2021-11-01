function containsDuplicate(nums: number[]): boolean {
    const hashMap : Record<number,number> = {}
    let result = false
    for(let i = 0; i < nums.length ; i++){
        if(hashMap[nums[i]] !== undefined){
            result =  true;
            break;
        }else{
            hashMap[nums[i]] = nums[i]
        }
    }
    return result
};