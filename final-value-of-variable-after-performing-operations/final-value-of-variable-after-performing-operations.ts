function finalValueAfterOperations(operations: string[]): number {
   const test = (item : string, value : number) => {
      switch (item){
          case "++X":
          case "X++":{
              return value + 1;
          }
          case "--X":
          case "X--":{
              return value - 1
          }
          default:{
            return 0;
          }
      }
  }
  let x = 0;
  operations.forEach(item=>{
    x = test(item,x)
  })

  return x
  
};