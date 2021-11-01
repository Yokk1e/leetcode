function searchMatrix(matrix: number[][], target: number): boolean {
 const result = matrix.flatMap(item=>item).find(item=>item === target)
 if(result === 0){
     return true
 }
return !!result
};