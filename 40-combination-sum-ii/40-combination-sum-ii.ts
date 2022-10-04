//1,2
function combinationSum2(candidates: number[], target: number): number[][] {
    const result = []
    candidates.sort((a, b)=>a-b);
    
    const findCombinationSum = (sum :number, currentIndex : number, collection = [] , hashMap={}) =>{
        if(sum === target && hashMap[collection.join()] === undefined){
            hashMap[collection.join()] = true
            result.push([...collection])
            return
        }
        for (let i = currentIndex; i < candidates.length ; i++){
            if(i > currentIndex && candidates[i] === candidates[i - 1]) continue;
            if(sum + candidates[i] <= target){
                findCombinationSum(sum + candidates[i], i+1, [...collection,candidates[i]],hashMap)
            }
        }
    }
    
    findCombinationSum(0,0)
    
    return result
};