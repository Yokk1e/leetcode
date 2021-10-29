function isPalindrome(x: number): boolean {
    return x.toString() === [...x.toString()].reverse().join('');
};