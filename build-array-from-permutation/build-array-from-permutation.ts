function buildArray(nums: number[]): number[] {
    return nums.map((_,i)=>{
        return nums[nums[i]]
    })
};