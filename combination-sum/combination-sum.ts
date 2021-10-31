function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    const generate = (path: number[], sum: number, last: number) => {
        if (sum === target) {
          result.push(path);
          return;
        }

        for (let i = last; i < candidates.length; i++) {
            if (sum + candidates[i] <= target) {
                generate([...path, candidates[i]], sum + candidates[i], i);
            }
        }
    };

    generate([], 0, 0);

    return result;
};