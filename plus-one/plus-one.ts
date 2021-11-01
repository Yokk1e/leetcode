function plusOne(digits: number[]): number[] {
    const numString = digits.join('');
    const num = BigInt(numString) + 1n;
    return num.toString().split('').map(i=>+i);
};