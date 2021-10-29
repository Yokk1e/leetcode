function longestCommonPrefix(strs: string[]): string {
    if (!strs || strs.length === 0) return "";
    
    var sortedArr = strs.sort((a,b) => a.length - b.length);
    var shortestString = sortedArr[0];
    
    while (!strs.every((string) => string.startsWith(shortestString))) {
        if (shortestString.length === 0) return;
        
        shortestString = shortestString.slice(0, -1);
    }

    return shortestString;  
};