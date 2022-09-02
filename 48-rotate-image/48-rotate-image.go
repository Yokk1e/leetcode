func rotate(matrix [][]int)  {
    n, k := len(matrix), 0
    temp := []int{}
    
    for i := 0; i < n; i++ {
        for j:=n-1; j > -1; j-- {
            temp = append(temp, matrix[j][i])
        }
    }
    
    for i := 0; i <n; i++ {
        for j:=0; j < n; j++ {
            matrix[i][j] = temp[k]
            k++
        }
    }
}