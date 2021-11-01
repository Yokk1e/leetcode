function intersection(nums1: number[], nums2: number[]): number[] {
    const findDuplicate = (nums : number[]) => {
        const hashMap : Record<number,number> = {}
        const resulthashMap : Record<number,number> = {}
        nums.forEach(item=>{
            if(hashMap[item] !== undefined){
                resulthashMap[item] = item
            }else{
                hashMap[item] = item
            }
        })
        return Object.values(resulthashMap)
    }
    const makeUnique = (nums : number[]) => {
         const hashMap : Record<number,number> = {}
         nums.forEach(item=>{
             hashMap[item] = item
         })
        return Object.values(hashMap)
    }
    const unique1 = makeUnique(nums1);
    const unique2 = makeUnique(nums2);
    const concatArr = [...unique1,...unique2];
    console.log(concatArr)
    return findDuplicate(concatArr);
};