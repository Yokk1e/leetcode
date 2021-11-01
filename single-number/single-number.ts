function singleNumber(nums: number[]): number {
    let acc = 0
    for(let i=0;i<nums.length;i++){
        acc ^= nums[i]
    }
    return acc
};