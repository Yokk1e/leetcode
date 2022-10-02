function findDuplicates(nums: number[]): number[] {
    const hashmap : Record<string,boolean> = {}
    const ans :number[]= []
    for (let i = 0 ; i < nums.length ; i++){
        if(hashmap[nums[i].toString()]){
            ans.push(nums[i])
        }
        hashmap[nums[i].toString()]=true
    }
    return ans
};