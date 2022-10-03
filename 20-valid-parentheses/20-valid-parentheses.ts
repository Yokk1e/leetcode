function isValid(s: string): boolean {
    const hashMap = { '(' : ')', '{' :'}', '[':']'};
    const stack = []
   
    for (const ch of s){
        if(hashMap[ch]){
            stack.push(hashMap[ch])
        }else if(ch === stack[stack.length-1]){
            stack.pop();
        }else{
            return false
        }
    }
    return stack.length === 0
};